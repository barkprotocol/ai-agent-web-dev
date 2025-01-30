use
client
import { useRef, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRecentActivity } from "@/hooks/useRecentActivity"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export function RecentActivity() {
  const { activities, isLoading, error, hasMore, loadMore } = useRecentActivity()
  const observer = useRef<IntersectionObserver | null>(null)

  const lastActivityElementRef = useCallback(
    (node: HTMLLIElement | null) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore()
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore, loadMore],
  )

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">Error: {error}</p>
          <Button onClick={loadMore} className="mt-4">
            Retry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => (
            <li
              key={activity.id}
              ref={index === activities.length - 1 ? lastActivityElementRef : null}
              className="flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{activity.type}</p>
                <p className="text-sm text-gray-500">{activity.description}</p>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </li>
          ))}
          {isLoading && (
            <li>
              <Skeleton className="h-12 w-full" />
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  )
}

