'use client';

import { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { useFundWallet } from '@privy-io/react-auth/solana';
import { ArrowUpDown, Banknote, HelpCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import useSWR from 'swr';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Card, CardContent } from '@/components/ui/card';
import { CopyableText } from '@/components/ui/copyable-text';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SolanaUtils } from '@/lib/solana';
import { cn } from '@/lib/utils';
import { embeddedWalletSendSOL } from '@/server/actions/wallet';
import { EmbeddedWallet } from '@/types/db';
import { Button } from '../ui/button';

const PERCENTAGE_OPTIONS = [
  { label: '25%', value: 0.25 },
  { label: '50%', value: 0.5 },
  { label: '100%', value: 1 },
];
const TRANSACTION_FEE_RESERVE = 0.005;
const MIN_AMOUNT = 0.000001;

export function WalletCard({ wallet }: { wallet: EmbeddedWallet }) {
  const { fundWallet } = useFundWallet();
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [sendStatus, setSendStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { data: balance = 0, isLoading: isBalanceLoading } = useSWR(
    ['solana-balance', wallet.publicKey],
    () => SolanaUtils.getBalance(wallet.publicKey),
    { refreshInterval: 30000 },
  );

  const handleSendSol = useCallback(async () => {
    try {
      setSendStatus('processing');
      setIsLoading(true);
      setErrorMessage(null);

      const result = await embeddedWalletSendSOL({
        walletId: wallet.id,
        recipientAddress,
        amount: parseFloat(amount),
      });
      const data = result?.data;
      const txHash = data?.data;

      if (data?.success && txHash) {
        setTxHash(txHash);
        setSendStatus('success');
        toast.success('Transaction Successful', {
          description: 'Your transaction has been confirmed on the blockchain.',
        });
      } else {
        setSendStatus('error');
        setErrorMessage(result?.data?.error || 'Unknown error');
        toast.error('Transaction Failed', {
          description: result?.data?.error || 'An unexpected error occurred while processing your transaction.',
        });
      }
    } catch (error) {
      setSendStatus('error');
      const errorMsg = error instanceof Error ? error.message : 'Unknown error';
      setErrorMessage(errorMsg);
      toast.error('Transaction Failed', {
        description: errorMsg,
      });
    } finally {
      setIsLoading(false);
    }
  }, [wallet.id, recipientAddress, amount]);

  const handleClose = useCallback(() => {
    setIsSendDialogOpen(false);
    setSendStatus('idle');
    setTxHash(null);
    setErrorMessage(null);
    setRecipientAddress('');
    setAmount('');
  }, []);

  const isAmountValid = useMemo(() => {
    const numAmount = parseFloat(amount);
    return amount !== '' && !isNaN(numAmount) && numAmount >= MIN_AMOUNT && numAmount <= balance - TRANSACTION_FEE_RESERVE;
  }, [amount, balance]);

  const renderBalanceDisplay = useCallback(() => (
    <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-2">
      <span className="text-sm text-muted-foreground">Available Balance:</span>
      <span className="text-base font-medium">
        {isBalanceLoading ? (
          <span className="text-muted-foreground">Loading...</span>
        ) : (
          <span>{balance.toFixed(4)} SOL</span>
        )}
      </span>
    </div>
  ), [balance, isBalanceLoading]);

  return (
    <>
      <Card className="bg-sidebar">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <Label className="text-xs text-muted-foreground">Public Key</Label>
              <div className="mt-1 font-mono text-xs">
                <CopyableText text={wallet.publicKey} showSolscan={true} />
              </div>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Balance</Label>
              <div className="mt-1 text-lg font-medium">
                {isBalanceLoading ? (
                  <span className="text-muted-foreground">Loading...</span>
                ) : (
                  <span>{balance.toFixed(4)} SOL</span>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={() => fundWallet(wallet.publicKey, { cluster: { name: 'mainnet-beta' } })}
              >
                <Banknote className="mr-2 h-4 w-4" />
                <span>Fund</span>
              </Button>
              <Button variant="outline" onClick={() => setIsSendDialogOpen(true)}>
                <ArrowUpDown className="mr-2 h-4 w-4" />
                <span>Send</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <AlertDialog open={isSendDialogOpen} onOpenChange={(open) => !open && sendStatus !== 'processing' && handleClose()}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Send SOL</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="mt-2 space-y-4">
            {renderBalanceDisplay()}
            <AlertDialogDescription className="text-sm text-muted-foreground">
              Send SOL to any Solana wallet address. Make sure to verify the recipient&apos;s address before sending.
            </AlertDialogDescription>
          </div>
          {sendStatus === 'idle' && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="recipient-address">Recipient Address</Label>
                <Input
                  id="recipient-address"
                  value={recipientAddress}
                  onChange={(e) => setRecipientAddress(e.target.value)}
                  placeholder="Enter Solana address"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (SOL)</Label>
                <Input
                  id="amount"
                  type="text"
                  inputMode="decimal"
                  value={amount}
                  onChange={(e) => {
                    if (e.target.value === '' || /^\d*\.?\d*$/.test(e.target.value)) {
                      const numValue = parseFloat(e.target.value);
                      if (e.target.value === '' || numValue <= balance) {
                        setAmount(e.target.value);
                      }
                    }
                  }}
                  placeholder={`Enter amount (max ${(balance - TRANSACTION_FEE_RESERVE).toFixed(4)} SOL)`}
                />
                {amount && !isNaN(parseFloat(amount)) && (
                  <div className="text-sm text-muted-foreground">
                    You will send {parseFloat(amount).toFixed(4)} SOL
                    {parseFloat(amount) > balance - TRANSACTION_FEE_RESERVE && (
                      <div className="mt-1 text-destructive">
                        Insufficient balance (need to reserve 0.005 SOL for transaction fee)
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {PERCENTAGE_OPTIONS.map(({ label, value }) => {
                  const calculatedAmount = (balance - TRANSACTION_FEE_RESERVE) * value;
                  return (
                    <Button
                      key={value}
                      variant="outline"
                      size="sm"
                      onClick={() => setAmount(calculatedAmount.toFixed(4))}
                      className={cn(
                        'min-w-[60px]',
                        amount === calculatedAmount.toFixed(4) &&
                          'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground',
                      )}
                      disabled={balance <= TRANSACTION_FEE_RESERVE}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
          {sendStatus === 'success' && txHash && (
            <div className="truncate py-4">
              <div className="rounded-lg border bg-muted/30 p-4">
                <p className="mb-2 text-sm font-medium">Transaction Hash:</p>
                <CopyableText text={txHash} showSolscan={true} />
              </div>
            </div>
          )}
          {sendStatus === 'error' && errorMessage && (
            <div className="py-4">
              <div className="rounded-lg bg-destructive/10 p-4 text-destructive">
                {errorMessage}
              </div>
            </div>
          )}
          <AlertDialogFooter className="flex items-center justify-between gap-4">
            <Link
              href="/faq#send-sol"
              className="flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              Need help?
            </Link>
            <div className="flex gap-2">
              {sendStatus === 'idle' && (
                <>
                  <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
                  <Button onClick={handleSendSol} disabled={isLoading || !isAmountValid || !recipientAddress}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing
                      </>
                    ) : (
                      'Send'
                    )}
                  </Button>
                </>
              )}
              {(sendStatus === 'success' || sendStatus === 'error') && (
                <Button onClick={handleClose}>Close</Button>
              )}
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

