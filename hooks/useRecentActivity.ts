import { useState, useEffect } from "react"
import { getUserRecentActivity } from "@/lib/user-data"
import type { ActivityItem } from "@/types/user-data"

export function useRecentActivity(pageSize = 10) {
  const [activities, setActivities] = useState<ActivityItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(1)

  const fetchActivities = async () => {
    try {
      setIsLoading(true)
      const newActivities = await getUserRecentActivity(page, pageSize)
      setActivities((prevActivities) => [...prevActivities, ...newActivities])
      setHasMore(newActivities.length === pageSize)
      setError(null)
    } catch (err) {
      setError("Failed to fetch recent activities")
      console.error("Error fetching recent activities:", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchActivities()
  }, [page, pageSize, fetchActivities]) // Added fetchActivities to dependencies

  const loadMore = () => {
    if (!isLoading && hasMore) {
      setPage((prevPage) => prevPage + 1)
    }
  }

  return { activities, isLoading, error, hasMore, loadMore }
}

