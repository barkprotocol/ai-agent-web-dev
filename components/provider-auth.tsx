"use client"

import { PrivyProvider } from "@privy-io/react-auth"
import { toSolanaWalletConnectors } from "@privy-io/react-auth/solana"
import { useTheme } from "next-themes"
import { useMemo } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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
    return (
      <Alert variant="destructive">
        <AlertTitle>Authentication Configuration Error</AlertTitle>
        <AlertDescription>
          <p>The Privy App ID is not properly configured. Please check your environment variables.</p>
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          theme: resolvedTheme === "dark" ? "dark" : "light",
          logo: resolvedTheme === "dark" ? "/letter_w.svg" : "/letter.svg",
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

