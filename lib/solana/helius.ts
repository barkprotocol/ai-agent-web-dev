import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import knownAddresses from "@/lib/utils/known-addresses.json"
import type { FungibleToken } from "@/types/helius/fungibleToken"
import type { NonFungibleToken } from "@/types/helius/nonFungibleToken"
import { RPC_URL } from "@/lib/constants"

export interface Holder {
  owner: string
  balance: number
  classification?: string
}

interface MintInfo {
  mint: string
  decimals: number
  supply: bigint
  isInitialized: boolean
  freezeAuthority: string
  mintAuthority: string
}

type HeliusMethod =
  | "searchAssets"
  | "getBalance"
  | "getTokenAccounts"
  | "getAccountInfo"
  | "getMultipleAccounts"
  | "getTokenLargestAccounts"

const KNOWN_ADDRESSES: Record<string, string> = knownAddresses

const fetchHelius = async (method: HeliusMethod, params: any) => {
  try {
    const response = await fetch(RPC_URL, {
      next: { revalidate: 5 },
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "request-id",
        method: method,
        params: params,
      }),
    })

    if (!response.ok) {
      throw new Error(`Helius API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    if (data.error) {
      throw new Error(`Helius API error: ${data.error.message || JSON.stringify(data.error)}`)
    }

    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Helius API request failed: ${error.message}`)
    }
    throw new Error("Helius API request failed with unknown error")
  }
}

export const getBalance = async (walletAddress: string): Promise<number> => {
  const data = await fetchHelius("getBalance", [walletAddress])
  return Number(data.result.balance) / LAMPORTS_PER_SOL
}

export const searchWalletAssets = async (
  ownerAddress: string,
): Promise<{
  fungibleTokens: FungibleToken[]
  nonFungibleTokens: NonFungibleToken[]
}> => {
  // Implementation of searchWalletAssets function
  // This is a placeholder implementation
  return {
    fungibleTokens: [],
    nonFungibleTokens: [],
  }
}

export const getMintAccountInfo = async (mint: string): Promise<MintInfo> => {
  // Implementation of getMintAccountInfo function
  // This is a placeholder implementation
  return {
    mint: "",
    decimals: 0,
    supply: BigInt(0),
    isInitialized: false,
    freezeAuthority: "",
    mintAuthority: "",
  }
}

export const getTokenHolders = async (mintInfo: MintInfo): Promise<Map<string, Holder>> => {
  // Implementation of getTokenHolders function
  // This is a placeholder implementation
  return new Map()
}

export const getTokenAccountInfo = async (address: string) => {
  // Implementation of getTokenAccountInfo function
  // This is a placeholder implementation
  return null
}

export const getTopTokenHolders = async (mintInfo: MintInfo): Promise<Map<string, Holder>> => {
  // Implementation of getTopTokenHolders function
  // This is a placeholder implementation
  return new Map()
}

export const getTokenHolderCount = async (mintInfo: MintInfo): Promise<number> => {
  // Implementation of getTokenHolderCount function
  // This is a placeholder implementation
  return 0
}

export const getHoldersClassification = async (mint: string, limit = 10) => {
  // Implementation of getHoldersClassification function
  // This is a placeholder implementation
  return []
}

// Additional helper functions...

