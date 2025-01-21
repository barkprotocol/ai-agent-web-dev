export enum TIMEFRAME {
  DAYS = "days",
  HOURS = "hours",
  MINUTES = "minutes",
}

export interface ChartDataPoint {
  timestamp: number
  value: number
}

export interface ChartSeries {
  name: string
  data: ChartDataPoint[]
}

export interface ChartOptions {
  timeframe: TIMEFRAME
  startDate?: Date
  endDate?: Date
}

