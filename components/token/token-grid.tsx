import type { Token } from "@/types/token"
import Image from "next/image"

interface TokenGridProps {
  tokens: Token[]
}

export function TokenGrid({ tokens }: TokenGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {tokens.map((token) => (
        <div key={token.address} className="flex items-center p-2 border rounded">
          <Image src={token.logoURI || "/placeholder.svg"} alt={token.name} width={32} height={32} className="mr-2" />
          <div>
            <p className="font-semibold">{token.symbol}</p>
            <p className="text-sm text-muted-foreground">${token.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

