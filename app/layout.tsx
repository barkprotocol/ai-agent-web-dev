/**
 * Copyright (c) 2024 Bark Protocol
 * All rights reserved.
 */

import type { Metadata } from 'next';
import { Inter, Poppins, Syne } from 'next/font/google';
import { WalletContextProvider } from '@/components/wallet-context-provider';

import './styles/globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const syne = Syne({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BARK | AI Agent',
  description: 'AI-powered copilot for Solana blockchain interactions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${syne.variable}`}>
      <body className={`${poppins.className} bg-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300`}>
        <WalletContextProvider children={undefined}>
          <div className="flex flex-col min-h-screen">
            {/* Main content */}
            <main className="flex-grow">{children}</main>

            {/* Footer */}
            <footer className="bg-black text-white py-4 text-center text-sm">
              <p>© 2025 BARK Protocol. All rights reserved.</p>
            </footer>
          </div>
        </WalletContextProvider>
      </body>
    </html>
  );
}
