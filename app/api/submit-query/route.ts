import { NextResponse } from 'next/server';
import { fetch } from 'undici'; // or any other fetch method if you're using custom fetch
import type { NextRequest } from 'next/server';

// This function handles the POST request to submit the query
export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { query } = await req.json();

    // Example: Process or store the data (e.g., store in database or perform action)
    console.log('Received query:', query);

    // For demonstration, simulate some asynchronous action
    const response = await fetch('https://barkprotocol.net/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    // Check if the external request was successful
    if (!response.ok) {
      throw new Error('Failed to forward query to external API');
    }

    // Return a success response
    return NextResponse.json({ message: 'Query submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error in submit-query API:', error);
    return NextResponse.json({ error: 'Failed to process query' }, { status: 500 });
  }
}

