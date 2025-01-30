import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { defaultModel, defaultSystemPrompt } from "@/ai/providers"
import { streamText } from "ai"

export const maxDuration = 120

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ error: "No message found" }, { status: 400 })
    }

    const stream = streamText({
      model: defaultModel,
      messages: [{ role: "user", content: message }],
      system: defaultSystemPrompt,
    })

    return new NextResponse(stream)
  } catch (error) {
    console.error("[chat/route] Unexpected error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

