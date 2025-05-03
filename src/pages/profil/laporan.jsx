import React from 'react';
import { motion } from 'framer-motion';

const LaporanTahunan = () => {
  const laporan = [
    {
      tahun: '2024',
      judul: 'Laporan Kegiatan dan Keuangan 2024',
      file: '/laporan/laporan-2024.pdf'
    },
    {
      tahun: '2023',
      judul: 'Laporan Akademik dan Pengembangan SDM 2023',
      file: '/laporan/laporan-2023.pdf'
    },
    {
      tahun: '2022',
      judul: 'Laporan Rencana Strategis dan Evaluasi 2022',
      file: '/laporan/laporan-2022.pdf'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Laporan Tahunan</h1>

      <div className="bg-white rounded-2xl shadow-md p-6 space-y-6">
        {laporan.map((item, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-4">
            <div>
              <p className="text-lg font-semibold text-gray-800">{item.tahun}</p>
              <p className="text-gray-700">{item.judul}</p>
            </div>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-600 font-medium hover:underline"
            >
              Lihat File
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LaporanTahunan;
