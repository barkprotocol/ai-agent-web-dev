'use server';

import { cookies } from 'next/headers';

import { Wallet } from '@prisma/client';
import { Email } from '@privy-io/react-auth';
import { PrivyClient } from '@privy-io/server-auth';
import { WalletWithMetadata } from '@privy-io/server-auth';
import { z } from 'zod';

import prisma from '@/lib/prisma';
import { ActionResponse, actionClient } from '@/lib/safe-action';
import { generateEncryptedKeyPair } from '@/lib/solana/wallet-generator';
import { EmbeddedWallet, PrismaUser } from '@/app/types/db';

const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;
const PRIVY_SIGNING_KEY = process.env.PRIVY_SIGNING_KEY;

if (!PRIVY_APP_ID || !PRIVY_APP_SECRET) {
  throw new Error('Missing required Privy environment variables');
}

const PRIVY_SERVER_CLIENT = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET, {
  walletApi: {
    authorizationPrivateKey: PRIVY_SIGNING_KEY,
  },
});

const getOrCreateUser = actionClient
  .schema(z.object({ userId: z.string() }))
  .action<ActionResponse<PrismaUser>>(async ({ parsedInput: { userId } }) => {
    const existingUser = await prisma.user.findUnique({
      where: { privyId: userId },
      include: {
        wallets: {
          select: {
            id: true,
            ownerId: true,
            name: true,
            publicKey: true,
            walletSource: true,
            delegated: true,
            active: true,
            chain: true,
          },
          where: {
            active: true,
          },
        },
      },
    });

    if (existingUser) {
      return { success: true, data: existingUser };
    }

    const createdUser = await prisma.user.create({
      data: {
        privyId: userId,
      },
    });

    const { publicKey, encryptedPrivateKey } = await generateEncryptedKeyPair();
    const initalWallet = await prisma.wallet.create({
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
            id: initalWallet.id,
            ownerId: initalWallet.ownerId,
            name: initalWallet.name,
            publicKey: initalWallet.publicKey,
            walletSource: initalWallet.walletSource,
            delegated: initalWallet.delegated,
            active: initalWallet.active,
            chain: initalWallet.chain,
          },
        ],
      },
    };
  });

export const verifyUser = actionClient.action<
  ActionResponse<{ id: string; publicKey?: string }>
>(async () => {
  const token = (await cookies()).get('privy-token')?.value;
  if (!token) {
    return {
      success: false,
      error: 'No privy token found',
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
          where: {
            active: true,
          },
        },
      },
    });

    if (!user) {
      return {
        success: false,
        error: 'User not found',
      };
    }

    return {
      success: true,
      data: {
        id: user.id,
        publicKey: user.wallets[0]?.publicKey,
      },
    };
  } catch {
    return { success: false, error: 'Authentication failed' };
  }
});

export const getUserData = actionClient.action<ActionResponse<PrismaUser>>(
  async () => {
    const token = (await cookies()).get('privy-token')?.value;
    if (!token) {
      return {
        success: false,
        error: 'No privy token found',
      };
    }

    try {
      const claims = await PRIVY_SERVER_CLIENT.verifyAuthToken(token);

      const response = await getOrCreateUser({ userId: claims.userId });
      if (!response?.data?.success) {
        return { success: false, error: response?.data?.error };
      }

      const user = response.data?.data;
      if (!user) {
        return { success: false, error: 'Could not create or retrieve user' };
      }

      return { success: true, data: user };
    } catch {
      return { success: false, error: 'Authentication failed' };
    }
  },
);

export const syncEmbeddedWallets = actionClient.action<
  ActionResponse<{ wallets: EmbeddedWallet[] }>
>(async () => {
  const response = await getUserData();
  if (!response?.data?.success || !response.data?.data) {
    return { success: false, error: 'Local user not found in DB' };
  }

  const userData = response.data.data;

  const privyUser = await PRIVY_SERVER_CLIENT.getUser(userData.privyId);

  const embeddedWallets = privyUser.linkedAccounts.filter(
    (acct): acct is WalletWithMetadata =>
      acct.type === 'wallet' && acct.walletClientType === 'privy',
  );

  try {
    for (const w of embeddedWallets) {
      const pubkey = w.address;
      if (!pubkey) continue;

      await prisma.wallet.upsert({
        where: {
          ownerId_publicKey: {
            ownerId: userData.id,
            publicKey: pubkey,
          },
        },
        update: {
          name: 'Privy Embedded',
          walletSource: 'PRIVY',
          delegated: w.delegated ?? false,
          publicKey: pubkey,
          encryptedPrivateKey: undefined, // This will handle a case where a user imports a wallet to privy
        },
        create: {
          ownerId: userData.id,
          name: 'Privy Embedded',
          publicKey: pubkey,
          walletSource: 'PRIVY',
          chain: 'SOLANA',
          delegated: w.delegated ?? false,
          active: false,
          encryptedPrivateKey: undefined,
        },
      });
    }
  } catch (error) {
    return { success: false, error: 'Error retrieving updated user' };
  }

  const userWallets = await prisma.wallet.findMany({
    where: { ownerId: userData.id },
    select: {
      id: true,
      publicKey: true,
      walletSource: true,
      delegated: true,
      name: true,
      ownerId: true,
      active: true,
      chain: true,
    },
  });

  return { success: true, data: { wallets: userWallets } };
});

export const getPrivyClient = actionClient.action(
  async () => PRIVY_SERVER_CLIENT,
);