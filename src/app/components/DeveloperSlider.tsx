import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Developer {
  id: number;
  name: string;
  slug: string;
  image: string;
}

interface DevelopersSliderProps {
  developers?: Developer[];
}

function DeveloperCard({ developer }: { developer: Developer }) {
  return (
    <div className="group flex-shrink-0 w-[200px] h-[120px] bg-white rounded-xl p-6 cursor-pointer transition-all duration-500 hover:shadow-[0_8px_30px_rgba(139,93,59,0.12)] hover:-translate-y-1 border border-[#f0e4d9]/50">
      <div className="flex items-center justify-center h-full">
        {developer.image ? (
          <img
            src={developer.image}
            alt={developer.name}
            className="max-h-14 max-w-full object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-lg font-semibold text-[#3c2f26] tracking-wide opacity-50 group-hover:opacity-100 transition-opacity">
            {developer.name}
          </span>
        )}
      </div>
    </div>
  );
}

export default function DevelopersSlider({ developers }: DevelopersSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollButtons);
      return () => slider.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // If no developers or empty array, return null (component won't show)
  if (!developers || developers.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#f8f6f3]">
      <section className="py-6">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-10">
          <div className="relative">
            {/* Left Arrow */}
            <button 
                    onClick={() => scroll("left")} 
                    disabled={!canScrollLeft}
                    className={`cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-3 z-10 
                        w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 
                        rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 
                        border border-[#f0e4d9] ${
                        canScrollLeft
                            ? "text-[#c97a52] hover:bg-[#c97a52] hover:text-white hover:scale-105"
                            : "text-[#8b5d3b]/20 cursor-not-allowed opacity-50"
                        }`}
                    aria-label="Scroll left"
                    >
                    <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </button>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
              style={{ 
                scrollbarWidth: "none", 
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch"
              }}
            >
              {developers.map((developer, index) => (
                <motion.div
                  key={developer.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <DeveloperCard developer={developer} />
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-3 z-10 
                    w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 
                    rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 
                    border border-[#f0e4d9] ${
                    canScrollRight
                        ? "text-[#c97a52] hover:bg-[#c97a52] hover:text-white hover:scale-105"
                        : "text-[#8b5d3b]/20 cursor-not-allowed opacity-50"
                    }`}
                aria-label="Scroll right"
                >
                <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>
          </div>
        </div>
      </section>
    </div>
  );
}




