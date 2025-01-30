export interface ActivityItem {
  id: string
  type: string
  description: string
  time: string
}

export interface UserData {
  id: string
  activeAgents: number
  totalBalance: number
  portfolio: {
    symbol: string
    name: string
    amount: number
    value: number
    logoURI: string
  }[]
  recentActivities: ActivityItem[]
}

