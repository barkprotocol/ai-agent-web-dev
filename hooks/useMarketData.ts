import useSWR from "swr"
import type { MarketData } from "@/types/market-data"

export function useMarketData() {
  const { data, error } = useSWR<MarketData>("/api/market-data")

  return {
    marketData: data,
    isLoading: !error && !data,
    error: error ? "Failed to fetch market data" : null,
  }
}

