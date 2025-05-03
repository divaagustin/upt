import React from 'react';
import { motion } from 'framer-motion';

const VisiMisi = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold mb-6 text-yellow-600 text-center">Visi & Misi</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Visi</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet nulla in nibh
          malesuada, ac convallis ipsum blandit. Integer porta, urna a porta fermentum, velit turpis
          bibendum libero, ut ultrices risus metus ac justo.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Misi</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Integer fermentum sapien ut convallis bibendum.</li>
          <li>Phasellus facilisis libero a neque pulvinar, et ultricies elit laoreet.</li>
          <li>Maecenas sit amet lorem ac nibh sollicitudin convallis.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default VisiMisi;
