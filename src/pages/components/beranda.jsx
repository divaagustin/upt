import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Beranda = () => {
  const berita = [
    {
      href: "/berita/jkwi",
      imgSrc: "/tes1.jpeg",
      title: "VIRAL!!! JOKOWI DATANG KE UNA 2024",
      content: `Presiden Joko Widodo Jokowi hadir di Universitas Asahan UNA 2024, menyapa ribuan mahasiswa dengan pesan penting untuk kemajuan pendidikan Indonesia. Program KIP memberikan akses kepada siswa yang kurang mampu untuk melanjutkan pendidikan ke jenjang yang lebih tinggi. Bagi yang telah dinyatakan lulus, diharapkan segera mengikuti petunjuk selanjutnya untuk proses administrasi.`
    },
    {
      href: "/berita/kegiatan",
      imgSrc: "/tes2.jpeg",
      title: "PENGUMUMAN!! Peserta lulus KIP UNA 2024",
      content: `Selamat kepada seluruh peserta yang telah berhasil lulus dalam program KIP (Kartu Indonesia Pintar 2024)! Pengumuman kelulusan ini merupakan langkah awal dalam mendukung pendidikan yang lebih baik untuk Anda. Program KIP memberikan akses kepada siswa yang kurang mampu untuk melanjutkan pendidikan ke jenjang yang lebih tinggi. Bagi yang telah dinyatakan lulus, diharapkan segera mengikuti petunjuk selanjutnya untuk proses administrasi.`
    },
    {
      href: "/berita/pengumuman",
      imgSrc: "/tes3.jpg",
      title: "Penguman!!! Selamat Sukses Wisuda UNA 2024",
      content: `Presiden Joko Widodo Jokowi hadir di Universitas Asahan UNA 2024, menyapa ribuan mahasiswa dengan pesan penting untuk kemajuan pendidikan Indonesia.`
    },
    {
      href: "/berita/lomba",
      imgSrc: "/tes4.jpg",
      title: "Skema PKM 2024 UNA",
      content: `Program Kreativitas Mahasiswa (PKM) 2024 di Universitas Asahan (UNA) bertujuan mendorong mahasiswa untuk mengembangkan ide inovatif melalui berbagai jenis kegiatan penelitian, pengabdian, dan kewirausahaan. Dengan dukungan penuh dari pihak universitas, PKM diharapkan mampu melahirkan karya yang berdampak positif bagi masyarakat dan dunia akademik.`
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='container mx-auto my-12 py-2 text-black w-full grid grid-cols-1 lg:grid-cols-2 gap-6'
    >
      {berita.map((item, index) => (
        <motion.div
          key={index}
          className="card bg-transparent shadow-xl overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <figure className='w-full h-56'>
            <img className='w-full h-full object-cover' src={item.imgSrc} alt="Album" />
          </figure>
          <div className="card-body">
            <Link href={item.href} className="card-title text-lg font-bold hover:underline">
              {item.title}
            </Link>
            <p>{item.content}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Beranda;
