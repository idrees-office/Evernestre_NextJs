"use client";
import React, { useEffect, useState } from "react";
import Header from "../includes/header";
import Link from "next/link";
import { motion } from "framer-motion";
import { getDevelopers } from "@/lib/developer";
import { ArrowRight } from "lucide-react";
import LuxuryLoader from "../Components/LuxuryLoader";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";

type DEVELOPER = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

export default function DeveloperPage() {
  const [developers, setDevelopers] = useState<DEVELOPER[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [meta, setMeta] = useState<{ current: number; last: number } | null>(
    null
  );

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        setLoading(true);
        const data = await getDevelopers(page);

        setDevelopers(data.developers.data || []);

        setMeta({
          current: data.developers.current_page,
          last: data.developers.last_page,
        });
      } catch (error) {
        console.error("Failed to fetch developers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevelopers();
  }, [page]);

  const filteredDevelopers = developers.filter((dev) =>
    dev.name.toLowerCase().includes(query.toLowerCase())
  );

  // Handle page change with scroll to top
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />

      {/* Banner */}
      <section className="bg-[#f6ecdf] py-12 border-b border-[#f0e4d9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
            Popular Developers in Dubai
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>

      {/* Search + Developers Grid */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 md:px-10">
          {/* Search */}
          <div className="flex justify-center mb-10">
            <motion.form
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 100 }}
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center w-full max-w-2xl bg-white border border-[#d4a373]/40 rounded-full shadow-sm"
            >
              <input
                type="text"
                placeholder="Search developers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-5 h-11 text-[15px] bg-transparent text-[#3c2f26] placeholder-[#8b5d3b]/60 focus:outline-none"
              />
              <button
                type="submit"
                className="h-11 w-12 flex items-center justify-center bg-[#c97a52] text-white rounded-r-full"
              >
                🔍
              </button>
            </motion.form>
          </div>

          {/* Developers List */}
          {loading ? (
            <LuxuryLoader/>
            // <p className="text-center text-[#8b5d3b]">Loading developers...</p>
          ) : (
            <>
              <motion.div
                key={`page-${page}`} // Force re-render on page change
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {filteredDevelopers.map((developer) => (
                  <motion.div
                    key={`${developer.id}-${page}`} // Unique key with page
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="bg-white border border-[#f0e4d9] rounded-xl p-5 shadow-sm cursor-pointer hover:shadow-md transition-all"
                  >
                    <Link href={`/developer-guide/${developer.slug}`}>
                      <div className="h-[150px] flex items-center justify-center bg-[#fffaf5]">
                        <img
                          src={developer.image}
                          alt={developer.name}
                          className="h-full object-contain p-4"
                        />
                      </div>

                      <p className="mt-3 text-[18px] font-semibold text-[#3c2f26] text-center">
                        {developer.name}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {meta && meta.last > 1 && (
                <div className="flex justify-center items-center gap-4 mt-10">
                  {/* Prev */}
                  <button
                    onClick={() => handlePageChange(meta.current - 1)}
                    disabled={meta.current === 1}
                    className={`px-2 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 text-sm ${
                      meta.current === 1
                        ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                        : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white hover:shadow-md"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>

                  {/* Page Numbers */}
                  <div className="flex gap-2">
                    {Array.from({ length: Math.min(5, meta.last) }, (_, i) => {
                      let pageNum;
                      if (meta.last <= 5) {
                        pageNum = i + 1;
                      } else if (meta.current <= 3) {
                        pageNum = i + 1;
                      } else if (meta.current >= meta.last - 2) {
                        pageNum = meta.last - 4 + i;
                      } else {
                        pageNum = meta.current - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => handlePageChange(pageNum)}
                          className={`w-8 h-8 rounded-full border transition-all duration-300 text-sm cursor-pointer ${
                            meta.current === pageNum
                              ? "bg-[#8b5d3b] text-white border-[#8b5d3b] shadow-md scale-105 cursor-pointer"
                              : "border-gray-200 text-gray-600 hover:border-[#8b5d3b] hover:text-[#8b5d3b] bg-white hover:shadow-sm cursor-pointer"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next */}
                  <button
                    onClick={() => handlePageChange(meta.current + 1)}
                    disabled={meta.current === meta.last}
                    className={`px-2 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 text-sm cursor-pointer ${
                      meta.current === meta.last
                        ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed cursor-pointer"
                        : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white hover:shadow-md cursor-pointer"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}