import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    "https://img.daisyui.com/images/stock/photo-1556740738-b6a63e27c4df.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-screen h-5/6 overflow-hidden flex">
      <div className="flex w-full h-full" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: "transform 1s right-to-left" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
