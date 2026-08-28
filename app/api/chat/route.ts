import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) return NextResponse.json({ error: "AI service is not configured yet." }, { status: 503 });
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const safeMessages = messages.filter((m: unknown): m is { role: "user" | "assistant"; content: string } => {
      if (!m || typeof m !== "object") return false;
      const x = m as Record<string, unknown>;
      return (x.role === "user" || x.role === "assistant") && typeof x.content === "string" && x.content.length > 0 && x.content.length <= 12000;
    }).slice(-30);
    if (!safeMessages.length) return NextResponse.json({ error: "Please enter a message." }, { status: 400 });

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      instructions: "You are Luminai, a helpful, concise and thoughtful AI assistant. Be accurate, clear and age-appropriate. If uncertain, say so rather than inventing facts.",
      input: safeMessages.map(m => ({ role: m.role, content: m.content })),
    });
    return NextResponse.json({ content: response.output_text || "I couldn't produce a response." });
  } catch (error) {
    console.error("Luminai chat error", error);
    return NextResponse.json({ error: "The AI service is temporarily unavailable." }, { status: 500 });
  }
}
