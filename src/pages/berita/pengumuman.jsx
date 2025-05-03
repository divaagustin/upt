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
      className="container mx-auto my-12 py-2 text-black w-full flex flex-col items-start"
    >
      {/* Swiper Slide */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide className="w-64 sm:w-56">
            <a href="/berita/kegiatan" className="block relative">
              <img
                src="/tes2.jpeg"
                alt="PENGUMUMAN!! Peserta lulus KIP UNA 2024"
                className="w-full h-36 object-cover rounded-xl shadow-md"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-sm p-2 w-full text-center rounded-b-xl">
                PENGUMUMAN!! Peserta lulus KIP UNA 2024
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="w-64 sm:w-56">
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
          <SwiperSlide className="w-64 sm:w-56">
            <a href="/berita/pengumuman" className="block relative">
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
        </Swiper>
      </div>

      {/* Main Content and Sidebar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col sm:flex-row items-start w-full"
      >
        {/* Main Content */}
        <div className="w-full sm:w-2/3 pr-8">
          <div className="text-2xl py-4 text-center w-full">
            Pengumuman UPT <br />
            <h2 className="text-2xl font-bold">
              Penguman!!! Selamat Sukses Wisuda UNA 2024
            </h2>
          </div>
          <div className="py-8 text-xl">
            <img
              src="/tes3.jpg"
              alt="Jokowi di UNA"
              className="w-full h-full object-cover rounded-xl mb-4 shadow-md"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              consequatur ea eum earum officiis necessitatibus amet praesentium
              id, reprehenderit soluta ratione animi quidem maxime maiores,
              omnis, eligendi ex doloribus dolore.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              nisi reiciendis expedita eos rem consequuntur aliquam unde
              eveniet fugit ipsam omnis possimus, optio quaerat odit molestias
              fuga ab aperiam sed?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              nisi reiciendis expedita eos rem consequuntur aliquam unde
              eveniet fugit ipsam omnis possimus, optio quaerat odit molestias
              fuga ab aperiam sed?
            </p>
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
                src="/tes2.jpeg"
                alt="Pengumuman Selamat Wisuda"
                className="w-52 h-24 object-cover rounded-xl shadow-md"
              />
              <a
                href="/berita/kegiatan"
                className="text-blue-600 hover:underline"
              >
                PENGUMUMAN!! Peserta lulus KIP UNA 2024
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
