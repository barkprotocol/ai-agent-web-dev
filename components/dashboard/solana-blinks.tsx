import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { MarketData } from "@/types/market"

interface SolanaBlinkProps {
  marketData: MarketData | null
}

export function SolanaBlinks({ marketData }: SolanaBlinkProps) {
  const blinks = [
    { id: 1, pair: "SOL/USDC", price: marketData?.solanaPrice || 0, change: "+2.5%" },
    { id: 2, pair: "BARK/USDC", price: marketData?.barkPrice || 0, change: "+1.2%" },
    { id: 3, pair: "RAY/USDC", price: 0.5, change: "-0.8%" },
    { id: 4, pair: "SRM/USDC", price: 0.2, change: "+0.5%" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Solana Blinks</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {blinks.map((blink) => (
            <li key={blink.id} className="flex justify-between items-center">
              <span className="font-medium">{blink.pair}</span>
              <div className="text-right">
                <p className="font-bold">${blink.price.toFixed(2)}</p>
                <p className={blink.change.startsWith("+") ? "text-green-600" : "text-red-600"}>{blink.change}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

