"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  Share2,
  BookOpen,
} from "lucide-react";

import SocialLinksSection from "@/app/components/SocialLinksSection";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import LuxuryLoader from "@/app/components/LuxuryLoader";
import { getAllBlogs } from "@/lib/blogs";
import Image from "next/image";
import Link from "next/link";
import ShortModalForm from "@/app/components/ShortModal";
import { useTranslations, useLocale } from "next-intl";

type NewsItem = {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
};

type ApiResponse = {
  blogs: {
    data: NewsItem[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
};

const categories = [
  { name: "modern_villa", count: 3 },
  { name: "houses", count: 5 },
  { name: "apartments", count: 4 },
  { name: "office", count: 6 },
];

const popularTags = [
  "golfing_communities",
  "invest_in_dubai",
  "off_plan_property",
  "seller_guide",
  "property_in_dubai",
  "dubai_trip",
  "best_places_to_visit",
  "best_schools"
];

export default function BlogContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
    newsletter: true,
  });

  const [blogs, setBlogs] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);
  const hasFetched = useRef(false);
  const t = useTranslations();
  const locale = useLocale();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const generateExcerpt = (title: string) => {
    if (!title) return "";
    return title.length > 100 ? title.substring(0, 100) + "..." : title;
  };

  // Generate read time based on title length
  const generateReadTime = (title: string) => {
    if (!title) return "1 min read";
    const wordCount = title.split(/\s+/).length;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));
    return `${readTime} min read`;
  };

  const fetchNews = async (page: number = 1) => {
    if (hasFetched.current && page === 1) return;

    setLoading(true);
    try {
      const data: ApiResponse = await getAllBlogs(page);

      if (data.blogs) {
        setBlogs(data.blogs.data);
        setCurrentPage(data.blogs.current_page);
        setLastPage(data.blogs.last_page);
        setTotal(data.blogs.total);
        if (page === 1) {
          hasFetched.current = true;
        }
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: send to backend here
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage && page !== currentPage) {
      fetchNews(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const featuredNews = blogs.length > 0 ? blogs[0] : null;
  const regularNews = blogs.length > 1 ? blogs.slice(1) : [];

  if (loading && !hasFetched.current) {
    return (
      <>
        <LuxuryLoader />
      </>
    );
  }

  return (
    <>
      <section className="bg-[#f6ecdf]">
        <div className="container-fluid max-w-8xl px-6 md:px-8 py-10">
          <div className="flex justify-center text-center">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-4xl font-normal text-[#0e0e0e] leading-[1.15] tracking-tight">
                
                {t('blogs')} &amp; {t('insights')}{" "}
                <span className="bg-gradient-to-r from-[color:var(--brand)] to-[#b96842] bg-clip-text text-transparent">
                     {t('dubai')}
                </span>
              </h1>

              <p className="text-[#1a1a1a]/80 leading-relaxed text-[15px] font-light max-w-xl mx-auto"> {t('news_insights_description')}</p>

              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[14px] text-[#0e0e0e]/80 max-w-xl mx-auto">
                <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="shrink-0"
                  >
                    <path fill="currentColor" d="M20 6L9 17l-5-5" />
                  </svg>
                    {t('market_intelligence')}
                  
                </li>

                <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
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
                  {t('expert_analysis')}
                </li>
                <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="shrink-0"
                  >
                    <path fill="currentColor" d="M3 12l5 5L21 4" />
                  </svg>
                  {t('investment_guides')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="container mx-auto px-2 max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-[#f7f8ff] rounded-md border border-[#f1e6da] px-4 py-4">
                <h3 className="text-[15px] font-medium text-[#8b5d3b] border-l-2 border-[#c17a44] pl-3 mb-3"> {t('categories')} </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      className="w-full flex items-center justify-between text-[13px] bg-white rounded-sm border border-gray-100 px-3 py-2 hover:border-[#8b5d3b]/70 hover:bg-[#fff7f1] transition-all"
                      type="button"
                    >
                      <span className="text-gray-800">{ t(``+cat.name+``)}</span>
                      <span className="text-[#8b5d3b] text-xs font-semibold">
                        {String(cat.count).padStart(2, "0")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#f7f8ff] rounded-md border border-[#f1e6da] px-4 py-4">
                <h3 className="text-[15px] font-medium text-[#8b5d3b] border-l-2 border-[#c17a44] pl-3 mb-3">
                  {t('expert_professionals')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-100 text-gray-700 hover:border-[#8b5d3b]/80 hover:text-[#8b5d3b] hover:bg-[#fff7f1] transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#f9fafb] rounded-md border border-gray-100 px-4 py-4">
                <h3 className="text-[15px] font-medium text-gray-900 border-l-2 border-[#c17a44] pl-3 mb-3">
                 
                   { t('speak_with_advisor') }
                </h3>
                <ShortModalForm />
              </div>
            </div>

            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {featuredNews && (
                  <Link href={`/${locale}/blog/${featuredNews.slug}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="group cursor-pointer mb-10"
                    >
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                        <div className="grid grid-cols-1 xl:grid-cols-2">
                          <div className="h-80 xl:h-96 relative overflow-hidden">
                            <Image
                              src={featuredNews.image}
                              alt={featuredNews.title}
                              fill
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/assets/img/property/project1.jpg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                            {/* Date badge top left (similar to your design) */}
                            <div className="absolute top-5 left-5 z-20">
                              <div className="bg-[#8b5d3b] text-white rounded-md shadow-md text-center text-xs leading-tight px-2 py-2">
                                <div className="font-semibold">
                                  {new Date(featuredNews.date)
                                    .getDate()
                                    .toString()
                                    .padStart(2, "0")}
                                </div>
                                <div className="uppercase text-[10px] tracking-wide">
                                  {new Date(featuredNews.date).toLocaleString(
                                    "en-US",
                                    {
                                      month: "short",
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 text-white/90">
                              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm">
                                  {formatDate(featuredNews.date)}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">
                                  {generateReadTime(featuredNews.title)}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="p-7 flex flex-col justify-between">
                            <div>
                              <h3 className="text-2xl xl:text-3xl font-light text-gray-900 mb-4 group-hover:text-[#8b5d3b] transition-colors duration-300 leading-tight">
                                {featuredNews.title}
                              </h3>
                              <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
                                {generateExcerpt(featuredNews.title)}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-[#8b5d3b] to-[#d4a373] rounded-full flex items-center justify-center shadow-md">
                                  <span className="text-white font-normal text-sm">
                                    ER
                                  </span>
                                </div>
                                <div>
                                  <p className="text-sm text-gray-800">
                                    Evernest Real Estate
                                  </p>
                                  <p className="text-[12px] text-gray-500">
                                    Senior Market Analyst
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-[#8b5d3b] hover:text-[#7a4f32] transition-all duration-300 group/btn font-normal text-sm">
                                <span>Read Full Analysis</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                )}

                {/* Blog Grid */}
                {regularNews.length > 0 && (
                  <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {regularNews.map((blogItem, index) => (
                        <Link key={blogItem.id} href={`/${locale}/blogs/${blogItem.slug}`}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
                          >
                            <div className="h-52 relative overflow-hidden">
                              <Image
                                src={blogItem.image}
                                alt={blogItem.title}
                                fill
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src =
                                    "/assets/img/property/project1.jpg";
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute top-4 left-4">
                                <span className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                                  Market Update
                                </span>
                              </div>
                              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                                <span className="bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                                  {generateReadTime(blogItem.title)}
                                </span>
                              </div>
                            </div>

                            <div className="p-5">
                              <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{formatDate(blogItem.date)}</span>
                                </div>
                              </div>

                              <h4 className="font-light text-gray-900 mb-2 group-hover:text-[#8b5d3b] transition-colors duration-300 line-clamp-2 leading-tight text-[16px]">
                                {blogItem.title}
                              </h4>

                              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                  <div className="w-7 h-7 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-inner">
                                    <span className="text-gray-600 text-[10px] font-normal">
                                      ER
                                    </span>
                                  </div>
                                  <span className="text-xs text-gray-600 font-normal">
                                    Evernest Real Estate
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      // Handle share logic here
                                    }}
                                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-300 group/share"
                                  >
                                    <Share2 className="w-4 h-4 text-gray-400 group-hover/share:text-[#8b5d3b]" />
                                  </button>
                                  <div className="flex items-center gap-1.5 text-[#8b5d3b] hover:text-[#7a4f32] transition-all duration-300 group/read font-medium text-xs">
                                    Read
                                    <ArrowRight className="w-3 h-3 group-hover/read:translate-x-1 transition-transform duration-300" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {/* Pagination */}
                {lastPage > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center items-center gap-4 mt-10"
                  >
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-2 py-2 rounded-full border transition-all duration-300 flex items-center gap-3 font-normal text-sm ${
                        currentPage === 1
                          ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                          : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white hover:shadow-lg"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>

                    <div className="flex gap-2">
                      {Array.from({ length: Math.min(5, lastPage) }, (_, i) => {
                        let page: number;

                        if (lastPage <= 5) {
                          page = i + 1;
                        } else if (currentPage <= 3) {
                          page = i + 1;
                        } else if (currentPage >= lastPage - 2) {
                          page = lastPage - 4 + i;
                        } else {
                          page = currentPage - 2 + i;
                        }

                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-8 h-8 rounded-full border transition-all duration-300 font-normal text-sm ${
                              currentPage === page
                                ? "bg-[#8b5d3b] text-white border-[#8b5d3b] shadow-lg scale-105"
                                : "border-gray-200 text-gray-600 hover:border-[#8b5d3b] hover:text-[#8b5d3b] bg-white hover:shadow-md"
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === lastPage}
                      className={`px-2 py-2 rounded-full border transition-all duration-300 flex items-center gap-3 font-normal text-sm ${
                        currentPage === lastPage
                          ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
                          : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white hover:shadow-lg"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                )}

                {/* Empty State */}
                {!loading && blogs.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16"
                  >
                    <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                      <BookOpen className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-3">
                      No Blogs Available
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm">
                      We&apos;re currently preparing new market insights and
                      analysis. Check back soon for the latest updates from
                      Dubai&apos;s luxury real estate sector.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}