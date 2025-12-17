// "use client";

// import Link from "next/link";
// import Image from "next/image";

// export type City = {
//   id: number;
//   name: string;
//   slug: string;
//   image: string;
// };

// export const CITIES: City[] = [
//   { id: 2, name: "DUBAI", slug: "dubai", image: "/assets/home/Dubai.webp" },
//   { id: 1, name: "ABU DHABI", slug: "abu-dhabi", image: "/assets/home/Abu-Dhabi.webp" },
//   { id: 3, name: "SHARJAH", slug: "sharjah", image: "/assets/home/Sharjah.webp" },
//   { id: 6, name: "RAS AL KHAIMAH", slug: "ras-al-khaimah", image: "/assets/home/Rak.webp" },
//   { id: 4, name: "AJMAN", slug: "ajman", image: "/assets/home/Ajman.webp" },
//   { id: 5, name: "UMM AL QUWAIN", slug: "umm-al-quwain", image: "/assets/home/Umm-Al-Quwain.webp" },
//   { id: 7, name: "FUJAIRAH", slug: "fujairah", image: "/assets/home/Fujairah.webp" },
// ];

// type CitiesGridProps = {
//   cities?: City[]; 
// };

// export default function CitiesGrid({ cities = CITIES }: CitiesGridProps) {
//   return (
//     <div className="
//       grid 
//       grid-cols-2 
//       xs:grid-cols-3 
//       sm:grid-cols-4 
//       md:grid-cols-5 
//       lg:grid-cols-6 
//       xl:grid-cols-7 
//       gap-3 sm:gap-4 md:gap-5 lg:gap-6
//     "
//     >
//       {cities.map((city) => (
//         <Link
//           key={city.id}
//           href={`/city/${city.id}`}
//           className="group block transition-transform duration-300 hover:-translate-y-1"
//         >
//           <div className="
//             relative overflow-hidden rounded-md 
//             sm:rounded-md bg-[#eae7e4] shadow-md sm:shadow-lg 
//             ring-1 ring-black/5
//             h-[110px] 
//             xs:h-[130px] 
//             sm:h-[150px] 
//             md:h-[170px] 
//             lg:h-[185px] 
//             xl:h-[210px]
//           ">
//             <Image
//               src={city.image}
//               alt={city.name}
//               fill
//               sizes="
//                 (max-width: 480px) 50vw,
//                 (max-width: 640px) 33vw,
//                 (max-width: 768px) 25vw,
//                 (max-width: 1024px) 20vw,
//                 14vw
//               "
//               className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

//             <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
//               <div className="text-white text-xs xs:text-sm sm:text-base font-medium text-center">
//                 {city.name}
//               </div>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-br from-[#8b5d3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
//                 <span className="text-xs sm:text-sm font-normal text-[#8b5d3b]">
//                   View Projects
//                 </span>
//               </div>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// }





"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export type City = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export const CITIES: City[] = [
  { id: 2, name: "DUBAI", slug: "dubai", image: "/assets/home/Dubai.webp" },
  { id: 1, name: "ABU DHABI", slug: "abu-dhabi", image: "/assets/home/Abu-Dhabi.webp" },
  { id: 3, name: "SHARJAH", slug: "sharjah", image: "/assets/home/Sharjah.webp" },
  { id: 6, name: "RAS AL KHAIMAH", slug: "ras-al-khaimah", image: "/assets/home/Rak.webp" },
  { id: 4, name: "AJMAN", slug: "ajman", image: "/assets/home/Ajman.webp" },
  { id: 5, name: "UMM AL QUWAIN", slug: "umm-al-quwain", image: "/assets/home/Umm-Al-Quwain.webp" },
  { id: 7, name: "FUJAIRAH", slug: "fujairah", image: "/assets/home/Fujairah.webp" },
];

type CitiesGridProps = {
  cities?: City[]; 
};

export default function CitiesGrid({ cities = CITIES }: CitiesGridProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  // Calculate visible slides based on screen size
  const getVisibleSlides = () => {
    if (!isMobile) return cities.length;
    
    if (window.innerWidth < 480) return 2; // xs
    if (window.innerWidth < 640) return 3; // sm
    return 4; // md and above will use grid
  };

  // Calculate slide width for mobile
  const slideWidth = isMobile ? `${100 / getVisibleSlides()}%` : "auto";

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
            href={`/city/${city.id}`}
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
                  {city.name}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5d3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                  <span className="text-xs sm:text-sm font-normal text-[#8b5d3b]">
                    View Projects
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // Mobile slider view
  return (
    <div className="relative px-8 md:px-0">
      {/* Navigation Buttons */}
      {currentSlide > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>
      )}

      {currentSlide < cities.length - getVisibleSlides() && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:bg-white transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>
      )}

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div 
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentSlide * (100 / getVisibleSlides())}%)` }}
        >
          {cities.map((city) => (
            <div 
              key={city.id} 
              className="flex-shrink-0"
              style={{ width: slideWidth }}
            >
              <Link
                href={`/city/${city.id}`}
                className="group block px-2 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="
                  relative overflow-hidden rounded-md 
                  bg-[#eae7e4] shadow-lg 
                  ring-1 ring-black/5
                  h-[150px]
                ">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    sizes="50vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="text-white text-sm font-medium text-center">
                      {city.name}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b5d3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-normal text-[#8b5d3b]">
                        View Projects
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {Array.from({ length: cities.length - getVisibleSlides() + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentSlide === index 
                ? "bg-[#8b5d3b] w-4" 
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

