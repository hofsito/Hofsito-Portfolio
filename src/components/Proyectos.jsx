import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import IdiomaSelector from "./IdiomaSelector";

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Proyectos = () => {
  const { t, i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return null; // No renderizar nada hasta que i18next esté listo
  }

  const botones = [
    { path: "/sobremi", key: "sobreMi" },
    { path: "/habilidades", key: "habilidades" },
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
        {t("mis_proyectos")}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl text-gray-400 mb-12"
      >
        {t("descripcion_proyectos")}
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

      {/* Mensaje final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-12 bg-gray-600 p-6 rounded-lg"
      >
        <p className="text-xl font-medium">{t("contacto_message")}</p>
      </motion.div>

      {/* Botón para volver al inicio */}
      <div className="mt-6">
        <Link
          to="/"
          className="px-8 py-3 bg-purple-800 hover:bg-purple-900 text-lg font-semibold text-white rounded-full shadow-xl transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
        >
          {t("volver_inicio")}
        </Link>
      </div>
    </section>
  );
};

export default Proyectos;
