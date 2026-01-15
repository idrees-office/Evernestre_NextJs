// "use client";

// import React, { useEffect, useState, use as usePromise } from "react";
// import { getNewsBySlug } from "@/lib/news";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, ChevronRight, Calendar } from "lucide-react";
// import NewsSideSection from "@/app/components/NewsSideSection";
// import { useLocale } from "next-intl";
// import { color } from "framer-motion";

//   type ContentItem = {
//     type: "heading" | "text";
//     content: string;
//   };

//   const categories = [
//     { key: "modern_villa", name: "Modern Villa", count: 3 },
//     { key: "houses", name: "Houses", count: 5 },
//     { key: "apartments", name: "Apartments", count: 4 },
//     { key: "office", name: "Office", count: 6 },
//   ];

//   const popularTags = [
//     "golfing_communities",
//     "invest_in_dubai",
//     "off_plan_property",
//     "seller_guide",
//     "property_in_dubai",
//     "dubai_trip",
//   ];

//   const parseHTMLContent = (html: string) => {
//     if (!html) return [];
//     const contentItems: ContentItem[] = [];
//     const tempDiv = document.createElement('div');
//     // Remove span tags and their styles
//     const cleanedHtml = html.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '').replace(/style="[^"]*"/g, '');
//     tempDiv.innerHTML = cleanedHtml;
//     const elements = Array.from(tempDiv.childNodes);
//     for (let i = 0; i < elements.length; i++) {
//       const element = elements[i];
//       if (element.nodeType === Node.ELEMENT_NODE) {
//         const el = element as Element;
        
//         if (el.tagName === 'H2') {
//           const text = el.textContent?.trim() || '';
//           contentItems.push({
//             type: 'heading',
//             content: text
//           });
//         } else if (el.tagName === 'P') {
//           const text = el.textContent?.trim() || '';
//           if (text) {
//             contentItems.push({
//               type: 'text',
//               content: text
//             });
//           }
//         } else if (el.tagName === 'UL') {
//           const items = el.querySelectorAll('li');
//           items.forEach(item => {
//             const text = item.textContent?.trim() || '';
//             if (text) {
//               contentItems.push({
//                 type: 'text',
//                 content: `• ${text}`
//               });
//             }
//           });
//         } else if (el.tagName === 'DIV' || el.tagName === 'SPAN') {
//           // Handle nested content
//           const text = el.textContent?.trim() || '';
//           if (text) {
//             contentItems.push({
//               type: 'text',
//               content: text
//             });
//           }
//         }
//       } else if (element.nodeType === Node.TEXT_NODE) {
//         const text = element.textContent?.trim() || '';
//         if (text) {
//           contentItems.push({
//             type: 'text',
//             content: text
//           });
//         }
//       }
//     }
//     return contentItems;
//   };

// export default function NewsDetail({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = usePromise(params);
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [news, setNews] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const locale = useLocale();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     interest: "general",
//     message: "",
//   });

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     if (Number.isNaN(date.getTime())) return dateString;
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//   };

//   useEffect(() => {
//     if (slug) {
//       setLoading(true);
//       getNewsBySlug(slug, locale)
//         .then(setNews)
//         .finally(() => setLoading(false));
//     }
//   }, [slug, locale]);
//   if (loading) {
//     return (
//       <>
//         <div className="h-screen flex items-center justify-center">
//           <div className="w-8 h-8 border-2 border-[#8b5d3b] border-t-transparent rounded-full animate-spin" />
//         </div>
//       </>
//     );
//   }

//   if (!news) {
//     return (
//       <>
//         <div className="h-screen flex items-center justify-center">
//           <div className="text-center">
//             <p className="text-gray-600 mb-3">Article not found</p>
//             <Link href="/news" className="text-[#8b5d3b] text-sm underline">Back to News</Link>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <main className="bg-[#faf9f7]">
//           <div className="bg-[#d5a86e] border-b border-gray-100">
//           <div className="max-w-6xl mx-auto px-4 py-3">
//             <div className="flex items-center gap-2 text-xs text-gray-500">
//               <Link href="/" className="text-black">Home</Link>
//               <ChevronRight className="w-3 h-3 text-black" />
//               <Link href="/news" className="text-black">News</Link>
//               <ChevronRight className="w-3 h-3 text-black" />
//               <span className="" style={{ color: '#322626' }}>{news.title}</span>
//             </div>
//           </div>
//         </div> 

