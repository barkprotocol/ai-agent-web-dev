"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import type { Conversation } from "@/types/chat"
import { useToast } from "@/components/ui/use-toast"

type UseConversationsReturn = {
  conversations: Conversation[]
  isLoading: boolean
  activeId: string | null
  deleteConversation: (id: string) => Promise<void>
  setActiveId: (id: string | null) => void
  refreshConversations: () => Promise<void>
  renameConversation: (id: string, newTitle: string) => Promise<void>
  markAsRead: (id: string) => void
}

export function useConversations(userId?: string): UseConversationsReturn {
  const { toast } = useToast()
  const queryClient = useQueryClient()
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeId, setActiveId] = useState<string | null>(null)

  const refreshConversations = useCallback(async () => {
    setIsLoading(true)
    try {
      const fetchedConversations = await fetchConversations(userId)
      setConversations(fetchedConversations)
    } catch (error) {
      console.error("Error fetching conversations:", error)
      toast.error("Failed to fetch conversations. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }, [userId, toast])

  const deleteConversation = useCallback(
    async (id: string) => {
      try {
        await deleteConversationApi(id)
        await refreshConversations()
        toast.success("Conversation deleted successfully.")
      } catch (error) {
        console.error("Error deleting conversation:", error)
        toast.error("Failed to delete conversation. Please try again.")
      }
    },
    [refreshConversations, toast],
  )

  const markAsRead = useCallback((id: string) => {
    //Implementation to mark conversation as read
    setConversations((prev) => {
      return prev.map((conversation) => {
        if (conversation.id === id) {
          return {
            ...conversation,
            unreadCount: 0,
          }
        }
        return conversation
      })
    })
  }, [])

  const handleRename = async (id: string, newTitle: string) => {
    try {
      const renameResponse = await renameConversationApi({ id, title: newTitle }) //Renamed to renameConversationApi
      if (!renameResponse.success) {
        throw new Error(renameResponse.error || "Failed to rename conversation")
      }
      await refreshConversations()
      toast.success("Conversation renamed successfully.")
    } catch (error) {
      console.error("Error renaming conversation:", error)
      toast.error("Failed to rename conversation. Please try again.")
    }
  }

  useEffect(() => {
    refreshConversations()
  }, [refreshConversations])

  return useMemo(
    () => ({
      conversations,
      isLoading,
      activeId,
      deleteConversation,
      setActiveId,
      refreshConversations,
      renameConversation: handleRename,
      markAsRead,
    }),
    [conversations, isLoading, activeId, deleteConversation, refreshConversations, handleRename, markAsRead],
  )
}

// Placeholder functions - replace with your actual API calls
const fetchConversations = async (userId?: string): Promise<Conversation[]> => {
  // Replace with your actual API call to fetch conversations
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call delay
  return [
    { id: "1", title: "Conversation 1", lastMessage: "Hello", unreadCount: 2 },
    { id: "2", title: "Conversation 2", lastMessage: "World", unreadCount: 0 },
  ]
}

const deleteConversationApi = async (id: string) => {
  // Replace with your actual API call to delete a conversation
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call delay
}

const renameConversationApi = async ({ id, title }: { id: string; title: string }) => {
  // Replace with your actual API call to rename a conversation
  await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API call delay
  return { success: true }
}

