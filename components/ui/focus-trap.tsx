"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface FocusTrapProps {
  children: React.ReactNode
  active?: boolean
}

export function FocusTrap({ children, active = true }: FocusTrapProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return

    const root = rootRef.current
    if (!root) return

    // Save the previously focused element
    const previouslyFocusedElement = document.activeElement as HTMLElement

    // Focus the first focusable element in the trap
    focusFirstDescendant(root)

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return

      const focusableElements = getFocusableElements(root)
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    root.addEventListener("keydown", handleKeyDown)

    return () => {
      root.removeEventListener("keydown", handleKeyDown)
      // Restore focus to the previously focused element when unmounting
      if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === "function") {
        previouslyFocusedElement.focus()
      }
    }
  }, [active])

  return <div ref={rootRef}>{children}</div>
}

// Helper function to get all focusable elements within a container
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ]

  return Array.from(container.querySelectorAll(focusableSelectors.join(","))) as HTMLElement[]
}

// Helper function to focus the first focusable descendant
function focusFirstDescendant(container: HTMLElement) {
  const focusableElements = getFocusableElements(container)
  if (focusableElements.length > 0) {
    focusableElements[0].focus()
  }
}

