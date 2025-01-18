import React from 'react';

interface TweetProps {
  id: string;
  apiUrl: string;
  fallback?: React.ReactNode;
  components?: {
    TweetNotFound?: React.ReactNode;
  };
  fetchOptions?: RequestInit;
  onError?: (error: any) => React.ReactNode;
}

const TweetSkeleton: React.FC = () => <div>Loading...</div>;
const TweetNotFound: React.FC<{ error?: any }> = ({ error }) => (
  <div>Error: {error?.message || 'Something went wrong'}</div>
);

export const ClientTweetCard: React.FC<TweetProps & { className?: string }> = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}) => {
  const [data, setData] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl, fetchOptions);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, fetchOptions]);

  const NotFound = React.useMemo(
    () => components?.TweetNotFound || TweetNotFound,
    [components?.TweetNotFound]
  );

  if (isLoading) return fallback;
  if (error || !data) {
    return <NotFound error={onError ? onError(error) : error} />;
  }

  return <MagicTweet tweet={data} components={components} {...props} />;
};


// Placeholder for MagicTweet component.  Replace with your actual implementation.
const MagicTweet: React.FC<{ tweet: any; components?: any }> = ({ tweet }) => (
  <div>
    <h1>Magic Tweet!</h1>
    <p>{JSON.stringify(tweet)}</p>
  </div>
);

