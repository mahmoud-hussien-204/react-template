import { useTranslation } from "react-i18next"
export const useI18n = () => {
  const { t, i18n } = useTranslation()
  const isRtl = i18n.language === "ar"
  return {
    t,
    i18n,
    isRtl,
  }
}
