// "use client";
// import React, { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Star,
//   MapPin,
//   Sparkles,
//   Link,
// } from "lucide-react";
// import { useRouter } from "next/navigation";


// interface Slide {
//   image: string;
//   title: string;
//   subtitle: string;
//   price: string;
//   plan: string;
//   features: string[];
//   rating: number;
//   type: string;
// }

// interface Property {
//   banner: string;
//   title: string;
//   bedrooms: string | null;
//   location_name: string;
//   starting_price: string;
//   payment_plan: string;
//   features: string[];
//   rating: number;
//   type: string;
//   slug: string;
// }
// interface HeroSliderProps {
//   hero: Property[];
// }

// function cleanBedrooms(html: string | null) {
//   if (!html) return "";
//   return html
//     .replace(/<\/br>|<br\s*\/?>/gi, " • ")
//     .replace(/<\/?[^>]+(>|$)/g, "")
//     .trim();
// }

// export default function HeroSlider({ hero }: HeroSliderProps) {
//    const router = useRouter();
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [slides, setSlides] = useState<any[]>([]);
//   const [current, setCurrent] = useState(0);
//   const [isMounted, setIsMounted] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);

//     const formatted = hero.slice(0, 5).map((p: Property) => ({
//       image: p.banner,
//       title: p.title ? p.title.slice(0, 35) : "",
//       subtitle:
//         cleanBedrooms(p.bedrooms) || p.location_name || "Business Bay, Dubai",
//       price: p.starting_price,
//       plan: p.payment_plan?.replace(/<[^>]*>/g, "") || "Flexible Payment Plan",
//       features: p.features || ["Luxury Living", "Premium Location"],
//       rating: p.rating || 5,
//       type: p.type || "Luxury Residence",
//       slug: p.slug, 
//     }));

//     setSlides(formatted);
//   }, [hero]);

//   const nextSlide = useCallback(
//     () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
//     [slides.length]
//   );

//   const prevSlide = useCallback(
//     () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
//     [slides.length]
//   );

//   useEffect(() => {
//     if (!isMounted || slides.length === 0 || isHovering) return;
//     const timer = setInterval(nextSlide, 5000);
//     return () => clearInterval(timer);
//   }, [isMounted, slides.length, isHovering, nextSlide]);

//   const goToSlide = useCallback((index: number) => {
//     setCurrent(index);
//   }, []);


//   const handleContentClick = useCallback(() => {
//     if (slides[current]?.slug) {
//       router.push(`/project/${slides[current].slug}.html`);
//     }
//   }, [current, slides, router]);

//   if (slides.length === 0) {
//     return (
//       <div className="w-full h-[60vh] md:h-[70vh] lg:h-[78vh] xl:h-[82vh] flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a]">
//         <div className="text-center">
//           <Sparkles className="w-10 h-10 text-[#c9a882] mx-auto mb-3" />
//           <p className="text-white/60 font-light text-base">
//             No luxury properties available
//           </p>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div
//     // relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[82vh] overflow-hidden bg-[#0c0c0c] group
//       className="relative w-full h-[55vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden bg-[#0c0c0c] group"
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       <div className="absolute inset-0 opacity-5 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#c9a882] via-[#d0845b] to-[#b89374] mix-blend-soft-light"></div>
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
//       </div>

//       {/* Main Image Slider */}
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div
//           key={current}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{
//             duration: 1.2,
//             ease: [0.25, 0.46, 0.45, 0.94],
//           }}
//           className="absolute inset-0"
//         >
//           {/* Gradient overlays */}
//           <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/70 md:via-black/30 lg:w-3/4" />
//           <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:from-black/50" />

//           {/* Light sweep */}
//           <motion.div
//             initial={{ x: "-100%", opacity: 0 }}
//             animate={{ x: "100%", opacity: 0.3 }}
//             transition={{ duration: 2, delay: 0.3 }}
//             className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//           />

