import React from "react";
import { motion } from "framer-motion";

const sejarahData = [
  {
    year: 2000,
    event: "Kampus didirikan di Kota X dengan hanya 1 fakultas.",
  },
  {
    year: 2005,
    event: "Penambahan fakultas Teknik dan Ekonomi.",
  },
  {
    year: 2010,
    event: "Kampus memperoleh akreditasi A dari BAN-PT.",
  },
  {
    year: 2015,
    event: "Perluasan kampus dengan membangun gedung baru dan pusat penelitian.",
  },
  {
    year: 2020,
    event: "Bekerja sama dengan universitas internasional dalam program riset.",
  },
];

export default function SejarahKampus() {
  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">
        Sejarah Kampus
      </h2>

      {/* Sejarah Singkat */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
          Sejarah Singkat Berdirinya Kampus
        </h3>
        <p className="text-lg text-gray-700">
          Kampus kami didirikan pada tahun 2000 dengan tujuan untuk menyediakan
          pendidikan berkualitas bagi generasi muda. Sejak saat itu, kampus ini
          terus berkembang, membuka berbagai program studi baru, dan meraih
          prestasi dalam bidang akademik maupun penelitian.
        </p>
      </section>

      {/* Timeline */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
          Timeline Perkembangan
        </h3>
        <div className="relative border-l-4 border-yellow-600 pl-8">
          {sejarahData.map((item, index) => (
            <div key={index} className="mb-8">
              <div className="absolute left-[-18px] top-0 bg-yellow-600 w-6 h-6 rounded-full"></div>
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-yellow-600">
                  {item.year}
                </span>
                <p className="text-gray-700">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeri Sejarah */}
      <section>
        <h3 className="text-2xl font-semibold text-yellow-700 mb-4">Galeri Sejarah</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/logo.png" alt="poto 1" />

        <img src="/logo.png" alt="poto 2" />

        <img src="/logo.png" alt="poto 3" />

        </div>
      </section>
    </motion.div>
  );
}
