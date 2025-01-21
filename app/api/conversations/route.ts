import { NextRequest, NextResponse } from 'next/server';

import { verifyUser } from '@/app/actions/user-actions';
import { dbGetConversations } from '@/server/db/queries';

export async function GET(req: NextRequest) {
  try {
    const session = await verifyUser();
    const userId = session?.data?.data?.id;

    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized: User not authenticated' },
        { status: 401 }
      );
    }

    // Add pagination support
    const searchParams = req.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    if (isNaN(page) || page < 1 || isNaN(limit) || limit < 1 || limit > 100) {
      return NextResponse.json(
        { error: 'Invalid pagination parameters' },
        { status: 400 }
      );
    }

    const conversations = await dbGetConversations({ 
      userId,
      page,
      limit
    });

    if (!conversations) {
      return NextResponse.json(
        { error: 'Failed to fetch conversations' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      data: conversations,
      pagination: {
        page,
        limit,
        total: conversations.length // This should be updated if dbGetConversations returns total count
      }
    });

  } catch (error) {
    console.error('Error fetching conversations:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Failed to fetch conversations: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'An unexpected error occurred while fetching conversations' },
      { status: 500 }
    );
  }
}

