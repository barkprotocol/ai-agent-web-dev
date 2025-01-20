import type { Attachment } from "ai"

export interface Message {
  id: string
  conversationId: string
  createdAt: Date
  updatedAt: Date
  role: "user" | "assistant" | "system"
  content: string
  experimental_attachments?: Attachment[]
}

export interface DBMessage extends Omit<Message, "content"> {
  content: string | Record<string, unknown>
}

export interface Conversation {
  id: string
  title: string | null
  visibility: "PUBLIC" | "PRIVATE"
  userId: string | null
  createdAt: Date
  updatedAt: Date
}

export interface ToolInvocation {
  toolCallId: string
  toolName: string
  displayName?: string
  result?: {
    result?: string
    message: string
  }
  state?: string
  args?: any
}

export interface ToolResult {
  toolCallId: string
  result: any
}

export interface ToolUpdate {
  type: "tool-update"
  toolCallId: string
  result: any
}

export interface ImagePreview {
  src: string
  alt: string
  index?: number
  attachments?: Required<Attachment>[]
}

export interface UploadingImage extends Attachment {
  localUrl: string
  uploading: boolean
}

export interface ChatInterfaceProps {
  id: string
  initialMessages: DBMessage[]
  conversation: Conversation
}

