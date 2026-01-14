"use client";

import React, { useEffect, useState, use as usePromise } from "react";
import { getNewsBySlug } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";
import NewsSideSection from "@/app/components/NewsSideSection";
import { useLocale } from "next-intl";

  type ContentItem = {
    type: "heading" | "text";
    content: string;
  };

  const categories = [
    { key: "modern_villa", name: "Modern Villa", count: 3 },
    { key: "houses", name: "Houses", count: 5 },
    { key: "apartments", name: "Apartments", count: 4 },
    { key: "office", name: "Office", count: 6 },
  ];

  const popularTags = [
    "golfing_communities",
    "invest_in_dubai",
    "off_plan_property",
    "seller_guide",
    "property_in_dubai",
    "dubai_trip",
  ];

  const parseHTMLContent = (html: string) => {
    if (!html) return [];
    const contentItems: ContentItem[] = [];
    const tempDiv = document.createElement('div');
    // Remove span tags and their styles
    const cleanedHtml = html.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '').replace(/style="[^"]*"/g, '');
    tempDiv.innerHTML = cleanedHtml;
    const elements = Array.from(tempDiv.childNodes);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.nodeType === Node.ELEMENT_NODE) {
        const el = element as Element;
        
        if (el.tagName === 'H2') {
          const text = el.textContent?.trim() || '';
          contentItems.push({
            type: 'heading',
            content: text
          });
        } else if (el.tagName === 'P') {
          const text = el.textContent?.trim() || '';
          if (text) {
            contentItems.push({
              type: 'text',
              content: text
            });
          }
        } else if (el.tagName === 'UL') {
          const items = el.querySelectorAll('li');
          items.forEach(item => {
            const text = item.textContent?.trim() || '';
            if (text) {
              contentItems.push({
                type: 'text',
                content: `• ${text}`
              });
            }
          });
        } else if (el.tagName === 'DIV' || el.tagName === 'SPAN') {
          // Handle nested content
          const text = el.textContent?.trim() || '';
          if (text) {
            contentItems.push({
              type: 'text',
              content: text
            });
          }
        }
      } else if (element.nodeType === Node.TEXT_NODE) {
        const text = element.textContent?.trim() || '';
        if (text) {
          contentItems.push({
            type: 'text',
            content: text
          });
        }
      }
    }
    return contentItems;
  };

export default function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = usePromise(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [news, setNews] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "general",
    message: "",
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getNewsBySlug(slug, locale)
        .then(setNews)
        .finally(() => setLoading(false));
    }
  }, [slug, locale]);
  if (loading) {
    return (
      <>
        <div className="h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#8b5d3b] border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  if (!news) {
    return (
      <>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-3">Article not found</p>
            <Link href="/news" className="text-[#8b5d3b] text-sm underline">Back to News</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <main className="bg-[#faf9f7]">
        <div className="bg-[#d5a86e] border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Link href="/" className="text-black">Home</Link>
              <ChevronRight className="w-3 h-3 text-black" />
              <Link href="/news" className="text-black">News</Link>
              <ChevronRight className="w-3 h-3 text-black" />
              <span className="text-black truncate max-w-[200px]">{news.title}</span>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-5 md:p-6">
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="text-[#8b5d3b] font-medium">Evernest Real Estate</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(news.date)}
                    </span>
                  </div>
                  <h1 className="text-lg md:text-xl font-medium text-gray-900 leading-snug mb-5">
                    {news.title}
                  </h1>
                  
                  <article className="mt-4 space-y-3">
                    {(news.description ? parseHTMLContent(news.description) : []).map((item, index) => {
                      if (item.type === "heading") {
                        return (
                          <h2
                            key={index}
                            className="text-sm font-medium text-gray-800 mt-4"
                          >
                            {item.content}
                          </h2>
                        );
                      }
                      
                      return (
                        <p
                          key={index}
                          className="text-[13px] text-gray-600 leading-relaxed"
                        >
                          {item.content}
                        </p>
                      );
                    })}
                  </article>
                  {news.tags && news.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-gray-100">
                      {news.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="bg-gray-50 text-gray-500 px-2.5 py-1 rounded text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      href="/news"
                      className="inline-flex items-center gap-1.5 text-[#8b5d3b] text-xs hover:gap-2 transition-all"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      Back to all articles
                    </Link>
                  </div>
                </div>
              </div>
              {news.related && news.related.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-medium text-gray-800">Related Articles</h2>
                    <Link href="/news" className="text-[#8b5d3b] text-xs flex items-center gap-1 hover:gap-1.5 transition-all">
                      View all <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    { // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    news.related.slice(0, 4).map((item: any) => (
                      <Link key={item.id} href={`/news/${item.slug}`} className="group bg-white rounded-sm overflow-hidden shadow-sm">
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-3">
                          <p className="text-[10px] text-gray-400 mb-1">{formatDate(item.date)}</p>
                          <h3 className="text-xs text-gray-700 group-hover:text-[#8b5d3b] transition-colors line-clamp-2 leading-snug">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <aside className="lg:col-span-4">
              <div className="sticky top-4">
                <NewsSideSection
                  categories={categories}
                  popularTags={popularTags}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}