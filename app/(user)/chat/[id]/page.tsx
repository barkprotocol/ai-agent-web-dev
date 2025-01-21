import { Suspense } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { verifyUser } from "@/app/actions/user-actions"
import { dbGetConversation, dbGetConversationMessages } from "@/server/db/queries"
import type { DBMessage, Conversation } from "./types"

import ChatInterface from "./chat-interface"
import { ChatSkeleton } from "./chat-skeleton"

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const { id } = params
  const conversation = await dbGetConversation({ conversationId: id })

  if (!conversation) {
    return {
      title: "Chat Not Found",
      description: "The requested chat conversation could not be found.",
    }
  }

  return {
    title: `Chat - ${conversation.title || "Untitled Conversation"}`,
    description: `Chat conversation: ${conversation.title || "Untitled Conversation"}`,
  }
}

async function ChatData({ params }: { params: { id: string } }) {
  const { id } = params
  const conversation = await dbGetConversation({ conversationId: id })

  if (!conversation) {
    return notFound()
  }

  // Verify user authentication and access rights
  const authResponse = await verifyUser()
  const userId = authResponse?.data?.id

  // Check if user has access to private conversation
  if (conversation.visibility === "PRIVATE" && (!userId || conversation.userId !== userId)) {
    return notFound()
  }

  // Load conversation messages
  const messagesFromDB = await dbGetConversationMessages({
    conversationId: id,
  })

  if (!messagesFromDB) {
    return notFound()
  }

  return <ChatInterface id={id} initialMessages={messagesFromDB} conversation={conversation} />
}

export default function ChatPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<ChatSkeleton />}>
      <ChatData params={params} />
    </Suspense>
  )
}

