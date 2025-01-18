import { DiscordData } from './discord-data';

export function DiscordDataExample() {
  return (
    <div className="space-y-4">
      <DiscordData 
        endpoint="/users/@me/guilds"
        title="My Discord Servers"
      />
      
      <DiscordData 
        endpoint="/users/@me"
        title="My Discord Profile"
      />
    </div>
  );
}

