import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Copy } from "lucide-react"
import type { UserDisplayProps } from "@/app/types/user"

export const UserProfile: React.FC<UserDisplayProps> = ({ user, renderEmail }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      // You could add a toast notification here
      console.log("Copied to clipboard")
    })
  }

  if (!user) {
    return (
      <Card>
        <CardContent>
          <p className="text-muted-foreground">User data not available.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.name || "User avatar"} />
            <AvatarFallback>{user.name ? user.name.charAt(0).toUpperCase() : "U"}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{user.name || "Anonymous User"}</h2>
            <p className="text-sm text-muted-foreground">
              {renderEmail ? renderEmail(user.email) : user.email || "No email provided"}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Account Type:</span> {user.accountType || "Standard"}
          </p>
          <p>
            <span className="font-semibold">Member Since:</span> {user.memberSince || "N/A"}
          </p>
          {user.walletAddress && (
            <div className="flex items-center space-x-2">
              <span className="font-semibold">Wallet Address:</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-mono text-xs"
                      onClick={() => copyToClipboard(user.walletAddress!)}
                    >
                      {`${user.walletAddress.slice(0, 6)}...${user.walletAddress.slice(-4)}`}
                      <Copy className="ml-2 h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to copy full address</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
          {user.bio && (
            <div>
              <h3 className="font-semibold mb-1">Bio</h3>
              <p className="text-sm text-muted-foreground">{user.bio}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

