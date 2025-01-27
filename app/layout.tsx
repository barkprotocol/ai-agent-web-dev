import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono, Inter } from "next/font/google"
import localFont from "next/font/local"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/provider-theme"
import { WalletContextProvider } from "@/components/wallet-context-provider"
import AuthProviders from "@/components/provider-auth"
import { Header } from "@/components/ui/layout/header"
import { Footer } from "@/components/ui/layout/footer"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import "@/styles/wallet-adapter.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Load Oswald locally as a fallback
const oswaldLocal = localFont({
  src: "../public/fonts/Oswald-Regular.ttf",
  variable: "--font-oswald",
})

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
          oswaldLocal.variable,
          "min-h-screen bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <WalletContextProvider>
            <AuthProviders>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
              <Toaster />
            </AuthProviders>
          </WalletContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'