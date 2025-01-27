"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { WalletButton } from "@/components/ui/wallet-button"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { usePrivy } from "@privy-io/react-auth"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/agents", label: "AI Agents" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { login, authenticated, logout } = usePrivy()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 dark:bg-background/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Logo isScrolled={isScrolled} />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground dark:text-white hover:text-primary dark:hover:text-primary"
                  : "text-primary-foreground dark:text-white hover:text-primary-foreground/80 dark:hover:text-white/80"
              } ${pathname === item.href ? "text-primary dark:text-primary" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <WalletButton />
            <Button
              onClick={authenticated ? logout : login}
              variant="outline"
              className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/30 dark:border-white/20 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/30 transition-all shadow-glow-sm"
            >
              {authenticated ? "Logout" : "Login"}
            </Button>
          </div>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu
                  className={`h-5 w-5 ${isScrolled ? "text-foreground dark:text-white" : "text-primary-foreground dark:text-white"}`}
                />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled
                        ? "text-foreground dark:text-white hover:text-primary dark:hover:text-primary"
                        : "text-primary-foreground dark:text-white hover:text-primary-foreground/80 dark:hover:text-white/80"
                    } ${pathname === item.href ? "text-primary dark:text-primary" : ""}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3">
                  <WalletButton />
                  <Button onClick={authenticated ? logout : login} variant="outline">
                    {authenticated ? "Logout" : "Login"}
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

