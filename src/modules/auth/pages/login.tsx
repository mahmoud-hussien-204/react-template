import AnimatedPage from "@/shared/components/animation/page-animation"
import { usePageMetaData } from "@/shared/hooks/use-page-meta-data"
import { useLogin } from "../hooks/use-login"
import { FieldGroup } from "@/shared/components/ui/field"
import { InputField } from "@/shared/components/ui/input"
import { Button } from "@/shared/components/ui/button"
import { Trans, useTranslation } from "react-i18next"
import { Link } from "react-router"
import FormTitle from "../components/form-title"

const Login = () => {
  usePageMetaData({
    title: "auth.loginPageTitle",
  })

  const { t } = useTranslation()

  const { isDisabled, isPending, handleSubmit, form } = useLogin()

  return (
    <AnimatedPage>
      <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
        <FormTitle
          title={t("auth.login.title")}
          subtitle={t("auth.login.subtitle")}
        />
        <FieldGroup>
          <InputField
            control={form.control}
            name="email"
            fieldLabelProps={{
              htmlFor: "login-form-email",
              children: t("fields.labels.email"),
            }}
            inputProps={{
              type: "email",
              id: "login-form-email",
              placeholder: t("fields.placeholders.email"),
              autoComplete: "email",
            }}
          />

          <div className="relative">
            <InputField
              control={form.control}
              name="password"
              fieldLabelProps={{
                htmlFor: "login-form-password",
                children: t("fields.labels.password"),
              }}
              inputProps={{
                type: "password",
                id: "login-form-password",
                placeholder: t("fields.placeholders.password"),
                autoComplete: "current-password",
              }}
            />
            <Link
              to="/auth/forgot-password"
              className="absolute inset-e-0 top-19 text-xs font-medium text-primary"
            >
              Forgot Password?
            </Link>
          </div>
        </FieldGroup>
        <Button
          type="submit"
          isLoading={isPending}
          disabled={isDisabled}
          className="mt-12 w-full"
        >
          Submit
        </Button>
        <h6 className="mt-6 text-center text-sm">
          <Trans
            i18nKey="auth.login.dontHaveAccount"
            components={{
              Link: <Link to="/auth/register" className="text-primary" />,
            }}
          />
        </h6>
      </form>
    </AnimatedPage>
  )
}

export default Login
