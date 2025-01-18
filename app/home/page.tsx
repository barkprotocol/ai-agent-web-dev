import { Metadata } from 'next';
import { Suspense } from 'react';

import { HomeContent } from './home-content';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export const metadata: Metadata = {
  title: 'Home | Bark AI Agent Dashboard',
  description: 'Your AI assistant for everything Solana',
};

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomeContent />
    </Suspense>
  );
}

