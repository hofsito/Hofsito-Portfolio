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

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

        {/* Contenido con padding‑bottom para que el footer fijo no lo tape */}
        <div className="flex-grow pb-20">   {/* 20 ≈ 5rem (alto del footer) */}
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
