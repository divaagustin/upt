import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

const Pengumuman = () => {
  const [data] = useState([
    { id: 1, Nama: 'Ahmad Fadli', Npm: '210101001', alamat: 'Medan', no_hp: '08123456789' },
    { id: 2, Nama: 'Budi Santoso', Npm: '210101002', alamat: 'Jakarta', no_hp: '08129876543' },
    { id: 3, Nama: 'Citra Dewi', Npm: '210101003', alamat: 'Bandung', no_hp: '08135432167' },
    { id: 4, Nama: 'Dewi Lestari', Npm: '210101004', alamat: 'Surabaya', no_hp: '08127778899' },
    { id: 5, Nama: 'Eko Prasetyo', Npm: '210101005', alamat: 'Yogyakarta', no_hp: '08136669988' },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto my-12 py-2 text-black w-full"
    >
      {/* Swiper Slide (tanpa motion) */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="w-64 sm:w-48 md:w-64">
            <a href="/berita/jkwi" className="block relative">
              <img
                src="/tes1.jpeg"
                alt="VIRAL!!! JOKOWI DATANG KE UNA 2024"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center rounded-b-xl">
                VIRAL!!! JOKOWI DATANG KE UNA 2024
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-64 sm:w-48 md:w-64">
            <a href="/berita/lomba" className="block relative">
              <img
                src="/tes4.jpg"
                alt="Skema PKM 2024 UNA"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center rounded-b-xl">
                Skema PKM 2024 UNA
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-64 sm:w-48 md:w-64">
            <a href="/berita/pengumuman" className="block relative">
              <img
                src="/tes3.jpg"
                alt="Pengumuman Selamat Wisuda"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center rounded-b-xl">
                Pengumuman Selamat Wisuda
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Konten + Sidebar (pakai motion) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start"
      >
        {/* Konten Utama */}
        <div className="w-full sm:w-2/3 pr-8">
          <h2 className="text-2xl font-bold text-center py-4 w-full">
            Peserta KIP Yang LULUS <br /> Menjadi Mahasiswa Universitas Asahan
          </h2>
          <div className="w-full py-8 text-xl">
            <table className="border-2 mx-auto w-full border-collapse">
              <thead className="border-2 bg-gray-200">
                <tr className="border-2 text-left">
                  <th className="border p-2">Nama</th>
                  <th className="border p-2">NPM</th>
                  <th className="border p-2">Alamat</th>
                  <th className="border p-2">No HP</th>
                </tr>
              </thead>
              <tbody className="border-2">
                {data.length > 0 ? (
                  data.map((item) => (
                    <tr key={item.id} className="border">
                      <td className="border p-2">{item.Nama}</td>
                      <td className="border p-2">{item.Npm}</td>
                      <td className="border p-2">{item.alamat}</td>
                      <td className="border p-2">{item.no_hp}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center p-4">
                      Tidak ada data tersedia
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full sm:w-1/3 bg-yellow-100 p-6 rounded-lg shadow-lg mt-8 sm:mt-0">
          <h2 className="text-xl font-bold mb-4">Berita Lainnya</h2>
          <ul className="space-y-4">
            <li className="border-b pb-2 flex items-center gap-4">
              <img
                src="/tes1.jpeg"
                alt="VIRAL!!! JOKOWI DATANG KE UNA 2024"
                className="w-52 h-24 object-cover rounded-xl shadow-md"
              />
              <a href="/berita/jkwi" className="text-blue-600 hover:underline">
                VIRAL!!! JOKOWI DATANG KE UNA 2024
              </a>
            </li>
            <li className="border-b pb-2 flex items-center gap-4">
              <img
                src="/tes4.jpg"
                alt="Skema PKM 2024 UNA"
                className="w-52 h-24 object-cover rounded-xl shadow-md"
              />
              <a href="/berita/lomba" className="text-blue-600 hover:underline">
                Skema PKM 2024 UNA
              </a>
            </li>
            <li className="border-b pb-2 flex items-center gap-4">
              <img
                src="/tes3.jpg"
                alt="Pengumuman Selamat Wisuda"
                className="w-52 h-24 object-cover rounded-xl shadow-md"
              />
              <a href="/berita/pengumuman" className="text-blue-600 hover:underline">
                Pengumuman Selamat Wisuda
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                Coming soon!!
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Pengumuman;
