import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import './i18n';
import 'font-awesome/css/font-awesome.min.css';
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-950 text-white min-h-screen flex flex-col">
        {/* Contenido */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremi" element={<SobreMi />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
