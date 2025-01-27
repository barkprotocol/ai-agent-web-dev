import type React from "react"
import { UserProfile } from "./user-profile"
import { usePrivy } from "@privy-io/react-auth"
import type { User, Email } from "@/app/types/user"

export const Dashboard: React.FC = () => {
  const { user } = usePrivy()

  const renderEmail = (email: Email) => (
    <a href={`mailto:${email}`} className="text-primary hover:underline">
      {email}
    </a>
  )

  // Ensure user is not null before rendering
  if (!user) {
    return <div>Loading user information...</div>
  }

  const dashboardUser: User = {
    id: user.id,
    name: user.name || null,
    email: user.email || "",
    // Map other properties as needed
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <UserProfile user={dashboardUser} renderEmail={renderEmail} />
      {/* Add other dashboard components as needed */}
    </div>
  )
}

