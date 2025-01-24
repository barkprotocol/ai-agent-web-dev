import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Replace with target URL
    const targetUrl = '/home';
    router.push(targetUrl);
  }, [router]);

  return null;
};

export default RedirectPage;
