import { NextResponse } from 'next/server';
import fetch from 'node-fetch';

import { verifyUser } from '@/server/actions/user';

const DISCORD_API_BASE_URL = 'https://discordapp.com/api';
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID;
const ROLE_ID = process.env.DISCORD_ROLE_ID;

export async function POST(req: Request) {
  try {
    // Verify environment variables
    if (!BOT_TOKEN || !GUILD_ID || !ROLE_ID) {
      console.error('Discord environment variables not set');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // Verify user authentication and early access
    const authResult = await verifyUser();
    const userId = authResult?.data?.data?.id;
    const hasEarlyAccess = authResult?.data?.data?.earlyAccess;

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!hasEarlyAccess) {
      return NextResponse.json({ error: 'User does not have early access' }, { status: 403 });
    }

    // Parse request body
    const body = await req.json();
    const discordUserId = body.userId;

    if (!discordUserId) {
      return NextResponse.json({ error: 'Discord User ID is required' }, { status: 400 });
    }

    // Grant role via Discord API
    const url = `${DISCORD_API_BASE_URL}/guilds/${GUILD_ID}/members/${discordUserId}/roles/${ROLE_ID}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `Bot ${BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Discord API error:', errorData);
      return NextResponse.json({ error: 'Failed to grant role' }, { status: response.status });
    }

    return NextResponse.json({ message: 'Role granted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

