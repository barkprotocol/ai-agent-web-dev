"use client";

import type { Metadata } from "next"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { UserOverview } from "@/components/dashboard/user-overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "User dashboard overview",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Welcome back! Here's an overview of your account." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UserOverview />
      </div>
      <div className="mt-6">
        <RecentActivity />
      </div>
    </DashboardShell>
  )
}

