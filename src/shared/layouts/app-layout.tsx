import { AppSidebar } from "@/shared/components/app-sidebar"
import { Separator } from "@/shared/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/components/ui/sidebar"
import { Outlet } from "react-router"
import AppBreadcrumb from "../components/app-breadcrumb"

const AppLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <AppBreadcrumb
            data={[
              {
                label: "Build Your Application",
                link: "/home",
              },
              {
                label: "Data Fetching",
              },
            ]}
          />
        </header>
        <div className="flex-1">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout
