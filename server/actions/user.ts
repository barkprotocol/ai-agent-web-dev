'use server';

import { cookies } from 'next/headers';
import { PrivyClient } from '@privy-io/server-auth';
import { z } from 'zod';

import prisma from '@/lib/prisma';
import { ActionResponse, actionClient } from '@/lib/utils/safe-action';
import { generateEncryptedKeyPair } from '@/lib/solana/wallet-generator';
import { PrismaUser } from '@/types/db';

const NEXT_PUBLIC_PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;

if (!NEXT_PUBLIC_PRIVY_APP_ID || !PRIVY_APP_SECRET) {
  throw new Error('Missing required environment variables: NEXT_PUBLIC_PRIVY_APP_ID or PRIVY_APP_SECRET');
}

const PRIVY_SERVER_CLIENT = new PrivyClient(NEXT_PUBLIC_PRIVY_APP_ID, PRIVY_APP_SECRET);

const getOrCreateUser = actionClient
  .schema(z.object({ userId: z.string().min(1, 'User ID is required') }))
  .action<ActionResponse<PrismaUser>>(async ({ parsedInput: { userId } }) => {
    try {
      const prismaUser = await prisma.user.findUnique({
        where: { privyId: userId },
        include: {
          wallets: {
            select: {
              id: true,
              ownerId: true,
              name: true,
              publicKey: true,
            },
          },
        },
      });

      if (prismaUser) {
        return {
          success: true,
          data: prismaUser,
        };
      }

      // Create new user with initial wallet
      const createdUser = await prisma.user.create({ 
        data: { privyId: userId }
      });

      const { publicKey, encryptedPrivateKey } = await generateEncryptedKeyPair();
      const initialWallet = await prisma.wallet.create({
        data: {
          ownerId: createdUser.id,
          name: 'Default',
          publicKey,
          encryptedPrivateKey,
        },
      });

      return {
        success: true,
        data: {
          ...createdUser,
          wallets: [
            {
              id: initialWallet.id,
              ownerId: initialWallet.ownerId,
              name: initialWallet.name,
              publicKey: initialWallet.publicKey,
            },
          ],
        },
      };
    } catch (error) {
      console.error('Error in getOrCreateUser:', error);
      return {
        success: false,
        error: 'Failed to create or retrieve user',
      };
    }
  });

export const verifyUser = actionClient.action<
  ActionResponse<{ id: string; publicKey?: string }>
>(async () => {
  const token = (await cookies()).get('privy-token')?.value;

  if (!token) {
    return {
      success: false,
      error: 'Authentication token not found',
    };
  }

  try {
    const claims = await PRIVY_SERVER_CLIENT.verifyAuthToken(token);
    const user = await prisma.user.findUnique({
      where: { privyId: claims.userId },
      select: {
        id: true,
        wallets: {
          select: {
            publicKey: true,
          },
          take: 1,
        },
      },
    });

    if (!user) {
      return {
        success: false,
        error: 'User not found in database',
      };
    }

    return {
      success: true,
      data: {
        id: user.id,
        publicKey: user.wallets[0]?.publicKey,
      },
    };
  } catch (error) {
    console.error('Error in verifyUser:', error);
    return {
      success: false,
      error: 'Authentication verification failed',
    };
  }
});

export const getUserData = actionClient.action<ActionResponse<PrismaUser>>(
  async () => {
    const token = (await cookies()).get('privy-token')?.value;

    if (!token) {
      return {
        success: false,
        error: 'Authentication token not found',
      };
    }

    try {
      const claims = await PRIVY_SERVER_CLIENT.verifyAuthToken(token);
      const response = await getOrCreateUser({ userId: claims.userId });

      if (!response.success || !response.data) {
        return {
          success: false,
          error: response.error || 'Failed to retrieve user data',
        };
      }

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error in getUserData:', error);
      return {
        success: false,
        error: 'Failed to authenticate and retrieve user data',
      };
    }
  },
);

