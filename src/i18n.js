// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es", // Idioma por defecto
    debug: true,
    interpolation: {
      escapeValue: false, // React ya se encarga de la seguridad
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: "/src/Idiomas/{{lng}}/translation.json", // Ruta de las traducciones
    },
  });

export default i18n;
