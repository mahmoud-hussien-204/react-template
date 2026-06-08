import { createBrowserRouter } from "react-router"

export const routes = createBrowserRouter([
  // auth routes
  {
    path: "/auth",
    lazy: async () => ({
      Component: (await import("@/modules/auth/layout")).default,
    }),
  },

  // app routes
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("@/shared/layouts/app-layout")).default,
    }),

    children: [],
  },

  // access denied route
  {
    path: "/access-denied",
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
  },
])
