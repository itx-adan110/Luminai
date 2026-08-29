"use client";

import styles from "./page.module.css";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AlertCircle, Bot, Check, Copy, Plus, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<number | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }); }, [messages, loading]);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data: unknown = await response.json().catch(() => null);
      const content = data && typeof data === "object" ? (data as Record<string, unknown>).content : null;
      const message = data && typeof data === "object" ? (data as Record<string, unknown>).error : null;

      if (!response.ok || typeof content !== "string") {
        throw new Error(typeof message === "string" ? message : "The AI service could not complete this request.");
      }
      setMessages((current) => [...current, { role: "assistant", content }]);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copy(text: string, index: number) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(index);
      window.setTimeout(() => setCopied((current) => current === index ? null : current), 1800);
    } catch {
      setError("Copying is unavailable in this browser.");
    }
  }

  function newConversation() {
    setMessages([]);
    setInput("");
    setError("");
    setCopied(null);
  }

  return <main className="chat-page section-pad">
    <div className="chat-top">
      <div><span className="kicker">Luminai AI</span><h1>Think with clarity.</h1><p>Your conversational workspace for questions, ideas and learning.</p></div>
      <button className="icon-button" onClick={newConversation} aria-label="Start a new conversation" title="New conversation"><Plus size={19}/></button>
    </div>

    <div className="chat-window" aria-busy={loading}>
      {messages.length === 0 ? <div className="empty-chat"><div className="service-icon"><Bot size={24}/></div><h2>What can I help you explore?</h2><p>Ask a question, explain a concept, draft an idea, or work through a problem.</p></div> :
        <div className="messages" role="log" aria-live="polite" aria-label="Conversation">
          {messages.map((message, i) => <div className={`message ${message.role}`} key={`${message.role}-${i}`}>
            <div className="message-label">{message.role === "user" ? "You" : "Luminai"}</div>
            <div className="message-text">{message.content}</div>
            {message.role === "assistant" && <button className="copy-button" onClick={() => copy(message.content, i)} aria-label={copied === i ? "Response copied" : "Copy response"}>
              {copied === i ? <Check size={14}/> : <Copy size={14}/>} {copied === i ? "Copied" : "Copy"}
            </button>}
          </div>)}
          {loading && <div className="message assistant"><div className="message-label">Luminai</div><div className="typing" aria-label="Luminai is thinking"><i/><i/><i/></div></div>}
          <div ref={endRef} />
        </div>}

      {error && <div className={styles.chatError} role="alert"><AlertCircle size={17}/><span>{error}</span><button onClick={() => setError("")} aria-label="Dismiss error">×</button></div>}

      <form className="composer" onSubmit={sendMessage}>
        <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Message Luminai…" rows={1} aria-label="Message Luminai" disabled={loading}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); e.currentTarget.form?.requestSubmit(); } }} />
        <button className="send-button" disabled={loading || !input.trim()} aria-label="Send message"><Send size={18}/></button>
      </form>
    </div>
  </main>;
}
