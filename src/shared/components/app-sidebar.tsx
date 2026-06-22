import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar"
import AppLogo from "./app-logo"
import { DATA_NAV } from "@/data/nav"
import { NavLink } from "react-router"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sidebarLinks = DATA_NAV.admin

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {sidebarLinks.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  render={
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive ? "text-red-400" : ""
                      }
                    >
                      <item.icon />
                      {item.title}
                    </NavLink>
                  }
                ></SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
