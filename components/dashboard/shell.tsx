import type { ReactNode } from "react"
import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardContent } from "@/components/dashboard/content"

interface DashboardShellProps {
  children?: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <DashboardContent />
          {children}
        </main>
      </div>
    </div>
  )
}

