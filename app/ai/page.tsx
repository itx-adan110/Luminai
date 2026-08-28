"use client";

import { FormEvent, useState } from "react";
import { Bot, Copy, Plus, Send } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

export default function AIPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next); setInput(""); setLoading(true);
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Request failed");
      setMessages([...next, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages([...next, { role: "assistant", content: error instanceof Error ? error.message : "Something went wrong." }]);
    } finally { setLoading(false); }
  }

  function copy(text: string) { navigator.clipboard?.writeText(text); }

  return <main className="chat-page section-pad">
    <div className="chat-top"><div><span className="kicker">Luminai AI</span><h1>Think with clarity.</h1><p>Your conversational workspace for questions, ideas and learning.</p></div><button className="icon-button" onClick={() => setMessages([])} aria-label="New conversation" title="New conversation"><Plus size={19}/></button></div>
    <div className="chat-window">
      {messages.length === 0 ? <div className="empty-chat"><div className="service-icon"><Bot size={24}/></div><h2>What can I help you explore?</h2><p>Ask a question, explain a concept, draft an idea, or work through a problem.</p></div> : <div className="messages">{messages.map((message, i) => <div className={`message ${message.role}`} key={`${message.role}-${i}`}><div className="message-label">{message.role === "user" ? "You" : "Luminai"}</div><div className="message-text">{message.content}</div>{message.role === "assistant" && <button className="copy-button" onClick={() => copy(message.content)} aria-label="Copy response"><Copy size={14}/> Copy</button>}</div>)}</div>}
      {loading && <div className="message assistant"><div className="message-label">Luminai</div><div className="typing"><i/><i/><i/></div></div>}
      <form className="composer" onSubmit={sendMessage}><textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Message Luminai…" rows={1} aria-label="Message Luminai" onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); e.currentTarget.form?.requestSubmit(); } }}/><button className="send-button" disabled={loading || !input.trim()} aria-label="Send message"><Send size={18}/></button></form>
    </div>
  </main>;
}
