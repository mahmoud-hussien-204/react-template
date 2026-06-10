import type { FallbackProps } from "react-error-boundary"
import { Trans, useTranslation } from "react-i18next"
import AnimatedPage from "../components/animation/page-animation"
import Container from "../components/other/container"
import { ReplyIcon } from "lucide-react"
import { Button } from "../components/ui/button"
import { isRouteErrorResponse, useRouteError } from "react-router"
import ErrorIcon from "../components/icons/error-icon"

const ErrorLayout = ({ error }: FallbackProps) => {
  return <Content error={(error as Error).message} />
}

export default ErrorLayout

export const ErrorLayoutRoute = () => {
  const { t } = useTranslation()

  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return <Content error={error.data} />
  } else if (error instanceof Error) {
    return <Content error={error.message} />
  }
  return <Content error={t("common.error.unknown")} />
}

const Content = ({ error }: { error: string }) => (
  <AnimatedPage>
    <section className="grid h-dvh place-items-center bg-white">
      <Container className="flex flex-col items-center justify-center gap-8 text-center lg:flex-row lg:text-start">
        <ErrorIcon />
        <div>
          <h1 className="mb-2 text-4xl font-bold text-primary">Oops!</h1>
          <h6 className="mb-1 text-xl">
            <Trans i18nKey="common.error.title" />
          </h6>
          <p className="max-w-lg text-lg text-muted-foreground">{error}</p>
          <Button className="mt-6" onClick={() => location.reload()}>
            <ReplyIcon />
            <Trans i18nKey="common.error.reload" />
          </Button>
        </div>
      </Container>
    </section>
  </AnimatedPage>
)
