// Define the basic structure of a message
export interface Message {
    id: string
    content: string
    role: "user" | "assistant" | "system"
    createdAt: Date
  }
  
  // Define the structure of a conversation
  export interface Conversation {
    id: string
    title: string
    lastMessage: string
    unreadCount: number
    createdAt: Date
    updatedAt: Date
  }
  
  // Define the structure of a chat participant (user or AI)
  export interface ChatParticipant {
    id: string
    name: string
    avatar?: string
  }
  
  // Define the possible statuses for a message
  export type MessageStatus = "sending" | "sent" | "delivered" | "read" | "error"
  
  // Extend the Message interface to include status and participant
  export interface DetailedMessage extends Message {
    status: MessageStatus
    participant: ChatParticipant
  }
  
  // Define the structure for conversation settings
  export interface ConversationSettings {
    isArchived: boolean
    isPinned: boolean
    notifications: "all" | "mentions" | "none"
  }
  
  // Extend the Conversation interface to include messages and settings
  export interface DetailedConversation extends Conversation {
    messages: DetailedMessage[]
    participants: ChatParticipant[]
    settings: ConversationSettings
  }
  
  // Define the structure for a typing indicator
  export interface TypingIndicator {
    conversationId: string
    participantId: string
    isTyping: boolean
  }
  
  // Define the structure for a message reaction
  export interface MessageReaction {
    messageId: string
    participantId: string
    reaction: string
  }
  
  // Define the possible actions in a chat context
  export type ChatAction =
    | { type: "SEND_MESSAGE"; payload: Message }
    | { type: "DELETE_MESSAGE"; payload: string }
    | { type: "EDIT_MESSAGE"; payload: { id: string; content: string } }
    | { type: "SET_TYPING"; payload: TypingIndicator }
    | { type: "ADD_REACTION"; payload: MessageReaction }
    | { type: "REMOVE_REACTION"; payload: MessageReaction }
    | { type: "UPDATE_CONVERSATION_SETTINGS"; payload: { id: string; settings: Partial<ConversationSettings> } }
  
  