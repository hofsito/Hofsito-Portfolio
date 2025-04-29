import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import IdiomaSelector from "./IdiomaSelector";
import 'font-awesome/css/font-awesome.min.css';

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Inicio = () => {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return null; // No renderizar nada hasta que i18next esté listo
  }

  const botones = [
    { path: "/sobremi", key: "sobreMi" },
    { path: "/habilidades", key: "habilidades" },
    { path: "/proyectos", key: "proyectos" },
    { path: "/contacto", key: "contacto" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 text-center font-sans relative">
      <IdiomaSelector />

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl md:text-7xl font-bold mb-4"
      >
        {t("portfolio")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl text-gray-400 mb-12"
      >
        {t("by")}
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6">
        {botones.map((btn, index) => (
          <motion.div
            key={btn.path}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <Link
              to={btn.path}
              className="px-8 py-3 bg-purple-800 hover:bg-purple-900 text-lg font-semibold text-white rounded-full shadow-xl transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
            >
              {t(btn.key)}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Redes sociales */}
      <div className="mt-16 flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/hofsito"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400"
        >
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/hofsito"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/adiel-esteban-grazt-salamanca-b89a5233b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.workana.com/freelancer/a039b2215cfb6d8c51a1bd86ec6bfd5a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          <i className="fa fa-briefcase"></i>
        </a>
      </div>
    </section>
  );
};

export default Inicio;
