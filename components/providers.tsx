"use client"

import { ThemeProvider } from "next-themes"
import { WalletContextProvider } from "@/components/wallet-context-provider"
import { SwrProvider } from "@/lib/swr-config"
import type React from "react" // Added import for React

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <WalletContextProvider>
        <SwrProvider>{children}</SwrProvider>
      </WalletContextProvider>
    </ThemeProvider>
  )
}

