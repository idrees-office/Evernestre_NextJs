"use client";
import React, { useEffect, useState } from "react";
import Header from "../includes/header";
import Link from "next/link";
import { motion } from "framer-motion";
import { getDevelopers } from "@/lib/developer";
import Pagination from "../Components/Pagination";

type PROJECT = {
  name: string;
  slug: string;
  image: string;
};

type DEVELOPER = {
  name: string;
  slug: string;
  image: string;
  projects?: PROJECT[];
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
        const data = await getDevelopers(page);
        
        setDevelopers(data.developer.data || []);

        setMeta({
          current: data.developer.meta.current,
          last: data.developer.meta.last,
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
            <p className="text-center text-[#8b5d3b]">Loading developers...</p>
          ) : (
            <>
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredDevelopers.map((developer) => (
                  <motion.div
                    key={developer.slug}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      show: { opacity: 1, y: 0 },
                    }}
                    className="bg-white border border-[#f0e4d9] rounded-xl p-5 shadow-sm"
                  >
                    {/* Developer Image + Name */}
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

                    {/* Projects */}
                    {developer.projects && developer.projects.length > 0 && (
                      <div className="mt-4">
                        <h3 className="text-sm font-medium text-[#8b5d3b] mb-2">
                          Projects
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                          {developer.projects.map((project) => (
                            <Link
                              key={project.slug}
                              href={`/projects/${project.slug}`}
                              className="block border rounded-lg overflow-hidden hover:shadow"
                            >
                              <img
                                src={project.image}
                                alt={project.name}
                                className="h-[80px] w-full object-cover"
                              />
                              <p className="text-xs p-2 text-center font-semibold text-[#3c2f26]">
                                {project.name}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination (BELOW GRID) */}
              {meta && (
                <Pagination
                  current={meta.current}
                  last={meta.last}
                  onChange={(newPage) => {
                    setPage(newPage);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
