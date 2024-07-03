import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./public/locales/en/common.json";
import trTranslations from "./public/locales/tr/common.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  tr: {
    translation: trTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: window.localStorage.getItem("language") ?? "end", // Varsayılan dil
  fallbackLng: "en", // Kullanılacak dil çevirisi bulunamadığında kullanılacak dil
  interpolation: {
    escapeValue: false, // React zaten XSS koruması sağlıyor
  },
});

export default i18n;
