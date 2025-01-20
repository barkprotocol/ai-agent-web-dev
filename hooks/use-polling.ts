import { useEffect } from 'react';

type UsePollingOptions = {
  url: string;
  id: string;
  onUpdate: (newData: any) => void;
  interval?: number;
};

const usePolling = ({
  url,
  id,
  onUpdate,
  interval = 60000,
}: UsePollingOptions) => {
  useEffect(() => {
    const poll = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          return;
        }
        const data = await response.json();

        onUpdate(data); // Pass fetched data to the callback
      } catch (_) {
        // Intentionally ignore the error
      }
    };

    const pollingInterval = setInterval(poll, interval);
    return () => clearInterval(pollingInterval); // Cleanup interval on unmount
  }, [id, onUpdate, interval]);
};

export default usePolling;