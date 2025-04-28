// src/components/IdiomaSelector.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const IdiomaSelector = () => {
  const { i18n } = useTranslation();

  const cambiarIdioma = (e) => {
    i18n.changeLanguage(e.target.value); // Cambia el idioma 
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-6 right-6"
    >
      <select
        value={i18n.language} // Sincronizacion
        onChange={cambiarIdioma}
        className="bg-gray-800 text-white px-4 py-2 rounded-md border border-gray-700 focus:outline-none shadow-lg hover:bg-gray-700 transition-colors appearance-none cursor-pointer"
        style={{
          WebkitAppearance: "none",
          MozAppearance: "none",
          appearance: "none",
          backgroundImage:
            'url("data:image/svg+xml;charset=UTF-8,%3Csvg width=\'14\' height=\'10\' viewBox=\'0 0 14 10\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1l6 6 6-6\' stroke=\'%23ffffff\' stroke-width=\'2\' fill=\'none\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.75rem center",
          backgroundSize: "1rem",
          paddingRight: "2.5rem",
        }}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </motion.div>
  );
};

export default IdiomaSelector;
