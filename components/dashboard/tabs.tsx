"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { MarketData as MarketDataComponent } from "@/components/dashboard/market-data" // Updated import
import { Analytics } from "@/components/dashboard/analytics"
import { AgentPerformance } from "@/components/dashboard/agent-performance"
import { ChatInterface } from "@/components/chat/chat-interface"
import { FAQ } from "@/components/dashboard/faq"
import { useMarketData } from "@/hooks/useMarketData"
import { useUserData } from "@/hooks/useUserData"
import { Loader2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function DashboardTabs() {
  const [activeTab, setActiveTab] = useState("overview")
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
    <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="agents">Agents</TabsTrigger>
        <TabsTrigger value="market">Market</TabsTrigger>
        <TabsTrigger value="chat">Chat</TabsTrigger>
        <TabsTrigger value="faq">FAQ</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <Overview marketData={marketData} userData={userData} /> {/* Pass marketData and userData directly */}
      </TabsContent>
      <TabsContent value="activity" className="space-y-4">
        <RecentActivity />
      </TabsContent>
      <TabsContent value="agents" className="space-y-4">
        <AgentPerformance userDataPromise={Promise.resolve(userData)} /> {/* Pass resolved promise */}
        <QuickActions />
      </TabsContent>
      <TabsContent value="market" className="space-y-4">
        <MarketDataComponent marketData={marketData} /> {/* Updated component usage */}
        <Analytics marketData={marketData} /> {/* Pass marketData directly */}
      </TabsContent>
      <TabsContent value="chat" className="space-y-4">
        <ChatInterface />
      </TabsContent>
      <TabsContent value="faq" className="space-y-4">
        <FAQ />
      </TabsContent>
    </Tabs>
  )
}

