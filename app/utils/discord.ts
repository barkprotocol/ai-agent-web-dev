export type DiscordRateLimit = {
    MAX_REQUESTS: number
    WINDOW_MS: number
  }
  
  export const DISCORD_RATE_LIMIT: DiscordRateLimit = {
    MAX_REQUESTS: 50,
    WINDOW_MS: 1000, // 1 second
  }
  
  export const DISCORD_API_VERSION = "v10"
  
  export const DISCORD_API_BASE_URL = `https://discord.com/api/${DISCORD_API_VERSION}`
  
  export const DISCORD_ENDPOINTS = {
    GUILDS: "/guilds",
    USERS: "/users",
    CHANNELS: "/channels",
  }
  
  