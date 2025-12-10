"use client";

import Link from "next/link";
import Image from "next/image";

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
  { id: 7, name: "FUJAIRAH", slug: "fujairah", image: "/assets/home/Fujairah.webp" },
];

type CitiesGridProps = {
  cities?: City[]; 
};

export default function CitiesGrid({ cities = CITIES }: CitiesGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {cities.map((city) => (
        <Link
          key={city.id}
          href={`/city/${city.id}`}
          className="group block"
        >
          <div className="relative overflow-hidden rounded-sm bg-[#eae7e4] shadow-md ring-1 ring-black/5 h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]">
            <Image
              src={city.image}
              alt={city.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
            <div className="absolute bottom-3 left-3 text-white text-xs sm:text-sm md:text-base font-medium">
              {city.name}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
