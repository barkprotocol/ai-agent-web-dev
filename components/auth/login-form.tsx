"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { login, authenticated, ready } = usePrivy()

  useEffect(() => {
    if (ready && authenticated) {
      router.push("/dashboard")
    }
  }, [ready, authenticated, router])

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await login()
    } catch (error) {
      console.error("Failed to login:", error)
      setError("Failed to login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (authenticated) {
    return null
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <form onSubmit={onSubmit} className="space-y-4">
        <Button className="w-full" disabled={isLoading}>
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Icons.login className="mr-2 h-4 w-4" />
          )}
          Sign In with Privy
        </Button>
      </form>
      <p className="text-sm text-center text-muted-foreground">
        Don't have an account?{" "}
        <a href="#" className="text-primary hover:underline">
          Sign up
        </a>
      </p>
    </div>
  )
}

