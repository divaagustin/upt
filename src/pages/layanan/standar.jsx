import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaClock, FaMoneyBill, FaUserTie, FaTasks } from "react-icons/fa";

const standarPelayanan = [
  {
    id: 1,
    layanan: "Surat Aktif Kuliah",
    prosedur: "Isi form → verifikasi → cetak surat",
    waktu: "1 hari kerja",
    biaya: "Gratis",
    penanggungJawab: "TU Fakultas",
  },
  {
    id: 2,
    layanan: "Legalisir Ijazah",
    prosedur: "Isi form → unggah dokumen → ambil",
    waktu: "3 hari kerja",
    biaya: "Rp10.000/lembar",
    penanggungJawab: "BAAK",
  },
  {
    id: 3,
    layanan: "Pengajuan KRS",
    prosedur: "Login SIAKAD → pilih mata kuliah",
    waktu: "1x24 jam saat masa KRS",
    biaya: "Gratis",
    penanggungJawab: "BAAK",
  },
  {
    id: 4,
    layanan: "Pengaduan Layanan",
    prosedur: "Isi form pengaduan → respon unit terkait",
    waktu: "Maks. 7 hari kerja",
    biaya: "Gratis",
    penanggungJawab: "UPT / Humas",
  },
];

export default function MenuStandarPelayanan() {
  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-yellow-400 text-black">
        Standar Pelayanan
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-xl">
        <table className="min-w-full table-auto border border-gray-300 bg-white">
          <thead className="bg-yellow-400 text-gray-800">
            <tr>
              <th className="px-4 py-3 border text-left"><FaClipboardList className="inline mr-2" />No</th>
              <th className="px-4 py-3 border text-left"><FaTasks className="inline mr-2" />Jenis Layanan</th>
              <th className="px-4 py-3 border text-left"><FaClipboardList className="inline mr-2" />Prosedur</th>
              <th className="px-4 py-3 border text-left"><FaClock className="inline mr-2" />Waktu</th>
              <th className="px-4 py-3 border text-left"><FaMoneyBill className="inline mr-2" />Biaya</th>
              <th className="px-4 py-3 border text-left"><FaUserTie className="inline mr-2" />Penanggung Jawab</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {standarPelayanan.map((item) => (
              <tr key={item.id} className="hover:bg-yellow-50 transition duration-200">
                <td className="px-4 py-3 border">{item.id}</td>
                <td className="px-4 py-3 border font-medium">{item.layanan}</td>
                <td className="px-4 py-3 border">{item.prosedur}</td>
                <td className="px-4 py-3 border">{item.waktu}</td>
                <td className="px-4 py-3 border">{item.biaya}</td>
                <td className="px-4 py-3 border">{item.penanggungJawab}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
