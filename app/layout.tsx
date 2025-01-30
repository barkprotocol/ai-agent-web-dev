"use client"

import type { ReactNode } from "react"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/provider-theme"
import { WalletContextProvider } from "@/components/wallet-context-provider"
import { Header } from "@/components/ui/layout/header"
import { Footer } from "@/components/ui/layout/footer"
import ErrorBoundary from "@/components/error-boundary"
import { SwrProvider } from "@/lib/swr-config"
import "@/app/styles/globals.css"
import { Providers } from "@/components/providers"
import { cn } from "@/lib/utils"
import type { Metadata } from "next" // Import Metadata type

// Define metadata outside the component
const metadata: Metadata = {
  title: "BARK | AI Agent for Solana",
  description: "AI-powered copilot for Solana blockchain interactions",
  keywords: ["BARK", "AI", "Solana", "Blockchain", "DeFi"],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ErrorBoundary>
          <Providers>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <WalletContextProvider>
                <SwrProvider>
                  <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">{children}</main>
                    <Footer />
                  </div>
                  <Toaster />
                </SwrProvider>
              </WalletContextProvider>
            </ThemeProvider>
          </Providers>
        </ErrorBoundary>
      </body>
    </html>
  )
}



import './globals.css'