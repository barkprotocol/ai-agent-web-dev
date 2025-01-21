import type { ReactNode } from "react"
import { memo, useState, useCallback } from "react"
import * as Collapsible from "@radix-ui/react-collapsible"
import { ChevronDown } from "lucide-react"

import { DefaultToolResultRenderer, getToolConfig } from "@/ai/providers"
import { cn } from "@/lib/utils"

const Header = memo(function Header({
  children,
  isCollapsible,
  isOpen,
}: {
  children: ReactNode
  isCollapsible: boolean
  isOpen: boolean
}) {
  return (
    <div className="flex w-full items-center gap-2">
      {children}
      {isCollapsible && (
        <ChevronDown
          className={cn("ml-auto h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180 transform")}
          aria-hidden="true"
        />
      )}
    </div>
  )
})

export function ToolResult({ toolName, result, header }: ToolResultProps) {
  const config = getToolConfig(toolName)!
  const isCollapsible = config.isCollapsible === true
  const [isOpen, setIsOpen] = useState(config.isExpandedByDefault ?? !isCollapsible)

  const content = config.render ? config.render(result) : DefaultToolResultRenderer({ result })

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  if (!content) return null

  const headerContent = (
    <Header isCollapsible={isCollapsible} isOpen={isOpen}>
      {header}
    </Header>
  )

  if (!isCollapsible) {
    return (
      <div className="w-full">
        <div className="w-full rounded-lg bg-muted/40 px-3 py-2">{headerContent}</div>
        <div className="mt-2 px-4">{content}</div>
      </div>
    )
  }

  return (
    <Collapsible.Root open={isOpen} onOpenChange={handleToggle} className="w-full">
      <Collapsible.Trigger className="w-full" aria-label={`Toggle ${toolName} result`} aria-expanded={isOpen}>
        <div className="w-full cursor-pointer rounded-lg bg-muted/40 px-3 py-2 transition-colors hover:bg-muted/60">
          {headerContent}
        </div>
      </Collapsible.Trigger>

      <Collapsible.Content role="region" aria-label={`${toolName} result details`}>
        <div className="mt-2 px-4">{content}</div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

export default Header

