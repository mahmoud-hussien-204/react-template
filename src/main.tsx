import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "./shared/components/providers/theme-provider.tsx"
import { QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "./shared/components/ui/sonner.tsx"
import { ErrorBoundary } from "react-error-boundary"
import { queryClient } from "./lib/react-query/index.ts"
import ErrorLayout from "./shared/layouts/error-layout.tsx"
import "@/i18n/index.ts"
import "./app/styles/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorLayout}>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster position="bottom-right" />
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
)
