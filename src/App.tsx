import { AnimatePresence } from "framer-motion"
import { RouterProvider } from "react-router/dom"
import { routes } from "./app/router"

export function App() {
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={routes} />
    </AnimatePresence>
  )
}

export default App
