import { Action, Prisma, Message as PrismaMessage } from '@prisma/client';
import _ from 'lodash';

import prisma from '@/lib/prisma';
import { NewAction } from '@/types/db';
import { debugLog } from '@/lib/utils/debug';

const logger = debugLog.createDebugLogger('DBQueries');

/**
 * Retrieves a conversation by its ID
 */
export async function dbGetConversation(conversationId: string) {
  try {
    return await prisma.conversation.findUnique({
      where: { id: conversationId },
    });
  } catch (error) {
    logger('Failed to get conversation', { conversationId, error }, { level: 'error' });
    return null;
  }
}

/**
 * Creates a new conversation
 */
export async function dbCreateConversation(
  conversationId: string,
  userId: string,
  title: string
) {
  try {
    return await prisma.conversation.create({
      data: { id: conversationId, userId, title },
    });
  } catch (error) {
    logger('Failed to create conversation', { conversationId, userId, error }, { level: 'error' });
    return null;
  }
}

/**
 * Creates multiple messages in bulk
 */
export async function dbCreateMessages(
  messages: Omit<PrismaMessage, 'id' | 'createdAt'>[]
) {
  try {
    return await prisma.message.createMany({
      data: messages as Prisma.MessageCreateManyInput[],
    });
  } catch (error) {
    logger('Failed to create messages', { messageCount: messages.length, error }, { level: 'error' });
    return null;
  }
}

/**
 * Retrieves all messages for a specific conversation
 */
export async function dbGetConversationMessages(conversationId: string) {
  try {
    return await prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
    });
  } catch (error) {
    logger('Failed to get conversation messages', { conversationId, error }, { level: 'error' });
    return null;
  }
}

/**
 * Deletes a conversation and all its associated messages and actions
 */
export async function dbDeleteConversation(conversationId: string, userId: string) {
  try {
    await prisma.$transaction([
      prisma.action.deleteMany({ where: { conversationId } }),
      prisma.message.deleteMany({ where: { conversationId } }),
      prisma.conversation.delete({ where: { id: conversationId, userId } }),
    ]);
  } catch (error) {
    logger('Failed to delete conversation', { conversationId, userId, error }, { level: 'error' });
    throw error;
  }
}

/**
 * Retrieves all conversations for a specific user
 */
export async function dbGetConversations(userId: string) {
  try {
    return await prisma.conversation.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  } catch (error) {
    logger('Failed to get user conversations', { userId, error }, { level: 'error' });
    return [];
  }
}

/**
 * Retrieves all actions that match the specified filters
 */
export async function dbGetActions(filters: {
  triggered: boolean;
  paused: boolean;
  completed: boolean;
}) {
  try {
    return await prisma.action.findMany({
      where: filters,
      orderBy: { createdAt: 'desc' },
      include: { user: { include: { wallets: true } } },
    });
  } catch (error) {
    logger('Failed to get actions', { filters, error }, { level: 'error' });
    return [];
  }
}

/**
 * Creates a new action
 */
export async function dbCreateAction(action: NewAction) {
  try {
    return await prisma.action.create({
      data: {
        ..._.omit(action, 'conversationId', 'userId'),
        params: action.params as Prisma.JsonObject,
        user: { connect: { id: action.userId } },
        conversation: { connect: { id: action.conversationId } },
      },
    });
  } catch (error) {
    logger('Failed to create action', { action, error }, { level: 'error' });
    return undefined;
  }
}

/**
 * Creates a new token stat entry
 */
export async function dbCreateTokenStat(data: {
  userId: string;
  messageIds: string[];
  totalTokens: number;
  promptTokens: number;
  completionTokens: number;
}) {
  try {
    return await prisma.tokenStat.create({ data });
  } catch (error) {
    logger('Failed to create token stats', { data, error }, { level: 'error' });
    return null;
  }
}

/**
 * Retrieves the Telegram ID for a user
 */
export async function dbGetUserTelegramChat(userId: string) {
  try {
    return await prisma.telegramChat.findUnique({
      where: { userId },
      select: { username: true, chatId: true },
    });
  } catch (error) {
    logger('Failed to get user Telegram Chat', { userId, error }, { level: 'error' });
    return null;
  }
}

/**
 * Updates the Telegram Chat for a user
 */
export async function dbUpdateUserTelegramChat(data: {
  userId: string;
  username: string;
  chatId?: string;
}) {
  try {
    return await prisma.telegramChat.upsert({
      where: { userId: data.userId },
      update: { username: data.username, chatId: data.chatId },
      create: data,
    });
  } catch (error) {
    logger('Failed to update user Telegram Chat', { data, error }, { level: 'error' });
    return null;
  }
}

