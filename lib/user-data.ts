import type { UserData, ActivityItem } from "@/types/user-data"

export async function getUserData(): Promise<UserData> {
  // Simulated API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    id: "mock-user-id",
    activeAgents: 5,
    totalBalance: 10000,
    portfolio: [
      {
        symbol: "SOL",
        name: "Solana",
        amount: 100,
        value: 5000,
        logoURI:
          "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
      },
      {
        symbol: "BARK",
        name: "BARK Token",
        amount: 10000,
        value: 5000,
        logoURI: "https://barkprotocol.com/logo.png",
      },
    ],
    recentActivities: [
      {
        id: "1",
        type: "Trade",
        description: "Bought 10 SOL",
        time: "2 hours ago",
      },
      {
        id: "2",
        type: "Stake",
        description: "Staked 1000 BARK",
        time: "1 day ago",
      },
    ],
  }
}

export async function getUserRecentActivity(page: number, pageSize: number): Promise<ActivityItem[]> {
  // Simulated API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  const allActivities: ActivityItem[] = [
    { id: "1", type: "Trade", description: "Bought 10 SOL", time: "2 hours ago" },
    { id: "2", type: "Stake", description: "Staked 1000 BARK", time: "1 day ago" },
    { id: "3", type: "Trade", description: "Sold 5 SOL", time: "3 days ago" },
    { id: "4", type: "Reward", description: "Received 50 BARK", time: "1 week ago" },
    { id: "5", type: "Trade", description: "Bought 20 BARK", time: "2 weeks ago" },
  ]

  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize

  return allActivities.slice(startIndex, endIndex)
}

