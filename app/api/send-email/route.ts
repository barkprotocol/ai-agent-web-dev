import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/sendgrid"

export async function POST(request: Request) {
  const { to, subject, html } = await request.json()

  try {
    await sendEmail({ to, subject, html })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

