import type React from "react"
import { useState } from "react"

interface ListItem {
  id: string
  content: string
}

export const DynamicList: React.FC = () => {
  const [items, setItems] = useState<ListItem[]>([
    { id: "1", content: "Item 1" },
    { id: "2", content: "Item 2" },
    { id: "3", content: "Item 3" },
  ])

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.content}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  )
}

