import { UserNav } from "./user-nav"

export function DashboardHeader() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  )
}

