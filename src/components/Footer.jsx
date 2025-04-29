// src/components/Footer.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation(); // También obtenemos i18n
  const year = new Date().getFullYear(); 

  if (!i18n.isInitialized) {
    return null; // Esperamos a que i18next esté listo
  }

  return (
    <footer className="absolute bottom-0 left-0 w-full py-4 text-center text-white bg-transparent">
      <p className="text-sm">
        {t('copyright', { year })} 
        <span className="font-semibold">{t('footerHofsito')}</span>
      </p>
    </footer>
  );
};

export default Footer;
