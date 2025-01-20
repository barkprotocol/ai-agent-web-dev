import type { FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const UserOverview: FC = () => {
  // In a real application, you would fetch this data from an API
  const overviewData = [
    { title: "Total Balance", value: "$1,234.56" },
    { title: "Active Positions", value: "3" },
    { title: "Total Rewards", value: "$45.67" },
    { title: "Performance", value: "+12.34%" },
  ]

  return (
    <>
      {overviewData.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export const UserOverviewSkeleton: FC = () => {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Skeleton className="h-4 w-[100px]" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-8 w-[80px]" />
          </CardContent>
        </Card>
      ))}
    </>
  )
}

