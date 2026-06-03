import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "./shared/components/providers/theme-provider.tsx"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./lib/react-query.ts"
import "./app/styles/index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
)
