import type { PublicKey, Transaction, Connection } from "@solana/web3.js"

interface PhantomProvider {
  publicKey: PublicKey
  isPhantom?: boolean
  connect: (opts?: {
    onlyIfTrusted?: boolean
  }) => Promise<{ publicKey: PublicKey }>
  disconnect: () => Promise<void>
  signTransaction: (transaction: Transaction) => Promise<Transaction>
  signAllTransactions: (transactions: Transaction[]) => Promise<Transaction[]>
  signMessage: (message: Uint8Array) => Promise<{ signature: Uint8Array }>
  sendTransaction: (
    transaction: Transaction,
    connection: Connection,
    options?: { skipPreflight?: boolean },
  ) => Promise<string>
}

declare global {
  interface Window {
    phantom?: {
      solana?: PhantomProvider
    }
    solana?: PhantomProvider
  }
}