//           <motion.img
//             src={slides[current].image}
//             alt={slides[current].title}
//             className="w-full h-full object-cover"
//             draggable={false}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 10, ease: "easeOut" }}
//           />
//         </motion.div>
//       </AnimatePresence>
//       {/* Content Section */}
//         <div className="relative z-20 container mx-auto px-4 sm:px-4 md:px-6 h-full flex items-center md:items-start pt-12 md:pt-20 lg:pt-30 cursor-pointer" onClick={handleContentClick}>
        
//         <motion.div
//           key={`content-${current}`}
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.2,
//             ease: [0.25, 0.46, 0.45, 0.94],
//           }}
//           className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-4 md:mx-0"
//         >
//           {/* Background container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="absolute -inset-4 md:-inset-6 -left-4 md:-left-8 bg-gradient-to-r from-white/10 to-white/5 md:from-white/8 md:to-white/3 backdrop-blur-lg md:backdrop-blur-xl rounded-sm md:rounded-md p-4 md:p-6 -z-10 border border-white/10 shadow-lg md:shadow-xl"
//           >
//             {/* Floating elements */}
//             <motion.div
//               animate={{
//                 rotate: 360,
//                 opacity: [0.1, 0.4, 0.1],
//                 scale: [1, 1.2, 1],
//               }}
//               transition={{
//                 rotate: { duration: 15, repeat: Infinity, ease: "linear" },
//                 opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
//               }}
//               className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#c9a882] to-[#d0845b] rounded-full blur-lg"
//             />
//           </motion.div>

//           <div className="relative z-10">

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6"
//             >
//               <motion.div
//                 className="flex items-center gap-1"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ staggerChildren: 0.1 }}
//               >
//                 {[...Array(5)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{
//                       duration: 0.4,
//                       delay: 0.6 + i * 0.1,
//                     }}
//                   >
//                     <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#c9a882] text-[#c9a882]" />
//                   </motion.div>
//                 ))}
//               </motion.div>
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5, delay: 0.9 }}
//                 className="text-xs text-white/95 font-medium tracking-widest uppercase bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-2 py-1 md:px-3 md:py-1.5 rounded-full border border-white/20"
//               >
//                 {slides[current].type}
//               </motion.span>
//             </motion.div>

            
//             <motion.div
//               initial={{ width: 0, opacity: 0 }}
//               animate={{ width: "80px", opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//               className="h-[1px] bg-gradient-to-r from-[#d0845b] via-[#c9a882] to-[#d0845b] mb-4 md:mb-6 relative overflow-hidden rounded-full"
//             >
//               <motion.div
//                 animate={{ x: ["0%", "100%"] }}
//                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
//               />
//             </motion.div>

//             {/* Title */}
//             <motion.h1
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 md:mb-6 tracking-tight leading-tight"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             >
//               {slides[current].title
//                 .split(" ")
//                 .map((word: string, i: number) => (
//                   <motion.span
//                     key={i}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       duration: 0.5,
//                       delay: 0.8 + i * 0.1,
//                       ease: "easeOut",
//                     }}
//                     className={`inline-block mr-1 md:mr-2 ${
//                       i === 0
//                         ? "text-transparent bg-gradient-to-r from-[#d0845b] to-[#c9a882] bg-clip-text font-extralight"
//                         : "text-white"
//                     }`}
//                   >
//                     {word}
//                   </motion.span>
//                 ))}
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1 }}
//               className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
//             >
//               <motion.div
//                 className="flex items-center gap-2 text-white/95 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-3 py-1 rounded-full border border-white/20"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 400 }}
//               >
//                 <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#c9a882]" />
//                 <span className="text-sm sm:text-base font-normal tracking-wide">
//                   {slides[current].subtitle}
//                 </span>
//               </motion.div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//               className="space-y-3 md:space-y-4"
//             >
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.6, delay: 1.2 }}
//                 className="text-xs text-white/80 font-light tracking-widest uppercase block bg-gradient-to-r from-white/12 to-white/8 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/15 inline-block"
//               >
//                 Starting Price
//               </motion.span>

