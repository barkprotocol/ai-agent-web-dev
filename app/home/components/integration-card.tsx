import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Integration } from "../data/integrations"

interface IntegrationCardProps {
  item: Integration
  index: number
  onClick: () => void
}

export function IntegrationCard({ item, index, onClick }: IntegrationCardProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group flex items-center gap-4 rounded-xl bg-card p-4 text-left shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary"
      style={
        {
          "--integration-primary": item.theme.primary,
          "--integration-secondary": item.theme.secondary,
        } as React.CSSProperties
      }
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-lg">
        <Image
          src={item.icon || "/placeholder.svg"}
          alt={`${item.name} icon`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
          {item.name}
        </h3>
        {item.description && <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>}
      </div>
      <div
        className="h-8 w-1 rounded-full transition-all duration-300 group-hover:h-full"
        style={{ backgroundColor: item.theme.primary }}
      />
    </motion.button>
  )
}

