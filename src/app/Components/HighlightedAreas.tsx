"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HighlightedAreas({ areas }: { areas: any[] }) {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  // Show 4 items only
  const fourAreas = areas?.slice(0, 4) || [];

  // Fallback if no data
  if (!fourAreas.length) {
    return (
      <section className="py-10">
        <div className="container mx-auto px-6">No areas available.</div>
      </section>
    );
  }

  return (
    <section className="bg-red py-10 pb-12">
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
        <div className="mb-6 md:mb-8 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[32px] md:text-[34px] lg:text-[38px] font-normal tracking-tight text-[#8b5d3b]">
              Highlighted Areas
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm">
              Explore the UAE’s latest communities — from waterfront living to
              luxury estates.
            </p>
          </div>

          <Link
            href="/areas"
            className="h-10 shrink-0 rounded-full px-5 text-sm text-white bg-gradient-to-r from-[#d0845b] to-[#c9a882] flex items-center"
          >
            Explore All Areas
          </Link>
        </div>

        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]">
          {/* CARD 1 - big */}
          <AreaCard
            area={fourAreas[0]}
            index={0}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            className="lg:col-span-2 lg:row-span-2 h-full"
            priority
          />

          {/* CARD 2 */}
          <AreaCard
            area={fourAreas[1]}
            index={1}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />

          {/* CARD 3 */}
          <AreaCard
            area={fourAreas[2]}
            index={2}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />

          {/* CARD 4 - wide */}
          <AreaCard
            area={fourAreas[3]}
            index={3}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            className="lg:col-span-2 h-full"
          />
        </div>

        <div className="mt-12 text-center lg:hidden">
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-[#8b5d3b] border border-[#8b5d3b] transition-all duration-300 hover:bg-[#8b5d3b] hover:text-white"
          >
            View All Areas
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function AreaCard({
  area,
  index,
  isHovered,
  setIsHovered,
  className = "",
  priority = false,
}: {
  area: any;
  index: number;
  isHovered: number | null;
  setIsHovered: (i: number | null) => void;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/areas/${area.slug}`}
      className={`group relative overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsHovered(index)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <div className="absolute inset-0">
        <Image
          src={area.image}
          alt={area.title}
          fill
          priority={priority}
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover"
          draggable={false}
        />

        {/* Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-500 ${
            isHovered === index ? "opacity-90" : "opacity-100"
          }`}
        />

        {/* Shine effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 ${
            isHovered === index ? "translate-x-full" : "-translate-x-full"
          }`}
        />
      </div>

      <div className="absolute left-6 right-6 bottom-6">
        <h3 className="text-white text-xl md:text-2xl font-medium leading-tight drop-shadow-lg mb-2">
          {area.title}
        </h3>

        {area.price && (
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#d0845b] rounded-full"></span>
            <p className="text-white/90 text-sm font-light">
              Starting from{" "}
              <span className="font-semibold">{area.price} AED</span>
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