//               <motion.h2
//                 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-normal text-transparent bg-gradient-to-br from-[#d0845b] via-[#c9a882] to-[#e6b891] bg-clip-text mb-2 md:mb-3"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 1.3,
//                 }}
//               >
//                 {slides[current].price}
//               </motion.h2>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//       <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
//         {slides.map((_, index) => (
//           <motion.button
//             key={index}
//             onClick={() => goToSlide(index)}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             className={`relative overflow-hidden rounded-full transition-all duration-300 backdrop-blur-md ${
//               index === current
//                 ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] shadow-lg shadow-[#d0845b]/20 w-10 md:w-12"
//                 : "bg-white/40 w-3 hover:bg-white/60"
//             } h-1`}
//           >
//             {index === current && (
//               <motion.div
//                 initial={{ x: "-100%" }}
//                 animate={{ x: "100%" }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 bg-white/50 rounded-full"
//               />
//             )}
//           </motion.button>
//         ))}
//       </div>
//       <motion.button
//         onClick={prevSlide}
//         whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//         whileTap={{ scale: 0.9 }}
//         className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
//       >
//         <ChevronLeft className="w-5 h-5" />
//       </motion.button>

//       <motion.button
//         onClick={nextSlide}
//         whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
//         whileTap={{ scale: 0.9 }}
//         className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
//       >
//         <ChevronRight className="w-5 h-5" />
//       </motion.button>
//       <div className="absolute right-4 top-4 z-30">
//         <motion.div key={current} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.4 }}
//           className="flex items-center gap-1 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-lg px-3 py-1 border border-white/20"
//         >
//           <span className="text-sm md:text-base text-white font-normal">
//             {String(current + 1).padStart(2, "0")}
//           </span>
//           <span className="text-white/50 mx-1 text-xs">/</span>
//           <span className="text-sm md:text-base text-white/70 font-normal">
//             {String(slides.length).padStart(2, "0")}
//           </span>
//         </motion.div>
//       </div>
//       <motion.div
//         animate={{
//           rotate: 360,
//           scale: [1, 1.1, 1],
//           opacity: [0.3, 0.6, 0.3],
//         }}
//         transition={{
//           rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//           scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
//         }}
//         className="hidden lg:block absolute top-1/4 -right-32 w-64 h-64 border border-[#c9a882]/15 rounded-full pointer-events-none backdrop-blur-lg"
//       />
//     </div>
//   );
// }




"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MapPin, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

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
  slug: string;
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

type Slide = {
  image: string;
  title: string;
  subtitle: string;
  price: string;
  plan: string;
  features: string[];
  rating: number;
  type: string;
  slug: string;
};

