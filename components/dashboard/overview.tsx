import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { TokenGrid } from "@/components/token/token-grid"

export function Overview({ marketData, userData }: { marketData: any; userData: any }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
        <PortfolioCard userData={userData} />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
        <MarketOverviewCard marketData={marketData} />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
        <TrendingTokensCard marketData={marketData} />
      </Suspense>
    </div>
  )
}

function PortfolioCard({ userData }: { userData: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Portfolio</CardTitle>
      </CardHeader>
      <CardContent>
        <TokenGrid tokens={userData?.portfolio || []} />
      </CardContent>
    </Card>
  )
}

function MarketOverviewCard({ marketData }: { marketData: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Total Market Cap: ${marketData?.totalMarketCap?.toLocaleString() || "N/A"}</p>
        <p>24h Volume: ${marketData?.volume24h?.toLocaleString() || "N/A"}</p>
      </CardContent>
    </Card>
  )
}

function TrendingTokensCard({ marketData }: { marketData: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <TokenGrid tokens={marketData?.trendingTokens || []} />
      </CardContent>
    </Card>
  )
}

