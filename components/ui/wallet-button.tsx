"use client"

import { type FC, useState, useEffect, useCallback, useMemo } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2, Copy, Check } from "lucide-react"

export const WalletButton: FC = () => {
  const { publicKey, wallet, disconnect, connecting, connected } = useWallet()
  const { setVisible } = useWalletModal()
  const [copying, setCopying] = useState(false)

  useEffect(() => {
    if (connected) {
      toast.success("Wallet connected successfully!")
    }
  }, [connected])

  const handleWalletClick = useCallback(() => {
    if (!connected) {
      setVisible(true)
    } else {
      disconnect().catch((error) => {
        console.error("Failed to disconnect:", error)
        toast.error("Failed to disconnect. Please try again.")
      })
    }
  }, [connected, disconnect, setVisible])

  const copyAddress = useCallback(async () => {
    if (publicKey) {
      try {
        await navigator.clipboard.writeText(publicKey.toBase58())
        setCopying(true)
        toast.success("Address copied to clipboard!")
        setTimeout(() => setCopying(false), 1500)
      } catch (error) {
        console.error("Failed to copy address:", error)
        toast.error("Failed to copy address. Please try again.")
      }
    }
  }, [publicKey])

  const truncatedAddress = useMemo(
    () => (publicKey ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}` : ""),
    [publicKey],
  )

  return (
    <div className="flex justify-center items-center space-x-4 py-4">
      <Button
        onClick={handleWalletClick}
        variant="outline"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        disabled={connecting}
        aria-label={connecting ? "Connecting wallet" : connected ? "Disconnect wallet" : "Connect wallet"}
      >
        {connecting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
            <span>Connecting...</span>
          </>
        ) : connected ? (
          "Disconnect"
        ) : (
          "Connect Wallet"
        )}
      </Button>

      {connected && publicKey && (
        <Button
          onClick={copyAddress}
          variant="outline"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
          disabled={copying}
          aria-label={copying ? "Address copied" : `Copy wallet address: ${truncatedAddress}`}
        >
          {copying ? (
            <>
              <Check className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>{truncatedAddress}</span>
            </>
          )}
        </Button>
      )}
    </div>
  )
}

