"use client"

import { useEffect } from "react"

interface ActionEmitterProps {
  actionId: string
}

export function ActionEmitter({ actionId }: ActionEmitterProps) {
  useEffect(() => {
    const event = new CustomEvent("action-created", { detail: { actionId } })
    window.dispatchEvent(event)
  }, [actionId])

  return null
}

