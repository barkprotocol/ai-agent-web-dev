'use client';

import { Suspense, useEffect, useState } from 'react';
import { HomeContent } from './home-content';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ErrorBoundary } from '@/components/ui/error-boundary';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        {isLoaded && <HomeContent />}
      </Suspense>
    </ErrorBoundary>
  );
}

