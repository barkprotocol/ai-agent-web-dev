import { Suspense } from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

interface ChatLayoutProps {
  children: React.ReactNode
}

export default function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Suspense fallback={<LoadingSpinner />}>
        <AppSidebar />
      </Suspense>
      <main
        className="flex-1 overflow-auto transition-all duration-200 ease-in-out
        md:pl-[var(--sidebar-width)] 
        md:group-data-[collapsible=icon]/sidebar:pl-[var(--sidebar-width-collapsed)]"
      >
        {children}
      </main>
    </div>
  )
}

