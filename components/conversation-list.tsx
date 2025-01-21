import React from "react"
import { useConversations } from "@/hooks/use-conversations"

export function ConversationList() {
  const { conversations, loading, error, pagination, loadMore } = useConversations()

  if (loading) return <div>Loading conversations...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conv) => (
          <li key={conv.id}>
            <h3>{conv.title}</h3>
            <p>{conv.lastMessage}</p>
            <small>{new Date(conv.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
      {pagination.page * pagination.limit < pagination.total && <button onClick={loadMore}>Load More</button>}
    </div>
  )
}

