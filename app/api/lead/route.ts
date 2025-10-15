import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  if (!body?.email) {
    return NextResponse.json({ ok: false, error: "Email is required" }, { status: 400 })
  }
  // In a real app, persist to DB or send to CRM here.
  return NextResponse.json({ ok: true })
}
