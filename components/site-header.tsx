import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { WalletButton } from "@/components/ui/wallet-button"
import { LoginButton } from "@/components/ui/login-button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">BARK AI Agent</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Dashboard
            </Link>
            <Link href="/whitepaper" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Whitepaper
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <WalletButton />
            <LoginButton />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

