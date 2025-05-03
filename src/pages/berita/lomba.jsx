import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

const Pengumuman = () => {
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
          grabCursor={true}
        >
          {[ 
            {
              href: '/berita/kegiatan',
              src: '/tes2.jpeg',
              alt: 'PENGUMUMAN!! Peserta lulus KIP UNA 2024',
              title: 'PENGUMUMAN!! Peserta lulus KIP UNA 2024'
            },
            {
              href: '/berita/lomba',
              src: '/tes1.jpeg',
              alt: 'VIRAL!!! JOKOWI DATANG KE UNA 2024',
              title: 'VIRAL!!! JOKOWI DATANG KE UNA 2024'
            },
            {
              href: '/berita/pengumuman',
              src: '/tes3.jpg',
              alt: 'Pengumuman Selamat Wisuda',
              title: 'Pengumuman Selamat Wisuda'
            }
          ].map((slide, index) => (
            <SwiperSlide key={index} className="w-64 sm:w-48 md:w-64">
              <a href={slide.href} className="block relative">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-36 object-cover rounded-xl shadow-md"
                />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center rounded-b-xl">
                  {slide.title}
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Konten Utama + Sidebar (dalam motion wrapper) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start"
      >
        {/* Konten Utama */}
        <div className="w-full sm:w-2/3 pr-8">
          <div className="text-center py-4 w-full">
            <h2 className="text-2xl">Pengumuman UPT</h2>
            <h3 className="text-2xl font-bold">Skema PKM 2024 UNA</h3>
          </div>
          <div className="py-8 text-xl">
            <img
              src="/tes4.jpg"
              alt="Poster Skema PKM 2024 UNA"
              className="w-full h-full object-cover rounded-xl mb-4 shadow-md"
            />
            <p>
              Program Kreativitas Mahasiswa (PKM) 2024 di Universitas Asahan (UNA) bertujuan mendorong mahasiswa untuk
              mengembangkan ide inovatif melalui berbagai jenis kegiatan penelitian, pengabdian, dan kewirausahaan.
              Dengan dukungan penuh dari pihak universitas, PKM diharapkan mampu melahirkan karya yang berdampak
              positif bagi masyarakat dan dunia akademik.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full sm:w-1/3 bg-yellow-100 p-6 rounded-lg shadow-lg mt-8 sm:mt-0">
          <h2 className="text-xl font-bold mb-4">Berita Lainnya</h2>
          <ul className="space-y-4">
            {[ 
              {
                img: '/tes2.jpeg',
                href: '/berita/kegiatan',
                text: 'PENGUMUMAN!! Peserta lulus KIP UNA 2024'
              },
              {
                img: '/tes1.jpeg',
                href: '/berita/jkwi',
                text: 'VIRAL!!! JOKOWI DATANG KE UNA 2024'
              },
              {
                img: '/tes3.jpg',
                href: '/berita/pengumuman',
                text: 'Pengumuman Selamat Wisuda'
              }
            ].map((item, index) => (
              <li key={index} className="border-b pb-2 flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.text}
                  className="w-52 h-24 object-cover rounded-xl shadow-md"
                />
                <a href={item.href} className="text-blue-600 hover:underline">
                  {item.text}
                </a>
              </li>
            ))}
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
