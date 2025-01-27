"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface PrivyProviderProps {
  children: React.ReactNode
}

export function PrivyAuthProvider({ children }: PrivyProviderProps) {
  const { resolvedTheme } = useTheme()
  const [privyAppId, setPrivyAppId] = useState<string | null>(null)

  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_PRIVY_APP_ID
    if (!appId) {
      console.error("NEXT_PUBLIC_PRIVY_APP_ID is not set in environment variables")
    } else {
      setPrivyAppId(appId)
    }
  }, [])

  if (!privyAppId) {
    return <div>Error: Privy app ID is not configured correctly.</div>
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        loginMethods: ["email", "wallet"],
        appearance: {
          theme: resolvedTheme === "dark" ? "dark" : "light",
          accentColor: "#DBCFC7",
          logo: "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp",
        },
        embeddedWallets: {
          createOnLogin: "all-users",
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}

