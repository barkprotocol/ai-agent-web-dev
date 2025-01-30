"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/ui/icons"
import { toast } from "sonner"
import { signInWithGoogle } from "@/lib/auth"

export function SignUpForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login, authenticated, connectWallet } = usePrivy()
  const router = useRouter()

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      await login({ email }) // Use Privy for signup
      router.push("/check-email")
    } catch (error) {
      console.error(error)
      toast.error("Failed to sign up. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleGoogleSignUp() {
    setIsLoading(true)
    try {
      await signInWithGoogle()
      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      toast.error("Failed to sign up with Google. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  async function handlePrivySignUp() {
    setIsLoading(true)
    try {
      await login()
      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      toast.error("Failed to sign up with Privy. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  async function handleExternalWalletSignUp() {
    setIsLoading(true)
    try {
      await connectWallet()
      router.push("/dashboard")
    } catch (error) {
      console.error(error)
      toast.error("Failed to connect wallet. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (authenticated) {
    router.push("/dashboard")
    return null
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign Up with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </div>
      <div className="grid gap-2">
        <Button variant="outline" type="button" disabled={isLoading} onClick={handleGoogleSignUp}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.google className="mr-2 h-4 w-4" />
          )}{" "}
          Google
        </Button>
        <Button variant="outline" type="button" disabled={isLoading} onClick={handlePrivySignUp}>
          {isLoading ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : <Icons.key className="mr-2 h-4 w-4" />}{" "}
          Privy
        </Button>
        <Button variant="outline" type="button" disabled={isLoading} onClick={handleExternalWalletSignUp}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.wallet className="mr-2 h-4 w-4" />
          )}{" "}
          Connect Wallet
        </Button>
      </div>
    </div>
  )
}

