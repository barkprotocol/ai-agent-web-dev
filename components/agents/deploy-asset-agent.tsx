'use client'

import React, { useState } from 'react'
import { Rocket, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from 'sonner'
import { initializeSolanaAgent } from '@/app/utils/solana-agent'
import { deployNFTCollection } from '@/app/utils/deploy-nft-collection'
import { deployGamingToken, deployCustomToken } from '@/app/utils/deploy-spl-token'

type AssetType = 'nft' | 'compressedNft' | 'splToken'

interface TokenMetadata {
  name: string
  symbol: string
  uri: string
  decimals: number
  initialSupply: number
}

export function DeployAssetAgent() {
  const [assetType, setAssetType] = useState<AssetType>('nft')
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [uri, setUri] = useState('')
  const [decimals, setDecimals] = useState('9')
  const [initialSupply, setInitialSupply] = useState('1000000')
  const [isLoading, setIsLoading] = useState(false)

  const handleDeploy = async () => {
    setIsLoading(true)
    try {
      const agent = initializeSolanaAgent()

      let result
      switch (assetType) {
        case 'nft':
          result = await deployNFTCollection(agent, {
            name,
            uri,
            royaltyBasisPoints: 500 // 5% royalty as default
          })
          if (result.status === 'success') {
            toast.success(`NFT Collection "${name}" deployed successfully!`)
          } else {
            toast.error(`Failed to deploy NFT Collection: ${result.message}`)
          }
          break
        case 'compressedNft':
          // Implement compressed NFT deployment logic here
          toast.info('Compressed NFT deployment not yet implemented')
          break
        case 'splToken':
          const tokenMetadata: TokenMetadata = {
            name,
            symbol,
            uri,
            decimals: parseInt(decimals),
            initialSupply: parseInt(initialSupply)
          }
          const mintAddress = await deployCustomToken(agent, tokenMetadata)
          toast.success(`SPL Token "${name}" deployed successfully! Mint address: ${mintAddress}`)
          break
      }
    } catch (error) {
      console.error('Error deploying asset:', error)
      toast.error('Failed to deploy asset. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Rocket className="h-6 w-6" />
          <span>Deploy Asset Agent</span>
        </CardTitle>
        <CardDescription>Deploy NFTs, Compressed NFTs, or SPL Tokens on Solana</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="assetType">Asset Type</Label>
            <Select onValueChange={(value) => setAssetType(value as AssetType)}>
              <SelectTrigger id="assetType">
                <SelectValue placeholder="Select asset type" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="nft">NFT Collection</SelectItem>
                <SelectItem value="compressedNft">Compressed NFT</SelectItem>
                <SelectItem value="splToken">SPL Token</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Asset name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          {assetType === 'splToken' && (
            <>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="symbol">Symbol</Label>
                <Input id="symbol" placeholder="Token symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="decimals">Decimals</Label>
                <Input id="decimals" type="number" placeholder="9" value={decimals} onChange={(e) => setDecimals(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="initialSupply">Initial Supply</Label>
                <Input id="initialSupply" type="number" placeholder="1000000" value={initialSupply} onChange={(e) => setInitialSupply(e.target.value)} />
              </div>
            </>
          )}
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="uri">Metadata URI</Label>
            <Input id="uri" placeholder="https://arweave.net/..." value={uri} onChange={(e) => setUri(e.target.value)} />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={handleDeploy} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Deploying...
            </>
          ) : (
            'Deploy Asset'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

