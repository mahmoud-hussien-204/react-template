import { t } from "i18next"
import { HouseIcon, UsersIcon, WaypointsIcon, WrenchIcon } from "lucide-react"

export const DATA_NAV = {
  user: [
    {
      title: t("nav.dashboard"),
      link: "/dashboard",
      icon: HouseIcon,
      index: true,
    },
    {
      title: t("nav.settings"),
      link: "/settings",
      icon: WrenchIcon,
    },
  ],
  admin: [
    {
      title: t("nav.dashboard"),
      link: "/dashboard",
      icon: HouseIcon,
      index: true,
    },
    {
      title: t("nav.users"),
      link: "/users",
      icon: UsersIcon,
    },
    {
      title: t("nav.wizard"),
      link: "/wizard",
      icon: WaypointsIcon,
    },
    {
      title: t("nav.settings"),
      link: "/settings",
      icon: WrenchIcon,
    },
  ],
}
