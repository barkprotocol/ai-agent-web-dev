import React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface Token {
  address: string
  name: string
  symbol: string
  marketCap: string
  volume24: string
  liquidity: string
  transactions24h: number
  trendingScore24: number
  image: string | null
  listedAt?: string
  holdersCount: number
  change: number
}

interface TokenGridProps {
  tokens: Token[]
  className?: string
  isLoading?: boolean
}

export function TokenGrid({ tokens, className = "", isLoading = false }: TokenGridProps) {
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="p-4">
            <Skeleton className="h-12 w-12 rounded-full mb-4" />
            <Skeleton className="h-4 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2 mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {tokens.map((token) => (
        <Card key={token.address} className="p-4">
          <CardContent className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Image
                src={token.image || "/placeholder.svg"}
                alt={token.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-bold">{token.name}</h3>
              <p className="text-sm text-gray-500">{token.symbol}</p>
              <p className="text-sm">Market Cap: ${Number.parseFloat(token.marketCap).toLocaleString()}</p>
              <p className="text-sm">24h Volume: ${Number.parseFloat(token.volume24).toLocaleString()}</p>
              <p className="text-sm">
                24h Change:{" "}
                <span className={token.change >= 0 ? "text-green-500" : "text-red-500"}>
                  {token.change.toFixed(2)}%
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

