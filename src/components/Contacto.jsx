import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import IdiomaSelector from "./IdiomaSelector";
import { Link } from "react-router-dom";

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contacto = () => {
  const { t } = useTranslation();
  const honeypotRef = useRef(null); 

  const handleSubmit = (e) => {
    if (honeypotRef.current && honeypotRef.current.value !== "") {
      e.preventDefault();
      console.log("Bloqueado: Bot detectado");
      alert("Error al enviar el mensaje.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        <IdiomaSelector />

        <motion.div initial="hidden" animate="visible" variants={formVariants}>
          <h2 className="text-3xl font-semibold">{t('contacto')}</h2>
          <p className="mt-4 text-lg">{t('descripcionContacto')}</p>
        </motion.div>

        {/* Perfil Discord */}
        <motion.div initial="hidden" animate="visible" variants={formVariants} className="space-y-2">
          <h3 className="text-2xl font-semibold">{t('discord')}</h3>
          <p className="text-lg text-gray-300">
            Hofsi_002
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.form
          action="https://formsubmit.co/hofsito.contact@gmail.com"
          method="POST"
          className="mt-8 space-y-4 max-w-2xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={formVariants}
          onSubmit={handleSubmit} // Envio info
        >
          <input type="hidden" name="_captcha" value="false" />

          {/* Honeypot */}
          <input
            type="text"
            name="_honey"
            ref={honeypotRef}
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            type="text"
            name="name"
            placeholder={t('nombrePlaceholder')}
            required
            className="bg-gray-700 text-white p-4 rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            placeholder={t('correoPlaceholder')}
            required
            className="bg-gray-700 text-white p-4 rounded-lg w-full"
          />
          <textarea
            name="message"
            placeholder={t('mensajePlaceholder')}
            required
            className="bg-gray-700 text-white p-4 rounded-lg w-full"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-purple-800 hover:bg-purple-900 text-lg font-semibold text-white rounded-full shadow-xl transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          >
            {t('enviar')}
          </button>
        </motion.form>

        {/* Botón inicio */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={buttonVariants}
          className="text-right mt-10"
        >
          <Link
            to="/"
            className="px-8 py-3 bg-purple-800 hover:bg-purple-900 text-lg font-semibold text-white rounded-full shadow-xl transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          >
            {t("volverAlInicio")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;
