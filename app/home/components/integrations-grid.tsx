import React from "react"
import { INTEGRATIONS } from "../data/integrations"
import { IntegrationCard } from "./integration-card"

export function IntegrationsGrid() {
  const handleIntegrationClick = (label: string) => {
    // TODO: Implement integration click handler
    console.log(`Clicked ${label}`)
    // Here you would typically trigger some action, like opening a modal or navigating to a new page
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {INTEGRATIONS.map((item, index) => (
        <IntegrationCard
          key={item.label}
          item={item}
          index={index}
          onClick={() => handleIntegrationClick(item.label)}
        />
      ))}
    </div>
  )
}

