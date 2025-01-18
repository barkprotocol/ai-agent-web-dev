import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { convertToUIMessages } from '@/lib/server/actions/ai';
import { verifyUser } from '@/server/actions/user';
import {
  dbGetConversation,
  dbGetConversationMessages,
} from '@/server/db/queries';

import ChatInterface from '@/components/chat/chat-interface';
import { ChatSkeleton } from '@/components/chat/chat-skeleton';

interface ChatPageParams {
  id: string;
}

export async function generateMetadata({
  params,
}: {
  params: ChatPageParams;
}): Promise<Metadata> {
  const conversation = await dbGetConversation({ conversationId: params.id });

  if (!conversation) {
    return {
      title: 'Chat Not Found | BARK AI Agent',
      description: 'The requested chat conversation could not be found.',
    };
  }

  const title = conversation.title || 'Untitled Conversation';
  return {
    title: `Chat - ${title} | BARK AI Agent`,
    description: `Chat conversation: ${title}`,
  };
}

async function ChatData({ id }: ChatPageParams) {
  const conversation = await dbGetConversation({ conversationId: id });

  if (!conversation) {
    notFound();
  }

  const authResponse = await verifyUser();
  const userId = authResponse?.data?.data?.id;

  if (
    conversation.visibility === 'PRIVATE' &&
    (!userId || conversation.userId !== userId)
  ) {
    notFound();
  }

  const messagesFromDB = await dbGetConversationMessages({
    conversationId: id,
  });

  if (!messagesFromDB) {
    notFound();
  }

  const messages = convertToUIMessages(messagesFromDB);

  return <ChatInterface id={id} initialMessages={messages} />;
}

export default function ChatPage({ params }: { params: ChatPageParams }) {
  return (
    <Suspense fallback={<ChatSkeleton />}>
      <ChatData id={params.id} />
    </Suspense>
  );
}

