"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getDevelopers } from "@/lib/developer";
import { ArrowRight } from "lucide-react";
import LuxuryLoader from "@/app/components/LuxuryLoader";
import SocialLinksSection from "@/app/components/SocialLinksSection";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

type DEVELOPER = {
  id: number;
  name: string;
  slug: string;
  image: string;
  projects_count : number;
  projects?: any[];
};

export default function DeveloperPage() {
  const [developers, setDevelopers] = useState<DEVELOPER[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const locale = useLocale();
  const t = useTranslations();
  const [meta, setMeta] = useState<{ current: number; last: number } | null>(
    null
  );

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        setLoading(true);
        const data = await getDevelopers(page, locale, query);
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
  }, [page, locale, query]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setPage(1); // reset to page 1 when searching
    }, 500);

    return () => clearTimeout(handler);
  }, [query]);

  // Handle page change with scroll to top
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Banner */}
      <section className="bg-[#f6ecdf] py-12 border-b border-[#f0e4d9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-2">
            {t("popular_developers_title")}
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>

      {/* Search + Developers Grid */}
      <section className="bg-[#f8f6f3] py-10">
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
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.form>
          </div>
          {loading ? (
            <LuxuryLoader />
          ) : (
            // <p className="text-center text-[#8b5d3b]">Loading developers...</p>
            <>
              <motion.div
                key={`page-${page}`}
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
                {developers.map((developer) => (
                  <motion.div
                    key={`${developer.id}-${page}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-white rounded-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-[0_4px_20px_rgba(139,93,59,0.08)]"
                  >
                    {/* Project Count Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#c97a52] text-white">
                        {/* {developer?.projects} Projects */}
                        {developer?.projects_count || 0} Projects
                      </span>
                    </div>
                    {/* Logo Container */}
                      <Link href={`/${locale}/developers/${developer.slug}`}> 
                    <div className="flex items-center justify-center h-32 mt-6">
                      {developer.image ? (
                        <img
                          src={developer.image}
                          alt={developer.name}
                          className="max-h-25 max-w-[75%] object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
                        />
                      ) : null}
                      <div className="hidden w-full h-full items-center justify-center">
                        <span className="text-2xl font-semibold text-[#3c2f26] tracking-wide"> {developer.name}
                        </span>
                      </div>
                    </div>
                    </Link> 
                  </motion.div>
                ))}
              </motion.div>
              {meta && meta.last > 1 && (
                <div className="flex justify-center items-center gap-4 mt-10">
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
