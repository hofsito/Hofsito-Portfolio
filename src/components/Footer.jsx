import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  if (!i18n.isInitialized) return null;

  return (
    <footer className="w-full py-4 text-center text-gray-400 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <p className="text-sm">
        {t("copyright", { year })}{" "}
        <span className="font-semibold text-white">{t("footerHofsito")}</span>
      </p>
    </footer>
  );
};

export default Footer;
