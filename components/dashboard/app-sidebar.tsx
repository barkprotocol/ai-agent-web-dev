"use client"

import { useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Brain, HomeIcon, Bot, Workflow } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { APP_VERSION, IS_BETA } from "@/lib/constants"
import { AppSidebarConversations } from "./app-sidebar-conversations"
import { AppSidebarUser } from "./app-sidebar-user"

const AppSidebarHeader = () => {
  return (
    <SidebarHeader>
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2 pl-2">
          <img
            src="https://ucarecdn.com/bbc74eca-8e0d-4147-8a66-6589a55ae8d0/bark.webp"
            alt="BARK Logo"
            className="h-8 w-8"
          />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-medium leading-none">AI Chatbot</span>
            <span className="font-inter font-semibold text-xs text-muted-foreground">BARK</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <div className="flex items-center gap-1.5 group-data-[collapsible=icon]:hidden">
            {IS_BETA && (
              <span className="select-none rounded-md bg-primary/90 px-1.5 py-0.5 text-xs text-primary-foreground">
                BETA
              </span>
            )}
            <span className="select-none rounded-md bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
              {APP_VERSION}
            </span>
          </div>
        </div>
      </div>
    </SidebarHeader>
  )
}

const AppSidebarFooter = () => {
  return (
    <SidebarFooter>
      <AppSidebarUser />
    </SidebarFooter>
  )
}

type ExploreItem = {
  title: string
  url: string
  segment: string
  icon: React.ComponentType<{ className?: string }>
  external: boolean
}

const ExploreItems: ExploreItem[] = [
  {
    title: "Home",
    url: "/home",
    segment: "home",
    icon: HomeIcon,
    external: false,
  },
  {
    title: "Docs",
    url: "https://docs.barkprotocol.net",
    segment: "docs",
    icon: BookOpen,
    external: true,
  },
  {
    title: "Memories",
    url: "/memories",
    segment: "memories",
    icon: Brain,
    external: false,
  },
  {
    title: "Agents",
    url: "/agents",
    segment: "agents",
    icon: Bot,
    external: false,
  },
  {
    title: "Automations",
    url: "/automations",
    segment: "automations",
    icon: Workflow,
    external: false,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  const getIsActive = useMemo(() => {
    return (itemSegment: string) => {
      if (itemSegment === "home") {
        return pathname === "/home"
      }
      return pathname.startsWith(`/${itemSegment}`)
    }
  }, [pathname])

  return (
    <Sidebar variant="sidebar" collapsible="icon" className="hidden md:flex">
      <AppSidebarHeader />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Explore</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {ExploreItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={getIsActive(item.segment)}>
                    <Link
                      href={item.url}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      <item.icon aria-hidden="true" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <AppSidebarConversations />
      </SidebarContent>

      <AppSidebarFooter />
    </Sidebar>
  )
}

