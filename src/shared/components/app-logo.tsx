import { Link } from "react-router"

const AppLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 text-xl">
      <img src="/vite.svg" alt="app logo" />
      App Logo
    </Link>
  )
}

export default AppLogo
