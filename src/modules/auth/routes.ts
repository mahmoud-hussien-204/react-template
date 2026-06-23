import { authLoader } from "@/app/router/guards"
import type { RouteObject } from "react-router"

export const authRoutes: RouteObject[] = [
  {
    path: "auth",
    lazy: async () => ({
      Component: (await import("./layout")).default,
    }),
    loader: authLoader,
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("./pages/login")).default,
        }),
      },
      {
        path: "login",
        lazy: async () => ({
          Component: (await import("./pages/login")).default,
        }),
      },
    ],
  },
]
