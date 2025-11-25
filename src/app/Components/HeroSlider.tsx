"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Sparkles,
} from "lucide-react";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  plan: string;
  features: string[];
  rating: number;
  type: string;
}

interface Property {
  banner: string;
  title: string;
  bedrooms: string | null;
  location_name: string;
  starting_price: string;
  payment_plan: string;
  features: string[];
  rating: number;
  type: string;
}
interface HeroSliderProps {
  hero: Property[];
}

function cleanBedrooms(html: string | null) {
  if (!html) return "";
  return html
    .replace(/<\/br>|<br\s*\/?>/gi, " • ")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
}

export default function HeroSlider({ hero }: HeroSliderProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [slides, setSlides] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const formatted = hero.slice(0, 5).map((p: Property) => ({
      image: p.banner,
      title: p.title ? p.title.slice(0, 35) : "",
      subtitle:
        cleanBedrooms(p.bedrooms) || p.location_name || "Business Bay, Dubai",
      price: p.starting_price,
      plan: p.payment_plan?.replace(/<[^>]*>/g, "") || "Flexible Payment Plan",
      features: p.features || ["Luxury Living", "Premium Location"],
      rating: p.rating || 5,
      type: p.type || "Luxury Residence",
    }));

    setSlides(formatted);
  }, [hero]);

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
    [slides.length]
  );

  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
    [slides.length]
  );

  // Auto-slide with pause on hover
  useEffect(() => {
    if (!isMounted || slides.length === 0 || isHovering) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isMounted, slides.length, isHovering, nextSlide]);

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  if (slides.length === 0) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a]">
        <div className="text-center">
          <Sparkles className="w-10 h-10 text-[#c9a882] mx-auto mb-3" />
          <p className="text-white/60 font-light text-base">
            No luxury properties available
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[70vh] md:h-[78vh] lg:h-[82vh] overflow-hidden bg-[#0c0c0c] group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a882] via-[#d0845b] to-[#b89374] mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Main Image Slider */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute inset-0"
        >
          {/* Gradient overlays */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/30 to-transparent w-3/4" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Light sweep */}
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: 0.3 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            draggable={false}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Section */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex items-start pt-30">
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative max-w-xl"
        >
          {/* Background container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -inset-6 -left-8 bg-gradient-to-r from-white/8 to-white/3 backdrop-blur-xl rounded-2xl p-6 -z-10 border border-white/10 shadow-xl"
          >
            {/* Floating elements */}
            <motion.div
              animate={{
                rotate: 360,
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#c9a882] to-[#d0845b] rounded-full blur-lg"
            />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <motion.div
                className="flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + i * 0.1,
                    }}
                  >
                    <Star className="w-4 h-4 fill-[#c9a882] text-[#c9a882]" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-xs text-white/95 font-medium tracking-widest uppercase bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/20"
              >
                {slides[current].type}
              </motion.span>
            </motion.div>

            {/* Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "100px", opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="h-[1px] bg-gradient-to-r from-[#d0845b] via-[#c9a882] to-[#d0845b] mb-6 relative overflow-hidden rounded-full"
            >
              <motion.div
                animate={{ x: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-6 tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {slides[current].title
                .split(" ")
                .map((word: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className={`inline-block mr-2 ${
                      i === 0
                        ? "text-transparent bg-gradient-to-r from-[#d0845b] to-[#c9a882] bg-clip-text font-extralight"
                        : "text-white"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-4 mb-6"
            >
              <motion.div
                className="flex items-center gap-2 text-white/95 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-3 py-1 rounded-full border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin className="w-4 h-4 text-[#c9a882]" />
                <span className="text-base font-normal tracking-wide">
                  {slides[current].subtitle}
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="space-y-4"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-xs text-white/80 font-light tracking-widest uppercase block bg-gradient-to-r from-white/12 to-white/8 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/15 inline-block"
              >
                Starting Price
              </motion.span>

              <motion.h2
                className="text-4xl md:text-3xl lg:text-4xl font-normal text-transparent bg-gradient-to-br from-[#d0845b] via-[#c9a882] to-[#e6b891] bg-clip-text mb-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 1.3,
                }}
              >
                {slides[current].price}
              </motion.h2>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`relative overflow-hidden rounded-full transition-all duration-300 backdrop-blur-md ${
              index === current
                ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] shadow-lg shadow-[#d0845b]/20 w-12"
                : "bg-white/40 w-3 hover:bg-white/60"
            } h-1`}
          >
            {index === current && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-white/50 rounded-full"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.9 }}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* Slide Counter */}
      <div className="absolute right-4 top-4 z-30">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-lg px-3 py-1 border border-white/20"
        >
          <span className="text-sm md:text-base text-white font-light">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-white/50 mx-1 text-xs">/</span>
          <span className="text-sm md:text-base text-white/70 font-light">
            {String(slides.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/4 -right-32 w-64 h-64 border border-[#c9a882]/15 rounded-full pointer-events-none backdrop-blur-lg"
      />
    </div>
  );
}
