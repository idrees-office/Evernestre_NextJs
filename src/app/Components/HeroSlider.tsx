"use client";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Sparkles,
  Search,
  X,
  ChevronDown,
  Check,
  SlidersHorizontal,
} from "lucide-react";
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

type DropdownName = "buyRent" | "status" | "propertyType" | "minArea" | "maxArea" | "minBedroom" | "maxBedroom" | "maxPrice";

interface FiltersState {
  buyRent: string;
  status: string;
  propertyType: string;
  minArea: string;
  maxArea: string;
  minBedroom: string;
  maxBedroom: string;
  maxPrice: string;
  location: string;
}

export default function HeroSlider({ hero }: HeroSliderProps) {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [slides, setSlides] = useState<any[]>([]);
  const [current, setCurrent] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [showSearchButton, setShowSearchButton] = useState(false);
  const [showSearchPanel, setShowSearchPanel] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(null);
  
  const dropdownOptions = {
    buyRent: ["Buy", "Rent"],
    status: ["Ready", "Off Plan"],
    propertyType: ["Apartment", "Villa", "Townhouse", "Penthouse", "Duplex"],
    minArea: ["50 m²", "100 m²", "150 m²", "200 m²", "300 m²"],
    maxArea: ["200 m²", "300 m²", "400 m²", "500 m²", "1000 m²"],
    minBedroom: ["Studio", "1", "2", "3", "4", "5+"],
    maxBedroom: ["1", "2", "3", "4", "5", "6+"],
    maxPrice: ["AED 1M", "AED 2M", "AED 5M", "AED 10M", "AED 20M", "AED 50M+"],
  } as const;

  const [filters, setFilters] = useState<FiltersState>({
    buyRent: "",
    status: "",
    propertyType: "",
    minArea: "",
    maxArea: "",
    minBedroom: "",
    maxBedroom: "",
    maxPrice: "",
    location: "",
  });

  useEffect(() => {
    setIsMounted(true);

    const formatted = hero.slice(0, 5).map((p: Property) => ({
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
    
    setTimeout(() => {
      setShowSearchButton(true);
    }, 1500);
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

  const goToSlide = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const handleContentClick = useCallback(() => {
    if (slides[current]?.slug) {
      router.push(`/project/${slides[current].slug}.html`);
    }
  }, [current, slides, router]);

  const handleSearchClick = () => {
    setShowSearchPanel(true);
  };

  const handleClosePanel = () => {
    setShowSearchPanel(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: DropdownName) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleFilterChange = <K extends keyof FiltersState>(
    filterName: K,
    value: FiltersState[K]
  ) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const handleSearch = () => {
    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) query.append(key, value);
    });
    handleClosePanel();
    router.push(`/mainsearchbar?${query.toString()}`);
  };

  const CustomDropdown: React.FC<{
    name: DropdownName;
    placeholder?: string;
    options: readonly string[];
    selected?: string;
    onSelect: (value: string) => void;
  }> = ({ name, placeholder, options, selected, onSelect }) => {
    return (
      <div className="relative">
        <button
          type="button"
          className={`cursor-pointer w-full px-4 py-2 bg-white/80 backdrop-blur-sm border rounded-md text-left flex items-center justify-between transition-all duration-300 hover:bg-white focus:outline-none group ${
            activeDropdown === name 
              ? "border-[#c9a882] bg-white shadow-md" 
              : "border-[#1a1a1a]/10"
          }`}
          onClick={() => toggleDropdown(name)}
        >
          <span className={`text-sm font-light ${selected ? "text-[#1a1a1a]" : "text-[#1a1a1a]/40"}`}>
            {selected || placeholder}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-[#1a1a1a]/40 transition-all duration-300 ${
              activeDropdown === name ? "rotate-180 text-[#c9a882]" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {activeDropdown === name && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-[100] mt-2 w-full bg-white rounded-md shadow-xl border border-[#1a1a1a]/10"
            >
              <div className="max-h-64 overflow-y-auto">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="px-4 py-2.5 cursor-pointer hover:bg-[#faf8f6] transition-all flex items-center justify-between border-b border-[#1a1a1a]/5 last:border-0"
                    onClick={() => {
                      onSelect(option);
                      setActiveDropdown(null);
                    }}
                  >
                    <span className="text-sm text-[#1a1a1a]/80 font-light">
                      {option}
                    </span>
                    {selected === option && (
                      <Check className="h-4 w-4 text-[#c9a882]" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  if (slides.length === 0) {
    return (
      <div className="w-full h-[60vh] md:h-[70vh] lg:h-[78vh] xl:h-[82vh] flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a]">
        <div className="text-center">
          <Sparkles className="w-10 h-10 text-[#c9a882] mx-auto mb-3" />
          <p className="text-white/60 font-light text-base">No luxury properties available</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[85vh] overflow-hidden bg-[#0c0c0c] group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#c9a882] via-[#d0845b] to-[#b89374] mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/60 to-black/30 sm:from-black/80 sm:via-black/40 sm:to-transparent md:from-black/70 md:via-black/30 lg:w-3/4" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent sm:from-black/60 sm:via-black/30 md:from-black/50" />
            
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

        <div 
          className="relative z-20 container mx-auto px-4 sm:px-6 md:px-8 h-full flex items-end sm:items-center pb-24 sm:pb-28 md:pb-0 pt-0 sm:pt-12 md:pt-20 lg:pt-24 cursor-pointer" 
          onClick={handleContentClick}
        >
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -inset-3 sm:-inset-4 md:-inset-6 -left-3 sm:-left-4 md:-left-8 bg-gradient-to-r from-white/10 to-white/5 md:from-white/8 md:to-white/3 backdrop-blur-lg md:backdrop-blur-xl rounded-sm md:rounded-md p-3 sm:p-4 md:p-6 -z-10 border border-white/10 shadow-lg md:shadow-xl"
            >
              <motion.div
                animate={{ rotate: 360, opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 md:-top-4 md:-right-4 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-br from-[#c9a882] to-[#d0845b] rounded-full blur-lg"
              />
            </motion.div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 flex-wrap"
              >
                <motion.div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    >
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-[#c9a882] text-[#c9a882]" />
                    </motion.div>
                  ))}
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-[10px] sm:text-xs text-white/95 font-medium tracking-widest uppercase bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-2 py-1 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 rounded-full border border-white/20"
                >
                  {slides[current].type}
                </motion.span>
              </motion.div>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "60px", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="h-[1px] bg-gradient-to-r from-[#d0845b] via-[#c9a882] to-[#d0845b] mb-3 sm:mb-4 md:mb-6 relative overflow-hidden rounded-full sm:w-[80px]"
              >
                <motion.div
                  animate={{ x: ["0%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                />
              </motion.div>

              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal text-white mb-3 sm:mb-4 md:mb-6 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {slides[current].title.split(" ").map((word: string, i: number) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                    className={`inline-block mr-1 sm:mr-1.5 md:mr-2 ${
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
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6"
              >
                <motion.div
                  className="flex items-center gap-1.5 sm:gap-2 text-white/95 bg-gradient-to-r from-white/15 to-white/10 backdrop-blur-lg px-2.5 py-1 sm:px-3 sm:py-1 rounded-full border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#c9a882] flex-shrink-0" />
                  <span className="text-xs sm:text-sm md:text-base font-normal tracking-wide line-clamp-1">
                    {slides[current].subtitle}
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="space-y-2 sm:space-y-3 md:space-y-4"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="text-[10px] sm:text-xs text-white/80 font-light tracking-widest uppercase block bg-gradient-to-r from-white/12 to-white/8 backdrop-blur-lg px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-white/15 inline-block"
                >
                  Starting Price
                </motion.span>

                <motion.h2
                  className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-transparent bg-gradient-to-br from-[#d0845b] via-[#c9a882] to-[#e6b891] bg-clip-text mb-2 md:mb-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.3 }}
                >
                  {slides[current].price}
                </motion.h2>
              </motion.div>
            </div>
          </motion.div>
        </div>
        {showSearchButton && (
            <motion.div
              initial={{ opacity: 0, y: 50, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute right-48 xs:right-56 sm:right-64 md:right-72 lg:right-80 xl:right-96 bottom-20 sm:bottom-24 md:bottom-28 z-30"
            >
              <motion.button
                onClick={handleSearchClick}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative group cursor-pointer"
              >
                {/* Pulsing Outer Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[#d0845b] via-[#c9a882] to-[#d0845b] rounded-full blur-lg"
                />

                {/* Rotating Ring */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute -inset-2 border-2 border-[#c9a882]/50 rounded-full"
                />

                {/* Main Button */}
                <div className="relative bg-gradient-to-br from-white/25 to-white/15 backdrop-blur-xl rounded-full p-3 xs:p-4 sm:p-4 md:p-5 border border-white/40 shadow-2xl group-hover:border-[#c9a882] group-hover:shadow-[#c9a882]/30 transition-all duration-300">
                  {/* Inner Pulse Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 border border-[#c9a882]/60 rounded-full"
                  />

                  {/* Icon Container with Blink */}
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Search className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white drop-shadow-lg" />
                    </motion.div>
                    
                    {/* Blinking Dot */}
                    <motion.div
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-1 -right-1 w-2 h-2 bg-[#c9a882] rounded-full"
                    />
                  </div>

                  {/* Sparkle Effects */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360],
                        x: [0, Math.random() * 20 - 10],
                        y: [0, Math.random() * 20 - 10],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className="absolute w-1 h-1 bg-white rounded-full"
                    />
                  ))}
                </div>

                {/* Text Label with Pulse */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 xs:mt-4"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 0px rgba(201, 168, 130, 0)",
                          "0 0 15px rgba(201, 168, 130, 0.5)",
                          "0 0 0px rgba(201, 168, 130, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="px-3 py-1.5 xs:px-4 xs:py-2 rounded-full"
                    >
                      <span className="text-xs xs:text-sm sm:text-sm md:text-sm text-white font-medium tracking-widest uppercase bg-gradient-to-r from-[#d0845b]/30 to-[#c9a882]/30 backdrop-blur-lg px-3 py-1.5 xs:px-4 xs:py-2 rounded-full border border-white/30 whitespace-nowrap">
                        Search Property
                      </span>
                    </motion.div>
                    
                    {/* Bouncing Arrow */}
                    <motion.div
                      animate={{ 
                        y: [0, -8, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#c9a882] text-xl font-bold"
                    >
                      ↑
                    </motion.div>
                    
                    {/* Pulsing Line */}
                    <motion.div
                      animate={{
                        height: [0, 12, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-3 left-1/2 -translate-x-1/2 w-px bg-gradient-to-t from-[#c9a882] to-transparent"
                    />
                  </div>
                </motion.div>

                {/* Animated Particles Ring */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${i * 30}deg) translateX(45px)`,
                      }}
                      className="w-1 h-1 bg-[#c9a882] rounded-full"
                    />
                  ))}
                </div>

                {/* Floating Particles with Trail */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                    animate={{
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                      x: [0, Math.random() * 60 - 30],
                      y: [0, Math.random() * 60 - 30],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-gradient-to-br from-[#c9a882] to-white rounded-full shadow-lg"
                  >
                    {/* Particle Trail */}
                    <motion.div
                      animate={{
                        opacity: [0.5, 0],
                        scale: [1, 2],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                      }}
                      className="absolute inset-0 bg-[#c9a882] rounded-full blur-sm"
                    />
                  </motion.div>
                ))}

                {/* Radial Pulse Effect */}
                <motion.div
                  animate={{
                    scale: [1, 3],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0 border-2 border-[#c9a882]/30 rounded-full"
                />
              </motion.button>
            </motion.div>
          )}


        

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-30">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative overflow-hidden rounded-full transition-all duration-300 backdrop-blur-md ${
                index === current
                  ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] shadow-lg shadow-[#d0845b]/20 w-8 sm:w-10 md:w-12"
                  : "bg-white/40 w-2.5 sm:w-3 hover:bg-white/60"
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

        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="hidden sm:flex absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.9 }}
          className="hidden sm:flex absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 justify-center items-center rounded-full bg-white/20 backdrop-blur-lg text-white border border-white/30 hover:border-[#c9a882] transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>

        <div className="absolute right-3 sm:right-4 top-3 sm:top-4 z-30">
          <motion.div 
            key={current} 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-md px-2.5 py-1 sm:px-3 sm:py-1 border border-white/20"
          >
            <span className="text-xs sm:text-sm md:text-base text-white font-normal">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-white/50 mx-0.5 sm:mx-1 text-[10px] sm:text-xs">/</span>
            <span className="text-xs sm:text-sm md:text-base text-white/70 font-normal">
              {String(slides.length).padStart(2, "0")}
            </span>
          </motion.div>
        </div>

        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="hidden lg:block absolute top-1/4 -right-32 w-64 h-64 border border-[#c9a882]/15 rounded-full pointer-events-none backdrop-blur-lg"
        />
      </div>

      {/* Luxury Side Panel */}
     

      <AnimatePresence>
  {showSearchPanel && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]"
        onClick={handleClosePanel}
      />

      {/* Luxury Side Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 250 }}
        className="fixed right-0 top-0 h-full w-full sm:w-[480px] bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a] shadow-2xl z-[9999] overflow-hidden border-l border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d0845b] via-[#c9a882] to-[#d0845b]"></div>

        {/* Close Button */}
        <motion.button
          onClick={handleClosePanel}
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/10 border border-white/10 shadow-lg transition-all duration-300"
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>
        {/* Content Container */}
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="relative pt-10 px-8 pb-8">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d0845b]/10 to-[#c9a882]/10 rounded-full blur-3xl"></div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  {/* <div className="p-3 bg-gradient-to-br from-[#d0845b] to-[#c9a882] rounded-xl shadow-lg">
                    <Search className="w-6 h-6 text-white" />
                  </div> */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 border border-[#c9a882]/30 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-light text-white tracking-tight">Luxury Property Search</h2>
                  <p className="text-sm text-white/60 font-light mt-1">Discover your dream home</p>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
            </motion.div>
          </div>
          <div className="px-6 pb-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Location</label>
              <div className="relative group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#c9a882] group-hover:scale-110 transition-transform" />
                <input
                  type="text"
                  placeholder="Enter location or project..."
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                  className="w-full pl-12 pr-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-md border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#c9a882] focus:bg-white/10 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Transaction Type & Status */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Transaction</label>
                <CustomDropdown
                  name="buyRent"
                  placeholder="Buy / Rent"
                  options={dropdownOptions.buyRent}
                  selected={filters.buyRent}
                  onSelect={(value) => handleFilterChange("buyRent", value)}
                />
              </div>
              <div>
                <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Status</label>
                <CustomDropdown
                  name="status"
                  placeholder="Ready / Off Plan"
                  options={dropdownOptions.status}
                  selected={filters.status}
                  onSelect={(value) => handleFilterChange("status", value)}
                />
              </div>
            </motion.div>

            {/* Property Type */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Property Type</label>
              <CustomDropdown
                name="propertyType"
                placeholder="Select type"
                options={dropdownOptions.propertyType}
                selected={filters.propertyType}
                onSelect={(value) => handleFilterChange("propertyType", value)}
              />
            </motion.div>

            {/* Bedrooms */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Bedrooms Min</label>
                <CustomDropdown
                  name="minBedroom"
                  placeholder="Min"
                  options={dropdownOptions.minBedroom}
                  selected={filters.minBedroom}
                  onSelect={(value) => handleFilterChange("minBedroom", value)}
                />
              </div>
              <div>
                <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Bedrooms Max</label>
                <CustomDropdown
                  name="maxBedroom"
                  placeholder="Max"
                  options={dropdownOptions.maxBedroom}
                  selected={filters.maxBedroom}
                  onSelect={(value) => handleFilterChange("maxBedroom", value)}
                />
              </div>
            </motion.div>

            {/* Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div>
                <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Area Min (m²)</label>
                <CustomDropdown
                  name="minArea"
                  placeholder="Min Area"
                  options={dropdownOptions.minArea}
                  selected={filters.minArea}
                  onSelect={(value) => handleFilterChange("minArea", value)}
                />
              </div>
              <div>
                <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Area Max (m²)</label>
                <CustomDropdown
                  name="maxArea"
                  placeholder="Max Area"
                  options={dropdownOptions.maxArea}
                  selected={filters.maxArea}
                  onSelect={(value) => handleFilterChange("maxArea", value)}
                />
              </div>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <label className="block text-xs text-white/80 font-light uppercase tracking-widest mb-3">Max Price</label>
              <CustomDropdown
                name="maxPrice"
                placeholder="Select budget"
                options={dropdownOptions.maxPrice}
                selected={filters.maxPrice}
                onSelect={(value) => handleFilterChange("maxPrice", value)}
              />
            </motion.div>

            {/* Search Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4"
            >
              <motion.button
                onClick={handleSearch}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 bg-gradient-to-r from-[#d0845b] to-[#c9a882] text-white rounded-md transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl group font-medium tracking-wide text-base relative overflow-hidden"
              >
                {/* Shine Effect */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Search Properties</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a882]/30 to-transparent"></div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-64 h-64 border border-[#c9a882]/10 rounded-full pointer-events-none"
        />
      </motion.div>
    </>
  )}
</AnimatePresence>
    </>
  );
}



