'use client';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import PageLoading from '@/components/page-loading';
import RefreshContent from './refresh-content';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-bold text-red-600">Oops! Something went wrong.</h2>
        <p className="text-gray-600">{error.message}</p>
      </div>
    </div>
  );
}

export default function RefreshPage() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<PageLoading />}>
        <RefreshContent />
      </Suspense>
    </ErrorBoundary>
  );
}

