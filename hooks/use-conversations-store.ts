import { create, type StateCreator } from "zustand"

interface Conversation {
  id: string
  title: string
  lastMessage: string
  timestamp: string
  // Add any other relevant properties here
}

interface ConversationsState {
  conversations: Conversation[]
  activeId: string | null
  addConversation: (conversation: Conversation) => void
  updateConversation: (updatedConversation: Conversation) => void
  setActiveConversation: (id: string) => void
  clearConversations: () => void
}

export const useConversationsStore = create<ConversationsState>(((set) => ({
  conversations: [],
  activeId: null,
  addConversation: (conversation: Conversation) =>
    set((state) => ({
      conversations: [conversation, ...state.conversations],
      activeId: conversation.id, // Automatically set the new conversation as active
    })),
  updateConversation: (updatedConversation: Conversation) =>
    set((state) => ({
      conversations: state.conversations.map((c) => (c.id === updatedConversation.id ? updatedConversation : c)),
    })),
  setActiveConversation: (id: string) =>
    set(() => ({
      activeId: id,
    })),
  clearConversations: () =>
    set(() => ({
      conversations: [],
      activeId: null,
    })),
})) as StateCreator<ConversationsState>)

