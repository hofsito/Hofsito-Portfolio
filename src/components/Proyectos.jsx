import React from "react";
import { motion } from "framer-motion"; // Para las animaciones
import { Link } from "react-router-dom"; // Para el botón que regresa al inicio
import { useTranslation } from "react-i18next"; // Para traducir
import IdiomaSelector from "./IdiomaSelector"; // Importar el selector de idioma

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Proyectos = () => {
  const { t } = useTranslation(); // Obtener la función de traducción

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 text-center font-sans relative">
      {/* Selector de idioma */}
      <IdiomaSelector />

      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-6xl md:text-7xl font-bold mb-4"
      >
        {t('mis_proyectos')}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl text-gray-400 mb-12"
      >
        {t('descripcionProyecto')}
      </motion.p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cuadro de Proyecto 1 con Animación */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold">{t('proyecto_1')}</h3>
          <p className="mt-2">
            {t('descripcion')}
          </p>
        </motion.div>

        {/* Cuadro de Proyecto 2 con Animación */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold">{t('proyecto_2')}</h3>
          <p className="mt-2">
            {t('descripcion')}
          </p>
        </motion.div>

        {/* Cuadro de Proyecto 3 con Animación */}
        <motion.div
          className="bg-gray-700 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold">{t('proyecto_3')}</h3>
          <p className="mt-2">
            {t('descripcion')}
          </p>
        </motion.div>
      </div>

      {/* Mensaje final */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-12 bg-gray-600 p-6 rounded-lg"
      >
        <p className="text-xl font-medium">{t('contacto_message')}</p>
      </motion.div>

      {/* Botón para volver al inicio */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        className="text-right mt-6"
      >
        <Link
          to="/"
          className="px-8 py-3 bg-purple-800 hover:bg-purple-900 text-lg font-semibold text-white rounded-full shadow-xl transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
        >
          {t('volverAlInicio')}
        </Link>
      </motion.div>
    </section>
  );
};

export default Proyectos;

