import { useEffect } from "react"
import { useTranslation } from "react-i18next"

interface IMetaData {
  title: string
}

export const usePageMetaData = (metaData: IMetaData) => {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t(metaData.title)
  }, [metaData, t])
}
