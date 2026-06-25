import { Outlet } from "react-router"
import PatternsIcon from "../components/icons/patterns-icon"
import AppLogo from "@/shared/components/app-logo"
import { Trans } from "react-i18next"
import AppLanguageSwitcher from "@/shared/components/app-language-switcher"

const AuthLayout = () => {
  return (
    <div className="grid h-dvh grid-cols-2 gap-12 bg-white p-4">
      <div className="sticky top-8 rounded-xl bg-auth-layout p-8 text-auth-layout-foreground">
        <div className="px-12 lg:max-w-xl">
          <AppLogo />
          <h3 className="mt-8 text-xl">
            <Trans i18nKey="auth.title" />
          </h3>
          <h4 className="mt-2 text-Text-T-300">
            <Trans i18nKey="auth.description" />
          </h4>
        </div>
        <PatternsIcon />
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 flex items-center justify-end bg-white py-1">
          <AppLanguageSwitcher />
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
