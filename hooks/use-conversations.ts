import { useCallback, useEffect, useMemo, useState } from 'react';

interface Conversation {
  id: string;
  title: string;
  // ... other properties
}

export function useConversations(userId?: string): {
  conversations: Conversation[];
  isLoading: boolean;
  activeId: string | null;
  deleteConversation: (id: string) => Promise<void>;
  setActiveId: (id: string | null) => void;
  refreshConversations: () => Promise<void>;
  renameConversation: (id: string, newTitle: string) => Promise<void>;
} {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchConversations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulate fetching conversations from an API
      const response = await fetch(`/api/conversations/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setConversations(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  const deleteConversation = useCallback(async (id: string) => {
    // Simulate deleting a conversation
    await fetch(`/api/conversations/${id}`, { method: 'DELETE' });
    await refreshConversations();
  }, [refreshConversations]);

  const refreshConversations = useCallback(async () => {
    await fetchConversations();
  }, [fetchConversations]);

  const handleRename = async (id: string, newTitle: string) => {
    try {
      const renameResponse = await fetch(`/api/conversations/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle }),
      });
      if (!renameResponse.ok) {
        const errorData = await renameResponse.json();
        throw new Error(errorData.error || 'Failed to rename conversation');
      }
      await refreshConversations();
    } catch (error) {
      console.error('Error renaming conversation:', error);
      throw error;
    }
  };


  return useMemo(() => ({
    conversations,
    isLoading,
    activeId,
    deleteConversation,
    setActiveId,
    refreshConversations,
    renameConversation: handleRename,
  }), [conversations, isLoading, activeId, deleteConversation, setActiveId, refreshConversations, handleRename]);
}

