export interface UserData {
  id: string
  name: string
  email: string
}

export interface UserPortfolio {
  symbol: string
  name: string
  amount: number
  value: number
  logoURI: string
}

export interface UserTransaction {
  id: string
  type: "Buy" | "Sell"
  amount: number
  token: string
  date: string
}

