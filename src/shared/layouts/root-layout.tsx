import { Outlet } from "react-router"
import OfflineLayout from "./offline-layout"

const RootLayout = () => {
  return (
    <main>
      <OfflineLayout>
        <Outlet />
      </OfflineLayout>
    </main>
  )
}

export default RootLayout
