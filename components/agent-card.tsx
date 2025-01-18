import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface AgentCardProps {
  agent: {
    name: string;
    description: string;
    icon: string;
  };
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-2xl">
              {agent.icon}
            </div>
            <CardTitle>{agent.name}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="mb-4">{agent.description}</CardDescription>
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => console.log(`Activating ${agent.name}`)}
        >
          Activate Agent
        </Button>
      </CardContent>
    </Card>
  );
}

