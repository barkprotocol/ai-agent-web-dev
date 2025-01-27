"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePrivy } from "@privy-io/react-auth"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardContent } from "@/components/dashboard/content"

export default function DashboardPage() {
  const { authenticated, ready } = usePrivy()
  const router = useRouter()

  useEffect(() => {
    if (ready && !authenticated) {
      router.push("/login")
    }
  }, [ready, authenticated, router])

  if (!authenticated) {
    return null
  }

  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Manage your AI agents and view your Solana trading performance." />
      <DashboardContent />
    </DashboardShell>
  )
}

