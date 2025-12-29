"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, TouchEvent } from "react";
import { useTranslations, useLocale } from "next-intl";

export type City = {
  id: number;
  name: string;
  slug: string;
  image: string;
  translationKey : string
};

export const CITIES: City[] = [
  { id: 2, name: "DUBAI", slug: "dubai", image: "/assets/home/Dubai.webp", translationKey: "dubai" },
  { id: 1, name: "ABU DHABI", slug: "abu-dhabi", image: "/assets/home/Abu-Dhabi.webp",  translationKey: "abuDhabi" },
  { id: 3, name: "SHARJAH", slug: "sharjah", image: "/assets/home/Sharjah.webp", translationKey: "sharjah" },
  { id: 6, name: "RAS AL KHAIMAH", slug: "ras-al-khaimah", image: "/assets/home/Rak.webp", translationKey: "sharjah" },
  { id: 4, name: "AJMAN", slug: "ajman", image: "/assets/home/Ajman.webp", translationKey: "sharjah" },
  { id: 5, name: "UMM AL QUWAIN", slug: "umm-al-quwain", image: "/assets/home/Umm-Al-Quwain.webp", translationKey: "sharjah" },
  { id: 7, name: "FUJAIRAH", slug: "fujairah", image: "/assets/home/Fujairah.webp", translationKey: "sharjah" },
];

type CitiesGridProps = {
  cities?: City[]; 
};

export default function CitiesGrid({ cities = CITIES }: CitiesGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
 const t = useTranslations();
  const locale = useLocale();


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (currentSlide < cities.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const threshold = 50; // Minimum swipe distance
    
    if (touchStart - touchEnd > threshold) {
      // Swipe left - next slide
      nextSlide();
    }

    if (touchStart - touchEnd < -threshold) {
      // Swipe right - previous slide
      prevSlide();
    }
  };

  // Desktop grid view
  if (!isMobile) {
    return (
      <div className="
        grid 
        grid-cols-2 
        xs:grid-cols-3 
        sm:grid-cols-4 
        md:grid-cols-5 
        lg:grid-cols-6 
        xl:grid-cols-7 
        gap-3 sm:gap-4 md:gap-5 lg:gap-6
      "
      >
        {cities.map((city) => (
          <Link
            key={city.id}
            href={`/${locale}/city/${city.id}`}
            className="group block transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="
              relative overflow-hidden rounded-md 
              sm:rounded-md bg-[#eae7e4] shadow-md sm:shadow-lg 
              ring-1 ring-black/5
              h-[110px] 
              xs:h-[130px] 
              sm:h-[150px] 
              md:h-[170px] 
              lg:h-[185px] 
              xl:h-[210px]
            ">
              <Image
                src={city.image}
                alt={city.name}
                fill
                sizes="
                  (max-width: 480px) 50vw,
                  (max-width: 640px) 33vw,
                  (max-width: 768px) 25vw,
                  (max-width: 1024px) 20vw,
                  14vw
                "
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-white text-xs xs:text-sm sm:text-base font-medium text-center">
                  
                  {t(city.translationKey)}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5d3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                  <span className="text-xs sm:text-sm font-normal text-[#8b5d3b]"> {t('ViewProjects')} </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // Mobile slider view - Show ONE slide at a time
  return (
    <div className="relative">
      {/* Navigation Buttons - Always visible on mobile */}
      <button
        onClick={prevSlide}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-all duration-200 hover:scale-110 ${
          currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        onClick={nextSlide}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-all duration-200 hover:scale-110 ${
          currentSlide === cities.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={currentSlide === cities.length - 1}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Slider Container - Show ONE slide at a time */}
      <div className="overflow-hidden px-4">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cities.map((city) => (
            <div 
              key={city.id} 
              className="flex-shrink-0 w-full px-1"
            >
              <Link
                href={`/${locale}/city/${city.id}`}
                className="group block transition-transform duration-300 active:scale-95"
              >
                <div className="
                  relative overflow-hidden rounded-lg 
                  bg-[#eae7e4] shadow-lg 
                  ring-1 ring-black/5
                  h-[220px]  // Taller for better visibility
                ">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="100vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="text-white text-base font-medium text-center">
                      {city.name}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b5d3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-normal text-[#8b5d3b]">
                        {t('ViewProjects')}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator - Show all dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {cities.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index 
                ? "bg-[#8b5d3b] scale-125" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to ${cities[index].name}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-2">
        <p className="text-xs text-gray-500">
          <span className="font-medium">{currentSlide + 1}</span> / {cities.length}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          { t('swipe_or_tap') }

        </p>
      </div>
    </div>
  );
}