//         <section className="bg-[#f6ecdf] py-12 border-b border-[#f0e4d9]">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-2xl md:text-3xl font-normal text-[#3c2f26] mb-2">
//             {/* { t('popular_developers_title') } */} {news.title}
//           </h2>
//           <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
//         </div>
//        </section>
     
//         <div className="max-w-6xl mx-auto px-4 py-6">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//             <div className="lg:col-span-8">
//               <div className="bg-white rounded-sm shadow-sm overflow-hidden">
//                 <div className="relative aspect-[16/9]">
//                   <Image
//                     src={news.image}
//                     alt={news.title}
//                     fill
//                     className=""
//                     priority
//                   />
//                 </div>
//                 <div className="p-5 md:p-6">
                  
//                   <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
//                     <span className="text-[#8b5d3b] font-medium">Evernest Real Estate</span>
//                     <span>•</span>
//                     <span className="flex items-center gap-1">
//                       <Calendar className="w-3 h-3" />
//                       {formatDate(news.date)}
//                     </span>
//                   </div>
//                   <h1 className="text-lg md:text-xl font-medium text-gray-900 leading-snug mb-5">
//                     {news.title}
//                   </h1>
//                   <article className="mt-4 space-y-3">
//                     {(news.description ? parseHTMLContent(news.description) : []).map((item, index) => {
//                       if (item.type === "heading") {
//                         return ( <h2 key={index} className="text-sm font-medium text-gray-800 mt-4"> {item.content} </h2> );
//                       }
                      
//                       return (
//                         <p
//                           key={index}
//                           className="text-[13px] text-gray-600 leading-relaxed"
//                         >
//                           {item.content}
//                         </p>
//                       );
//                     })}
//                   </article>
//                   {news.tags && news.tags.length > 0 && (
//                     <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-gray-100">
//                       {news.tags.map((tag: string, idx: number) => (
//                         <span key={idx} className="bg-gray-50 text-gray-500 px-2.5 py-1 rounded text-[11px]">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                   <div className="mt-5 pt-4 border-t border-gray-100">
//                     <Link
//                       href="/news"
//                       className="inline-flex items-center gap-1.5 text-[#8b5d3b] text-xs hover:gap-2 transition-all"
//                     >
//                       <ArrowLeft className="w-3 h-3" />
//                       Back to all articles
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//               {news.related && news.related.length > 0 && (
//                 <div className="mt-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <h2 className="text-sm font-medium text-gray-800">Related Articles</h2>
//                     <Link href="/news" className="text-[#8b5d3b] text-xs flex items-center gap-1 hover:gap-1.5 transition-all">
//                       View all <ChevronRight className="w-3 h-3" />
//                     </Link>
//                   </div>

//                   <div className="grid grid-cols-2 gap-3">
//                     { // eslint-disable-next-line @typescript-eslint/no-explicit-any
//                     news.related.slice(0, 4).map((item: any) => (
//                       <Link key={item.id} href={`/news/${item.slug}`} className="group bg-white rounded-sm overflow-hidden shadow-sm">
//                         <div className="relative aspect-[16/10]">
//                           <Image
//                             src={item.image}
//                             alt={item.title}
//                             fill
//                             className="object-cover group-hover:scale-105 transition-transform duration-300"
//                           />
//                         </div>
//                         <div className="p-3">
//                           <p className="text-[10px] text-gray-400 mb-1">{formatDate(item.date)}</p>
//                           <h3 className="text-xs text-gray-700 group-hover:text-[#8b5d3b] transition-colors line-clamp-2 leading-snug">
//                             {item.title}
//                           </h3>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//             <aside className="lg:col-span-4">
//               <div className="sticky top-4">
//                 <NewsSideSection
//                   categories={categories}
//                   popularTags={popularTags}
//                   formData={formData}
//                   handleInputChange={handleInputChange}
//                   handleSubmit={handleSubmit}
//                 />
//               </div>
//             </aside>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }




