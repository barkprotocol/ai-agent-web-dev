"use client"

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
} from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"
import { useMemo } from "react"

interface WalletContextProviderProps {
  children: React.ReactNode
  network?: WalletAdapterNetwork
  endpoint?: string
}

export function WalletContextProvider({
  children,
  network = WalletAdapterNetwork.Mainnet,
  endpoint: customEndpoint,
}: WalletContextProviderProps) {
  // Use the provided endpoint or generate one based on the network
  const endpoint = useMemo(() => customEndpoint || clusterApiUrl(network), [network, customEndpoint])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    [network],
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

