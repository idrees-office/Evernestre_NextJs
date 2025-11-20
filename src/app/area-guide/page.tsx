"use client";

import React from "react";
import Header from "../includes/header";
import Link from "next/link";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import SocialLinksSection from "../Components/SocialLinksSection";
import NewsSection from "../Components/NewsSection";
import OffPlanProjects from "../Components/OffPlanProjects";

type Area = {
  name: string;
  slug: string;
  image: string;
  price: string;
};

const AREAS: Area[] = [
  {
    name: "Business Bay",
    slug: "business-bay",
    image: "https://test_backend.leadshub.ae/media/6806/Business-Bay.webp",
    price: "AED 950,000",
  },
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    image:
      "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.3M",
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    image:
      "https://images.pexels.com/photos/1121724/pexels-photo-1121724.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.1M",
  },
  {
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    image:
      "https://images.pexels.com/photos/3146187/pexels-photo-3146187.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 2.5M",
  },
  {
    name: "Jumeirah Village Circle (JVC)",
    slug: "jumeirah-village-circle",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 650,000",
  },
  {
    name: "Arabian Ranches",
    slug: "arabian-ranches",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.9M",
  },
  {
    name: "Meydan",
    slug: "meydan",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 900,000",
  },
  {
    name: "Jumeirah Lake Towers (JLT)",
    slug: "jumeirah-lake-towers",
    image:
      "https://images.pexels.com/photos/306744/pexels-photo-306744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.2M",
  },
  {
    name: "Dubai Hills Estate",
    slug: "dubai-hills-estate",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.6M",
  },
  {
    name: "Bluewaters Island",
    slug: "bluewaters-island",
    image:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 3.2M",
  },
];

export default function AreaGuidePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />

       <section className="bg-[#f6ecdf] py-12 relative overflow-hidden border-b border-[#f0e4d9]">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
            Popular Areas in Dubai
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>

      <section className="relative bg-white py-10 sm:py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 sm:opacity-30 md:opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(30deg, #f8f5f0 12%, transparent 12.5%, transparent 87%, #f8f5f0 87.5%, #f8f5f0),
              linear-gradient(150deg, #f8f5f0 12%, transparent 12.5%, transparent 87%, #f8f5f0 87.5%, #f8f5f0),
              linear-gradient(30deg, #f8f5f0 12%, transparent 12.5%, transparent 87%, #f8f5f0 87.5%, #f8f5f0),
              linear-gradient(150deg, #f8f5f0 12%, transparent 12.5%, transparent 87%, #f8f5f0 87.5%, #f8f5f0),
              linear-gradient(60deg, #f8f5f077 25%, transparent 25.5%, transparent 75%, #f8f5f077 75%, #f8f5f077),
              linear-gradient(60deg, #f8f5f077 25%, transparent 25.5%, transparent 75%, #f8f5f077 75%, #f8f5f077)
            `,
            backgroundSize: '60px 105px',
            backgroundPosition: '0 0, 0 0, 30px 52.5px, 30px 52.5px, 0 0, 30px 52.5px'
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-10">
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#8b5d3b] to-transparent"></div>
              <span className="text-xs font-light text-[#8b5d3b] tracking-[0.2em] sm:tracking-[0.3em] uppercase px-2">
                Exclusive Collections
              </span>
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#8b5d3b] to-transparent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/area-guide/${area.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 border border-gray-100/80">
                  
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-60">
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-white/95 backdrop-blur-sm text-[#8b5d3b] text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg z-10 tracking-wide group-hover:bg-white group-hover:scale-105 transition-all duration-300 border border-white/50">
                      From {area.price}
                    </div>
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-3 sm:p-4 bg-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#8b5d3b] transition-colors duration-300 font-sans leading-tight">
                        {area.name}
                      </h3>
                      <svg 
                        className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-[#8b5d3b] group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <div className="mt-1 sm:mt-2 flex items-center text-xs text-gray-500 font-light">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">Discover Luxury Properties</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}