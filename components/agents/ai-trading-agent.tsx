'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { TrendingUp, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { initializeSolanaAgentKit } from '@/app/utils/solana-agent'
import { Connection, PublicKey } from '@solana/web3.js'
import { Jupiter } from '@jup-ag/core'
import { Liquidity, Market, TokenAmount } from '@raydium-io/raydium-sdk'

interface TokenInfo {
  mint: string
  symbol: string
  name: string
  iconUrl: string
}

const tokenList: TokenInfo[] = [
  { mint: 'So11111111111111111111111111111111111111112', symbol: 'SOL', name: 'Solana', iconUrl: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png' },
  { mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', symbol: 'USDC', name: 'USD Coin', iconUrl: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png' },
  { mint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263', symbol: 'BONK', name: 'Bonk', iconUrl: 'https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I' },
  { mint: '2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg', symbol: 'BARK', name: 'BARK', iconUrl: 'https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp' },
]

// AI model for price analysis
const analyzePrice = async (jupiterPrice: number, raydiumPrice: number): Promise<{ bestPrice: number, source: string }> => {
  // In a real scenario, this would be a call to a sophisticated AI model
  // For this example, we'll use a simple comparison
  if (jupiterPrice > raydiumPrice) {
    return { bestPrice: jupiterPrice, source: 'Jupiter' }
  } else {
    return { bestPrice: raydiumPrice, source: 'Raydium' }
  }
}

export function AITradingAgent() {
  const [fromToken, setFromToken] = useState<TokenInfo | null>(null)
  const [toToken, setToToken] = useState<TokenInfo | null>(null)
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [jupiterPrice, setJupiterPrice] = useState<number | null>(null)
  const [raydiumPrice, setRaydiumPrice] = useState<number | null>(null)

  const fetchPrices = async () => {
    if (!fromToken || !toToken || !amount) return

    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()
      const connection = agent.getConnection()

      // Fetch Jupiter price
      const jupiter = await Jupiter.load({
        connection,
        cluster: 'mainnet-beta',
        user: new PublicKey('2NTvEssJ2i998V2cMGT4Fy3JhyFnAzHFonDo9dbAkVrg'),
      })

      const jupiterRoutes = await jupiter.computeRoutes({
        inputMint: new PublicKey(fromToken.mint),
        outputMint: new PublicKey(toToken.mint),
        amount: BigInt(parseFloat(amount) * 1e9), // Assuming 9 decimals
        slippageBps: 50, // 0.5% slippage
      })

      if (jupiterRoutes.routesInfos.length > 0) {
        setJupiterPrice(parseFloat(jupiterRoutes.routesInfos[0].outAmount) / 1e9)
      }

      // Fetch Raydium price
      const raydiumMarket = await Market.makeWithoutConnection(
        new PublicKey(fromToken.mint),
        new PublicKey(toToken.mint),
        9, // Assuming 9 decimals for both tokens
        9
      )

      const raydiumLiquidity = await Liquidity.makeWithoutConnection(raydiumMarket)
      const raydiumQuote = raydiumLiquidity.computeAmountOut(
        new TokenAmount(new PublicKey(fromToken.mint), BigInt(parseFloat(amount) * 1e9)),
        new PublicKey(toToken.mint)
      )

      setRaydiumPrice(parseFloat(raydiumQuote.amount.toString()) / 1e9)

    } catch (error) {
      console.error('Error fetching prices:', error)
      toast.error('Failed to fetch prices. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (fromToken && toToken && amount) {
      fetchPrices()
    }
  }, [fromToken, toToken, amount])

  const handleTrade = async () => {
    if (!fromToken || !toToken || !amount || !jupiterPrice || !raydiumPrice) return

    setIsLoading(true)
    try {
      const { bestPrice, source } = await analyzePrice(jupiterPrice, raydiumPrice)

      // In a real scenario, you would execute the trade here using the chosen DEX (Jupiter or Raydium)
      // For this example, we'll just show a success message

      toast.success(`Trade executed successfully on ${source}! Received ${bestPrice} ${toToken.symbol}`)
    } catch (error) {
      console.error('Error executing trade:', error)
      toast.error('Failed to execute trade. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6" />
          <span>AI Trading Agent</span>
        </CardTitle>
        <CardDescription>Execute trades with AI-powered price analysis across Jupiter and Raydium</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="fromToken">From Token</Label>
            <Select onValueChange={(value) => setFromToken(tokenList.find(token => token.mint === value) || null)}>
              <SelectTrigger id="fromToken">
                <SelectValue placeholder="Select token">
                  {fromToken && (
                    <div className="flex items-center">
                      <Image src={fromToken.iconUrl || "/placeholder.svg"} alt={fromToken.name} width={24} height={24} className="mr-2" />
                      {fromToken.symbol}
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {tokenList.map((token) => (
                  <SelectItem key={token.mint} value={token.mint}>
                    <div className="flex items-center">
                      <Image src={token.iconUrl || "/placeholder.svg"} alt={token.name} width={24} height={24} className="mr-2" />
                      {token.symbol}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="toToken">To Token</Label>
            <Select onValueChange={(value) => setToToken(tokenList.find(token => token.mint === value) || null)}>
              <SelectTrigger id="toToken">
                <SelectValue placeholder="Select token">
                  {toToken && (
                    <div className="flex items-center">
                      <Image src={toToken.iconUrl || "/placeholder.svg"} alt={toToken.name} width={24} height={24} className="mr-2" />
                      {toToken.symbol}
                    </div>
                  )}
                </SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                {tokenList.map((token) => (
                  <SelectItem key={token.mint} value={token.mint}>
                    <div className="flex items-center">
                      <Image src={token.iconUrl || "/placeholder.svg"} alt={token.name} width={24} height={24} className="mr-2" />
                      {token.symbol}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="amount">Amount</Label>
            <Input 
              id="amount" 
              placeholder="Enter amount" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              step="0.000000001"
            />
          </div>
        </form>
        {jupiterPrice !== null && raydiumPrice !== null && (
          <div className="mt-4 space-y-2">
            <p>Jupiter Price: {jupiterPrice.toFixed(6)} {toToken?.symbol}</p>
            <p>Raydium Price: {raydiumPrice.toFixed(6)} {toToken?.symbol}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button onClick={fetchPrices} disabled={isLoading || !fromToken || !toToken || !amount} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh Prices
        </Button>
        <Button onClick={handleTrade} disabled={isLoading || !fromToken || !toToken || !amount || jupiterPrice === null || raydiumPrice === null} className="w-full">
          {isLoading ? 'Executing Trade...' : 'Execute AI-Powered Trade'}
        </Button>
      </CardFooter>
    </Card>
  )
}

