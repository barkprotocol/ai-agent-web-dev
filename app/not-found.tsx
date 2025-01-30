import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "404 - Page Not Found | BARK AI Agent",
  description: "The page you're looking for doesn't exist or has been moved.",
}

export default function NotFound() {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen",
        "bg-background text-foreground",
        "transition-colors duration-300",
      )}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-8">We're sorry, but the page you're looking for doesn't exist or has been moved.</p>
        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            aria-label="Return to Home Page"
          >
            <Link href="/">Return Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-background hover:bg-accent hover:text-accent-foreground"
            aria-label="Explore the Dashboard"
          >
            <Link href="/dashboard">Explore Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

