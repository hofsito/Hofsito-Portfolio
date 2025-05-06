// src/components/Habilidades.jsx
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import IdiomaSelector from "./IdiomaSelector";
import { Link } from "react-router-dom";

/* ---------- Animaciones ---------- */
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

const skills = [
  "JavaScript",
  "React",
  "PHP",
  "Python",
  "HTML",
  "CSS",
  "SQL",
  "WordPress",
  "GitHub",
  "Git",
];

const solutionKeys = [
  "solucionBlogs",
  "solucionTiendas",
  "solucionLanding",
  "solucionPortafolio",
  "solucionCorporativas",
  "solucionForos",
  "solucionCatalogos",
  "solucionReservas",
  "solucionEventos",
  "solucionNewsletters",
];

const Habilidades = () => {
  const { t } = useTranslation();

  /* ── Ocultamos la scrollbar del <main> SOLO mientras esta página está montada ── */
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const prevOverflow = main.style.overflowY;
    main.style.overflowY = "hidden";
    return () => {
      main.style.overflowY = prevOverflow;
    };
  }, []);

  return (
    /*  h-full: ocupa 100 vh – footer  |  overflow-y-auto: scrollbar interna
        Scrollbar decorada usando utilidades arbitrarias Tailwind (no plugins) */
    <section
      className="
        h-full overflow-y-auto
        bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white
        py-16 px-6 pb-24

        [scrollbar-width:thin]
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-transparent
        [&::-webkit-scrollbar-thumb]:bg-purple-700
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb:hover]:bg-purple-500
      "
    >
      <div className="max-w-6xl mx-auto text-center space-y-14">

        {/* ---------- Título ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold">{t("habilidades")}</h2>
          <p className="mt-4 text-lg text-gray-300">
            {t("descripcionHabilidades")}
          </p>
        </motion.div>

        {/* ---------- Habilidades técnicas ---------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </motion.div>
          ))}
        </div>

        {/* ---------- Soluciones ---------- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="space-y-10 mt-12"
        >
          <h2 className="text-3xl font-bold">{t("solucionesTitulo")}</h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t("descripcionSoluciones")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {solutionKeys.map((key, i) => (
              <motion.div
                key={key}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-purple-800/20 backdrop-blur-lg p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-medium">{t(key)}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Botón volver ---------- */}
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

        {/* ---------- Selector idioma ---------- */}
        <IdiomaSelector />
      </div>
    </section>
  );
};

export default Habilidades;
