"use client"

import React, { useState, useCallback } from "react"
import { JupiterAPI, type QuoteRequest, type QuoteResponse } from "@/lib/jupiter-api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
const SOL_MINT = "So11111111111111111111111111111111111111112"

export default function JupiterSwapWidget() {
  const [amount, setAmount] = useState("")
  const [quote, setQuote] = useState<QuoteResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGetQuote = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const quoteRequest: QuoteRequest = {
        inputMint: USDC_MINT,
        outputMint: SOL_MINT,
        amount: Number.parseFloat(amount) * 1e6, // Convert to USDC decimals
      }
      const quoteResponse = await JupiterAPI.getQuote(quoteRequest)
      setQuote(quoteResponse)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }, [amount])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Jupiter Swap Widget</CardTitle>
        <CardDescription>Get a quote for swapping USDC to SOL</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">USDC Amount</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter USDC amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {quote && (
            <div className="space-y-2">
              <p>You will receive approximately:</p>
              <p className="text-2xl font-bold">{(quote.outAmount / 1e9).toFixed(4)} SOL</p>
              <p>Price Impact: {(quote.priceImpactPct * 100).toFixed(2)}%</p>
            </div>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleGetQuote} disabled={loading || !amount}>
          {loading ? "Loading..." : "Get Quote"}
        </Button>
      </CardFooter>
    </Card>
  )
}

