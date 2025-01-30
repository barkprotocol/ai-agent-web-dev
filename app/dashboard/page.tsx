import { DashboardContent } from "@/components/dashboard/content"

export const revalidate = 60 // Revalidate every 60 seconds

export default function DashboardPage() {
  return <DashboardContent />
}

