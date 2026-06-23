import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { APP_CONSTANTS } from "@/app/constants"
import ar from "./locales/ar.json"
import en from "./locales/en.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: ar,
      },
      en: {
        translation: en,
      },
    },
    lng: getLocalStorageLanguage() || APP_CONSTANTS.config.defaultLanguage,
    fallbackLng: APP_CONSTANTS.config.defaultLanguage,
    supportedLngs: APP_CONSTANTS.config.supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })
  .then(() => {
    applyLanguageOnDom(i18n.language as ILocale)
  })

export default i18n

i18n.on("languageChanged", (lng) => {
  applyLanguageOnDom(lng as ILocale)
})

function applyLanguageOnDom(lang: ILocale) {
  const isArabic = lang === "ar"
  document.documentElement.lang = lang
  document.documentElement.dir = isArabic ? "rtl" : "ltr"
}

export function changeLanguage(lang: ILocale) {
  i18n.changeLanguage(lang)
}

function getLocalStorageLanguage() {
  const storedLanguage = localStorage.getItem("i18nextLng")
  return storedLanguage
}

export function getLanguage() {
  return i18n.language as ILocale
}
