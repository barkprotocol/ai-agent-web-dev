'use client';

import { useState } from 'react';
import { Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { checkEAPTransaction } from '@/server/actions/eap-transaction';
import { cn } from '@/lib/utils';

interface TransactionResult {
  success: boolean;
  message: string;
}

export function EAPTransactionChecker() {
  const [txHash, setTxHash] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<TransactionResult | null>(null);

  async function handleCheck() {
    if (!txHash.trim()) {
      toast({
        title: "Error",
        description: "Please enter a transaction hash",
        variant: "destructive",
      });
      return;
    }

    setIsChecking(true);
    try {
      const response = await checkEAPTransaction({ txHash });
      if (response?.data?.success) {
        setResult({
          success: true,
          message: 'Transaction verified successfully. EAP has been granted to your account.',
        });
        toast({
          title: "Success",
          description: "EAP granted successfully!",
        });
      } else {
        setResult({
          success: false,
          message: response?.error || 'Failed to verify transaction. Please try again or contact support.',
        });
        toast({
          title: "Verification failed",
          description: "Please check your transaction hash and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('EAP transaction check error:', error);
      setResult({
        success: false,
        message: 'An unexpected error occurred. Please try again or contact support.',
      });
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsChecking(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <Input
          placeholder="Paste transaction hash"
          value={txHash}
          onChange={(e) => setTxHash(e.target.value)}
          className="flex-grow"
          disabled={isChecking}
        />
        <Button 
          onClick={handleCheck} 
          disabled={isChecking || !txHash.trim()}
          className="w-full sm:w-auto"
        >
          {isChecking ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying
            </>
          ) : (
            'Verify Transaction'
          )}
        </Button>
      </div>

      <AlertDialog open={!!result} onOpenChange={() => setResult(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className={cn(
              "flex items-center gap-2",
              result?.success ? "text-green-600" : "text-red-600"
            )}>
              {result?.success ? (
                <>
                  <CheckCircle2 className="h-5 w-5" />
                  Transaction Verified
                </>
              ) : (
                <>
                  <AlertCircle className="h-5 w-5" />
                  Verification Failed
                </>
              )}
            </AlertDialogTitle>
            <AlertDialogDescription>{result?.message}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

