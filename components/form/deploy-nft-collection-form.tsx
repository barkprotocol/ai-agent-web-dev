'use client'

import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'sonner'
import { SolanaAgentKit } from 'solana-agent-kit'
import { deployNFTCollection } from '@/app/ai/deployNFTCollection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'

interface FormInputs {
  name: string
  symbol: string
  uri: string
  royaltyBasisPoints: number
}

export function DeployNFTCollectionForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsLoading(true)
    try {
      const agent = new SolanaAgentKit() // Initialize with appropriate parameters
      const result = await deployNFTCollection(agent, {
        name: data.name,
        uri: data.uri,
        royaltyBasisPoints: data.royaltyBasisPoints
      })

      if (result.status === 'success') {
        toast.success(`Collection "${result.name}" deployed successfully!`)
        console.log(`Collection address: ${result.collectionAddress}`)
      } else {
        toast.error(`Deployment failed: ${result.message}`)
      }
    } catch (error) {
      console.error('Error deploying NFT collection:', error)
      toast.error('Failed to deploy NFT collection. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Collection Name</Label>
        <Input
          id="name"
          {...register('name', { required: 'Collection name is required' })}
          placeholder="My Awesome NFT Collection"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="symbol">Collection Symbol</Label>
        <Input
          id="symbol"
          {...register('symbol', { required: 'Collection symbol is required' })}
          placeholder="MANC"
        />
        {errors.symbol && <p className="text-red-500 text-sm mt-1">{errors.symbol.message}</p>}
      </div>

      <div>
        <Label htmlFor="uri">Metadata URI</Label>
        <Input
          id="uri"
          {...register('uri', { required: 'Metadata URI is required' })}
          placeholder="https://arweave.net/collection-metadata.json"
        />
        {errors.uri && <p className="text-red-500 text-sm mt-1">{errors.uri.message}</p>}
      </div>

      <div>
        <Label htmlFor="royaltyBasisPoints">Royalty Percentage</Label>
        <Input
          id="royaltyBasisPoints"
          type="number"
          {...register('royaltyBasisPoints', { 
            required: 'Royalty percentage is required', 
            min: { value: 0, message: 'Royalty must be at least 0%' },
            max: { value: 100, message: 'Royalty cannot exceed 100%' }
          })}
          placeholder="5"
        />
        {errors.royaltyBasisPoints && <p className="text-red-500 text-sm mt-1">{errors.royaltyBasisPoints.message}</p>}
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Deploying...
          </>
        ) : (
          'Deploy NFT Collection'
        )}
      </Button>
    </form>
  )
}

