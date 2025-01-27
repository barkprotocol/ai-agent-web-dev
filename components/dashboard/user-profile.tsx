import type React from "react"
import type { UserDisplayProps } from "@/app/types/user"

export const UserProfile: React.FC<UserDisplayProps> = ({ user, renderEmail }) => {
  return (
    <div className="p-4 bg-card rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <p className="mb-2">
        <span className="font-semibold">Name:</span> {user.name || "N/A"}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Email:</span> {renderEmail ? renderEmail(user.email) : user.email}
      </p>
      {/* Add other user information as needed */}
    </div>
  )
}

