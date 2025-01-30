"use client"

import { useState } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ConnectWalletButton() {
  const { wallet, connect, connecting, connected } = useWallet()
  const [isLoading, setIsLoading] = useState(false)

  const handleConnect = async () => {
    if (!wallet) return
    setIsLoading(true)
    try {
      await connect()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!wallet) {
    return (
      <WalletMultiButton className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2">
        Select Wallet
      </WalletMultiButton>
    )
  }

  return (
    <Button onClick={handleConnect} disabled={connecting || connected || isLoading}>
      {isLoading || connecting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Connecting...
        </>
      ) : connected ? (
        "Wallet Connected"
      ) : (
        "Connect Wallet"
      )}
    </Button>
  )
}

