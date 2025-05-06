// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import "./i18n";
import Footer from "./components/Footer";

const FOOTER_H = 80; // px  (≈ h-20)

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

        {/* Contenido: alto dinámico = 100vh - footer */}
        <main
          className="flex-grow overflow-auto"
          style={{ height: `calc(100vh - ${FOOTER_H}px)` }}
        >
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer height={FOOTER_H} />
      </div>
    </Router>
  );
};

export default App;
