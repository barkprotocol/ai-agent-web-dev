"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import type React from "react"

interface AuthProvidersProps {
  children: React.ReactNode
}

export default function AuthProviders({ children }: AuthProvidersProps) {
  const { resolvedTheme } = useTheme()
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (!privyAppId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Alert variant="destructive" className="max-w-md">
          <AlertTitle>Authentication Configuration Error</AlertTitle>
          <AlertDescription>
            <p>The Privy App ID is not properly configured. Please check your environment variables.</p>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          theme: resolvedTheme === "dark" ? "dark" : "light",
          logo: "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp",
        },
        loginMethods: ["email", "google", "wallet"],
        embeddedWallets: {
          createOnLogin: "all-users",
          noPromptOnSignature: false,
        },
      }}
      onSuccess={(user) => {
        console.log("User authenticated:", user)
      }}
      onError={(error) => {
        console.error("Privy initialization error:", error)
        setError(error.message)
      }}
    >
      {error ? (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <Alert variant="destructive" className="max-w-md">
            <AlertTitle>Authentication Error</AlertTitle>
            <AlertDescription>
              <p>{error}</p>
              <p className="mt-2">Please check your Privy configuration and try again.</p>
            </AlertDescription>
          </Alert>
        </div>
      ) : (
        children
      )}
    </PrivyProvider>
  )
}

