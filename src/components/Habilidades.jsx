// src/components/Habilidades.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import IdiomaSelector from "./IdiomaSelector";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
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
const habilidades = [
  "JavaScript",
  "React",
  "PHP",
  "Python",
  "HTML",
  "CSS",
  "SQL",
  "WordPress",
  "Github",
  "GIT"
];

const Habilidades = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6">

      <div className="max-w-6xl mx-auto text-center space-y-12">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold">{t('habilidades')}</h2>
          <p className="mt-4 text-lg text-gray-300">
            {t('descripcionHabilidades')}
          </p>
        </motion.div>

        {/* Habilidades */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {habilidades.map((habilidad, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{habilidad}</h3>
            </motion.div>
          ))}
        </div>
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

export default Habilidades;
