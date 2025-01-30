import type { BirdeyeTrader } from "@/server/actions/birdeye"

interface TopTraderProps {
  trader: BirdeyeTrader
  rank: number
}

export default function TopTrader({ trader, rank }: TopTraderProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b last:border-b-0">
      <div className="flex items-center">
        <span className="font-bold mr-2">#{rank}</span>
        <span className="text-sm">
          {trader.address.slice(0, 6)}...{trader.address.slice(-4)}
        </span>
      </div>
      <div>
        <span className="font-semibold">${trader.totalValue.toLocaleString()}</span>
      </div>
    </div>
  )
}

