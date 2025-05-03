import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie } from 'react-icons/fa';

const StrukturOrganisasi = () => {
  const struktur = [
    { jabatan: 'Rektor', nama: 'nama 1', foto: '/logo.png' },
    { jabatan: 'Wakil Rektor I', nama: 'nama 2', foto: '/logo.png' },
    { jabatan: 'Wakil Rektor II', nama: 'nama 3', foto: '/logo.png' },
    { jabatan: 'Dekan FT', nama: 'nama 4', foto: '/logo.png' },
    { jabatan: 'Dekan FISIP', nama: 'nama 5', foto: '/logo.png' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12 text-center"
    >
      <h1 className="text-3xl font-bold mb-10 text-yellow-600">Struktur Organisasi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {struktur.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={item.foto}
              alt={item.nama}
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-yellow-500 mb-4"
            />
            <h2 className="text-lg font-semibold flex justify-center items-center gap-2 text-gray-800">
              <FaUserTie className="text-yellow-600" />
              {item.nama}
            </h2>
            <p className="text-gray-600">{item.jabatan}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StrukturOrganisasi;
