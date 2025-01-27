import type { ReactNode } from "react"

export type Email = string

export interface User {
  id: string
  name: string | null
  email: Email
  // Add other user properties as needed
}

export interface UserDisplayProps {
  user: User
  renderEmail?: (email: Email) => ReactNode
}

