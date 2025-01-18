import { Metadata } from 'next';
import { Suspense, useEffect, useState } from 'react';
import { HomeContent } from './home-content';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ErrorBoundary } from '@/components/ui/error-boundary';

export const metadata: Metadata = {
  title: 'Home | Bark AI Agent Dashboard',
  description: 'Your AI assistant for everything Solana',
};

export default function HomePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data on the client-side
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://api.barkprotocol.net/userdata');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        setData(data); // Set fetched data
      } catch (err) {
        setError(err); // Set error state
      } finally {
        setLoading(false); // Stop loading
      }
    }
    fetchData(); // Trigger data fetching
  }, []);

  if (loading) {
    return <LoadingSpinner />; // Show spinner while loading
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error message if any error occurs
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        {/* Pass the fetched data as a prop to the HomeContent component */}
        <HomeContent data={data} />
      </Suspense>
    </ErrorBoundary>
  );
}
