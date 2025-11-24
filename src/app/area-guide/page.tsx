"use client";

import React, { useEffect, useState } from "react";
import Header from "../includes/header";
import Link from "next/link";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import SocialLinksSection from "../Components/SocialLinksSection";
import { getAllAreas } from "@/lib/area";
import LuxuryLoader from "../Components/LuxuryLoader";
import Image from "next/image";

type Area = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
};

type PaginationInfo = {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
  from: number;
  to: number;
};

type ApiArea = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
};

export default function AreaGuidePage() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAreas = async (page: number = 1) => {
    try {
      setLoading(true);
      const data = await getAllAreas(page);
      if (data.areas && data.areas.data) {
        const transformedAreas = data.areas.data.map((area: ApiArea) => ({
          id: area.id,
          title: area.title,
          slug: area.slug,
          image: area.image,
          price: area.price,
        }));

        setAreas(transformedAreas);

        // Set pagination info
        if (data.areas) {
          setPagination({
            current_page: data.areas.current_page || 1,
            last_page: data.areas.last_page || 1,
            per_page: data.areas.per_page || 12,
            total: data.areas.total || 0,
            from: data.areas.from || 1,
            to: data.areas.to || transformedAreas.length,
          });
        }

        setCurrentPage(page);
      } else {
        setAreas([]);
      }
    } catch (err) {
      console.error("Error fetching areas:", err);
      setError("Failed to load areas. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAreas(1);
  }, []);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= (pagination?.last_page || 1)) {
      fetchAreas(page);
      // Scroll to top when page changes
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="w-full overflow-x-hidden">
        <Header />
        <section className="bg-[#f6ecdf] py-12 relative border-b border-[#f0e4d9] w-full">
          <div className="container mx-auto px-6 text-center relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
              Popular Areas in Dubai
            </h2>
            <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
          </div>
        </section>

        {/* Luxury Loader for initial load */}
        <LuxuryLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <section className="bg-[#f6ecdf] py-12 relative border-b border-[#f0e4d9] w-full">
          <div className="container mx-auto px-6 text-center relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
              Popular Areas in Dubai
            </h2>
            <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
          </div>
        </section>

        <section className="relative bg-white py-10 sm:py-12 md:py-16 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <svg
                className="w-12 h-12 text-red-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <h3 className="text-lg font-medium text-red-800 mb-2">
                Error Loading Areas
              </h3>
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => fetchAreas(1)}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <section className="bg-[#f6ecdf] py-12 relative border-b border-[#f0e4d9] w-full">
        <div className="container mx-auto px-6 text-center relative z-10 w-full">
          <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
            Popular Areas in Dubai
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>

      <section className="relative bg-white py-10 sm:py-12 md:py-16 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f0] to-[#f6ecdf] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-10 sm:mb-12 md:mb-10 w-full">
            <div className="inline-flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 w-full">
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#8b5d3b] to-transparent"></div>
              <span className="text-xs font-light text-[#8b5d3b] tracking-[0.2em] sm:tracking-[0.3em] uppercase px-2">
                {pagination?.total || areas.length} Exclusive Collections
              </span>
              <div className="w-6 sm:w-8 md:w-12 h-px bg-gradient-to-r from-transparent via-[#8b5d3b] to-transparent"></div>
            </div>
          </div>
          {areas.length === 0 ? (
            <div className="text-center py-12 w-full">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No Areas Found
              </h3>
              <p className="text-gray-500">
                There are currently no areas available.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full rounded-md">
                {areas.map((area) => (
                  <Link
                    key={area.id}
                    href={`/area-guide/${area.slug}`}
                    className="group block w-full"
                  >
                    <div className="relative rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-1 border border-gray-100/80 w-full">
                      <div className="relative h-48 sm:h-56 md:h-60 w-full rounded-md">
                        <Image
                          src={area.image}
                          alt={area.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-md"
                          draggable={false}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 sm:p-1.5">
                            <svg
                              className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="relative p-3 sm:p-4 bg-white w-full">
                        <div className="flex items-center justify-between w-full">
                          <h3 className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-[#8b5d3b] transition-colors duration-300 font-sans leading-tight">
                            {area.title}
                          </h3>
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300 group-hover:text-[#8b5d3b] group-hover:translate-x-0.5 transition-all duration-300 flex-shrink-0 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                        <div className="mt-1 sm:mt-2 flex items-center text-xs text-gray-500 font-light">
                          <svg
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-1.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="truncate">
                            Discover Luxury Properties
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {pagination && pagination.last_page > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2 w-full">
                  <button
                    disabled={pagination.current_page === 1}
                    onClick={() =>
                      handlePageChange(pagination.current_page - 1)
                    }
                    className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                      pagination.current_page === 1
                        ? "border-gray-300 text-gray-400 cursor-not-allowed"
                        : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10 cursor-pointer"
                    }`}
                  >
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
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {Array.from({ length: pagination.last_page }, (_, i) => i + 1)
                    .filter((pageNum) => {
                      // Show first, last, and pages around current page
                      if (pageNum === 1 || pageNum === pagination.last_page)
                        return true;
                      if (Math.abs(pageNum - pagination.current_page) <= 1)
                        return true;
                      return false;
                    })
                    .map((pageNum, index, array) => {
                      // Add ellipsis
                      const showEllipsis =
                        index < array.length - 1 &&
                        array[index + 1] - pageNum > 1;
                      return (
                        <React.Fragment key={pageNum}>
                          <button
                            onClick={() => handlePageChange(pageNum)}
                            className={`flex items-center justify-center w-10 h-10 rounded-full border text-sm transition-all duration-300 cursor-pointer ${
                              pagination.current_page === pageNum
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
                    disabled={pagination.current_page === pagination.last_page}
                    onClick={() =>
                      handlePageChange(pagination.current_page + 1)
                    }
                    className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                      pagination.current_page === pagination.last_page
                        ? "border-gray-300 text-gray-400 cursor-not-allowed"
                        : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10 cursor-pointer"
                    }`}
                  >
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
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
    </div>
  );
}
