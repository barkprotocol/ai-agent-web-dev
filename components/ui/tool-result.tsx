import { Collapsible, ChevronDown } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { useMemo } from "react"

interface ToolResultProps {
  toolName: string
  header: React.ReactNode
  content: React.ReactNode
  isCollapsible?: boolean
}

export function ToolResult({ toolName, header, content, isCollapsible = true }: ToolResultProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  const headerContent = useMemo(
    () => (
      <div className="flex w-full items-center gap-2">
        {header}
        {isCollapsible && (
          <ChevronDown
            className={cn(
              "ml-auto h-4 w-4 shrink-0 transition-transform duration-200",
              isOpen && "rotate-180 transform",
            )}
          />
        )}
      </div>
    ),
    [header, isCollapsible, isOpen],
  )

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger className="w-full" aria-label={`Toggle ${toolName} result`}>
        {headerContent}
      </Collapsible.Trigger>
      <Collapsible.Content className="transition-all duration-300 ease-in-out">
        <div className="mt-2 px-4">{content}</div>
      </Collapsible.Content>
    </Collapsible>
  )
}

