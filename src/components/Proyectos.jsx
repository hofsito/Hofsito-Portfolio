import React from "react";
import { motion } from "framer-motion"; // Para las animaciones
import { Link } from "react-router-dom"; // Para el botón que regresa al inicio
import { useTranslation } from "react-i18next"; // Para traducir
import IdiomaSelector from "./IdiomaSelector"; // Importar el selector de idioma

const Proyectos = () => {
  const { t } = useTranslation(); // Obtener la función de traducción

  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Selector de idioma */}
        <IdiomaSelector />

        <h2 className="text-3xl font-semibold mb-8">{t('mis_proyectos')}</h2>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cuadro de Proyecto con Animación */}
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold">{t('proyecto_1')}</h3>
            <p className="mt-2">{t('descripcion')}</p>
          </motion.div>
          {/* Cuadro de Proyecto 2 con Animación */}
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{t('proyecto_2')}</h3>
            <p className="mt-2">{t('descripcion')}</p>
          </motion.div>
          {/* Cuadro de Proyecto 3 con Animación */}
          <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold">{t('proyecto_3')}</h3>
            <p className="mt-2">{t('descripcion')}</p>
          </motion.div>
        </div>

        {/* Mensaje final */}
        <div className="mt-12 bg-gray-600 p-6 rounded-lg">
          <p className="text-xl font-medium">{t('contacto_message')}</p>
        </div>

        {/* Botón para volver al inicio */}
        <div className="mt-6">
          <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition-colors">
            {t('volver_inicio')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
