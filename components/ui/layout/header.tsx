"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { usePrivy } from "@privy-io/react-auth"
import { signOut } from "@/lib/auth"
import { toast } from "sonner"
import { LoginButton } from "@/components/ui/login-button"
import { WalletButton } from "@/components/ui/wallet-button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard", authRequired: true },
  { href: "/agents", label: "AI Agents" },
  { href: "/pricing", label: "Contribute" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/#faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { authenticated, ready } = usePrivy()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }, [isMobileMenuOpen])

  const handleLogout = async () => {
    try {
      await signOut()
      toast.success("Logged out successfully")
    } catch (error) {
      toast.error("Failed to log out. Please try again.")
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between relative">
        <Logo isScrolled={isScrolled} />

        <nav className="hidden lg:flex items-center justify-center space-x-6">
          {navItems.map((item) => {
            if (item.authRequired && !authenticated) return null
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-gray-600 dark:hover:text-gray-300"
                    : "text-primary-foreground hover:text-primary-foreground/80"
                } ${pathname === item.href ? "text-gray-800 dark:text-gray-200" : ""}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="hidden md:flex items-center space-x-2 md:space-x-3">
            <WalletButton />
            <LoginButton />
          </div>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <X className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
                ) : (
                  <Menu className={`h-5 w-5 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
                )}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg font-medium transition-colors ${
                      pathname === item.href ? "text-gray-800 dark:text-gray-200" : "text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <WalletButton />
                  <LoginButton />
                  {ready && authenticated && (
                    <Button
                      onClick={() => {
                        handleLogout()
                        setIsMobileMenuOpen(false)
                      }}
                      className="bg-transparent hover:bg-gray-800 text-white border border-white/40 transition-all"
                    >
                      Logout
                    </Button>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

