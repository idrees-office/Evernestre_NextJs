"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, BookOpen, Sparkles } from "lucide-react";
import Header from "@/app/components/header";
import SocialLinksSection from "@/app/components/SocialLinksSection";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import { getAllNews } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import LuxuryLoader from "@/app/components/LuxuryLoader";
import NewsSideSection from "@/app/components/NewsSideSection";
import { useTranslations, useLocale } from "next-intl";

type NewsItem = {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
};

type ApiResponse = {
  news: {
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
  { name: "office", count: 6 }

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

export default function NewsContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general",
    newsletter: true,
  });

  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
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

  const generateReadTime = (title: string) => {
    if (!title) return "1 min";
    const wordCount = title.split(/\s+/).length;
    return `${Math.max(1, Math.ceil(wordCount / 200))} min`;
  };

   useEffect(() => {
    const fetchNews = async () => {
      if (hasFetched.current && currentPage === 1) return;

      setLoading(true);
      try {
        const data: ApiResponse = await getAllNews(currentPage, locale);

        if (data.news) {
          setNews(data.news.data);
          setLastPage(data.news.last_page);

          if (currentPage === 1) {
            hasFetched.current = true;
          }
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [locale, currentPage]);


  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const featuredNews = news.length > 0 ? news[0] : null;  
  const regularNews = news.length > 1 ? news.slice(1) : [];

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
                {t('news')} &amp; {t('insights')} {" "}
                <span className="bg-gradient-to-r from-[color:var(--brand)] to-[#b96842] bg-clip-text text-transparent">
                  {t('dubai')}
                </span>
              </h1>
              <p className="text-[#1a1a1a]/80 leading-relaxed text-[15px] font-light max-w-xl mx-auto"> {t('news_insights_description')}</p>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[14px] text-[#0e0e0e]/80 max-w-xl mx-auto">
                {[
                  t("market_intelligence"),
                  t("expert_analysis"),
                  t("investment_guides"),
                ].map((item) => (
                  <li key={item} className="flex items-center justify-center gap-2 rounded-full bg-white/60 backdrop-blur px-2 py-1.5 shadow-sm text-xs">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="shrink-0">
                      <path fill="currentColor" d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
              {featuredNews && (
                  <Link href={`/${locale}/news/${featuredNews.slug}`} className="block mb-12">
                    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} whileHover={{ y: -5 }}
                      className="group bg-white rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="h-px bg-gradient-to-r from-[#8b5d3b] via-[#c97a52] to-[#8b5d3b]" /> 
                      <div className="grid grid-cols-1 xl:grid-cols-2">
                        <div className="h-80 xl:h-[400px] relative overflow-hidden">
                          <Image
                            src={featuredNews.image}
                            alt={featuredNews.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 1280px) 100vw, 50vw"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/assets/img/property/project1.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                          
                          <div className="absolute top-5 right-5 z-10">
                            <span className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#8b5d3b] px-3 py-1.5 rounded-full text-xs font-medium">
                              <Sparkles className="w-3 h-3" />
                              Featured
                            </span>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                            <span className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full text-xs">
                              <Calendar className="w-3.5 h-3.5" />
                              {formatDate(featuredNews.date)}
                            </span>
                            <span className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white/90 px-3 py-1.5 rounded-full text-xs">
                              <Clock className="w-3.5 h-3.5" />
                              {generateReadTime(featuredNews.title)}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 flex flex-col justify-between h-full xl:h-[400px]">
                          <div>
                            <span className="inline-block text-[10px] uppercase tracking-widest text-[#8b5d3b] font-normal mb-4">
                              Exclusive Insight
                            </span>
                            <h3 className="text-xl xl:text-1xl font-normal text-gray-900 group-hover:text-[#8b5d3b] transition-colors duration-300 leading-snug line-clamp-3">
                              {featuredNews.title}
                            </h3>
                          </div>
                          <div className="flex items-center justify-between pt-6 border-t border-gray-100/50 mt-auto">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 bg-gradient-to-br from-[#8b5d3b] to-[#d4a373] rounded-full flex items-center justify-center">
                                <span className="text-white font-medium text-xs">ER</span>
                              </div>
                              <span className="text-sm text-gray-600">Evernest Real Estate</span>
                            </div>
                            <span className="flex items-center gap-2 text-[#8b5d3b] font-medium text-sm">
                              Read More
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                )}
              {regularNews.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-6 bg-gradient-to-b from-[#8b5d3b] to-[#c97a52] rounded-full" />
                    <h2 className="text-lg font-medium text-gray-900">Latest Articles</h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {regularNews.map((newsItem, index) => (
                      <Link key={newsItem.id} href={`/${locale}/news/${newsItem.slug}`} className="block">
                        <motion.article
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.08 }}
                          whileHover={{ y: -8 }}
                          className="bg-white rounded-sm overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500 h-full"
                        >
                          <div className="h-52 relative overflow-hidden">
                            <Image
                              src={newsItem.image}
                              alt={newsItem.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/assets/img/property/project1.jpg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#8b5d3b] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wide">
                              Market Update
                            </span>
                          </div>

                          <div className="p-5">
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-[#8b5d3b]" />
                                {formatDate(newsItem.date)}
                              </span>
                              <span>·</span>
                              <span>{generateReadTime(newsItem.title)}</span>
                            </div>
                            <h4 className="font-medium text-gray-900 mb-4 group-hover:text-[#8b5d3b] transition-colors line-clamp-2 leading-snug">
                              {newsItem.title}
                            </h4>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gradient-to-br from-[#8b5d3b]/20 to-[#c97a52]/20 rounded-full flex items-center justify-center">
                                  <span className="text-[#8b5d3b] text-[9px] font-semibold">ER</span>
                                </div>
                                <span className="text-xs text-gray-500">Evernest</span>
                              </div>
                              <span className="flex items-center gap-1.5 text-[#8b5d3b] font-medium text-xs">
                                Read
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                              </span>
                            </div>
                          </div>
                        </motion.article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {lastPage > 1 && (
                <div className="flex justify-center items-center gap-3 mt-12">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2.5 rounded-full transition-all duration-300 ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                        : "bg-white text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white shadow-md"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                  </button>
                  <div className="flex gap-1.5">
                    {Array.from({ length: Math.min(5, lastPage) }, (_, i) => {
                      let page: number;
                      if (lastPage <= 5) page = i + 1;
                      else if (currentPage <= 3) page = i + 1;
                      else if (currentPage >= lastPage - 2) page = lastPage - 4 + i;
                      else page = currentPage - 2 + i;
                      return (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-9 h-9 rounded-full transition-all duration-300 text-sm font-normal cursor-pointer ${
                            currentPage === page
                              ? "bg-gradient-to-br from-[#8b5d3b] to-[#c97a52] text-white shadow-lg"
                              : "bg-white text-gray-600 hover:text-[#8b5d3b] shadow-sm"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>
                  <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === lastPage} className={`p-2.5 rounded-full transition-all duration-300 ${
                      currentPage === lastPage ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-white text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white shadow-md"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
              {!loading && news.length === 0 && (
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#8b5d3b]/10 to-[#c97a52]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-10 h-10 text-[#8b5d3b]/40" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-2">No Articles Available</h3>
                  <p className="text-gray-500 text-sm">Check back soon for new insights.</p>
                </div>
              )}
            </div>
            <div className="lg:col-span-4 space-y-6">
              <NewsSideSection categories={categories} popularTags={popularTags} formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>
      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}
