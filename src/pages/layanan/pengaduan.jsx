import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pengajuan = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nim: '',
    jenis: '',
    keterangan: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data terkirim:", formData);
    alert('Pengajuan berhasil dikirim!');
    setFormData({ nama: '', nim: '', jenis: '', keterangan: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-12 max-w-xl"
    >
      <h1 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Form Pengajuan</h1>

      <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-2xl shadow-md space-y-4">
        <div>
          <label className="block text-sm font-semibold">Nama Lengkap</label>
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
          <label className="block text-sm font-semibold">NIM</label>
          <input
            type="text"
            name="nim"
            value={formData.nim}
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Jenis Pengajuan</label>
          <select
            name="jenis"
            value={formData.jenis}
            onChange={handleChange}
            className="w-full border bg-white border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          >
            <option value="">-- Pilih Jenis --</option>
            <option value="Surat Aktif Kuliah">Surat Aktif Kuliah</option>
            <option value="Keterangan Beasiswa">Keterangan Beasiswa</option>
            <option value="Izin Penelitian">Izin Penelitian</option>
            <option value="Pengajuan KKN">Pengajuan KKN</option>
            <option value="Pengajuan Seminar">Pengajuan Seminar</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold">Keterangan Tambahan</label>
          <textarea
            name="keterangan"
            value={formData.keterangan}
            onChange={handleChange}
            rows={4}
            className="w-full border bg-white border-gray-300 rounded-xl px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-xl font-semibold transition duration-300"
        >
          Kirim Pengajuan
        </button>
      </form>
    </motion.div>
  );
};

export default Pengajuan;
