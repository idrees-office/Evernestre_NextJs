'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const slides = [
    { 
      image: "/assets/header.png",
      title: "Mansory Residences",
      subtitle: "1–3 Bedrooms Apartments",
      price: "AED 2.2M",
      plan: "70/30 Payment Plan",
    },
    {
      image: "/assets/header-bg.webp",
      title: "Palm Views Villas",
      subtitle: "4–6 Bedroom Luxury Villas",
      price: "AED 6.5M",
      plan: "60/40 Payment Plan",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[78vh] lg:h-[82vh] overflow-hidden bg-[#1a1a1a]">
      {/* Slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.0, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0 absolute inset-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 via-[#1a1a1a]/45 to-transparent z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content (higher from top) */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 h-full flex items-start">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl pt-16 md:pt-20 lg:pt-24"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="h-[2px] bg-gradient-to-r from-[#d0845b] to-[#c9a882] mb-5"
          />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-3 tracking-tight leading-[1.05]">
            {slides[current].title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? 'text-[#c9a882] font-extralight' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>

          <p className="text-lg md:text-2xl text-white/85 mb-6 font-light tracking-wide">
            {slides[current].subtitle}
          </p>

          <div className="space-y-2.5">
            <div className="flex items-baseline gap-3">
              <span className="text-xs md:text-sm text-white/60 font-light tracking-wider uppercase">
                Starting from
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#d0845b]">
              {slides[current].price}
            </h2>
            <p className="text-white/75 text-base md:text-lg font-light tracking-wide">
              {slides[current].plan}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Dots (closer to bottom) */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[2px] rounded-full transition-all duration-500 ${
              index === current
                ? 'bg-[#d0845b] w-12'
                : 'bg-white/35 w-8 hover:bg-white/55'
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="cursor-pointer hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/45 backdrop-blur text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" /> 
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 items-center justify-center rounded-full bg-black/30 hover:bg-black/45 backdrop-blur text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" /> 
      </button>
    </div>
  );
}
