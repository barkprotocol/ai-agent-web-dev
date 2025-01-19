'use client';

import { useMemo } from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import { toSolanaWalletConnectors } from '@privy-io/react-auth/solana';
import { useTheme } from 'next-themes';

const LIGHT_LOGO_URL = 'https://ucarecdn.com/9a2cc40e-f557-4512-82e4-5dbe3e5e07d3/BARKAI.svg';
const DARK_LOGO_URL = 'https://ucarecdn.com/9a2cc40e-f557-4512-82e4-5dbe3e5e07d3/BARKAI.svg';

interface AuthProvidersProps {
  children: React.ReactNode;
}

export function AuthProviders({ children }: AuthProvidersProps) {
  const { resolvedTheme } = useTheme();

  const solanaConnectors = useMemo(() => toSolanaWalletConnectors({
    shouldAutoConnect: false,
  }), []);

  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID;

  if (!privyAppId) {
    console.error('NEXT_PUBLIC_PRIVY_APP_ID is not set');
    return null;
  }

  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        appearance: {
          theme: resolvedTheme === 'dark' ? 'dark' : 'light',
          logo: resolvedTheme === 'dark' ? DARK_LOGO_URL : LIGHT_LOGO_URL,
        },
        externalWallets: {
          solana: {
            connectors: solanaConnectors,
          },
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}


