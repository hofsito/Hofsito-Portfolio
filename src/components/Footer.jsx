import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();

  if (!i18n.isInitialized) return null; // i18next aún cargando

  return (
    <footer className="w-full py-4 mt-auto text-center text-gray-400">
      <p className="text-sm">
        {t("copyright", { year })}{" "}
        <span className="font-semibold text-white">{t("footerHofsito")}</span>
      </p>
    </footer>
  );
};

export default Footer;
