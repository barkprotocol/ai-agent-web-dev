import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono, Inter, Oswald } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/provider-theme"
import { WalletContextProvider } from "@/components/wallet-context-provider"
import { PrivyAuthProvider } from "@/components/privy-provider"
import { Header } from "@/components/ui/layout/header"
import { Footer } from "@/components/ui/layout/footer"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })

export const metadata: Metadata = {
  title: "BARK | AI Agent for Solana",
  description: "AI-powered copilot for Solana blockchain interactions",
  keywords: ["BARK", "AI", "Solana", "Blockchain", "DeFi"],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geist.variable,
          geistMono.variable,
          inter.variable,
          oswald.variable,
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <WalletContextProvider>
            <PrivyAuthProvider>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </PrivyAuthProvider>
          </WalletContextProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

