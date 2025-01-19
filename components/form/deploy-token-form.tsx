'use client'

import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'
import { SolanaAgentKit } from 'solana-agent-kit'
import { initializeSolanaAgentKit } from '@/app/utils/deploy-spl-token'
import { mintGamingTokens, mintCustomTokens } from '@/app/mint/mint-token'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Loader2 } from 'lucide-react'

interface FormInputs {
  tokenType: 'gaming' | 'custom'
  name: string
  symbol: string
  uri: string
  decimals: number
  initialSupply: number
  mintAmount: number
}

export function DeployTokenForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormInputs>()
  const tokenType = watch('tokenType')

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsLoading(true)
    try {
      const agent = initializeSolanaAgentKit()

      let signature: string

      if (data.tokenType === 'gaming') {
        signature = await mintGamingTokens(agent, data.mintAmount)
      } else {
        const tokenMetadata = {
          name: data.name,
          symbol: data.symbol,
          uri: data.uri,
          decimals: data.decimals,
          initialSupply: data.initialSupply
        }
        signature = await mintCustomTokens(agent, tokenMetadata, data.mintAmount)
      }

      toast.success(`Token deployed and minted successfully! Signature: ${signature}`)
    } catch (error) {
      console.error('Error deploying token:', error)
      toast.error('Failed to deploy token. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <RadioGroup defaultValue="gaming" className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="gaming" id="gaming" {...register('tokenType')} />
          <Label htmlFor="gaming">Gaming Token</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="custom" id="custom" {...register('tokenType')} />
          <Label htmlFor="custom">Custom Token</Label>
        </div>
      </RadioGroup>

      {tokenType === 'custom' && (
        <>
          <div>
            <Label htmlFor="name">Token Name</Label>
            <Input
              id="name"
              {...register('name', { required: 'Token name is required' })}
              placeholder="My Custom Token"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <Label htmlFor="symbol">Token Symbol</Label>
            <Input
              id="symbol"
              {...register('symbol', { required: 'Token symbol is required' })}
              placeholder="MCT"
            />
            {errors.symbol && <p className="text-red-500 text-sm mt-1">{errors.symbol.message}</p>}
          </div>

          <div>
            <Label htmlFor="uri">Metadata URI</Label>
            <Input
              id="uri"
              {...register('uri', { required: 'Metadata URI is required' })}
              placeholder="https://example.com/token-metadata.json"
            />
            {errors.uri && <p className="text-red-500 text-sm mt-1">{errors.uri.message}</p>}
          </div>

          <div>
            <Label htmlFor="decimals">Decimals</Label>
            <Input
              id="decimals"
              type="number"
              {...register('decimals', { required: 'Decimals are required', min: 0, max: 9 })}
              placeholder="9"
            />
            {errors.decimals && <p className="text-red-500 text-sm mt-1">{errors.decimals.message}</p>}
          </div>

          <div>
            <Label htmlFor="initialSupply">Initial Supply</Label>
            <Input
              id="initialSupply"
              type="number"
              {...register('initialSupply', { required: 'Initial supply is required', min: 1 })}
              placeholder="1000000"
            />
            {errors.initialSupply && <p className="text-red-500 text-sm mt-1">{errors.initialSupply.message}</p>}
          </div>
        </>
      )}

      <div>
        <Label htmlFor="mintAmount">Amount to Mint</Label>
        <Input
          id="mintAmount"
          type="number"
          {...register('mintAmount', { required: 'Mint amount is required', min: 1 })}
          placeholder="1000"
        />
        {errors.mintAmount && <p className="text-red-500 text-sm mt-1">{errors.mintAmount.message}</p>}
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Deploying...
          </>
        ) : (
          'Deploy Token'
        )}
      </Button>
    </form>
  )
}

