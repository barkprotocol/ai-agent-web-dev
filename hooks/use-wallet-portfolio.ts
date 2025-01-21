"use client"

import { useCallback, useMemo } from "react"
import useSWR from "swr"

import { useUser } from "@/hooks/use-user"
import { throttle } from "@/lib/utils"
import type { WalletPortfolio } from "@/app/types/helius/portfolio"

interface WalletPortfolioError extends Error {
  status?: number
}

const fetcher = async (key: string, address: string): Promise<WalletPortfolio> => {
  const response = await fetch(`/api/wallet/${address}/portfolio`)
  if (!response.ok) {
    const error: WalletPortfolioError = new Error("Failed to fetch portfolio")
    error.status = response.status
    throw error
  }
  return response.json()
}

export function useWalletPortfolio() {
  const { user } = useUser()
  const walletAddress = user?.wallets?.[0]?.publicKey

  const memoizedFetcher = useCallback(fetcher, [])

  const { data, mutate, isValidating, error } = useSWR<WalletPortfolio, WalletPortfolioError>(
    walletAddress ? ["wallet-portfolio", walletAddress] : null,
    memoizedFetcher,
    {
      refreshInterval: 60000, // Refresh every 60 seconds
      revalidateOnFocus: true,
      keepPreviousData: true,
    },
  )

  const refresh = useMemo(
    () =>
      throttle(() => {
        mutate()
      }, 1000),
    [mutate],
  )

  return {
    data,
    refresh,
    isLoading: !error && !data,
    isValidating,
    error,
  }
}

