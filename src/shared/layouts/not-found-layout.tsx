import { ReplyIcon } from "lucide-react"
import AnimatedPage from "../components/animation/page-animation"
import NotFoundIcon from "../components/icons/not-found-icon"
import { ButtonLink } from "../components/ui/button-link"
import Container from "../components/other/container"
import { Trans } from "react-i18next"

const NotFoundLayout = () => {
  return (
    <AnimatedPage>
      <section className="grid h-dvh place-items-center bg-white">
        <Container className="flex flex-col items-center justify-center gap-8 text-center lg:flex-row lg:text-start">
          <NotFoundIcon />
          <div>
            <h1 className="mb-2 text-4xl font-bold text-primary">404</h1>
            <h6 className="mb-1 text-xl">
              <Trans i18nKey="common.notFound.title" />
            </h6>
            <p className="max-w-lg text-lg text-muted-foreground">
              <Trans i18nKey="common.notFound.description" />
            </p>
            <ButtonLink to="/" className="mt-6">
              <ReplyIcon />
              <Trans i18nKey="common.notFound.goHome" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </AnimatedPage>
  )
}

export default NotFoundLayout
