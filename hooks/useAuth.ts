"use client"

import { useState, useEffect } from "react"
import { usePrivy } from "@privy-io/react-auth"
import { useRouter } from "next/navigation"

export function useAuth() {
  const [isLoading, setIsLoading] = useState(true)
  const { user, authenticated, login, logout } = usePrivy()
  const router = useRouter()

  useEffect(() => {
    if (authenticated === false) {
      router.push("/login")
    } else if (authenticated === true) {
      setIsLoading(false)
    }
  }, [authenticated, router])

  return {
    user,
    isLoading,
    isAuthenticated: authenticated,
    login,
    logout,
  }
}

