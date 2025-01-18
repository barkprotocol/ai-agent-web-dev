'use client';

import { useRouter } from 'next/navigation';
import { Discord, OAuthTokens, Twitter, User, useOAuthTokens } from '@privy-io/react-auth';
import { useMemo, useCallback } from 'react';

import { WalletCard } from '@/components/dashboard/wallet-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CopyableText } from '@/components/ui/copyable-text';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useUser } from '@/hooks/use-user';
import { cn } from '@/lib/utils';
import {
  formatPrivyId,
  formatUserCreationDate,
  formatWalletAddress,
} from '@/lib/utils/format';
import { getUserID, grantDiscordRole } from '@/lib/utils/grant-discord-role';
import { EmbeddedWallet } from '@/types/db';

import { LoadingStateSkeleton } from './loading-skeleton';

export function AccountContent() {
  const router = useRouter();
  const {
    isLoading,
    user,
    linkTwitter,
    unlinkTwitter,
    linkEmail,
    unlinkEmail,
    linkDiscord,
    unlinkDiscord,
  } = useUser();

  const { reauthorize } = useOAuthTokens({
    onOAuthTokenGrant: useCallback(async (tokens: OAuthTokens, { user }: { user: User }) => {
      try {
        const discordUserId = await getUserID(tokens.accessToken);
        await grantDiscordRole(discordUserId);
      } catch (error) {
        console.error('Failed to grant Discord role:', error);
      }
    }, []),
  });

  const userData = useMemo(() => {
    if (!user?.privyUser) return null;
    const { privyUser } = user;
    return {
      privyId: privyUser.id,
      twitter: privyUser.twitter as Twitter | undefined,
      email: privyUser.email?.address,
      phone: privyUser.phone?.number,
      walletAddress: privyUser.wallet?.address || 'No wallet connected',
      createdAt: formatUserCreationDate(user.createdAt?.toString()),
      discord: privyUser.discord as Discord | undefined,
    };
  }, [user]);

  const wallets = user?.wallets || [];
  const avatarLabel = userData?.walletAddress
    ? userData.walletAddress.substring(0, 2).toUpperCase()
    : '?';

  if (isLoading || !userData) {
    return <LoadingStateSkeleton />;
  }

  return (
    <div className="flex flex-1 flex-col py-8">
      <div className="w-full px-8">
        <div className="max-w-3xl space-y-6">
          <ProfileInformationSection userData={userData} user={user} router={router} />
          <ConnectedAccountsSection userData={userData} linkTwitter={linkTwitter} unlinkTwitter={unlinkTwitter} linkEmail={linkEmail} unlinkEmail={unlinkEmail} linkDiscord={linkDiscord} unlinkDiscord={unlinkDiscord} />
          <WalletsSection wallets={wallets} />
        </div>
      </div>
    </div>
  );
}

interface ProfileInformationSectionProps {
  userData: {
    twitter?: Twitter;
    walletAddress: string;
    createdAt: string;
    privyId: string;
  };
  user: {
    earlyAccess: boolean;
  };
  router: ReturnType<typeof useRouter>;
}

function ProfileInformationSection({ userData, user, router }: ProfileInformationSectionProps) {
  const avatarLabel = userData.walletAddress
    ? userData.walletAddress.substring(0, 2).toUpperCase()
    : '?';

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground">
        Profile Information
      </h2>

      <Card className="bg-sidebar">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10 rounded-lg">
                <AvatarImage
                  src={userData.twitter?.profilePictureUrl}
                  alt="User avatar"
                  className="rounded-lg object-cover"
                />
                <AvatarFallback className="rounded-lg bg-sidebar-accent">
                  {avatarLabel}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">
                  {userData.twitter
                    ? `@${userData.twitter.username}`
                    : formatWalletAddress(userData.walletAddress)}
                </p>
                <p className="text-xs text-muted-foreground">
                  Member since {userData.createdAt}
                </p>
              </div>
            </div>

            <Separator className="bg-sidebar-accent/50" />

            <div className="space-y-4">
              <div>
                <Label htmlFor="account-id" className="text-xs text-muted-foreground">
                  Account ID
                </Label>
                <div className="mt-1">
                  <CopyableText id="account-id" text={formatPrivyId(userData.privyId)} />
                </div>
              </div>
              <div>
                <Label htmlFor="connected-wallet" className="text-xs text-muted-foreground">
                  Connected Wallet
                </Label>
                <div className="mt-1">
                  <CopyableText
                    id="connected-wallet"
                    text={userData.walletAddress}
                    showSolscan={true}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="early-access" className="text-xs text-muted-foreground">
                  Early Access Program
                </Label>
                <div className="mt-1 flex h-8 items-center">
                  <span id="early-access" className={cn('text-sm font-medium')}>
                    {user.earlyAccess ? 'Active' : 'Not Active'}
                  </span>

                  {!user.earlyAccess && (
                    <div className="ml-auto">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => router.push('/home')}
                      >
                        Get Early Access
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

interface ConnectedAccountsSectionProps {
  userData: {
    twitter?: Twitter;
    email?: string;
    discord?: Discord;
  };
  linkTwitter: () => void;
  unlinkTwitter: (subject: string) => void;
  linkEmail: () => void;
  unlinkEmail: (email: string) => void;
  linkDiscord: () => void;
  unlinkDiscord: (subject: string) => void;
}

function ConnectedAccountsSection({
  userData,
  linkTwitter,
  unlinkTwitter,
  linkEmail,
  unlinkEmail,
  linkDiscord,
  unlinkDiscord,
}: ConnectedAccountsSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground">
        Connected Accounts
      </h2>

      <Card className="bg-sidebar">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <ConnectedAccount
              name="X (Twitter)"
              icon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              username={userData.twitter?.username}
              isConnected={!!userData.twitter}
              onConnect={linkTwitter}
              onDisconnect={() => userData.twitter && unlinkTwitter(userData.twitter.subject)}
            />

            <ConnectedAccount
              name="Email"
              icon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              username={userData.email}
              isConnected={!!userData.email}
              onConnect={linkEmail}
              onDisconnect={() => userData.email && unlinkEmail(userData.email)}
            />

            <ConnectedAccount
              name="Discord"
              icon={
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                </svg>
              }
              username={userData.discord?.username}
              isConnected={!!userData.discord}
              onConnect={linkDiscord}
              onDisconnect={() => userData.discord && unlinkDiscord(userData.discord.subject)}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

interface WalletsSectionProps {
  wallets: EmbeddedWallet[];
}

function WalletsSection({ wallets }: WalletsSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground">
        Wallets
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {wallets.length > 0 ? (
          wallets.map((wallet: EmbeddedWallet) => (
            <WalletCard
              key={wallet.id}
              wallet={wallet}
              showBalance={false}
            />
          ))
        ) : (
          <div className="w-full text-center text-sm text-muted-foreground">
            No wallets connected.
          </div>
        )}
      </div>
    </section>
  );
}

interface ConnectedAccountProps {
  name: string;
  icon: React.ReactNode;
  username?: string;
  isConnected: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

function ConnectedAccount({
  name,
  icon,
  username,
  isConnected,
  onConnect,
  onDisconnect,
}: ConnectedAccountProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-accent/50">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {isConnected ? `@${username}` : 'Not connected'}
          </p>
        </div>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={isConnected ? onDisconnect : onConnect}
        className={cn(
          'min-w-[100px] text-xs',
          isConnected && 'hover:bg-destructive hover:text-destructive-foreground',
        )}
      >
        {isConnected ? 'Disconnect' : 'Connect'}
      </Button>
    </div>
  );
}

