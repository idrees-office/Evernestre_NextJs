"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getProjects } from "@/lib/projects";
import {
  Bath,
  BedDouble,
  Heart,
  Home,
  MessageCircle,
  Phone,
  Ruler,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import LuxuryLoader from "../Components/LuxuryLoader";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import Image from "next/image";

function cleanBedrooms(html: string | null) {
  if (!html) return "";
  return html
    .replace(/<\/br>|<br\s*\/?>/gi, " • ")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
}

export default function AllProjectsPage() {
  const [projects, setProjects] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [meta, setMeta] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getProjects(page);

      if (res.projects && Array.isArray(res.projects.data)) {
        setProjects(res.projects.data);
        setMeta({
          current: res.projects.current_page,
          last: res.projects.last_page,
        });
      } else if (res.data) {
        setProjects(res.data);
        setMeta({
          current: res.current_page,
          last: res.last_page,
        });
      }
      setLoading(false);
    }
    load();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <LuxuryLoader />;
  }

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
              off-plan residences across Dubai&apos;s most coveted districts.
              From launch-day allocations to blue-chip investments, we connect
              discerning buyers and home seekers with exclusive opportunities.
              Our advisors provide end-to-end guidance pricing insights, payment
              plans, and developer due diligence—so every transaction feels
              seamless. Explore one of the UAE&apos;s largest selections of
              off-plan projects and find a home that matches your lifestyle and
              returns.
            </p>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[14px] text-[#0e0e0e]/80">
              <li className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="shrink-0"
                >
                  <path fill="currentColor" d="M20 6L9 17l-5-5" />
                </svg>
                Exclusive inventory
              </li>
              <li className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="shrink-0"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z"
                  />
                </svg>
                Expert advisory
              </li>
              <li className="flex items-center gap-2 rounded-xl border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className="shrink-0"
                >
                  <path fill="currentColor" d="M3 12l5 5L21 4" />
                </svg>
                Seamless transactions
              </li>
            </ul>
          </div>
          <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl shadow-black/10 ring-1 ring-black/10 group">
            <Image
              src="https://test_backend.leadshub.ae/media/1476/mi-66d375deb3454-d884dae45381eb5d352e1d17f4b1c82a.webp"
              fill
              alt="Off-Plan Projects in Dubai"
              className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-[1.03]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/60" />
            <div className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_80%_at_80%_20%,transparent,rgba(0,0,0,.25))]" />
            <div className="absolute top-4 right-4 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-[12px] font-medium text-[#0e0e0e] border border-white/60 shadow">
              Featured
            </div>
            <div className="absolute inset-0 flex items-end">
              <div className="w-full flex items-center justify-between p-6">
                <h2 className="text-white drop-shadow-sm text-2xl md:text-3xl font-normal tracking-tight">
                  {" "}
                  Latest Off-Plan Projects{" "}
                </h2>
                <div
                  role="button"
                  aria-label="View project details"
                  tabIndex={0}
                  className="bg-[color:var(--brand)] hover:bg-[#b96842] focus:outline-none focus:ring-2 focus:ring-white/60 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer shadow-lg shadow-black/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="none"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                    />
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
              <h2 className="text-[32px] font-normal text-[#8b5d3b]">
                Latest Off-Plan Projects
              </h2>
              <p className="text-sm text-[#1a1a1a]/70">
                Explore the UAE&apos;s latest developments by leading
                developers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[300px] relative">
            {loading && (
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-20">
                <LuxuryLoader small />
              </div>
            )}
            {!loading &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              projects.map((p: any) => (
                <Link key={p.slug} href={`/project/${p.slug}.html`}
                  className="group block overflow-hidden rounded-lg border border-[#d0845b]/20 bg-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={p.banner}
                      alt={p.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-[#c2754e] px-3 py-1 rounded-full text-sm shadow">
                      {p.starting_price}
                    </div>
                  </div>

                  <div className="p-3">
                    <h3 className="text-md font-medium text-[#1a1a1a] line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#1a1a1a]/70 mb-2">
                      {p.locations?.name || "Location not specified"}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm text-[#1a1a1a]">
                      <div className="flex items-center gap-1">
                        <Home className="h-4 w-4 text-[#8b5d3b]" />
                        {p.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <BedDouble className="h-4 w-4 text-[#8b5d3b]" />
                        {cleanBedrooms(p.bedroom) || "Various"}
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="h-4 w-4 text-[#8b5d3b]" />
                        {p.handover_date || "TBA"}
                      </div>
                      <div className="flex items-center gap-1">
                        <Ruler className="h-4 w-4 text-[#8b5d3b]" />
                        {p.pricepersqft || "Price on request"}
                      </div>
                    </div>

                    <div className="mt-3 flex justify-between pt-2 border-t border-[#d0845b]/10">
                      <div className="flex gap-2">
                        <button
                          className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10 transition-all duration-300 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            // Add phone functionality
                          }}
                        >
                          <Phone className="h-4 w-4" />
                        </button>
                        <button
                          className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10 transition-all duration-300 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            // Add message functionality
                          }}
                        >
                          <MessageCircle className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex gap-2">
                        <button
                          className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10 transition-all duration-300 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            // Add favorite functionality
                          }}
                        >
                          <Heart className="h-4 w-4" />
                        </button>
                        <button
                          className="h-8 w-8 flex items-center justify-center rounded-full border border-[#d0845b]/40 text-[#8b5d3b] hover:bg-[#d0845b]/10 transition-all duration-300 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            // Add share functionality
                          }}
                        >
                          <Share2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Pagination */}
          {meta && meta.last > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2">
              {/* Previous Button */}
              <button
                disabled={meta.current === 1}
                onClick={() => handlePageChange(page - 1)}
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer ${
                  meta.current === 1
                    ? "border-gray-300 text-gray-400 cursor-not-allowed"
                    : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10 cursor-pointer"
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Numbers */}
              {Array.from({ length: meta.last }, (_, i) => i + 1)
                .filter((pageNum) => {
                  // Show first 2 pages, last 2 pages, and pages around current page
                  if (pageNum === 1 || pageNum === meta.last) return true;
                  if (Math.abs(pageNum - meta.current) <= 1) return true;
                  return false;
                })
                .map((pageNum, index, array) => {
                  // Add ellipsis
                  const showEllipsis =
                    index < array.length - 1 && array[index + 1] - pageNum > 1;
                  return (
                    <React.Fragment key={pageNum}>
                      <button
                        onClick={() => handlePageChange(pageNum)}
                        className={`flex items-center justify-center w-10 h-10 rounded-full border text-sm transition-all duration-300 cursor-pointer ${
                          meta.current === pageNum
                            ? "bg-[#c9a882] text-white border-[#c9a882] cursor-pointer"
                            : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10 cursor-pointer"
                        }`}
                      >
                        {pageNum}
                      </button>
                      {showEllipsis && (
                        <span className="flex items-center justify-center w-10 h-10 text-[#8b5d3b]">
                          ...
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}
              <button
                disabled={meta.current === meta.last}
                onClick={() => handlePageChange(page + 1)}
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer ${
                  meta.current === meta.last
                    ? "border-gray-300 text-gray-400 cursor-not-allowed"
                    : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10 cursor-pointer"
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>
      <SocialLinksSection />
      <RegisterCtaSection />
    </main>
  );
}
