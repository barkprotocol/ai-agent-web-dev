"use client"

import { useState } from "react"
import Image from "next/image"
import { Connection, PublicKey, Keypair } from "@solana/web3.js"
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js"
import { useWallet } from "@solana/wallet-adapter-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata"

// Assuming we have an RPC_ENDPOINT defined in our environment variables
const RPC_ENDPOINT = process.env.NEXT_PUBLIC_SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com"

interface NFTMetadata {
  name: string
  symbol: string
  description: string
  image: string
  attributes?: { trait_type: string; value: string }[]
}

const NFTDisplay = ({ metadata }: { metadata: NFTMetadata }) => (
  <Card className="w-full max-w-md mx-auto">
    <CardHeader>
      <CardTitle>{metadata.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="aspect-square relative mb-4">
        <Image
          src={metadata.image || "/placeholder.svg?height=200&width=200"}
          alt={metadata.name}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <p className="text-sm text-gray-500 mb-2">{metadata.description}</p>
      {metadata.attributes && (
        <div className="grid grid-cols-2 gap-2">
          {metadata.attributes.map((attr, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded">
              <p className="text-xs font-bold">{attr.trait_type}</p>
              <p className="text-sm">{attr.value}</p>
            </div>
          ))}
        </div>
      )}
    </CardContent>
  </Card>
)

const NFTMinter = () => {
  const [name, setName] = useState("")
  const [symbol, setSymbol] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const wallet = useWallet()
  const [minting, setMinting] = useState(false)

  const mintNFT = async () => {
    if (!wallet.publicKey || !wallet.signTransaction || !wallet.signAllTransactions) {
      console.error("Wallet not connected")
      return
    }

    setMinting(true)

    try {
      const connection = new Connection(RPC_ENDPOINT)
      const metaplex = Metaplex.make(connection).use(keypairIdentity(Keypair.generate()))

      const { nft } = await metaplex.nfts().create({
        uri: image,
        name: name,
        sellerFeeBasisPoints: 500, // Represents 5.00%.
        symbol: symbol,
        creators: [
          {
            address: wallet.publicKey,
            share: 100,
          },
        ],
      })

      console.log("NFT created:", nft)
      // You might want to update the UI or show a success message here
    } catch (error) {
      console.error("Error minting NFT:", error)
      // Show an error message to the user
    } finally {
      setMinting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Mint a New NFT</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="NFT Name" value={name} onChange={(e) => setName(e.target.value)} />
          <Input placeholder="NFT Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
          <Input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          <Input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
          <Button onClick={mintNFT} disabled={!wallet.connected || minting}>
            {minting ? "Minting..." : "Mint NFT"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export const metaplexTools = {
  getNFTMetadata: {
    displayName: "🖼️ Get NFT Metadata",
    description: "Fetch metadata for a Solana NFT using its mint address.",
    parameters: z.object({
      mintAddress: z.string().describe("The mint address of the NFT"),
    }),
    execute: async ({ mintAddress }: { mintAddress: string }) => {
      try {
        const connection = new Connection(RPC_ENDPOINT)
        const metaplex = Metaplex.make(connection)
        const metadataPDA = await mplTokenMetadata.pdas().metadata({ mint: new PublicKey(mintAddress) })
        const metadata = await metaplex.rpc().getAccount(metadataPDA)
        const metadataDecoded = mplTokenMetadata.Metadata.from(metadata.data)
        const { data } = await fetch(metadataDecoded.data.uri)

        if (!data) {
          throw new Error("NFT metadata not found")
        }

        return {
          suppressFollowUp: true,
          data: data as NFTMetadata,
        }
      } catch (error) {
        throw new Error(`Failed to fetch NFT metadata: ${error instanceof Error ? error.message : "Unknown error"}`)
      }
    },
    render: (raw: unknown) => {
      const result = (raw as { data: NFTMetadata }).data
      return <NFTDisplay metadata={result} />
    },
  },

  mintNFT: {
    displayName: "🎨 Mint NFT",
    description: "Mint a new NFT on Solana using Metaplex.",
    parameters: z.object({}), // No parameters needed as we'll use a form in the UI
    execute: async () => {
      // This is just a placeholder. The actual minting will happen in the NFTMinter component.
      return {
        suppressFollowUp: true,
        data: null,
      }
    },
    render: () => {
      return <NFTMinter />
    },
  },
}

