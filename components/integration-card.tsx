import Image from 'next/image';
import { Integration } from '@/app/data/integrations';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface IntegrationCardProps {
  item: Integration;
  index: number;
  onClick: () => void;
}

export function IntegrationCard({ item, index, onClick }: IntegrationCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <Image
                src={item.icon || "/placeholder.svg"}
                alt={`${item.label} icon`}
                fill
                className="rounded-md object-contain"
              />
            </div>
            <CardTitle>{item.label}</CardTitle>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Open {item.label} website</span>
            </a>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{item.description}</CardDescription>
        <Button 
          variant="outline" 
          className="mt-4 w-full" 
          onClick={onClick}
        >
          Connect
        </Button>
      </CardContent>
    </Card>
  );
}

