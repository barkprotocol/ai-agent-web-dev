'use client'

import React, { useState } from 'react'
import { Image, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { initializeSolanaAgentKit } from '@/app/utils/solana-agent'

export function NFTCurator() {
  const [collectionAddress, setCollectionAddress] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyzeCollection = async () => {
    if (!collectionAddress) return

    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()
      // In a real implementation, this would call an AI service to analyze the NFT collection
      // using the Solana agent
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      toast.success('NFT collection analysis complete!')
    } catch (error) {
      console.error('Error analyzing NFT collection:', error)
      toast.error('Failed to analyze NFT collection. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Image className="h-6 w-6" />
          <span>NFT Curator</span>
        </CardTitle>
        <CardDescription>Discover and analyze trending NFT collections on Solana</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="collectionAddress">Collection Address</Label>
            <Input
              id="collectionAddress"
              placeholder="Enter NFT collection address"
              value={collectionAddress}
              onChange={(e) => setCollectionAddress(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAnalyzeCollection} 
          disabled={isLoading || !collectionAddress} 
          className="w-full"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Collection'}
          <Search className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

