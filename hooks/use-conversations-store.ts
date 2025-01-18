import { create, StateCreator } from 'zustand';

interface Conversation {
  id: string;
  // ... other conversation properties
}

interface ConversationsState {
  conversations: Conversation[];
  activeId: string | null;
}

export const useConversationsStore = create<ConversationsState>(
  ((set) => ({
    conversations: [],
    activeId: null,
    addConversation: (conversation: Conversation) =>
      set((state) => ({
        conversations: [conversation, ...state.conversations],
      })),
    updateConversation: (updatedConversation: Conversation) =>
      set((state) => ({
        ...state,
        conversations: state.conversations.map((c) =>
          c.id === updatedConversation.id ? updatedConversation : c
        ),
      })),
    clearConversations: () =>
      set(() => ({
        conversations: [],
        activeId: null,
      })),
  })) as StateCreator<ConversationsState>
);

