"use client";

import React from "react";
import Link from "next/link";
import { Bath, BedDouble, Heart, Home, MessageCircle, Phone, Ruler, Share2, } from "lucide-react";
import HighlightedAreas from "../Components/HighlightedAreas";
import NewsSection from "../Components/NewsSection";

const PROJECTS = [
  {
    slug: "danube-bayz-102-business-bay",
    title: "Danube BAYZ 102 At Business Bay",
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
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    areaSqft: 600,
  },
  {
    slug: "danube-bayz-102-3",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Sharjah.webp",
    priceAED: 220000,
    type: "Townhouse",
    bedrooms: 5,
    bathrooms: 4,
    areaSqft: 950,
  },
  {
    slug: "danube-bayz-102-4",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },


  {
    slug: "danube-bayz-102-11",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },


   {
    slug: "danube-bayz-102-12",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },


   {
    slug: "danube-bayz-102-13",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },

   {
    slug: "danube-bayz-102-15",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },

    {
    slug: "danube-bayz-102-123235",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },


    {
    slug: "danube-bayz-102-153434",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },


    {
    slug: "danube-bayz-102-15656",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },


    {
    slug: "danube-bayz-102-15333",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },




    {
    slug: "danube-bayz-102-business-bay523463643",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Dubai.webp",
    priceAED: 150000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 720,
  },
  {
    slug: "danube-bayz-102-235623623",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Abu-Dhabi.webp",
    priceAED: 150000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    areaSqft: 600,
  },
  {
    slug: "danube-bayz-102-353646343",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Sharjah.webp",
    priceAED: 220000,
    type: "Townhouse",
    bedrooms: 5,
    bathrooms: 4,
    areaSqft: 950,
  },
  {
    slug: "danube-bayz-102-43434",
    title: "Danube BAYZ 102 At Business Bay",
    city: "Business Bay, Dubai",
    image: "/assets/home/Rak.webp",
    priceAED: 180000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    areaSqft: 800,
  },

];

export default function ProjectsPage() {
  return (
    <main className="bg-[#f6ecdf]">
      <section className="container mx-auto max-w-8xl px-6 md:px-8 py-10 md:py-10 lg:py-10">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-1 text-[13px] tracking-tight text-[#0e0e0e]/80 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[color:var(--brand)]"></span>
              Premium Off-Plan • Dubai
            </div>
              <h1 className="text-4xl md:text-5xl font-normal text-[#0e0e0e] leading-[1.15] tracking-tight">
                Off-Plan Projects in{" "}
                <span className="bg-gradient-to-r from-[color:var(--brand)] to-[#b96842] bg-clip-text text-transparent">
                  Dubai
                </span>
              </h1>
              <p className="text-[#1a1a1a]/80 leading-relaxed text-[17px] font-light">
                Evernest Real Estate curates a hand-picked portfolio of premium
                off-plan residences across Dubai’s most coveted districts. From
                launch-day allocations to blue-chip investments, we connect
                discerning buyers and home seekers with exclusive opportunities.
                Our advisors provide end-to-end guidance pricing insights, payment
                plans, and developer due diligence—so every transaction feels
                seamless. Explore one of the UAE’s largest selections of off-plan
                projects and find a home that matches your lifestyle and returns.
              </p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[14px] text-[#0e0e0e]/80">
                <li className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                    <path fill="currentColor" d="M20 6L9 17l-5-5" />
                  </svg> 
                  Exclusive inventory
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                    <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z" />
                  </svg>
                  Expert advisory
                </li>
                <li className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                    <path fill="currentColor" d="M3 12l5 5L21 4" />
                  </svg>
                  Seamless transactions
                </li>
              </ul>
          </div>
          <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-black/10 ring-1 ring-black/10 group">
            <img src="https://test_backend.leadshub.ae/media/1476/mi-66d375deb3454-d884dae45381eb5d352e1d17f4b1c82a.webp"
            alt="Off-Plan Projects in Dubai" className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-[1.03]" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_80%_20%,transparent,rgba(0,0,0,.25))]" />
            <div className="absolute top-4 right-4 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-[12px] font-medium text-[#0e0e0e] border border-white/60 shadow">
              Featured
            </div>
            <div className="absolute inset-0 flex items-end">
              <div className="w-full flex items-center justify-between p-6">
                <h2 className="text-white drop-shadow-sm text-2xl md:text-3xl font-normal tracking-tight"> Latest Off-Plan Projects </h2>
                <div role="button" aria-label="View project details" tabIndex={0} className="bg-[color:var(--brand)] hover:bg-[#b96842] focus:outline-none focus:ring-2 focus:ring-white/60 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-black/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container mx-auto max-w-8xl px-6 md:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-[32px] font-normal text-[#8b5d3b]"> Latest Off-Plan Projects </h2>
              <p className="text-sm text-[#1a1a1a]/70"> Explore the UAE&apos;s latest developments by leading developers. </p>
            </div>
            <Link href="/off-plan-projects" className="inline-flex h-9 items-center rounded-full border border-[#c9a882] px-4 text-sm text-[#8b5d3b] hover:bg-[#c9a882]/10"
            >
              Explore All Projects
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((p) => (
              <Link key={p.slug} href={`/off-plan-projects/${p.slug}`} className="group block overflow-hidden rounded-lg border border-[#d0845b]/20 bg-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"/>
                  <div className="absolute top-4 left-4 bg-white/95 text-[#c2754e] px-3 py-1 rounded-full text-sm shadow">
                    AED {p.priceAED.toLocaleString()}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-md font-medium text-[#1a1a1a] line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#1a1a1a]/70 mb-2">{p.city}</p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-[#1a1a1a]">
                    <div className="flex items-center gap-1">
                      <Home className="h-4 w-4 text-[#8b5d3b]" />
                      {p.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4 text-[#8b5d3b]" />
                      {p.bedrooms} Bed
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4 text-[#8b5d3b]" />
                      {p.bathrooms} Bath
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler className="h-4 w-4 text-[#8b5d3b]" />
                      {p.areaSqft} Sqft
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between pt-2 border-t border-[#d0845b]/10">
                    <div className="flex gap-2">
                      <button className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10">
                        <Phone className="h-4 w-4" />
                      </button>
                      <button className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex gap-2">
                      <button className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10">
                        <Heart className="h-4 w-4" />
                      </button>
                      <button className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HighlightedAreas />
       <NewsSection />
    </main>
  );
}
