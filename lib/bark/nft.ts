import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import {
  createNft,
  mplTokenMetadata,
  fetchDigitalAsset,
  TokenStandard,
  burn,
  updateV1,
} from "@metaplex-foundation/mpl-token-metadata"
import { createSignerFromKeypair, signerIdentity, generateSigner, publicKey, some } from "@metaplex-foundation/umi"
import { base58 } from "@metaplex-foundation/umi/serializers"
import { NFTStorage, File } from "nft.storage"

// Initialize Umi
const umi = createUmi(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!).use(mplTokenMetadata())

// Initialize NFT.storage client
const nftStorage = new NFTStorage({ token: process.env.NFT_STORAGE_API_KEY! })

// BARK NFT collection address
const BARK_NFT_COLLECTION = publicKey("BARKkeAwhTuFzcLHX4DjotRsmjXQ1MshGrZbn1CUQqMo")

export interface BarkNFTMetadata {
  name: string
  symbol: string
  description: string
  image: File
  attributes: Array<{ trait_type: string; value: string }>
}

export async function mintBarkNFT(
  recipientWallet: string,
  metadata: BarkNFTMetadata,
): Promise<{ mintAddress: string; transactionSignature: string }> {
  try {
    // Upload image to IPFS
    const imageFile = new File([metadata.image], metadata.image.name, { type: metadata.image.type })
    const imageCid = await nftStorage.storeBlob(imageFile)
    const imageUrl = `https://ipfs.io/ipfs/${imageCid}`

    // Create NFT metadata
    const { uri } = await nftStorage.store({
      name: metadata.name,
      symbol: metadata.symbol,
      description: metadata.description,
      image: imageUrl,
      attributes: metadata.attributes,
    })

    // Generate a new mint signer
    const mint = generateSigner(umi)

    // Mint NFT
    const { signature } = await createNft(umi, {
      mint,
      name: metadata.name,
      symbol: metadata.symbol,
      uri,
      sellerFeeBasisPoints: 0,
      collection: some(BARK_NFT_COLLECTION),
      tokenStandard: TokenStandard.NonFungible,
      creators: some([{ address: umi.identity.publicKey, share: 100, verified: true }]),
    }).sendAndConfirm(umi)

    return {
      mintAddress: base58.serialize(mint.publicKey),
      transactionSignature: base58.serialize(signature),
    }
  } catch (error) {
    console.error("Error minting BARK NFT:", error)
    throw new Error("Failed to mint BARK NFT")
  }
}

export async function getBarkNFTMetadata(mintAddress: string) {
  try {
    const asset = await fetchDigitalAsset(umi, publicKey(mintAddress))
    return asset
  } catch (error) {
    console.error("Error fetching BARK NFT metadata:", error)
    throw new Error("Failed to fetch BARK NFT metadata")
  }
}

export async function getBarkNFTsForWallet(walletAddress: string) {
  try {
    const assets = await umi.rpc.getAssetsByOwner({ owner: publicKey(walletAddress) })
    return assets.items.filter((asset) =>
      asset.grouping.find(
        (g) => g.group_key === "collection" && g.group_value === base58.serialize(BARK_NFT_COLLECTION),
      ),
    )
  } catch (error) {
    console.error("Error fetching BARK NFTs for wallet:", error)
    throw new Error("Failed to fetch BARK NFTs for wallet")
  }
}

export async function burnBarkNFT(owner: string, mintAddress: string): Promise<string> {
  try {
    const ownerPublicKey = publicKey(owner)
    const mintPublicKey = publicKey(mintAddress)

    const { signature } = await burn(umi, {
      mint: mintPublicKey,
      owner: ownerPublicKey,
    }).sendAndConfirm(umi)

    return base58.serialize(signature)
  } catch (error) {
    console.error("Error burning BARK NFT:", error)
    throw new Error("Failed to burn BARK NFT")
  }
}

export async function updateBarkNFTMetadata(
  mintAddress: string,
  newMetadata: Partial<BarkNFTMetadata>,
): Promise<string> {
  try {
    const mintPublicKey = publicKey(mintAddress)
    const asset = await fetchDigitalAsset(umi, mintPublicKey)

    // Upload new image to IPFS if provided
    let imageUrl = asset.metadata?.image ?? ""
    if (newMetadata.image) {
      const imageFile = new File([newMetadata.image], newMetadata.image.name, { type: newMetadata.image.type })
      const imageCid = await nftStorage.storeBlob(imageFile)
      imageUrl = `https://ipfs.io/ipfs/${imageCid}`
    }

    // Update metadata
    const { uri } = await nftStorage.store({
      name: newMetadata.name ?? asset.metadata?.name,
      symbol: newMetadata.symbol ?? asset.metadata?.symbol,
      description: newMetadata.description ?? asset.metadata?.description,
      image: imageUrl,
      attributes: newMetadata.attributes ?? asset.metadata?.attributes,
    })

    // Update NFT
    const { signature } = await updateV1(umi, {
      mint: mintPublicKey,
      name: some(newMetadata.name ?? asset.metadata?.name ?? ""),
      symbol: some(newMetadata.symbol ?? asset.metadata?.symbol ?? ""),
      uri: some(uri),
    }).sendAndConfirm(umi)

    return base58.serialize(signature)
  } catch (error) {
    console.error("Error updating BARK NFT metadata:", error)
    throw new Error("Failed to update BARK NFT metadata")
  }
}

// Helper function to set the signer (to be used in production)
export function setUmiSigner(secretKey: Uint8Array) {
  const keypair = umi.eddsa.createKeypairFromSecretKey(secretKey)
  const signer = createSignerFromKeypair(umi, keypair)
  umi.use(signerIdentity(signer))
}

