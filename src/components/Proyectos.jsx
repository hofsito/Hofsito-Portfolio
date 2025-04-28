// src/components/Proyectos.jsx
import React from "react";
import IdiomaSelector from "./IdiomaSelector"; 

const Proyectos = () => {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">Mis Proyectos</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Proyectos */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Proyecto 1</h3>
            <p className="mt-2">Descripción breve del proyecto.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
