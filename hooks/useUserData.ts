import { useState, useEffect } from "react"
import { getUserData } from "@/lib/user-data"
import type { UserData } from "@/types/user-data"
import { handleError, type AppError } from "@/lib/error-handling"

export function useUserData() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<AppError | null>(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const data = await getUserData()
      setUserData(data)
      setError(null)
    } catch (err) {
      const appError = handleError(err)
      setError(appError)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData]) // Added fetchData to dependencies

  const refreshUserData = async () => {
    setIsLoading(true)
    await fetchData()
  }

  return { userData, isLoading, error, refreshUserData }
}

