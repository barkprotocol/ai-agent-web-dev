import { Button } from "@chakra-ui/react"
import { ExternalLink } from "@/components/icons/external-latest-link"
import { formatChartPrice } from "@/lib/utils/format"
import { ChartTooltipContent } from "@/components/charts/chart-tooltip-content"

enum TIMEFRAME {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  YEAR = "year",
}

function formatDate(time: number, timeFrame: TIMEFRAME): string {
  const date = new Date(time)
  let formattedDate: string

  switch (timeFrame) {
    case TIMEFRAME.DAY:
      formattedDate = date.toLocaleDateString()
      break
    case TIMEFRAME.WEEK:
      formattedDate = `Week of ${date.toLocaleDateString()}`
      break
    case TIMEFRAME.MONTH:
      formattedDate = `${date.toLocaleDateString("en", { month: "long", year: "numeric" })}`
      break
    case TIMEFRAME.YEAR:
      formattedDate = date.toLocaleDateString("en", { year: "numeric" })
      break
    default:
      formattedDate = date.toLocaleDateString()
  }

  return formattedDate
}

function shortenAddress(addr: string): string {
  if (!addr) return ""
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`
}

const address = "some_address"
const symbol = "SOL"

// ... other code ...
;(<ChartTooltipContent formatter={(value: number) => formatChartPrice(value)} />) < Button
variant = "outline"
size = "sm"
className = "hidden sm:flex"
onClick={() => window.open(`https://solscan.io/token/${address}`, '_blank')}
  aria-label={`View ${symbol} token on Solscan`}
>
  <ExternalLink className="mr-2 h-4 w-4" />
View
on
Solscan
</Button>

