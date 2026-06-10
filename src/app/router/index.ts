import SplashScreen from "@/shared/components/other/splash-screen"
import { ErrorLayoutRoute } from "@/shared/layouts/error-layout"
import { createBrowserRouter } from "react-router"

export const routes = createBrowserRouter([
  // app routes
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/shared/layouts/root-layout")).default,
    }),
    HydrateFallback: SplashScreen,
    ErrorBoundary: ErrorLayoutRoute,
    children: [
      {
        path: "",
        lazy: async () => ({
          Component: (await import("@/shared/layouts/app-layout")).default,
        }),
        children: [],
      },

      // auth routes
      {
        path: "auth",
        lazy: async () => ({
          Component: (await import("@/modules/auth/layout")).default,
        }),
      },

      // access denied route
      {
        path: "access-denied",
        lazy: async () => ({
          Component: (await import("@/shared/layouts/access-denied-layout"))
            .default,
        }),
      },
    ],
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
