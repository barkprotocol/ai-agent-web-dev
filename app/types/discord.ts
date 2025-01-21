export interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string | null
  bot?: boolean
  system?: boolean
  banner?: string | null
  accent_color?: number | null
}

export interface DiscordGuild {
  id: string
  name: string
  icon: string | null
  description: string | null
  member_count: number
  presence_count: number
}

export interface DiscordRole {
  id: string
  name: string
  color: number
  position: number
  permissions: string
}

export interface DiscordData {
  user?: DiscordUser
  guild?: DiscordGuild
  roles?: DiscordRole[]
  error?: string
}

export type DiscordFetchStatus = "idle" | "loading" | "success" | "error"