export default function HeroSlider({ hero }: HeroSliderProps) {
  const router = useRouter();

  const [slides, setSlides] = useState<Slide[]>([]);
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const formatted: Slide[] = hero.slice(0, 5).map((p) => ({
      image: p.banner,
      title: p.title ? p.title.slice(0, 35) : "",
      subtitle: cleanBedrooms(p.bedrooms) || p.location_name || "Business Bay, Dubai",
      price: p.starting_price,
      plan: p.payment_plan?.replace(/<[^>]*>/g, "") || "Flexible Payment Plan",
      features: p.features || ["Luxury Living", "Premium Location"],
      rating: p.rating || 5,
      type: p.type || "Luxury Residence",
      slug: p.slug,
    }));

    setSlides(formatted);
    setCurrent(0);
  }, [hero]);

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
    [slides.length]
  );

  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
    [slides.length]
  );

  useEffect(() => {
    if (!isMounted || slides.length === 0 || isHovering) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isMounted, slides.length, isHovering, nextSlide]);

  const goToSlide = useCallback((index: number) => setCurrent(index), []);

  const handleContentClick = useCallback(() => {
    if (slides[current]?.slug) router.push(`/project/${slides[current].slug}.html`);
  }, [current, slides, router]);

  if (slides.length === 0) {
    return (
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-[78vh] xl:h-[82vh] flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a]">
        <div className="text-center px-4">
          <Sparkles className="w-10 h-10 text-[#c9a882] mx-auto mb-3" />
          <p className="text-white/60 font-light text-base">No luxury properties available</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[58vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden bg-[#0c0c0c] group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* subtle bg texture */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a882] via-[#d0845b] to-[#b89374] mix-blend-soft-light" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2760%27 height=%2730%27 viewBox=%270 0 30 30%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.03%27%3E%3Ccircle cx=%2730%27 cy=%2730%27 r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      {/* Main Image Slider */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/70 md:via-black/30 lg:w-3/4" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent md:from-black/50" />

          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "100%", opacity: 0.28 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />

          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            draggable={false}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 10, ease: "easeOut" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div
        className="relative z-20 h-full flex items-start md:items-start pt-10 sm:pt-12 md:pt-20 cursor-pointer"
        onClick={handleContentClick}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-[92vw] sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-md md:rounded-lg -z-10 border border-white/10 shadow-lg"
            >
              <motion.div
                animate={{ rotate: 360, opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-3 -right-3 w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#c9a882] to-[#d0845b] rounded-full blur-lg"
              />
            </motion.div>

            <div className="relative z-10">
              {/* stars + type */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, delay: 0.6 + i * 0.08 }}
                    >
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#c9a882] text-[#c9a882]" />
                    </motion.div>
                  ))}
                </div>

                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, delay: 0.9 }}
                  className="text-[10px] sm:text-xs text-white/95 font-medium tracking-widest uppercase bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/20"
                >
                  {slides[current].type}
                </motion.span>
              </motion.div>

              {/* divider */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "80px", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="h-[1px] bg-gradient-to-r from-[#d0845b] via-[#c9a882] to-[#d0845b] mb-4 sm:mb-6 relative overflow-hidden rounded-full"
              >
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                />
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4 sm:mb-6 tracking-tight leading-tight break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {slides[current].title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.8 + i * 0.08, ease: "easeOut" }}
                    className={`inline-block mr-1 sm:mr-2 ${
                      i === 0
                        ? "text-transparent bg-gradient-to-r from-[#d0845b] to-[#c9a882] bg-clip-text font-extralight"
                        : "text-white"
                    }`}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              {/* location */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
              >
                <motion.div
                  className="max-w-full flex items-center gap-2 text-white/95 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-3 py-1 rounded-full border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-[#c9a882] shrink-0" />
                  <span className="text-sm sm:text-base font-normal tracking-wide truncate max-w-[68vw] sm:max-w-none">
                    {slides[current].subtitle}
                  </span>
                </motion.div>
              </motion.div>

              {/* price */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="space-y-3 sm:space-y-4"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-[10px] sm:text-xs text-white/80 font-light tracking-widest uppercase block bg-gradient-to-r from-white/12 to-white/8 backdrop-blur-lg px-3 py-1.5 rounded-full border border-white/15 w-fit"
                >
                  Starting Price
                </motion.span>

                <motion.h2
                  className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-normal text-transparent bg-gradient-to-br from-[#d0845b] via-[#c9a882] to-[#e6b891] bg-clip-text"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.3 }}
                >
                  {slides[current].price}
                </motion.h2>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30 px-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`relative overflow-hidden rounded-full transition-all duration-300 backdrop-blur-md ${
              index === current
                ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] shadow-lg shadow-[#d0845b]/20 w-10 md:w-12"
                : "bg-white/40 w-3 hover:bg-white/60"
            } h-1`}
            aria-label={`Go to slide ${index + 1}`}
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

      {/* arrows */}
      <motion.button
        onClick={prevSlide}
        whileHover={{ scale: 1.08, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        whileHover={{ scale: 1.08, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        whileTap={{ scale: 0.95 }}
        className="hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>

      {/* counter */}
      <div className="absolute right-3 sm:right-4 top-3 sm:top-4 z-30">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-1 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-lg px-3 py-1 border border-white/20"
        >
          <span className="text-sm md:text-base text-white font-normal">
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-white/50 mx-1 text-xs">/</span>
          <span className="text-sm md:text-base text-white/70 font-normal">
            {String(slides.length).padStart(2, "0")}
          </span>
        </motion.div>
      </div>

      {/* big ring */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="hidden lg:block absolute top-1/4 -right-32 w-64 h-64 border border-[#c9a882]/15 rounded-full pointer-events-none backdrop-blur-lg"
      />
    </div>
  );
}





