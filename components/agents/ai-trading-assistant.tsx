'use client'

import React, { useState } from 'react'
import { TrendingUp, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const tokens = ['SOL', 'USDC', 'BONK', 'BARK']

export function TradingAssistant() {
  const [token, setToken] = useState<string | undefined>()
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGetAdvice = async () => {
    if (!token || !amount) return

    setIsLoading(true)
    try {
      // In a real implementation, this would call an AI service to get trading advice
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      toast.success('Trading advice generated!')
    } catch (error) {
      console.error('Error getting trading advice:', error)
      toast.error('Failed to get trading advice. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-6 w-6" />
          <span>Trading Assistant</span>
        </CardTitle>
        <CardDescription>Get AI-powered trading advice for Solana tokens</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="token">Token</Label>
            <Select onValueChange={setToken}>
              <SelectTrigger id="token">
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent position="popper">
                {tokens.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
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
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleGetAdvice} 
          disabled={isLoading || !token || !amount} 
          className="w-full"
        >
          {isLoading ? 'Generating Advice...' : 'Get Trading Advice'}
          <RefreshCw className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

