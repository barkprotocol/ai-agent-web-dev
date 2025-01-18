import { Metadata } from 'next';
import { Suspense } from 'react';

import { AccountContent } from './account-content';
import { LoadingStateSkeleton } from './loading-skeleton';

export const metadata: Metadata = {
  title: 'Account | BARK AI Agent',
  description: 'Manage your BARK AI Agent account settings and connected services',
};

export default function AccountPage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <header className="border-b border-sidebar-accent bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 w-full items-center px-8">
          <h1 className="text-lg font-medium">Account</h1>
        </div>
      </header>

      <main className="flex-1 overflow-auto">
        <Suspense fallback={<LoadingStateSkeleton />}>
          <AccountContent />
        </Suspense>
      </main>
    </div>
  );
}

