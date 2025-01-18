import { Loader2 } from 'lucide-react';

export default function PageLoading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background" aria-label="Loading page">
      <div className="flex flex-col items-center gap-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden="true"/>
        <span className="sr-only">Loading, please wait...</span>
      </div>
    </div>
  );
}

