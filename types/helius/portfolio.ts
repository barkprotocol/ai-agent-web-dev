export interface FungibleToken {
  address: string
  symbol: string
  amount: number
  value: number
}

export interface NonFungibleToken {
  address: string
  value: number
}

export interface WalletPortfolio {
  address: string
  fungibleTokens: FungibleToken[]
  nonFungibleTokens: NonFungibleToken[]
}

