import { useWalletPortfolio } from "@/hooks/use-wallet-portfolio"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, RefreshCw } from "lucide-react"

export function WalletPortfolioDisplay() {
  const { data, refresh, isLoading } = useWalletPortfolio()

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-40">
          <Loader2 className="h-8 w-8 animate-spin" title="Loading wallet portfolio" />
        </CardContent>
      </Card>
    )
  }

  if (!data) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-40">
          <p>No wallet data available</p>
        </CardContent>
      </Card>
    )
  }

  const totalValue =
    data.fungibleTokens.reduce((sum, token) => sum + token.value, 0) +
    data.nonFungibleTokens.reduce((sum, token) => sum + token.value, 0)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Wallet Portfolio</CardTitle>
        <Button variant="ghost" size="sm" onClick={refresh} aria-label="Refresh wallet portfolio">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          ${totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </div>
        <p className="text-xs text-muted-foreground">Total Value</p>
        <div className="mt-4 space-y-2">
          {data.fungibleTokens.slice(0, 4).map((token) => (
            <div key={token.address} className="flex justify-between text-sm">
              <span>{token.symbol}</span>
              <span>
                {token.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ($
                {token.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
              </span>
            </div>
          ))}
        </div>
        {data.fungibleTokens.length > 4 && (
          <p className="text-xs text-muted-foreground mt-2">+{data.fungibleTokens.length - 4} more tokens</p>
        )}
        {data.nonFungibleTokens.length > 0 && (
          <p className="text-xs text-muted-foreground mt-2">{data.nonFungibleTokens.length} NFTs in portfolio</p>
        )}
      </CardContent>
    </Card>
  )
}

