import { NextResponse } from "next/server"

interface ContactBody {
  name: string
  email: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json()

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    console.log("[Contact] New message received:", {
      name: body.name.trim(),
      email: body.email.trim(),
      message: body.message.trim(),
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, message: "Message sent successfully" })
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
