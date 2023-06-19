import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import en from "./assets/locales/en.json";
import jp from "./assets/locales/jp.json";

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      jp: {
        translation: jp,
      },
    },
    lng: "jp",
    fallbackLng: "jp",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
