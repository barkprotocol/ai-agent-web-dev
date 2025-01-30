import { SWRConfig } from "swr"
import type { ReactNode } from "react"

const swrConfig = {
  fetcher: (url: string) => fetch(url).then((res) => res.json()),
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  refreshInterval: 60000, // Refresh every minute
}

export function SwrProvider({ children }: { children: ReactNode }) {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>
}

