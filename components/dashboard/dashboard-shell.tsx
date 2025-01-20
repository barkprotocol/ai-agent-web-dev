import type { FC, ReactNode } from "react"

interface DashboardShellProps {
  children: ReactNode
}

export const DashboardShell: FC<DashboardShellProps> = ({ children }) => {
  return (
    <div className="flex-1 space-y-4 md:space-y-6">
      <div className="flex flex-col space-y-4 md:space-y-6">{children}</div>
    </div>
  )
}

