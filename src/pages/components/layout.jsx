import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Siderbar from './sidebar';

const Layout = ({ children }) => {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {router.pathname === '/' && (
        <div className="relative w-screen h-64 overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      )}

      <main className="lg:w-4/5 p-4 flex-grow lg:mx-auto">
        {children}
        <Siderbar />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
