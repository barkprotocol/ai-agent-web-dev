import { debugLog } from '@/lib/debug';
import { 
  DISCORD_API_BASE_URL, 
  DISCORD_ERROR_MESSAGES 
} from '@/lib/actions/constants';
import type { DiscordData } from '@/types/discord';

const logger = debugLog.createDebugLogger('DiscordAPI');

export class DiscordError extends Error {
  constructor(
    message: string,
    public status?: number,
    public code?: string
  ) {
    super(message);
    this.name = 'DiscordError';
  }
}

export async function fetchDiscordData(endpoint: string): Promise<DiscordData> {
  try {
    const response = await fetch(`${DISCORD_API_BASE_URL}${endpoint}`, {
      headers: {
        'Authorization': `Bot ${process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      switch (response.status) {
        case 429:
          throw new DiscordError(DISCORD_ERROR_MESSAGES.RATE_LIMITED, response.status);
        case 401:
          throw new DiscordError(DISCORD_ERROR_MESSAGES.UNAUTHORIZED, response.status);
        case 404:
          throw new DiscordError(DISCORD_ERROR_MESSAGES.NOT_FOUND, response.status);
        default:
          throw new DiscordError(
            errorData.message || DISCORD_ERROR_MESSAGES.SERVER_ERROR,
            response.status,
            errorData.code
          );
      }
    }

    const data = await response.json();
    logger('Fetched Discord data successfully', { endpoint });
    
    return data;
  } catch (error) {
    logger('Error fetching Discord data', { error, endpoint }, { level: 'error' });
    
    if (error instanceof DiscordError) {
      throw error;
    }
    
    throw new DiscordError(
      DISCORD_ERROR_MESSAGES.NETWORK_ERROR,
      500
    );
  }
}

