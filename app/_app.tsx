import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/provider-theme'
import { WalletContextProvider } from '@/components/wallet-context-provider'
import { Toaster } from '@/components/ui/sonner'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <WalletContextProvider>
        <Component {...pageProps} />
        <Toaster />
      </WalletContextProvider>
    </ThemeProvider>
  )
}