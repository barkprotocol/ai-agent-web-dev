'use client'

import React, { useState } from 'react'
import { Wallet, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { initializeSolanaAgentKit } from '@/app/utils/solana-agent'

export function WalletManager() {
  const [walletAddress, setWalletAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyzeWallet = async () => {
    if (!walletAddress) return

    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()
      // In a real implementation, this would call an AI service to analyze the wallet
      // using the Solana agent
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      toast.success('Wallet analysis complete!')
    } catch (error) {
      console.error('Error analyzing wallet:', error)
      toast.error('Failed to analyze wallet. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wallet className="h-6 w-6" />
          <span>Wallet Manager</span>
        </CardTitle>
        <CardDescription>Analyze and manage your Solana wallet</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="walletAddress">Wallet Address</Label>
            <Input
              id="walletAddress"
              placeholder="Enter Solana wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAnalyzeWallet} 
          disabled={isLoading || !walletAddress} 
          className="w-full"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Wallet'}
          <RefreshCw className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

