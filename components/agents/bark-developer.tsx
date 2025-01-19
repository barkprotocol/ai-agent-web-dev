'use client'

import React, { useState } from 'react'
import { Code, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { initializeSolanaAgentKit } from '@/app/utils/solana-agent'

export function BarkDeveloper() {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyzeCode = async () => {
    if (!code) return

    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()
      // In a real implementation, this would call an AI service to analyze the Solana code
      // using the Solana agent
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      toast.success('Code analysis complete!')
    } catch (error) {
      console.error('Error analyzing code:', error)
      toast.error('Failed to analyze code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Code className="h-6 w-6" />
          <span>BARK Developer</span>
        </CardTitle>
        <CardDescription>Analyze and optimize your Solana smart contracts</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="code">Solana Code</Label>
            <Textarea
              id="code"
              placeholder="Paste your Solana code here"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={10}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAnalyzeCode} 
          disabled={isLoading || !code} 
          className="w-full"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Code'}
          <Play className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

