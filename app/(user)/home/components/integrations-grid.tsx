"use client"

import React from "react"
import { INTEGRATIONS } from "@/app/(user)/home/data/integrations"
import { IntegrationCard } from "./integration-card"
import { useRouter } from "next/navigation"

export function IntegrationsGrid() {
  const router = useRouter()

  const handleIntegrationClick = (label: string) => {
    // Navigate to a specific integration page
    router.push(`/integrations/${label.toLowerCase().replace(/\s+/g, "-")}`)
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {INTEGRATIONS.map((item, index) => (
        <IntegrationCard key={item.name} item={item} index={index} onClick={() => handleIntegrationClick(item.name)} />
      ))}
    </div>
  )
}

