import type { Conversation } from "@prisma/client"
import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface ConversationsState {
  conversations: Conversation[]
  isLoading: boolean
  activeId: string | null
}

interface ConversationsActions {
  setConversations: (conversations: Conversation[]) => void
  addConversation: (conversation: Conversation) => void
  updateConversation: (id: string, updates: Partial<Conversation>) => void
  removeConversation: (id: string) => void
  setActiveId: (id: string | null) => void
  setLoading: (loading: boolean) => void
}

type ConversationsStore = ConversationsState & ConversationsActions

export const useConversationsStore = create<ConversationsStore>()(
  immer((set) => ({
    conversations: [],
    isLoading: true,
    activeId: null,

    setConversations: (conversations) =>
      set((state) => {
        state.conversations = conversations
        state.isLoading = false
      }),

    addConversation: (conversation) =>
      set((state) => {
        state.conversations.unshift(conversation)
      }),

    updateConversation: (id, updates) =>
      set((state) => {
        const index = state.conversations.findIndex((c) => c.id === id)
        if (index !== -1) {
          Object.assign(state.conversations[index], updates)
        }
      }),

    removeConversation: (id) =>
      set((state) => {
        state.conversations = state.conversations.filter((c) => c.id !== id)
        if (state.activeId === id) {
          state.activeId = state.conversations[0]?.id || null
        }
      }),

    setActiveId: (id) =>
      set((state) => {
        state.activeId = id
      }),

    setLoading: (loading) =>
      set((state) => {
        state.isLoading = loading
      }),
  })),
)

// Selector hooks for optimized re-renders
export const useConversations = () => useConversationsStore((state) => state.conversations)
export const useActiveConversationId = () => useConversationsStore((state) => state.activeId)
export const useIsLoading = () => useConversationsStore((state) => state.isLoading)

export const useActiveConversation = () => {
  const activeId = useActiveConversationId()
  const conversations = useConversations()
  return conversations.find((c) => c.id === activeId) || null
}

