import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import tEn from './locale/en/translation.json';
import tFr from './locale/fr/translation.json';
import tHi from './locale/hi/translation.json';
const resources = {
  en: tEn,
  fr: tFr,
  hi: tHi
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;