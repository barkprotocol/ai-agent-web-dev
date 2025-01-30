"use client"

import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { AgentPerformance } from "@/components/dashboard/agent-performance"
import { useMarketData } from "@/hooks/useMarketData"
import { useUserData } from "@/hooks/useUserData"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function DashboardContent() {
  const { marketData, isLoading: isMarketDataLoading, error: marketDataError } = useMarketData()
  const { userData, isLoading: isUserDataLoading, error: userDataError } = useUserData()

  if (isMarketDataLoading || isUserDataLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (marketDataError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{marketDataError}</AlertDescription>
      </Alert>
    )
  }

  if (userDataError) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{userDataError.message}</AlertDescription>
      </Alert>
    )
  }

  if (!marketData || !userData) {
    return <div>No data available.</div>
  }

  return (
    <div className="space-y-6">
      <Overview marketData={marketData} userData={userData} />
      <div className="grid gap-6 md:grid-cols-2">
        <RecentActivity />
        <QuickActions />
      </div>
      <AgentPerformance userDataPromise={Promise.resolve(userData)} /> {/* Pass a resolved promise */}
    </div>
  )
}

