"use client";

import React, { useEffect, useState, use as usePromise } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";
import NewsSideSection from "@/app/components/NewsSideSection";
import { getBlogsBySlug } from "@/lib/blogs";
import { useTranslations, useLocale } from "next-intl";


  type ContentItem = {
    type: "heading" | "text";
    content: string;
  };

const categories = [
  { count: 3, key : 'modern_villa' },
  { count: 5, key : 'houses' },
  { count: 4, key : 'apartments' },
  { count: 6, key : 'office' },
];

const popularTags = [
  "golfing_communities",
  "invest_in_dubai",
  "off_plan_property",
  "seller_guide",
  "property_in_dubai",
  "dubai_trip",
];

export default function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = usePromise(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations();
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


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


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getBlogsBySlug(slug, locale)
        .then(setBlog)
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

  if (!blog) {
    return (
      <>
        <div className="h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-3"> {t('blog_article_not_found')} </p>
            <Link href="/blog" className="text-[#8b5d3b] text-sm underline"> {t('back_to_blog')} </Link>
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
              <Link href="/" className="text-black">{t('home')}</Link>
              <ChevronRight className="w-3 h-3 text-black" />
              <Link href="/blog" className="text-black">{t('blogs')}</Link>
              <ChevronRight className="w-3 h-3 text-black" />
              <span className="text-black truncate max-w-[200px]">{blog.title}</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <div className="bg-white rounded-sm shadow-sm overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="p-5 md:p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="text-[#8b5d3b] font-medium">{t('evernest')}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(blog.created_at)}
                    </span>
                  </div>

                  <h1 className="text-lg md:text-xl font-medium text-gray-900 leading-snug mb-5">
                    {blog.title}
                  </h1>

                  <article className="mt-4 space-y-3">
                    {(blog.description ? parseHTMLContent(blog.description) : []).map((item, index) => {
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


                  {/* <article
                    className="prose prose-sm max-w-none
                    prose-headings:font-medium prose-headings:text-gray-800
                    prose-p:text-gray-600 prose-p:text-[13px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  /> */}

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-1.5 text-[#8b5d3b] text-xs hover:gap-2 transition-all"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      {t('back_to_all_blog_posts')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
