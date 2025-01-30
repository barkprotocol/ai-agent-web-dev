"use client"

import { type FC, useState, useCallback } from "react"
import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2, LogIn, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const LoginButton: FC = () => {
  const { login, logout, authenticated, user } = usePrivy()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = useCallback(async () => {
    setIsLoggingIn(true)
    try {
      await login()
      toast.success("Logged in successfully!")
    } catch (error) {
      console.error("Failed to log in:", error)
      toast.error("Failed to log in. Please try again.")
    } finally {
      setIsLoggingIn(false)
    }
  }, [login])

  const handleLogout = useCallback(async () => {
    try {
      await logout()
      toast.success("Logged out successfully!")
    } catch (error) {
      console.error("Failed to log out:", error)
      toast.error("Failed to log out. Please try again.")
    }
  }, [logout])

  if (!authenticated) {
    return (
      <Button
        onClick={handleLogin}
        variant="outline"
        className="bg-black hover:bg-gray-900 text-white border-gray-700 transition-all"
        disabled={isLoggingIn}
      >
        {isLoggingIn ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
          </>
        ) : (
          <>
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </>
        )}
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-black hover:bg-gray-900 text-white border-gray-700 transition-all">
          <User className="mr-2 h-4 w-4" />
          {user?.email || "User"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogIn className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

