import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Maintenance | BARK AI Agent",
  description: "We are currently undergoing maintenance. Please check back soon.",
}

export default function MaintenanceIndex() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <div className={cn("pointer-events-none select-none", "animate-pulse")}>
        <Image
          src="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
          alt="BARK AI Logo"
          width={80}
          height={80}
          className="h-auto w-auto"
          priority
        />
      </div>

      <h1 className="mt-8 text-2xl font-bold">We're Currently Under Maintenance</h1>

      <p className="mt-4 text-center text-lg text-muted-foreground max-w-md">
        We're working hard to improve our services. Please check back soon or follow us for updates.
      </p>

      <div className="mt-8 text-center">
        <Link
          href="https://x.com/bark_protocol"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Follow @bark_protocol
        </Link>
      </div>
    </div>
  )
}

