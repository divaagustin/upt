import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SurveyKepuasan = () => {
  const [formData, setFormData] = useState({
    nama: '',
    penilaian: '',
    saran: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Survey terkirim:", formData);
    alert('Terima kasih atas partisipasinya!');
    setFormData({ nama: '', penilaian: '', saran: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12 max-w-xl"
    >
      <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Survey Kepuasan</h1>

      <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-2xl shadow-md space-y-4">
        <div>
          <label className="block text-sm font-semibold">Nama</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Seberapa puas Anda terhadap pelayanan kami?</label>
          <select
            name="penilaian"
            value={formData.penilaian}
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          >
            <option value="">-- Pilih Tingkat Kepuasan --</option>
            <option value="Sangat Puas">Sangat Puas</option>
            <option value="Puas">Puas</option>
            <option value="Cukup Puas">Cukup Puas</option>
            <option value="Kurang Puas">Kurang Puas</option>
            <option value="Tidak Puas">Tidak Puas</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Saran / Masukan</label>
          <textarea
            name="saran"
            value={formData.saran}
            onChange={handleChange}
            rows={4}
            placeholder="Tulis saran atau kritik di sini..."
            className="w-full border bg-white border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-semibold transition duration-300"
        >
          Kirim Survey
        </button>
      </form>
    </motion.div>
  );
};

export default SurveyKepuasan;
