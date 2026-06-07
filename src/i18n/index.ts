import i18n from "i18next"

import { initReactI18next } from "react-i18next"

import LanguageDetector from "i18next-browser-languagedetector"

import ar from "./locales/ar.json"

import en from "./locales/en.json"

import { APP_CONFIGS } from "@/core/config/index.config"

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
    lng: getLocalStorageLanguage() || APP_CONFIGS.defaultLanguage,
    fallbackLng: APP_CONFIGS.defaultLanguage,
    supportedLngs: APP_CONFIGS.supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n

function onInit(lng: string) {
  const isArabic = lng === "ar"
  document.documentElement.lang = lng
  document.documentElement.dir = isArabic ? "rtl" : "ltr"
}

onInit(i18n.language)

export function changeLanguage(lang: "ar" | "en") {
  i18n.changeLanguage(lang)
}

function getLocalStorageLanguage() {
  const storedLanguage = localStorage.getItem("i18nextLng")
  return storedLanguage
}
