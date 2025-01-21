export function formatShortNumber(value: number): string {
    const formatter = new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    })
    return formatter.format(value)
  }
  
  /**
   * Format a number as a percentage
   */
  export function formatPercentage(value: number, decimalPlaces = 2): string {
    return `${(value * 100).toFixed(decimalPlaces)}%`
  }
  
  export function formatCurrency(value: number | undefined, currency = "USD", locale = "en-US"): string {
    if (value === undefined) return "N/A"
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value)
  }
  
  /**
   * Format a large number with commas
   */
  export function formatLargeNumber(value: number): string {
    return value.toLocaleString("en-US")
  }
  
  