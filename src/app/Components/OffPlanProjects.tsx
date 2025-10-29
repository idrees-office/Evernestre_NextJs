"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Bath, BedDouble, Heart, Home, MessageCircle, Phone, Ruler, Share2, } from "lucide-react";

type City = {
  name: string;
  slug: string;
  image: string;
};

const CITIES: City[] = [
  { name: "DUBAI", slug: "dubai", image: "../assets/home/Dubai.webp" },
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

type Project = {
  slug: string;
  title: string;
  community: string;
  city: string;
  image: string;
  priceAED: number;
  type: "Apartment" | "Villa" | "Townhouse" | "Penthouse";
  bedrooms: number;
  bathrooms: number;
  areaSqft: number;
};

const PROJECTS: Project[] = [
  {
    slug: "danube-bayz-102-business-bay1",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Dubai.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },
  {
    slug: "danube-bayz-102-21",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },

  {
    slug: "danube-bayz-102-business-bay",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Dubai.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },
  {
    slug: "danube-bayz-102-2",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },

  {
    slug: "danube-bayz-102-222230128",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },
  {
    slug: "danube-bayz-102-222433",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },

  {
    slug: "danube-bayz-102-22232",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },

  {
    slug: "danube-bayz-102-211",
    title: "Danube BAYZ 102 At Business Bay",
    community: "Luxury Family Residences II",
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },
];

const FX: Record<Currency, number> = {
  AED: 1,
  USD: 0.272294,
  EUR: 0.249,
};

function formatMoney(amount: number, ccy: Currency) {
  const symbol = ccy === "AED" ? "AED " : ccy === "USD" ? "USD " : "EUR ";

  return `${symbol}${Math.round(amount).toLocaleString()}`;
}
const CURRENCIES = ["AED", "USD", "EUR"] as const;

type Currency = (typeof CURRENCIES)[number];

export default function OffPlanProjects() {
  
  const [currency, setCurrency] = useState<Currency>("AED");

  const pricedProjects = useMemo(
    () =>
      PROJECTS.map((p) => ({
        ...p,
        displayPrice: formatMoney(p.priceAED * FX[currency], currency),
      })),
    [currency]
  );

  return (
    <section className="bg-[#ffffff] py-8 md:py-8 lg:py-8">
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
        <div className="mb-8 md:mb-8 flex items-start justify-between gap-6">
          <div>
            <h2 className="text-[32px] md:text-[32px] lg:text-[38px] font-normal tracking-tight text-[#8b5d3b]">
              Off-Plan Projects
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm">
              Explore The UAE&apos;s Latest Off-Plan Projects By Top Developers,
              Representing A New Era Of Investment Excellence.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {CURRENCIES.map((c) => {
              const active = c === currency;
              return (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={[
                    "h-9 px-4 rounded-full text-sm transition-all",
                    active
                      ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] text-white shadow"
                      : "border border-[#d0845b]/50 text-[#8b5d3b] hover:bg-[#d0845b]/10 cursor-pointer",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/off-plan-projects/${city.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-sm bg-[#eae7e4] shadow-[0_14px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 rounded-sm bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <p className="text-white">{city.name}</p>
                </div>
                <div className="absolute inset-0 rounded-[22px] ring-1 ring-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12" />
      </div>


      <div className="container mx-auto max-w-8xl px-6 md:px-8">
        <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[32px] md:text-[32px] lg:text-[38px] font-normal tracking-tight text-[#8b5d3b]">
              Latest Off-Plan Projects
            </h2>
            <p className="mt-1 text-sm text-[#1a1a1a]/70">
              Explore the UAE&apos;s latest Off-Plan projects by top developers,
              representing a new era of investment excellence.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/off-plan-projects"
              className="ml-2 inline-flex h-9 items-center rounded-full border border-[#c9a882] px-4 text-sm text-[#8b5d3b] hover:bg-[#c9a882]/10"
            >
              Explore All Projects
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricedProjects.map((p) => (
            <div
              key={p.slug}
              className="group relative overflow-hidden rounded-lg border border-[#d0845b]/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
            >
              <Link href={`/off-plan-projects/${p.slug}`}>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 shadow-lg">
                    <div className="text-sm font-normal text-[#c2754e]">
                      {" "}
                      {p.displayPrice}{" "}
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <div className="mb-2">
                    <h3 className="text-md font-normal text-[#1a1a1a]/70 line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#1a1a1a]/70">{p.city}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm text-[#1a1a1a]">
                    <div className="flex items-center">
                      <Home className="h-4 w-4 text-[#8b5d3b]" />
                      <span className="ml-2">{p.type}</span>
                    </div>
                    <div className="flex items-center">
                      <BedDouble className="h-5 w-5 text-[#8b5d3b]" />
                      <span className="ml-2">{p.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-5 w-5 text-[#8b5d3b]" />
                      <span className="ml-2">{p.bathrooms} Bath</span>
                    </div>
                    <div className="flex items-center">
                      <Ruler className="h-5 w-5 text-[#8b5d3b]" />
                      <span className="ml-2">{p.areaSqft} Sqft</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-[#d0845b]/10 pt-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] transition-colors hover:bg-[#d0845b]/10 cursor-pointer"
                        aria-label="Call"
                      >
                        <Phone className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] transition-colors hover:bg-[#d0845b]/10 cursor-pointer"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="h-3.5 w-3.5 " />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] transition-colors hover:bg-[#d0845b]/10 cursor-pointer"
                        aria-label="Favorite"
                      >
                        <Heart className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          // Handle share
                        }}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] transition-colors hover:bg-[#d0845b]/10 cursor-pointer"
                        aria-label="Share"
                      >
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
