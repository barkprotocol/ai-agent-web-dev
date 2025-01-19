'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";

export function DashboardPreview() {
  return (
    <Card className="w-full max-w-4xl mx-auto overflow-hidden shadow-xl bg-gray-900 border border-gray-800">
      <CardContent className="p-0">
        <Image
          src="/capilot-dashboard-preview.jpg"
          alt="AI Dashboard Preview"
          width={1200}
          height={675}
          className="w-full h-auto"
        />
      </CardContent>
    </Card>
  );
}

