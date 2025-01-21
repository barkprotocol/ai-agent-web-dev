export const TIMEFRAME = {
  DAYS: "days",
  HOURS: "hours",
  MINUTES: "minutes",
} as const

export type Timeframe = (typeof TIMEFRAME)[keyof typeof TIMEFRAME]

