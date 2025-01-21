import type React from "react"
import type { TooltipProps } from "recharts"
import { Card } from "@/components/ui/card"

interface ChartTooltipContentProps {
  active?: boolean
  payload?: TooltipProps["payload"]
  label?: string
  formatter?: (value: number) => string
}

export const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  active,
  payload,
  label,
  formatter = (value: number) => value.toString(),
}) => {
  if (!active || !payload || payload.length === 0) {
    return null
  }

  return (
    <Card className="p-2 shadow-md">
      <p className="mb-1 text-sm font-medium">{label}</p>
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center justify-between">
          <span className="mr-2 h-2 w-2 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-sm">{entry.name}: </span>
          <span className="ml-1 text-sm font-medium">{formatter(entry.value as number)}</span>
        </div>
      ))}
    </Card>
  )
}