"use client";

import React, { useEffect, useState, use as usePromise } from "react";
import { getNewsBySlug } from "@/lib/news";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Calendar, Clock, User, Share2, Bookmark } from "lucide-react";
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
      month: "long",
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
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <div className="w-12 h-12 border-3 border-[#8b5d3b] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
        <div className="text-center">
          <p className="text-stone-600 mb-4 text-lg">Article not found</p>
          <Link href="/news" className="text-[#8b5d3b] font-medium hover:underline">← Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Breadcrumb */}
      <div className="bg-gradient-to-r from-[#d5a86e]/20 to-[#f6ecdf] border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-stone-600 hover:text-[#8b5d3b] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link href="/news" className="text-stone-600 hover:text-[#8b5d3b] transition-colors">
              News
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#3c2f26] truncate max-w-[300px]">{news.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#f6ecdf] to-[#faf9f7] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-6 leading-tight">
            {news.title}
          </h1>
          {/* <div className="flex items-center justify-center gap-4 text-sm text-stone-500 flex-wrap mb-4">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              Evernest Real Estate
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300"></span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(news.date)}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone-300"></span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div> */}
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-md"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article */}
          <div className="lg:col-span-8">
            {/* Featured Image */}
            <div className="relative rounded-md overflow-hidden shadow-xl mb-8">
              <div className="aspect-[16/10]">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className=""
                  priority
                />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" /> */}
            </div>
            <div className="bg-white rounded-md shadow-sm border border-stone-100 overflow-hidden">
              {/* Action Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100">
                <Link
                  href="/news"
                  className="flex items-center gap-2 text-sm text-stone-500 hover:text-[#8b5d3b] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to all articles
                </Link>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                    <Bookmark className="w-4 h-4 text-stone-500" />
                  </button>
                  <button className="p-2 hover:bg-stone-100 rounded-full transition-colors">
                    <Share2 className="w-4 h-4 text-stone-500" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <article className="px-6 md:px-10 py-8">
                <div className="prose prose-stone max-w-none">
                  {(news.description ? parseHTMLContent(news.description) : []).map((item, index) => {
                    if (item.type === "heading") {
                      return (
                        <h2 key={index} className="text-xl font-medium text-[#3c2f26] mt-8 mb-4 first:mt-0">
                          {item.content}
                        </h2>
                      );
                    }
                    return (
                      <p key={index} className="text-[15px] text-stone-600 leading-relaxed mb-4">
                        {item.content}
                      </p>
                    );
                  })}
                </div>

                {/* Tags */}
                {news.tags && news.tags.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-stone-100">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm text-stone-500 mr-2">Tags:</span>
                      {news.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-md bg-stone-100 text-stone-600 hover:bg-[#8b5d3b] hover:text-white transition-all cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Box */}
                {/* <div className="mt-10 pt-8 border-t border-stone-100">
                  <div className="flex items-center gap-4 p-5 bg-stone-50 rounded-2xl">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8b5d3b] to-[#d4a373] flex items-center justify-center text-white text-xl font-medium">
                      E
                    </div>
                    <div>
                      <p className="font-normal text-stone-800">Evernest Real Estate</p>
                      
                    </div>
                  </div>
                </div> */}
              </article>
            </div>

            {/* Related Articles */}
            {news.related && news.related.length > 0 && (
              <div className="mt-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium text-stone-800 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-[#8b5d3b]"></span>
                    Related Articles
                  </h2>
                  <Link
                    href="/news"
                    className="text-[#8b5d3b] text-sm flex items-center gap-1 hover:gap-2 transition-all font-medium"
                  >
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  { // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  news.related.slice(0, 4).map((item: any) => (
                    <Link
                      key={item.id}
                      href={`/news/${item.slug}`}
                      className="group bg-white rounded-md overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg hover:border-stone-200 transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                          <Clock className="w-3 h-3" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <h3 className="text-sm font-medium text-stone-700 group-hover:text-[#8b5d3b] transition-colors line-clamp-2 leading-relaxed">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-6">
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
  );
}