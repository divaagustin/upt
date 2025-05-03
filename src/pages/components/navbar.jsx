import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar bg-yellow-300 px-4 lg:px-24 shadow-lg text-black sticky top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-md' : ''}`}>
      
      {/* Navbar Start */}
      <div className="navbar-start flex items-center">
        {/* Logo (acts as menu toggle on mobile) */}
        <button onClick={toggleMobileMenu} className="lg:hidden p-2">
          <img src="/logo.png" alt="logo" className="w-12 h-12" />
        </button>

        {/* Desktop logo + text */}
        <Link href="/" className="hidden lg:flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="w-16 h-16 p-2" />
          <span className="text-2xl font-bold">UPT IPKM</span>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 z-50 bg-yellow-200 rounded-box p-4 lg:hidden shadow-lg">
          <ul className="space-y-2">
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">Profil</summary>
                <ul className="ml-4 space-y-1 mt-1">
                  <li><Link href="/components/beranda">Beranda</Link></li>
                  <li><Link href="/profil/sejarah">Sejarah</Link></li>
                  <li><Link href="/profil/struktur">Struktur Organisasi</Link></li>
                  <li><Link href="/profil/visi">Visi dan Misi</Link></li>
                  <li><Link href="/profil/agenda">Agenda Tahunan</Link></li>
                  <li><Link href="/profil/laporan">Laporan Tahunan</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">Layanan</summary>
                <ul className="ml-4 space-y-1 mt-1">
                  <li><Link href="/layanan/standar">Standar Pelayanan</Link></li>
                  <li><Link href="/layanan/pengajuan">Pengajuan</Link></li>
                  <li><Link href="/layanan/pengaduan">Pengaduan</Link></li>
                  <li><Link href="/layanan/survei">Survei Kepuasan</Link></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer font-semibold">Berita</summary>
                <ul className="ml-4 space-y-1 mt-1">
                  <li><Link href="/berita/pengumuman">Pengumuman</Link></li>
                  <li><Link href="/berita/kegiatan">Kegiatan</Link></li>
                  <li><Link href="/berita/lomba">Kompetisi/Lomba</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href="/profil/exMenu/galeri">Galeri</Link></li>
            <li><Link href="/profil/exMenu/dokumen">Dokumen</Link></li>
          </ul>
        </div>
      )}

      {/* Navbar Center (desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6">
          {/* Profil */}
          <li className="group relative">
            <a className="text-lg font-medium cursor-pointer">Profil</a>
            <ul className="absolute left-0 hidden mt-10 mx-0 bg-yellow-200 rounded-lg shadow-lg p-2 group-hover:block">
              <li><Link href="/profil/sejarah">Sejarah</Link></li>
              <li><Link href="/profil/struktur">Struktur Organisasi</Link></li>
              <li><Link href="/profil/visi">Visi dan Misi</Link></li>
              <li><Link href="/profil/agenda">Agenda Tahunan</Link></li>
              <li><Link href="/profil/laporan">Laporan Tahunan</Link></li>
            </ul>
          </li>
          {/* Layanan */}
          <li className="group relative">
            <a className="text-lg font-medium cursor-pointer">Layanan</a>
            <ul className="absolute left-0 hidden mt-10 mx-0 bg-yellow-200 rounded-lg shadow-lg p-2 group-hover:block">
              <li><Link href="/layanan/standar">Standar Pelayanan</Link></li>
              <li><Link href="/layanan/pengajuan">Pengajuan</Link></li>
              <li><Link href="/layanan/pengaduan">Pengaduan</Link></li>
              <li><Link href="/layanan/survei">Survei Kepuasan</Link></li>
            </ul>
          </li>
          {/* Berita */}
          <li className="group relative">
            <a className="text-lg font-medium cursor-pointer">Berita</a>
            <ul className="absolute left-0 hidden mt-10 mx-0 bg-yellow-200 rounded-lg shadow-lg p-2 group-hover:block">
              <li><Link href="/berita/pengumuman">Pengumuman</Link></li>
              <li><Link href="/berita/kegiatan">Kegiatan</Link></li>
              <li><Link href="/berita/lomba">Kompetisi/Lomba</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end lg:flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari..."
            className={`input input-bordered bg-yellow-50 pl-10 h-8 transition-all duration-300 ease-in-out ${isFocused ? 'w-48' : 'w-12'}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <Link href="/profil/exMenu/galeri" className="text-lg font-medium max-lg:hidden">Galeri</Link>
        <Link href="/profil/exMenu/dokumen" className="text-lg font-medium max-lg:hidden ">Dokumen</Link>
      </div>
    </nav>
  );
}
