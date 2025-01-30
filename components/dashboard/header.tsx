import { WalletButton } from "@/components/ui/wallet-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <WalletButton />
          <ThemeToggle />
          <Button variant="outline" onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}

