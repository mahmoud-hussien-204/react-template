import { Trans } from "react-i18next"
import AnimatedPage from "../components/animation/page-animation"
import Container from "../components/other/container"
import { useNetworkStatus } from "../hooks/use-network-status"
import OfflineIcon from "../components/icons/offline-icon"

const OfflineLayout = ({ children }: React.PropsWithChildren) => {
  const { isOffline } = useNetworkStatus()

  if (isOffline)
    return (
      <AnimatedPage>
        <section className="grid h-dvh place-items-center bg-white">
          <Container className="flex flex-col items-center justify-center gap-8 text-center lg:flex-row lg:text-start">
            <OfflineIcon />
            <div>
              <h1 className="mb-2 text-4xl font-bold text-primary">Oops!</h1>
              <h6 className="mb-1 text-xl">
                <Trans i18nKey="common.network.title" />
              </h6>
              <p className="max-w-lg text-lg text-muted-foreground">
                <Trans i18nKey="common.network.description" />
              </p>
              {/* <ButtonLink to="/" className="mt-6">
                <ReplyIcon />
                <Trans i18nKey="common.network.retry" />
              </ButtonLink> */}
            </div>
          </Container>
        </section>
      </AnimatedPage>
    )

  return children
}

export default OfflineLayout
