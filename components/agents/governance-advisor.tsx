'use client'

import React, { useState } from 'react'
import { LandPlot, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { initializeSolanaAgentKit } from '@/app/utils/solana-agent'

export function GovernanceAdvisor() {
  const [proposal, setProposal] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyzeProposal = async () => {
    if (!proposal) return

    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()
      // In a real implementation, this would call an AI service to analyze the proposal
      // using the Solana agent
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      toast.success('Proposal analysis complete!')
    } catch (error) {
      console.error('Error analyzing proposal:', error)
      toast.error('Failed to analyze proposal. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <LandPlot className="h-6 w-6" />
          <span>Governance Advisor</span>
        </CardTitle>
        <CardDescription>Analyze Solana ecosystem governance proposals</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="proposal">Proposal URL or ID</Label>
            <Input
              id="proposal"
              placeholder="Enter proposal URL or ID"
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAnalyzeProposal} 
          disabled={isLoading || !proposal} 
          className="w-full"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Proposal'}
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

