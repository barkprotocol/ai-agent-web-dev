"use client"

import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"

export function LoginButton() {
  const { login, authenticated, user } = usePrivy()

  if (authenticated) {
    return <p>Welcome, {user?.email || "User"}!</p>
  }

  return <Button onClick={login}>Login with Privy</Button>
}

