"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana"
import { useTheme } from "next-themes"
import { useMemo } from "react"

import { RPC_URL } from "@/lib/constants"

interface AuthProvidersProps {
  children: React.ReactNode
}

export default function AuthProviders({ children }: AuthProvidersProps) {
  const { resolvedTheme } = useTheme()

  const solanaConnectors = useMemo(
    () =>
      toSolanaWalletConnectors({
        shouldAutoConnect: false,
      }),
    [],
  )

  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID

  if (!privyAppId) {
    console.error("NEXT_PUBLIC_PRIVY_APP_ID is not set")
    return <div>Error: Authentication service is not configured properly.</div>
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          theme: resolvedTheme === "dark" ? "dark" : "light",
          logo: resolvedTheme === "dark" ? "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp" : "https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp",
        },
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
        solanaClusters: [{ name: "mainnet-beta", rpcUrl: RPC_URL }],
      }}
    >
      {children}
    </PrivyProvider>
  )
}

