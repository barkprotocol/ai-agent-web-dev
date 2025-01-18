// API Constants
export const DISCORD_API_BASE_URL = 'https://discord.com/api/v10';
export const DISCORD_CDN_URL = 'https://cdn.discordapp.com';

// Rate Limiting
export const DISCORD_RATE_LIMIT = {
  MAX_REQUESTS: 50,
  WINDOW_MS: 1000, // 1 second
};

// Cache Duration
export const DISCORD_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// Error Messages
export const DISCORD_ERROR_MESSAGES = {
  RATE_LIMITED: 'Too many requests. Please try again later.',
  UNAUTHORIZED: 'Unauthorized. Please check your credentials.',
  NOT_FOUND: 'Discord resource not found.',
  SERVER_ERROR: 'Discord server error. Please try again later.',
  NETWORK_ERROR: 'Network error. Please check your connection.',
};

