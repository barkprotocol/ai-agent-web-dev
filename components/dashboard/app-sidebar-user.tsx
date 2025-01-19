'use client';

import { useMemo, useCallback } from 'react';
import Link from 'next/link';
import { RiTwitterXFill } from '@remixicon/react';
import { BookOpen, ChevronsUpDown, HelpCircle, Settings, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import { useUser } from '@/hooks/use-user';

export const AppSidebarUser = () => {
  const { isLoading, user, logout } = useUser();
  const isMobile = useIsMobile();

  const { label, subLabel, twitterUsername, twitterProfileImage } = useMemo(() => {
    const privyUser = user?.privyUser;
    return {
      label: privyUser?.wallet
        ? privyUser.wallet.address.substring(0, 5)
        : privyUser?.email?.address,
      subLabel: privyUser?.id?.substring(10),
      twitterUsername: privyUser?.twitter?.username,
      twitterProfileImage: privyUser?.twitter?.profilePictureUrl,
    };
  }, [user]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleOpenTwitter = useCallback(() => {
    window.open('https://x.com/bark_sh', '_blank', 'noopener,noreferrer');
  }, []);

  const handleOpenDocs = useCallback(() => {
    window.open('https://docs.barkprotocol.net', '_blank', 'noopener,noreferrer');
  }, []);

  const renderUserButton = () => {
    if (isLoading || !user?.privyUser) {
      return (
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Skeleton className="h-8 w-8 rounded-lg" />
          <div className="grid flex-1 gap-1 text-left text-sm leading-tight">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="ml-auto size-4" />
        </SidebarMenuButton>
      );
    }

    return (
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={twitterProfileImage || undefined} alt={label || 'User avatar'} />
          <AvatarFallback className="rounded-lg">
            {label?.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">
            {twitterUsername ? `@${twitterUsername}` : label}
          </span>
          <span className="truncate text-xs text-muted-foreground">
            {subLabel}
          </span>
        </div>
        <ChevronsUpDown className="ml-auto size-4" aria-hidden="true" />
      </SidebarMenuButton>
    );
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {renderUserButton()}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleOpenTwitter}>
                <RiTwitterXFill className="mr-2 h-4 w-4" aria-hidden="true" />
                Follow us on X
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/faq">
                  <HelpCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                  FAQ
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem onClick={handleOpenDocs}>
                <BookOpen className="mr-2 h-4 w-4" aria-hidden="true" />
                Docs
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Link href="/account">
                  <Settings className="mr-2 h-4 w-4" aria-hidden="true" />
                  Account
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

