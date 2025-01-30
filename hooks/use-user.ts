"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { type PrivyInterface, usePrivy } from "@privy-io/react-auth"
import useSWR from "swr"
import { debugLog } from "@/lib/debug-utils"
import { getUserData } from "@/server/actions/user"
import type { BarkUser, PrismaUser, PrivyUser } from "@/types/db"

type BarkUserInterface = Omit<PrivyInterface, "user" | "ready"> & {
  isLoading: boolean
  user: BarkUser | null
}

function loadFromCache(): BarkUser | null {
  try {
    const cached = localStorage.getItem("Bark-user-data")
    if (cached) {
      debugLog("Loading user data from cache", cached, {
        module: "useUser",
        level: "info",
      })
      return JSON.parse(cached)
    }
    debugLog("No user data found in cache", null, {
      module: "useUser",
      level: "info",
    })
    return null
  } catch (error) {
    debugLog("Failed to load cached user data", error, {
      module: "useUser",
      level: "error",
    })
    return null
  }
}

function saveToCache(data: BarkUser | null) {
  try {
    if (data) {
      localStorage.setItem("Bark-user-data", JSON.stringify(data))
      debugLog("User data saved to cache", data, {
        module: "useUser",
        level: "info",
      })
    } else {
      localStorage.removeItem("Bark-user-data")
      debugLog("User data removed from cache", null, {
        module: "useUser",
        level: "info",
      })
    }
  } catch (error) {
    debugLog("Failed to update user cache", error, {
      module: "useUser",
      level: "error",
    })
  }
}

async function fetchBarkUserData(privyUser: PrivyUser): Promise<BarkUser | null> {
  try {
    const response = await getUserData()
    if (response?.data?.success && response?.data?.data) {
      const prismaUser: PrismaUser = response.data.data
      debugLog("Retrieved PrismaUser data from server", prismaUser, {
        module: "useUser",
        level: "info",
      })
      return {
        ...prismaUser,
        privyUser: privyUser as PrivyUser,
      } as BarkUser
    }
    debugLog("Server returned unsuccessful user data response", response?.data?.error, {
      module: "useUser",
      level: "error",
    })
    return null
  } catch (error) {
    debugLog("Error fetching user data", error, {
      module: "useUser",
      level: "error",
    })
    return null
  }
}

export function useUser(): BarkUserInterface {
  const { ready, user: privyUser, ...privyRest } = usePrivy()
  const [initialCachedUser, setInitialCachedUser] = useState<BarkUser | null>(null)
  const router = useRouter()

  useEffect(() => {
    const cachedUser = loadFromCache()
    setInitialCachedUser(cachedUser)
  }, [])

  const swrKey = ready && privyUser?.id ? `user-${privyUser.id}` : null
  debugLog("SWR Key", swrKey, { module: "useUser" })

  const fetcher = useCallback(async (): Promise<BarkUser | null> => {
    if (!ready || !privyUser) {
      debugLog("Privy not ready or user not logged in", null, {
        module: "useUser",
        level: "info",
      })
      return null
    }

    if (privyUser) {
      debugLog("Fetching BarkUser data from server", null, {
        module: "useUser",
        level: "info",
      })
      const BarkUser = await fetchBarkUserData(privyUser as PrivyUser)
      debugLog("Merged BarkUser data", BarkUser, {
        module: "useUser",
        level: "info",
      })
      return BarkUser
    }
    debugLog("No valid BarkUser data retrieved", null, {
      module: "useUser",
      level: "warn",
    })
    return null
  }, [ready, privyUser])

  const { data: BarkUser, isValidating: swrLoading } = useSWR<BarkUser | null>(swrKey, fetcher, {
    fallbackData: initialCachedUser,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  })

  debugLog("Current BarkUser data", BarkUser, { module: "useUser" })
  debugLog("SWR validation status", swrLoading, { module: "useUser" })

  useEffect(() => {
    if (BarkUser) {
      saveToCache(BarkUser)
    }
  }, [BarkUser])

  const isLoading = swrLoading && !initialCachedUser
  debugLog("Loading state", { isLoading }, { module: "useUser" })

  const extendedLogout = useCallback(async () => {
    debugLog("Initiating user logout...", null, {
      module: "useUser",
      level: "info",
    })

    router.push("/refresh")

    try {
      await privyRest.logout()
      saveToCache(null)
      debugLog("User logged out and cache cleared", null, {
        module: "useUser",
        level: "info",
      })
      router.replace("/")
    } catch (error) {
      debugLog("Error during logout process", error, {
        module: "useUser",
        level: "error",
      })
      router.replace("/")
    }
  }, [router])

  return {
    ...privyRest,
    isLoading: isLoading || BarkUser == null,
    user: BarkUser || null,
    logout: extendedLogout,
  }
}

