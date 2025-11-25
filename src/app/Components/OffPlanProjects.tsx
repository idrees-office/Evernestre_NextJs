"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Bath,
  BedDouble,
  Heart,
  Home,
  MessageCircle,
  Phone,
  Ruler,
  Share2,
} from "lucide-react";
import Image from "next/image";

interface Project {
  slug: string;
  starting_price: string;
  banner: string;
  title: string;
  location_name: string;
  type: string;
  bedrooms_raw: string;
  bathrooms: string;
  starting_size: string;
}

type OffPlanProjectsProps = {
  projects: Project[];
};

type City = {
  name: string;
  slug: string;
  image: string;
};

const CITIES: City[] = [
  { name: "DUBAI", slug: "dubai", image: "/assets/home/Dubai.webp" },
  {
    name: "ABU DHABI",
    slug: "abu-dhabi",
    image: "/assets/home/Abu-Dhabi.webp",
  },
  { name: "SHARJAH", slug: "sharjah", image: "/assets/home/Sharjah.webp" },
  {
    name: "RAS AL KHAIMAH",
    slug: "ras-al-khaimah",
    image: "/assets/home/Rak.webp",
  },
];

type Currency = "AED" | "USD" | "EUR";

const FX: Record<Currency, number> = {
  AED: 1,
  USD: 0.272294,
  EUR: 0.249,
};

const CURRENCIES = ["AED", "USD", "EUR"] as const;

function formatMoney(amount: string, currency: Currency) {
  if (!amount) return "Price on Request";

  const numeric = parseFloat(amount.replace(/[^\d.]/g, ""));
  if (isNaN(numeric)) return "Price on Request";

  const converted = numeric * FX[currency];
  const symbol =
    currency === "AED" ? "AED " : currency === "USD" ? "USD " : "EUR ";

  return `${symbol}${Math.round(converted).toLocaleString()}`;
}

export default function OffPlanProjects({ projects }: OffPlanProjectsProps) {
  const [currency, setCurrency] = useState<Currency>("AED");

  // Format prices based on selected currency
  const pricedProjects = useMemo(() => {
    return projects?.map((p) => ({
      ...p,
      displayPrice: formatMoney(p.starting_price, currency),
    }));
  }, [projects, currency]);

  return (
    <section className="bg-[#ffffff] py-10">
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h2 className="text-[32px] lg:text-[38px] text-[#8b5d3b] font-normal">
              Off-Plan Projects
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm">
              Explore The UAE&apos;s Latest Off-Plan Projects By Top Developers.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {CURRENCIES.map((c) => {
              const active = currency === c;
              return (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  aria-pressed={!!active}
                  className={[
                    "h-9 px-4 rounded-full text-sm transition-all",
                    active
                      ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] text-white shadow"
                      : "border border-[#d0845b]/50 text-[#8b5d3b] hover:bg-[#d0845b]/10",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/off-plan-projects/${city.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#eae7e4] shadow-md ring-1 ring-black/5 h-[340px]">
                <Image
                  src={city.image}
                  alt={city.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white text-lg font-medium">
                  {city.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto max-w-8xl px-6 md:px-8 mt-14">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-[32px] lg:text-[38px] font-normal text-[#8b5d3b]">
              Latest Off-Plan Projects
            </h2>
            <p className="text-sm text-[#1a1a1a]/70 mt-1">
              Explore the UAE&apos;s latest Off-Plan projects by top developers.
            </p>
          </div>

          <Link
            href="/off-plan-projects"
            className="inline-flex h-9 items-center border border-[#c9a882] px-4 rounded-full text-sm text-[#8b5d3b] hover:bg-[#c9a882]/10 transition-colors"
          >
            Explore All Projects
          </Link>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricedProjects?.map((p) => (
            <div
              key={p.slug}
              className="group relative overflow-hidden rounded-lg border border-[#d0845b]/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              <Link href={`/project/${p.slug}.html`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={
                      p.banner ||
                      "https://test_backend.leadshub.ae/media/7044/Untitled-2.webp"
                    }
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 shadow-lg">
                    <div className="text-sm font-normal text-[#c2754e]">
                      {p.displayPrice}
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-md font-normal text-[#1a1a1a]/70 line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#1a1a1a]/70">
                    {p.location_name || "Dubai"}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-[#1a1a1a] mt-3">
                    <div className="flex items-center">
                      <Home className="h-4 w-4 text-[#8b5d3b] mr-2" />
                      <span>{p.type}</span>
                    </div>
                    <div className="flex items-center">
                      <BedDouble className="h-5 w-5 text-[#8b5d3b] mr-2" />
                      <span>{p.bedrooms_raw || "Studio"}</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 text-[#8b5d3b] mr-2" />
                      <span>{p.bathrooms || "—"}</span>
                    </div>
                    <div className="flex items-center">
                      <Ruler className="h-5 w-5 text-[#8b5d3b] mr-2" />
                      <span>{p.starting_size || "Various Sizes"}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#d0845b]/10 pt-3">
                    <div className="flex items-center gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                        <Phone className="h-3.5 w-3.5" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                        <MessageCircle className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                        <Heart className="h-3.5 w-3.5" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                        <Share2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12" />
      </div>
    </section>
  );
}
