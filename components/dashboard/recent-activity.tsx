import type { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface ActivityItem {
  id: string
  type: string
  amount: string
  date: string
}

export const RecentActivity: FC = () => {
  // In a real application, you would fetch this data from an API
  const activityData: ActivityItem[] = [
    { id: "1", type: "Deposit", amount: "+$100.00", date: "2025-01-01" },
    { id: "2", type: "Withdrawal", amount: "-$50.00", date: "2025-01-30" },
    { id: "3", type: "Reward", amount: "+$5.23", date: "2025-01-29" },
    { id: "4", type: "Swap", amount: "$200.00", date: "2025-01-28" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activityData.map((item) => (
            <div key={item.id} className="flex items-center">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{item.type}</p>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
              <div className="text-sm font-medium">{item.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export const RecentActivitySkeleton: FC = () => {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-5 w-[140px]" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center">
              <div className="flex-1 space-y-1">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-3 w-[80px]" />
              </div>
              <Skeleton className="h-4 w-[60px]" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

