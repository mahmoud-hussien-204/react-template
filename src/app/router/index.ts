import SplashScreen from "@/shared/components/other/splash-screen"
import { ErrorLayoutRoute } from "@/shared/layouts/error-layout"
import { createBrowserRouter } from "react-router"
import { appLoader, rootLoader } from "./guards"
import { authRoutes } from "@/modules/auth/routes"

export const routes = createBrowserRouter([
  // app routes
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/shared/layouts/root-layout")).default,
    }),
    HydrateFallback: SplashScreen,
    ErrorBoundary: ErrorLayoutRoute,
    loader: rootLoader,
    children: [
      {
        path: "",
        lazy: async () => ({
          Component: (await import("@/shared/layouts/app-layout")).default,
        }),
        children: [],
        loader: appLoader,
      },

      // auth routes
      ...authRoutes,
    ],
  },

  // access denied route
  {
    path: "access-denied",
    lazy: async () => ({
      Component: (await import("@/shared/layouts/access-denied-layout"))
        .default,
    }),
  },

  // not found route
  {
    path: "*",
    lazy: async () => ({
      Component: (await import("@/shared/layouts/not-found-layout")).default,
    }),
    HydrateFallback: SplashScreen,
  },
])
