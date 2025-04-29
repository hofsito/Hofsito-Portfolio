import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Obtenemos el idioma guardado en localStorage (si existe)
const idiomaGuardado = localStorage.getItem('idioma');

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es", // Idioma por defecto
    debug: true,
    lng: idiomaGuardado || undefined, // Si hay idioma guardado, lo usa. Si no, usa detector.
    interpolation: {
      escapeValue: false, // React ya se encarga de la seguridad
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}src/Idiomas/{{lng}}/translation.json`, // Ruta ajustada para GitHub Pages
    },
  });

export default i18n;