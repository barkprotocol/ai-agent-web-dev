"use client"

import useSWR from "swr"
import type { EmbeddedWallet } from "@/types/db"
import { syncEmbeddedWallets } from "@/server/actions/user"
import { handleError } from "@/lib/error-handling"
import { useToast } from "@/components/ui/use-toast"

export function useEmbeddedWallets() {
  const { toast } = useToast()

  const {
    data: wallets,
    error,
    mutate,
  } = useSWR<EmbeddedWallet[] | null>("embeddedWallets", async () => {
    try {
      const result = await syncEmbeddedWallets()
      if (!result?.data?.success) {
        throw new Error(result?.data?.error ?? "Failed to sync wallets")
      }
      return result?.data?.data?.wallets ?? []
    } catch (error) {
      console.error("Failed to sync wallets:", error)
      const appError = handleError(error)
      toast.error(appError.message)
      throw appError // Re-throw the error for SWR to handle
    }
  })

  const refreshWallets = () => {
    mutate()
  }

  return {
    wallets,
    isLoading: !error && !wallets,
    error,
    refreshWallets,
  }
}

