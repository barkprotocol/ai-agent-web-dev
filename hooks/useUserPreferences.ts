import { useState, useEffect } from "react"

interface UserPreferences {
  layout: string[]
  metrics: string[]
}

const defaultPreferences: UserPreferences = {
  layout: ["overview", "recentActivity", "analytics", "solanaBlinks"],
  metrics: ["solanaPrice", "barkPrice", "totalAgents", "portfolioValue"],
}

export function useUserPreferences() {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences)

  useEffect(() => {
    const storedPreferences = localStorage.getItem("userPreferences")
    if (storedPreferences) {
      setPreferences(JSON.parse(storedPreferences))
    }
  }, [])

  const updatePreferences = (newPreferences: Partial<UserPreferences>) => {
    const updatedPreferences = { ...preferences, ...newPreferences }
    setPreferences(updatedPreferences)
    localStorage.setItem("userPreferences", JSON.stringify(updatedPreferences))
  }

  return { preferences, updatePreferences }
}

