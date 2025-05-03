import React from 'react';
import { motion } from 'framer-motion';

const Pengajuan = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='container mx-auto my-12 py-6 text-black w-full flex flex-row gap-6'
    >
      {/* Bagian Form Pengajuan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='w-2/3 bg-white p-8 rounded-xl shadow-lg'
      >
        <h2 className='text-2xl font-bold mb-6 text-center'>
          Form Pengajuan Beasiswa KIP 2024
        </h2>
        <form className='space-y-4'>
          <div>
            <label className='block font-medium mb-1'>Nama Lengkap</label>
            <input
              type='text'
              className='w-full border bg-white px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Masukkan nama lengkap'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>NIM</label>
            <input
              type='text'
              className='w-full border bg-white px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Masukkan NIM Anda'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Program Studi</label>
            <input
              type='text'
              className='w-full border bg-white px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              placeholder='Contoh: Informatika'
            />
          </div>
          <div>
            <label className='block font-medium mb-1'>Upload Dokumen</label>
            <input
              type='file'
              className='w-full border px-4 py-2 rounded-lg shadow-sm bg-gray-50'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300'
          >
            Ajukan Sekarang
          </button>
        </form>
      </motion.div>

      {/* Bagian Info Tambahan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='w-1/3 bg-yellow-100 p-6 rounded-xl shadow-lg'
      >
        <h3 className='text-xl font-bold mb-4'>Syarat & Ketentuan</h3>
        <ul className='list-disc ml-5 space-y-2 text-sm'>
          <li>Mahasiswa aktif UNA tahun 2024</li>
          <li>Mengisi form pengajuan secara lengkap</li>
          <li>Upload dokumen pendukung (PDF/IMG)</li>
          <li>Pengajuan ditutup pada 30 April 2025</li>
        </ul>

        <div className='mt-6'>
          <h4 className='font-semibold mb-2'>Kontak Bantuan</h4>
          <p className='text-sm'>Email: universitasasahancontoh1@gmail.com</p>
          <p className='text-sm'>WA: 081234567890</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Pengajuan;
