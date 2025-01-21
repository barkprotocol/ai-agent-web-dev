import { PublicKey } from "@solana/web3.js"
import { throttle } from "@/lib/utils"

// Constants
export const JUPITER_API_URL = "https://price.jup.ag/v4"
export const JUPITER_QUOTE_API = "https://quote-api.jup.ag/v4"
export const DEFAULT_SLIPPAGE_BPS = 50 // 0.5%

// Rate limiting
const RATE_LIMIT = 60 // requests per minute
const rateLimiter = throttle((fn: Function) => fn(), 60000 / RATE_LIMIT)

// Types
export interface TokenInfo {
  address: string
  chainId: number
  decimals: number
  name: string
  symbol: string
  logoURI?: string
  tags?: string[]
  extensions?: Record<string, unknown>
}

export interface PriceResponse {
  data: {
    [key: string]: {
      id: string
      mintSymbol: string
      vsToken: string
      vsTokenSymbol: string
      price: number
    }
  }
  timeTaken: number
}

export interface QuoteRequest {
  inputMint: string
  outputMint: string
  amount: number
  slippageBps?: number
  feeBps?: number
  onlyDirectRoutes?: boolean
  asLegacyTransaction?: boolean
}

export interface QuoteResponse {
  inputMint: string
  outputMint: string
  inAmount: number
  outAmount: number
  otherAmountThreshold: number
  swapMode: "ExactIn" | "ExactOut"
  slippageBps: number
  priceImpactPct: number
  routePlan: RoutePlan[]
  contextSlot: number
  timeTaken: number
}

export interface RoutePlan {
  swapInfo: {
    ammKey: string
    label: string
    inputMint: string
    outputMint: string
    inAmount: number
    outAmount: number
    feeAmount: number
    feeMint: string
  }
  percent: number
}

export class JupiterAPI {
  private static async fetchWithRateLimit(url: string, init?: RequestInit): Promise<Response> {
    return new Promise((resolve, reject) => {
      rateLimiter(async () => {
        try {
          const response = await fetch(url, {
            ...init,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "User-Agent": "Bark-AI-Agent/1.0",
              ...init?.headers,
            },
          })
          if (!response.ok) {
            throw new Error(`Jupiter API error: ${response.statusText}`)
          }
          resolve(response)
        } catch (error) {
          reject(error)
        }
      })
    })
  }

  static async getPrice(inputMint: string, outputMint: string): Promise<number> {
    try {
      const url = `${JUPITER_API_URL}/price?ids=${inputMint}&vsToken=${outputMint}`
      const response = await this.fetchWithRateLimit(url)
      const data = (await response.json()) as PriceResponse
      const price = data.data[inputMint]?.price

      if (typeof price !== "number") {
        throw new Error("Invalid price data received from Jupiter API")
      }

      return price
    } catch (error) {
      console.error("Jupiter get price error:", error)
      throw new JupiterAPIError("Failed to get token price", error as Error)
    }
  }

  static async getQuote(params: QuoteRequest): Promise<QuoteResponse> {
    try {
      if (!params.inputMint || !params.outputMint || !params.amount) {
        throw new Error("Missing required parameters for quote")
      }

      try {
        new PublicKey(params.inputMint)
        new PublicKey(params.outputMint)
      } catch (error) {
        throw new Error("Invalid token mint address")
      }

      const queryParams = new URLSearchParams({
        inputMint: params.inputMint,
        outputMint: params.outputMint,
        amount: params.amount.toString(),
        slippageBps: (params.slippageBps ?? DEFAULT_SLIPPAGE_BPS).toString(),
        feeBps: (params.feeBps ?? 0).toString(),
        onlyDirectRoutes: (params.onlyDirectRoutes ?? false).toString(),
        asLegacyTransaction: (params.asLegacyTransaction ?? false).toString(),
      })

      const url = `${JUPITER_QUOTE_API}/quote?${queryParams}`
      const response = await this.fetchWithRateLimit(url)
      const data = (await response.json()) as QuoteResponse
      return data
    } catch (error) {
      console.error("Jupiter get quote error:", error)
      throw new JupiterAPIError("Failed to get swap quote", error as Error)
    }
  }

  static calculateMinimumOutput(amount: number, slippageBps: number = DEFAULT_SLIPPAGE_BPS): number {
    return amount * (1 - slippageBps / 10000)
  }

  static formatSwapUrl(inputMint: string, outputMint: string, inputAmount?: number): string {
    const baseUrl = "https://jup.ag/swap"
    const path = `${inputMint}/${outputMint}`
    return inputAmount ? `${baseUrl}/${path}?inputAmount=${inputAmount}` : `${baseUrl}/${path}`
  }
}

export class JupiterAPIError extends Error {
  public readonly originalError: Error | null

  constructor(message: string, originalError?: Error) {
    super(message)
    this.name = "JupiterAPIError"
    this.originalError = originalError || null
  }
}

export function calculatePriceImpact(quoteResponse: QuoteResponse): number {
  return Math.abs(quoteResponse.priceImpactPct * 100)
}

export function formatJupiterAmount(amount: number, decimals: number): string {
  return (amount / Math.pow(10, decimals)).toFixed(decimals)
}

export function parseJupiterAmount(amount: string, decimals: number): number {
  return Math.floor(Number.parseFloat(amount) * Math.pow(10, decimals))
}

