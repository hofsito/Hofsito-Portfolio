// src/components/SobreMi.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import IdiomaSelector from "./IdiomaSelector";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const SobreMi = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white min-h-screen flex flex-col justify-center py-8 px-5 sm:px-10">
  <div className="max-w-4xl w-full mx-auto space-y-10">
    {/* Quién Soy */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center space-y-3"
    >
      <h2 className="text-4xl font-bold">{t("quienSoy")}</h2>
      <p className="text-base sm:text-lg text-gray-300">{t("descripcionQuienSoy")}</p>
    </motion.div>

    {/* Mi Enfoque */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center space-y-3"
    >
      <h2 className="text-3xl font-semibold">{t("miEnfoque")}</h2>
      <p className="text-base sm:text-lg text-gray-300">{t("descripcionMiEnfoque")}</p>
    </motion.div>

    {/* Valores que me definen */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center space-y-5"
    >
      <h2 className="text-3xl font-semibold">{t("valoresDefinen")}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-300 mx-auto">
        {[t("compromiso"), t("ganasDeAprender"), t("profesionalismo"), t("creatividad")].map((valor, index) => (
          <motion.li
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gray-800 p-4 rounded-lg shadow-md"
          >
            {valor}
          </motion.li>
        ))}
      </ul>
    </motion.div>

    {/* Mi Objetivo */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center space-y-3"
    >
      <h2 className="text-3xl font-semibold">{t("miObjetivo")}</h2>
      <p className="text-base sm:text-lg text-gray-300">{t("descripcionMiObjetivo")}</p>
    </motion.div>

    {/* Botón Inicio */}
    <motion.div
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      className="text-right"
    >
      <Link
        to="/"
        className="px-8 py-3 bg-purple-800 hover:bg-purple-900 text-lg font-semibold text-white rounded-full shadow-xl transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
      >
        {t("volverAlInicio")}
      </Link>
    </motion.div>

    {/* Selector idioma */}
    <IdiomaSelector />
  </div>
</section>
  );
};

export default SobreMi;
