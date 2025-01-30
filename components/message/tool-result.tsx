import React, { useMemo } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface ToolResultProps {
  toolName: string
  header: React.ReactNode
  content: React.ReactNode
  isCollapsible?: boolean
  isExpandedByDefault?: boolean
}

export function ToolResult({
  toolName,
  header,
  content,
  isCollapsible = true,
  isExpandedByDefault = false,
}: ToolResultProps) {
  const [isOpen, setIsOpen] = React.useState(isExpandedByDefault)

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

  if (!isCollapsible) {
    return (
      <div className="rounded-lg border p-4">
        {headerContent}
        <div className="mt-2">{content}</div>
      </div>
    )
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="w-full rounded-lg border p-4 text-left" aria-label={`Toggle ${toolName} result`}>
        {headerContent}
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-b-lg border-x border-b p-4 transition-all duration-300 ease-in-out">
        {content}
      </CollapsibleContent>
    </Collapsible>
  )
}

