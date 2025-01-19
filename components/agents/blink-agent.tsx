'use client'

import React, { useState } from 'react'
import { Zap, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { toast } from 'sonner'
import { initializeSolanaAgentKit } from '@/app/utils/solana-agent'

const actionTypes = [
  { value: 'swap', label: 'Token Swap' },
  { value: 'stake', label: 'Stake Tokens' },
  { value: 'unstake', label: 'Unstake Tokens' },
  { value: 'claim', label: 'Claim Rewards' },
]

export function BlinkAgent() {
  const [actionType, setActionType] = useState<string>('')
  const [amount, setAmount] = useState('')
  const [isAutoMode, setIsAutoMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAction = async () => {
    if (!actionType || !amount) return

    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()
      // In a real implementation, this would execute the appropriate action
      // using the Solana agent based on the actionType
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulating API call
      
      toast.success(`Blink ${actionType} action executed successfully!`)
    } catch (error) {
      console.error(`Error executing ${actionType} action:`, error)
      toast.error(`Failed to execute ${actionType} action. Please try again.`)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleAutoMode = (checked: boolean) => {
    setIsAutoMode(checked)
    if (checked) {
      toast.info('Auto mode enabled. Blink Agent will execute actions automatically based on predefined conditions.')
    } else {
      toast.info('Auto mode disabled. You will need to manually execute actions.')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="h-6 w-6" />
          <span>Blink Agent</span>
        </CardTitle>
        <CardDescription>Execute rapid, automated actions on Solana</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="actionType">Action Type</Label>
            <Select onValueChange={setActionType}>
              <SelectTrigger id="actionType">
                <SelectValue placeholder="Select action" />
              </SelectTrigger>
              <SelectContent position="popper">
                {actionTypes.map((action) => (
                  <SelectItem key={action.value} value={action.value}>
                    {action.label}
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
          <div className="flex items-center space-x-2">
            <Switch
              id="auto-mode"
              checked={isAutoMode}
              onCheckedChange={toggleAutoMode}
            />
            <Label htmlFor="auto-mode">Enable Auto Mode</Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button 
          onClick={handleAction} 
          disabled={isLoading || !actionType || !amount || isAutoMode} 
          className="w-full"
        >
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Executing...
            </>
          ) : (
            'Execute Blink Action'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

