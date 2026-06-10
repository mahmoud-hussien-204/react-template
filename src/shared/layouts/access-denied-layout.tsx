import { Trans } from "react-i18next"
import AnimatedPage from "../components/animation/page-animation"
import AccessDeniedIcon from "../components/icons/access-denied-icon"
import Container from "../components/other/container"
import { ButtonLink } from "../components/ui/button-link"
import { ReplyIcon } from "lucide-react"

const AccessDeniedLayout = () => {
  return (
    <AnimatedPage>
      <section className="grid h-dvh place-items-center bg-white">
        <Container className="flex flex-col items-center justify-center gap-8 text-center lg:flex-row lg:text-start">
          <AccessDeniedIcon />
          <div>
            <h1 className="mb-2 text-4xl font-bold text-primary">403</h1>
            <h6 className="mb-1 text-xl">
              <Trans i18nKey="common.accessDenied.title" />
            </h6>
            <p className="max-w-lg text-lg text-muted-foreground">
              <Trans i18nKey="common.accessDenied.description" />
            </p>
            <ButtonLink to="/" className="mt-6">
              <ReplyIcon />
              <Trans i18nKey="common.accessDenied.goHome" />
            </ButtonLink>
          </div>
        </Container>
      </section>
    </AnimatedPage>
  )
}

export default AccessDeniedLayout
