import React from 'react';
import { motion } from 'framer-motion';

const AgendaTahunan = () => {
  const agenda = [
    {
      tanggal: '10 Januari 2025',
      kegiatan: 'contoh',
    },
    {
      tanggal: '20 Februari 2025',
      kegiatan: 'contoh',
    },
    {
      tanggal: '15 Maret 2025',
      kegiatan: 'contoh',
    },
    {
      tanggal: '21 April 2025',
      kegiatan: 'contoh',
    },
    {
      tanggal: '5 Juni 2025',
      kegiatan: 'contoh',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Agenda Tahunan</h1>
      
      <div className="bg-white rounded-2xl shadow-md p-6">
        <ul className="divide-y divide-gray-200">
          {agenda.map((item, index) => (
            <li key={index} className="py-4">
              <p className="text-lg font-semibold text-gray-800">{item.tanggal}</p>
              <p className="text-gray-700">{item.kegiatan}</p>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default AgendaTahunan;
