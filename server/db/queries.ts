import { v4 as uuidv4 } from "uuid"

// In-memory store for conversations and messages
const conversations: Record<string, Conversation> = {}
const messages: Record<string, Message[]> = {}

interface Conversation {
  id: string
  userId: string
  title: string
  createdAt: Date
}

interface Message {
  id: string
  conversationId: string
  role: "user" | "assistant"
  content: string
  createdAt: Date
  toolInvocations?: any[]
  experimental_attachments?: any[]
}

export async function dbGetConversationMessages({
  conversationId,
  limit,
  isServer,
}: {
  conversationId: string
  limit?: number
  isServer?: boolean
}): Promise<Message[]> {
  const conversationMessages = messages[conversationId] || []
  if (limit) {
    return conversationMessages.slice(-limit)
  }
  return conversationMessages
}

export async function dbCreateConversation({
  conversationId,
  userId,
  title,
}: {
  conversationId: string
  userId: string
  title: string
}): Promise<Conversation> {
  const newConversation: Conversation = {
    id: conversationId,
    userId,
    title,
    createdAt: new Date(),
  }
  conversations[conversationId] = newConversation
  return newConversation
}

export async function dbCreateMessages({
  messages: newMessages,
}: {
  messages: Omit<Message, "id" | "createdAt">[]
}): Promise<Message[]> {
  const createdMessages: Message[] = newMessages.map((msg) => ({
    ...msg,
    id: uuidv4(),
    createdAt: new Date(),
  }))

  createdMessages.forEach((msg) => {
    if (!messages[msg.conversationId]) {
      messages[msg.conversationId] = []
    }
    messages[msg.conversationId].push(msg)
  })

  return createdMessages
}

export async function dbCreateTokenStat({
  userId,
  messageIds,
  promptTokens,
  completionTokens,
  totalTokens,
}: {
  userId: string
  messageIds: string[]
  promptTokens: number
  completionTokens: number
  totalTokens: number
}): Promise<{
  userId: string
  messageIds: string[]
  promptTokens: number
  completionTokens: number
  totalTokens: number
}> {
  // In a real implementation, you would store this in a database
  // For now, we'll just return the input data
  return { userId, messageIds, promptTokens, completionTokens, totalTokens }
}

export async function dbDeleteConversation({
  conversationId,
  userId,
}: {
  conversationId: string
  userId: string
}): Promise<boolean> {
  if (conversations[conversationId] && conversations[conversationId].userId === userId) {
    delete conversations[conversationId]
    delete messages[conversationId]
    return true
  }
  return false
}

export async function dbGetConversations({
  userId,
}: {
  userId: string
}): Promise<Conversation[]> {
  return Object.values(conversations).filter((conv) => conv.userId === userId)
}

export async function dbCreateAction(actionData: any): Promise<any> {
  // Implement action creation logic here
  console.log("Creating action:", actionData)
  return { id: "mock-action-id", ...actionData }
}

export async function dbGetActions(params: any): Promise<any[]> {
  // Implement action retrieval logic here
  console.log("Getting actions with params:", params)
  return [{ id: "mock-action-id", ...params }]
}

