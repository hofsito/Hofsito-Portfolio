import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  if (!i18n.isInitialized) return null;

  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 h-20  /* 5rem */
                     flex items-center justify-center
                     text-sm text-gray-400
                     border-t border-white/10
                     bg-black/30 backdrop-blur-md">
      <p>
        {t("copyright", { year })}{" "}
        <span className="font-semibold text-white">{t("footerHofsito")}</span>
      </p>
    </footer>
  );
};

export default Footer;
