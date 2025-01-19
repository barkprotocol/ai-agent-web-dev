import { NextResponse } from 'next/server';
import { fetch } from 'undici';
import type { NextRequest } from 'next/server';

const BARK_AI_API_URL = process.env.BARK_AI_API_URL || 'https://ai.barkprotocol.net/api/submit';

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json();

    // Validate the input
    if (!body.query || typeof body.query !== 'string') {
      return NextResponse.json({ error: 'Invalid query. Expected a non-empty string.' }, { status: 400 });
    }

    const { query } = body;

    console.log('Received query:', query);

    // Forward the query to the Bark AI API
    const response = await fetch(BARK_AI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BARK_AI_API_KEY}`,
      },
      body: JSON.stringify({ query }),
    });

    // Check if the Bark AI API request was successful
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Bark AI API error:', errorData);
      throw new Error(`Failed to process query. Status: ${response.status}`);
    }

    const result = await response.json();

    // Return a success response with the result from the Bark AI API
    return NextResponse.json({ 
      message: 'Query processed successfully!', 
      result 
    }, { status: 200 });
  } catch (error) {
    console.error('Error in submit API:', error);
    return NextResponse.json({ error: 'Failed to process query. Please try again later.' }, { status: 500 });
  }
}

export async function OPTIONS(req: NextRequest) {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

