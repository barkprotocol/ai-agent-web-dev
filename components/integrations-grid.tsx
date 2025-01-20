import { INTEGRATIONS } from '@/app/data/integrations';
import { IntegrationCard } from '@/components/integration-card';
import { toast } from 'sonner';

export function IntegrationsGrid() {
  const handleIntegrationClick = (label: string) => {
    // TODO: Implement actual integration logic
    toast.info(`Connecting to ${label}...`);
    console.log(`Clicked ${label}`);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {INTEGRATIONS.map((item, index) => (
        <IntegrationCard
          key={item.label}
          item={item}
          index={index}
          onClick={() => handleIntegrationClick(item.label)}
        />
      ))}
    </div>
  );
}

