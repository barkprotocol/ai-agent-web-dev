import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface SkeletonSectionProps {
  title: string;
  children: React.ReactNode;
}

function SkeletonSection({ title, children }: SkeletonSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground">
        {title}
      </h2>
      <Card className="bg-sidebar">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {children}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

function SkeletonField({ label }: { label: string }) {
  return (
    <div>
      <Label className="text-xs text-muted-foreground">
        {label}
      </Label>
      <div className="mt-1">
        <Skeleton className="h-6 w-full" />
      </div>
    </div>
  );
}

function SkeletonConnectedAccount() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Skeleton className="h-9 w-9 rounded-lg" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
      <Skeleton className="h-8 w-20 rounded-md" />
    </div>
  );
}

export function LoadingStateSkeleton() {
  return (
    <div className="flex flex-1 flex-col py-8" aria-busy="true" aria-label="Loading account information">
      <div className="w-full px-8">
        <div className="max-w-3xl space-y-6">
          <SkeletonSection title="Profile Information">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-40" />
              </div>
            </div>

            <Separator className="bg-sidebar-accent/50" />

            <SkeletonField label="Account ID" />
            <SkeletonField label="Connected Wallet" />
            <SkeletonField label="Synapses" />
          </SkeletonSection>

          <SkeletonSection title="Connected Accounts">
            <SkeletonConnectedAccount />
            <SkeletonConnectedAccount />
          </SkeletonSection>

          <SkeletonSection title="Embedded Wallet">
            <SkeletonField label="Public Key" />
            <div>
              <Label className="text-xs text-muted-foreground">
                Balance
              </Label>
              <div className="mt-1">
                <Skeleton className="h-8 w-32" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-9 w-24 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </div>
          </SkeletonSection>
        </div>
      </div>
    </div>
  );
}

