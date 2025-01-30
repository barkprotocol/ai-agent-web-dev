"use client"

import { type FC, useState, useEffect, useCallback } from "react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { useConnection } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Loader2, Copy, Check, Wallet } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const WalletButton: FC = () => {
  const { publicKey, wallet, disconnect, connecting, connected } = useWallet()
  const { setVisible } = useWalletModal()
  const { connection } = useConnection()
  const [copying, setCopying] = useState(false)
  const [balance, setBalance] = useState<number | null>(null)

  useEffect(() => {
    if (connected) {
      toast.success("Wallet connected successfully!")
      fetchBalance()
    } else {
      setBalance(null)
    }
  }, [connected])

  const fetchBalance = useCallback(async () => {
    if (publicKey) {
      try {
        const balance = await connection.getBalance(publicKey)
        setBalance(balance / LAMPORTS_PER_SOL)
      } catch (error) {
        console.error("Failed to fetch balance:", error)
        toast.error("Failed to fetch wallet balance.")
      }
    }
  }, [publicKey, connection])

  const handleWalletClick = useCallback(() => {
    if (!connected) {
      setVisible(true)
    }
  }, [connected, setVisible])

  const handleDisconnect = useCallback(() => {
    disconnect().catch((error) => {
      console.error("Failed to disconnect:", error)
      toast.error("Failed to disconnect. Please try again.")
    })
  }, [disconnect])

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

  const truncatedAddress = publicKey ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}` : ""

  if (!connected) {
    return (
      <Button
        onClick={handleWalletClick}
        variant="outline"
        className="bg-black hover:bg-gray-900 text-white border-gray-700 transition-all"
        disabled={connecting}
      >
        {connecting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </>
        )}
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-black hover:bg-gray-900 text-white border-gray-700 transition-all">
          <Wallet className="mr-2 h-4 w-4" />
          {truncatedAddress}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Wallet</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={copyAddress}>
          {copying ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
          {copying ? "Copied!" : "Copy Address"}
        </DropdownMenuItem>
        {balance !== null && (
          <DropdownMenuItem>
            <Wallet className="mr-2 h-4 w-4" />
            Balance: {balance.toFixed(4)} SOL
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleDisconnect}>
          <Loader2 className="mr-2 h-4 w-4" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

