import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import type { MarketData } from "@/types/market-data"

interface AnalyticsProps {
  marketData: MarketData | null
}

export function Analytics({ marketData }: AnalyticsProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <AnalyticsSection
            title="Market Overview"
            expanded={expandedSections["marketOverview"]}
            onToggle={() => toggleSection("marketOverview")}
          >
            <TooltipProvider>
              <div className="grid grid-cols-2 gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <p className="font-medium">Total Market Cap</p>
                      <p>${marketData?.totalMarketCap?.toLocaleString() || "N/A"}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The total value of all cryptocurrencies in circulation</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <p className="font-medium">24h Volume</p>
                      <p>${marketData?.volume24h?.toLocaleString() || "N/A"}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>The total trading volume across all cryptocurrencies in the last 24 hours</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </AnalyticsSection>

          <AnalyticsSection
            title="Top Performers"
            expanded={expandedSections["topPerformers"]}
            onToggle={() => toggleSection("topPerformers")}
          >
            <ul className="list-disc list-inside">
              {marketData?.topCryptos?.slice(0, 3).map((crypto, index) => (
                <li key={index}>
                  {crypto.symbol}: ${crypto.price.toFixed(2)} ({crypto.change24h > 0 ? "+" : ""}
                  {crypto.change24h.toFixed(2)}%)
                </li>
              ))}
            </ul>
          </AnalyticsSection>

          <AnalyticsSection
            title="BARK Token"
            expanded={expandedSections["barkToken"]}
            onToggle={() => toggleSection("barkToken")}
          >
            <TooltipProvider>
              <div className="grid grid-cols-2 gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <p className="font-medium">Price</p>
                      <p>${marketData?.barkPrice?.toFixed(4) || "N/A"}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Current price of BARK token</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <p className="font-medium">24h Change</p>
                      <p>{marketData?.barkChange24h?.toFixed(2) || "N/A"}%</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Percentage change in BARK token price over the last 24 hours</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </AnalyticsSection>
        </div>
      </CardContent>
    </Card>
  )
}

interface AnalyticsSectionProps {
  title: string
  expanded: boolean
  onToggle: () => void
  children: React.ReactNode
}

function AnalyticsSection({ title, expanded, onToggle, children }: AnalyticsSectionProps) {
  return (
    <div>
      <Button variant="ghost" className="w-full justify-between" onClick={onToggle}>
        <span>{title}</span>
        {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </Button>
      {expanded && <div className="mt-2 p-4 bg-muted rounded-md">{children}</div>}
    </div>
  )
}

