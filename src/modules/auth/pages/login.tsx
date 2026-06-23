import AnimatedPage from "@/shared/components/animation/page-animation"
import { usePageMetaData } from "@/shared/hooks/use-page-meta-data"
import { useLogin } from "../hooks/use-login"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/shared/components/ui/field"
import { Controller } from "react-hook-form"
import { Input } from "@/shared/components/ui/input"
import { Button } from "@/shared/components/ui/button"

const Login = () => {
  usePageMetaData({
    title: "auth.loginPageTitle",
  })
  const { isDisabled, isPending, handleSubmit, form } = useLogin()
  return (
    <AnimatedPage>
      <form className="mx-auto max-w-xl" onSubmit={handleSubmit}>
        <FieldGroup>
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-rhf-demo-title">Bug Title</FieldLabel>
                <Input
                  {...field}
                  id="form-rhf-demo-title"
                  aria-invalid={fieldState.invalid}
                  placeholder="Login button not working on mobile"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>

        <Button
          type="submit"
          isLoading={isPending}
          disabled={isDisabled}
          className="mt-8 w-full"
        >
          Submit
        </Button>
      </form>
    </AnimatedPage>
  )
}

export default Login
