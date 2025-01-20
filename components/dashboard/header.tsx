import type { FC } from "react"

interface DashboardHeaderProps {
  heading: string
  text?: string
}

export const DashboardHeader: FC<DashboardHeaderProps> = ({ heading, text }) => {
  return (
    <div className="flex flex-col gap-2 pb-4 md:pb-6">
      <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
      {text && <p className="text-muted-foreground">{text}</p>}
    </div>
  )
}

