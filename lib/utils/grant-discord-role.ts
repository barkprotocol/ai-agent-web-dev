import axios from 'axios';

// Define the interface for the function parameters
interface GrantDiscordRoleParams {
  guildId: string;
  userId: string;
  roleId: string;
}

/**
 * Grants a Discord role to a user in a specific guild (server)
 * @param {GrantDiscordRoleParams} params - The parameters for granting the role
 * @returns {Promise<boolean>} - Returns true if the role was successfully granted, false otherwise
 */
export async function grantDiscordRole({
  guildId,
  userId,
  roleId,
}: GrantDiscordRoleParams): Promise<boolean> {
  const discordApiUrl = 'https://discord.com/api/v10';
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!botToken) {
    console.error('DISCORD_BOT_TOKEN is not set in the environment variables');
    return false;
  }

  try {
    const response = await axios.put(
      `${discordApiUrl}/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      {},
      {
        headers: {
          Authorization: `Bot ${botToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 204) {
      console.log(`Successfully granted role ${roleId} to user ${userId} in guild ${guildId}`);
      return true;
    } else {
      console.error(`Failed to grant role. Status: ${response.status}`);
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error granting Discord role:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error granting Discord role:', error);
    }
    return false;
  }
}

/**
 * Removes a Discord role from a user in a specific guild (server)
 * @param {GrantDiscordRoleParams} params - The parameters for removing the role
 * @returns {Promise<boolean>} - Returns true if the role was successfully removed, false otherwise
 */
export async function removeDiscordRole({
  guildId,
  userId,
  roleId,
}: GrantDiscordRoleParams): Promise<boolean> {
  const discordApiUrl = 'https://discord.com/api/v10';
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!botToken) {
    console.error('DISCORD_BOT_TOKEN is not set in the environment variables');
    return false;
  }

  try {
    const response = await axios.delete(
      `${discordApiUrl}/guilds/${guildId}/members/${userId}/roles/${roleId}`,
      {
        headers: {
          Authorization: `Bot ${botToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.status === 204) {
      console.log(`Successfully removed role ${roleId} from user ${userId} in guild ${guildId}`);
      return true;
    } else {
      console.error(`Failed to remove role. Status: ${response.status}`);
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error removing Discord role:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error removing Discord role:', error);
    }
    return false;
  }
}

/**
 * Checks if a user has a specific role in a Discord guild (server)
 * @param {GrantDiscordRoleParams} params - The parameters for checking the role
 * @returns {Promise<boolean>} - Returns true if the user has the role, false otherwise
 */
export async function hasDiscordRole({
  guildId,
  userId,
  roleId,
}: GrantDiscordRoleParams): Promise<boolean> {
  const discordApiUrl = 'https://discord.com/api/v10';
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!botToken) {
    console.error('DISCORD_BOT_TOKEN is not set in the environment variables');
    return false;
  }

  try {
    const response = await axios.get(
      `${discordApiUrl}/guilds/${guildId}/members/${userId}`,
      {
        headers: {
          Authorization: `Bot ${botToken}`,
        },
      }
    );

    if (response.status === 200) {
      const memberRoles = response.data.roles;
      return memberRoles.includes(roleId);
    } else {
      console.error(`Failed to fetch member data. Status: ${response.status}`);
      return false;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error checking Discord role:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error checking Discord role:', error);
    }
    return false;
  }
}

/**
 * Gets the Discord user ID for the authenticated user
 * @param {string} accessToken - The Discord access token
 * @returns {Promise<string>} - Returns the Discord user ID
 */
export async function getUserID(accessToken: string): Promise<string> {
  const discordApiUrl = 'https://discord.com/api/v10';

  try {
    const response = await axios.get(`${discordApiUrl}/users/@me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200) {
      return response.data.id;
    } else {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching Discord user ID:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error fetching Discord user ID:', error);
    }
    throw error;
  }
}

