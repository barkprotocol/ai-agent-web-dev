import { type NextRequest, NextResponse } from "next/server"
import { verifyUser } from "@/server/actions/user"
import { dbGetConversationMessages } from "@/server/db/queries"

export async function GET(req: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const session = await verifyUser()
    const userId = session?.data?.data?.id

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { conversationId } = params

    if (!conversationId) {
      return NextResponse.json({ error: "Missing conversationId" }, { status: 400 })
    }

    const messages = await dbGetConversationMessages({
      conversationId,
    })

    if (!messages || messages.length === 0) {
      return NextResponse.json({ error: "Conversation messages not found" }, { status: 404 })
    }

    return NextResponse.json(messages)
  } catch (error) {
    console.error(`[chat/[conversationId]/route] Error fetching conversation:`, error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

