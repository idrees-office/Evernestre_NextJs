// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import {
//   Calendar,
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   Clock,
//   Share2,
//   BookOpen,
// } from "lucide-react";
// import Header from "../includes/header";
// import SocialLinksSection from "../Components/SocialLinksSection";
// import RegisterCtaSection from "../Components/RegisterCtaSection";
// import { getAllNews } from "@/lib/news";
// import LuxuryLoader from "@/app/Components/LuxuryLoader";
// import Image from "next/image";

// type NewsItem = {
//   id: string;
//   title: string;
//   slug: string;
//   date: string;
//   image: string;
// };

// type ApiResponse = {
//   news: {
//     data: NewsItem[];
//     current_page: number;
//     last_page: number;
//     per_page: number;
//     total: number;
//   };
// };

// const categories = [
//   { name: "Modern Villa", count: 3 },
//   { name: "Houses", count: 5 },
//   { name: "Apartments", count: 4 },
//   { name: "Office", count: 6 },
// ];

// const popularTags = [
//   "Golfing Communities",
//   "Invest in Dubai",
//   "Off-Plan Property",
//   "Seller Guide",
//   "Property in Dubai",
//   "Dubai Trip",
//   "Best Places to Visit",
//   "Best Schools",
// ];

// export default function NewsContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//     interest: "general",
//     newsletter: true,
//   });

//   const [news, setNews] = useState<NewsItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [lastPage, setLastPage] = useState(1);
//   const [total, setTotal] = useState(0);
//   const hasFetched = useRef(false);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     if (Number.isNaN(date.getTime())) return dateString;
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   const generateExcerpt = (title: string) => {
//     if (!title) return "";
//     return title.length > 100 ? title.substring(0, 100) + "..." : title;
//   };

//   // Generate read time based on title length
//   const generateReadTime = (title: string) => {
//     if (!title) return "1 min read";
//     const wordCount = title.split(/\s+/).length;
//     const readTime = Math.max(1, Math.ceil(wordCount / 200));
//     return `${readTime} min read`;
//   };

//   const fetchNews = async (page: number = 1) => {
//     if (hasFetched.current && page === 1) return;

//     setLoading(true);
//     try {
//       const data: ApiResponse = await getAllNews(page);
//       if (data.news) {
//         setNews(data.news.data);
//         setCurrentPage(data.news.current_page);
//         setLastPage(data.news.last_page);
//         setTotal(data.news.total);
//         if (page === 1) {
//           hasFetched.current = true;
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching news:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const handleInputChange = (
//     e:
//       | React.ChangeEvent<HTMLInputElement>
//       | React.ChangeEvent<HTMLTextAreaElement>
//       | React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     const { name, value, type, checked } = e.target as HTMLInputElement;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // TODO: send to backend here
//   };

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= lastPage && page !== currentPage) {
//       fetchNews(page);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   // Get featured news (first item)
//   const featuredNews = news.length > 0 ? news[0] : null;
//   const regularNews = news.length > 1 ? news.slice(1) : [];

//   if (loading && !hasFetched.current) {
//     return (
//       <>
//         <Header />
//         <LuxuryLoader />
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />

//       {/* Compact Hero Section */}
//       <section className="bg-[#f6ecdf]">
//         <div className="container-fluid max-w-8xl px-6 md:px-8 py-10">
//           <div className="flex justify-center text-center">
//             <div className="space-y-5">
//               <h1 className="text-3xl md:text-4xl font-normal text-[#0e0e0e] leading-[1.15] tracking-tight">
//                 News &amp; Insights{" "}
//                 <span className="bg-gradient-to-r from-[color:var(--brand)] to-[#b96842] bg-clip-text text-transparent">
//                   Dubai
//                 </span>
//               </h1>

//               <p className="text-[#1a1a1a]/80 leading-relaxed text-[15px] font-light max-w-xl mx-auto">
//                 Latest market trends and luxury real estate insights in Dubai.
//               </p>

//               <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[14px] text-[#0e0e0e]/80 max-w-xl mx-auto">
//                 <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     className="shrink-0"
//                   >
//                     <path fill="currentColor" d="M20 6L9 17l-5-5" />
//                   </svg>
//                   Market Intelligence
//                 </li>

//                 <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     className="shrink-0"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M12 2a10 10 0 100 20 10 10 0 000-20zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z"
//                     />
//                   </svg>
//                   Expert Analysis
//                 </li>

//                 <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm">
//                   <svg
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     className="shrink-0"
//                   >
//                     <path fill="currentColor" d="M3 12l5 5L21 4" />
//                   </svg>
//                   Investment Guides
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="py-14 bg-white">
//         <div className="container mx-auto px-2 max-w-8xl">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
//             {/* LEFT: News (col-span-8) */}
//             <div className="lg:col-span-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {/* Featured News */}
//                 {featuredNews && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     className="group cursor-pointer mb-10"
//                   >
//                     <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
//                       <div className="grid grid-cols-1 xl:grid-cols-2">
//                         <div className="h-80 xl:h-96 relative overflow-hidden">
//                           <Image
//                             src={featuredNews.image}
//                             alt={featuredNews.title}
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-110"
//                             sizes="(max-width: 1280px) 100vw, 50vw"
//                             onError={(e) => {
//                               const target = e.target as HTMLImageElement;
//                               target.src = "/assets/img/property/project1.jpg";
//                             }}
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
//                           {/* Date badge top left (similar to your design) */}
//                           <div className="absolute top-5 left-5 z-20">
//                             <div className="bg-[#8b5d3b] text-white rounded-md shadow-md text-center text-xs leading-tight px-2 py-2">
//                               <div className="font-semibold">
//                                 {new Date(featuredNews.date)
//                                   .getDate()
//                                   .toString()
//                                   .padStart(2, "0")}
//                               </div>
//                               <div className="uppercase text-[10px] tracking-wide">
//                                 {new Date(featuredNews.date).toLocaleString(
//                                   "en-US",
//                                   {
//                                     month: "short",
//                                   }
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                           <div className="absolute bottom-6 left-6 z-20 flex items-center gap-4 text-white/90">
//                             <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                               <Calendar className="w-4 h-4" />
//                               <span className="text-sm">
//                                 {formatDate(featuredNews.date)}
//                               </span>
//                             </div>
//                             <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                               <Clock className="w-4 h-4" />
//                               <span className="text-sm">
//                                 {generateReadTime(featuredNews.title)}
//                               </span>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="p-7 flex flex-col justify-between">
//                           <div>
//                             <h3 className="text-2xl xl:text-3xl font-light text-gray-900 mb-4 group-hover:text-[#8b5d3b] transition-colors duration-300 leading-tight">
//                               {featuredNews.title}
//                             </h3>
//                             <p className="text-gray-600 mb-5 leading-relaxed text-[15px]">
//                               {generateExcerpt(featuredNews.title)}
//                             </p>
//                           </div>

//                           <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                             <div className="flex items-center gap-3">
//                               <div className="w-8 h-8 bg-gradient-to-br from-[#8b5d3b] to-[#d4a373] rounded-full flex items-center justify-center shadow-md">
//                                 <span className="text-white font-normal text-sm">
//                                   ER
//                                 </span>
//                               </div>
//                               <div>
//                                 <p className="text-sm text-gray-800">
//                                   Evernest Real Estate
//                                 </p>
//                                 <p className="text-[12px] text-gray-500">
//                                   Senior Market Analyst
//                                 </p>
//                               </div>
//                             </div>
//                             <button className="flex items-center gap-2 text-[#8b5d3b] hover:text-[#7a4f32] transition-all duration-300 group/btn font-normal text-sm">
//                               <span>Read Full Analysis</span>
//                               <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//                 {regularNews.length > 0 && (
//                   <div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       {regularNews.map((newsItem, index) => (
//                         <motion.div
//                           key={newsItem.id}
//                           initial={{ opacity: 0, y: 20 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           transition={{ duration: 0.4, delay: index * 0.08 }}
//                           className="bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
//                         >
//                           <div className="h-52 relative overflow-hidden">
//                             <Image
//                               src={newsItem.image}
//                               alt={newsItem.title}
//                               fill
//                               className="object-cover transition-transform duration-500 group-hover:scale-110"
//                               sizes="(max-width: 768px) 100vw, 50vw"
//                               onError={(e) => {
//                                 const target = e.target as HTMLImageElement;
//                                 target.src =
//                                   "/assets/img/property/project1.jpg";
//                               }}
//                             />
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             <div className="absolute top-4 left-4">
//                               <span className="bg-white/95 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
//                                 Market Update
//                               </span>
//                             </div>
//                             <div className="absolute bottom-3 left-4 flex items-center gap-2">
//                               <span className="bg-black/60 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
//                                 {generateReadTime(newsItem.title)}
//                               </span>
//                             </div>
//                           </div>

//                           <div className="p-5">
//                             <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
//                               <div className="flex items-center gap-1">
//                                 <Calendar className="w-3 h-3" />
//                                 <span>{formatDate(newsItem.date)}</span>
//                               </div>
//                             </div>

//                             <h4 className="font-light text-gray-900 mb-2 group-hover:text-[#8b5d3b] transition-colors duration-300 line-clamp-2 leading-tight text-[16px]">
//                               {newsItem.title}
//                             </h4>

//                             <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-7 h-7 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-inner">
//                                   <span className="text-gray-600 text-[10px] font-normal">
//                                     ER
//                                   </span>
//                                 </div>
//                                 <span className="text-xs text-gray-600 font-normal">
//                                   Evernest Real Estate
//                                 </span>
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors duration-300 group/share">
//                                   <Share2 className="w-4 h-4 text-gray-400 group-hover/share:text-[#8b5d3b]" />
//                                 </button>
//                                 <button className="flex items-center gap-1.5 text-[#8b5d3b] hover:text-[#7a4f32] transition-all duration-300 group/read font-medium text-xs">
//                                   Read
//                                   <ArrowRight className="w-3 h-3 group-hover/read:translate-x-1 transition-transform duration-300" />
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Pagination */}
//                 {lastPage > 1 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.3 }}
//                     className="flex justify-center items-center gap-4 mt-10"
//                   >
//                     <button
//                       onClick={() => handlePageChange(currentPage - 1)}
//                       disabled={currentPage === 1}
//                       className={`px-2 py-2 rounded-full border transition-all duration-300 flex items-center gap-3 font-normal text-sm ${
//                         currentPage === 1
//                           ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
//                           : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white hover:shadow-lg"
//                       }`}
//                     >
//                       <ArrowRight className="w-4 h-4 rotate-180" />
//                     </button>

//                     <div className="flex gap-2">
//                       {Array.from({ length: Math.min(5, lastPage) }, (_, i) => {
//                         let page: number;

//                         if (lastPage <= 5) {
//                           page = i + 1;
//                         } else if (currentPage <= 3) {
//                           page = i + 1;
//                         } else if (currentPage >= lastPage - 2) {
//                           page = lastPage - 4 + i;
//                         } else {
//                           page = currentPage - 2 + i;
//                         }

//                         return (
//                           <button
//                             key={page}
//                             onClick={() => handlePageChange(page)}
//                             className={`w-8 h-8 rounded-full border transition-all duration-300 font-normal text-sm ${
//                               currentPage === page
//                                 ? "bg-[#8b5d3b] text-white border-[#8b5d3b] shadow-lg scale-105"
//                                 : "border-gray-200 text-gray-600 hover:border-[#8b5d3b] hover:text-[#8b5d3b] bg-white hover:shadow-md"
//                             }`}
//                           >
//                             {page}
//                           </button>
//                         );
//                       })}
//                     </div>

//                     <button
//                       onClick={() => handlePageChange(currentPage + 1)}
//                       disabled={currentPage === lastPage}
//                       className={`px-2 py-2 rounded-full border transition-all duration-300 flex items-center gap-3 font-normal text-sm ${
//                         currentPage === lastPage
//                           ? "border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed"
//                           : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white hover:shadow-lg"
//                       }`}
//                     >
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </motion.div>
//                 )}

//                 {/* Empty State */}
//                 {!loading && news.length === 0 && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="text-center py-16"
//                   >
//                     <div className="w-28 h-28 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
//                       <BookOpen className="w-10 h-10 text-gray-400" />
//                     </div>
//                     <h3 className="text-2xl font-light text-gray-900 mb-3">
//                       No Articles Available
//                     </h3>
//                     <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm">
//                       We&apos;re currently preparing new market insights and
//                       analysis. Check back soon for the latest updates from
//                       Dubai&apos;s luxury real estate sector.
//                     </p>
//                   </motion.div>
//                 )}
//               </motion.div>
//             </div>

//             <div className="lg:col-span-3 space-y-6">
//               {/* Categories */}
//               <div className="bg-[#f7f8ff] rounded-md border border-[#f1e6da] px-4 py-4">
//                 <h3 className="text-[15px] font-medium text-[#8b5d3b] border-l-2 border-[#c17a44] pl-3 mb-3">
//                   Categories
//                 </h3>
//                 <div className="space-y-2">
//                   {categories.map((cat) => (
//                     <button
//                       key={cat.name}
//                       className="w-full flex items-center justify-between text-[13px] bg-white rounded-sm border border-gray-100 px-3 py-2 hover:border-[#8b5d3b]/70 hover:bg-[#fff7f1] transition-all"
//                       type="button"
//                     >
//                       <span className="text-gray-800">{cat.name}</span>
//                       <span className="text-[#8b5d3b] text-xs font-semibold">
//                         {String(cat.count).padStart(2, "0")}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-[#f7f8ff] rounded-md border border-[#f1e6da] px-4 py-4">
//                 <h3 className="text-[15px] font-medium text-[#8b5d3b] border-l-2 border-[#c17a44] pl-3 mb-3">
//                   Popular Tags
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   {popularTags.map((tag) => (
//                     <button
//                       key={tag}
//                       type="button"
//                       className="text-[11px] px-3 py-1 rounded-full bg-white border border-gray-100 text-gray-700 hover:border-[#8b5d3b]/80 hover:text-[#8b5d3b] hover:bg-[#fff7f1] transition-all"
//                     >
//                       {tag}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <div className="bg-[#f9fafb] rounded-md border border-gray-100 px-4 py-4">
//                 <h3 className="text-[15px] font-medium text-gray-900 border-l-2 border-[#c17a44] pl-3 mb-3">
//                   Speak With a Property Advisor
//                 </h3>
//                 <form
//                   onSubmit={handleSubmit}
//                   className="space-y-2.5 text-[13px]"
//                 >
//                   <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-white">
//                     <User className="w-4 h-4 text-gray-400" />
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Full Name"
//                       className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
//                     />
//                   </div>

//                   <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-white">
//                     <Mail className="w-4 h-4 text-gray-400" />
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="Email"
//                       className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
//                     />
//                   </div>
//                   <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-white">
//                     <Phone className="w-4 h-4 text-gray-400" />
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="Phone (WhatsApp preferred)"
//                       className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
//                     />
//                   </div>
//                   <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-white">
//                     <MapPin className="w-4 h-4 text-gray-400" />
//                     <select
//                       name="interest"
//                       value={formData.interest}
//                       onChange={handleInputChange}
//                       className="w-full bg-transparent text-gray-800 focus:outline-none"
//                     >
//                       <option value="general">General Inquiry</option>
//                       <option value="buying">Buying in Dubai</option>
//                       <option value="selling">Selling Property</option>
//                       <option value="offplan">Off-Plan Projects</option>
//                     </select>
//                   </div>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     rows={3}
//                     placeholder="Tell us what you're looking for..."
//                     className="w-full border border-gray-200 rounded-sm px-3 py-1.5 bg-white text-gray-800 placeholder-gray-400 focus:outline-none resize-none"
//                   />
//                   <button
//                     type="submit"
//                     className="w-full flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b5d3b] to-[#d4a373] text-white text-[13px] font-medium py-2 mt-1 hover:brightness-110 transition-all"
//                   >
//                     Request Call Back
//                     <ArrowRight className="w-3 h-3" />
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <SocialLinksSection />
//       <RegisterCtaSection />
//     </>
//   );
// }





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
  Sparkles,
} from "lucide-react";
import Header from "../includes/header";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import { getAllNews } from "@/lib/news";
import LuxuryLoader from "@/app/Components/LuxuryLoader";
import Image from "next/image";

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
  { name: "Modern Villa", count: 3 },
  { name: "Houses", count: 5 },
  { name: "Apartments", count: 4 },
  { name: "Office", count: 6 },
];

const popularTags = [
  "Golfing Communities",
  "Invest in Dubai",
  "Off-Plan Property",
  "Seller Guide",
  "Property in Dubai",
  "Dubai Trip",
  "Best Places to Visit",
  "Best Schools",
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
  const [total, setTotal] = useState(0);
  const hasFetched = useRef(false);

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
      const data: ApiResponse = await getAllNews(page);
      if (data.news) {
        setNews(data.news.data);
        setCurrentPage(data.news.current_page);
        setLastPage(data.news.last_page);
        setTotal(data.news.total);
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
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= lastPage && page !== currentPage) {
      fetchNews(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const featuredNews = news.length > 0 ? news[0] : null;
  const regularNews = news.length > 1 ? news.slice(1) : [];

  if (loading && !hasFetched.current) {
    return (
      <>
        <Header />
        <LuxuryLoader />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="bg-[#f6ecdf]">
        <div className="container-fluid max-w-8xl px-6 md:px-8 py-10">
          <div className="flex justify-center text-center">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-4xl font-normal text-[#0e0e0e] leading-[1.15] tracking-tight">
                News &amp; Insights{" "}
                <span className="bg-gradient-to-r from-[color:var(--brand)] to-[#b96842] bg-clip-text text-transparent">
                  Dubai
                </span>
              </h1>

              <p className="text-[#1a1a1a]/80 leading-relaxed text-[15px] font-light max-w-xl mx-auto">
                Latest market trends and luxury real estate insights in Dubai.
              </p>

              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-[14px] text-[#0e0e0e]/80 max-w-xl mx-auto">
                <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-2 py-1.5 shadow-sm text-xs">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="shrink-0"
                  >
                    <path fill="currentColor" d="M20 6L9 17l-5-5" />
                  </svg>
                  Market Intelligence
                </li>

                <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm text-xs">
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
                  Expert Analysis
                </li>

                <li className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-3 py-2 shadow-sm text-xs">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="shrink-0"
                  >
                    <path fill="currentColor" d="M3 12l5 5L21 4" />
                  </svg>
                  Investment Guides
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-[#faf8f5]">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT: News (col-span-8) */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Featured News */}
                {featuredNews && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer mb-12"
                  >
                    <div className="bg-white rounded-sm overflow-hidden shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-500 relative">
                      {/* Luxury accent */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8b5d3b] via-[#c97a52] to-[#8b5d3b]"></div>
                      
                      <div className="grid grid-cols-1 xl:grid-cols-2">
                        <div className="h-80 xl:h-[420px] relative overflow-hidden">
                          <Image
                            src={featuredNews.image}
                            alt={featuredNews.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 1280px) 100vw, 50vw"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/assets/img/property/project1.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                          
                          {/* Featured badge */}
                          <div className="absolute top-5 right-5 z-20">
                            <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#8b5d3b] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                              <Sparkles className="w-3 h-3" />
                              Featured
                            </div>
                          </div>
                          
                          {/* Date badge */}
                          <div className="absolute top-5 left-5 z-20">
                            <div className="bg-gradient-to-br from-[#8b5d3b] to-[#c97a52] text-white rounded-sm shadow-lg text-center text-xs leading-tight px-3 py-2.5">
                              <div className="font-bold text-lg">
                                {new Date(featuredNews.date).getDate().toString().padStart(2, "0")}
                              </div>
                              <div className="uppercase text-[10px] tracking-wider opacity-90">
                                {new Date(featuredNews.date).toLocaleString("en-US", { month: "short" })}
                              </div>
                            </div>
                          </div>
                          
                          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 text-white/90">
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                              <Calendar className="w-3.5 h-3.5" />
                              <span className="text-xs font-medium">{formatDate(featuredNews.date)}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                              <Clock className="w-3.5 h-3.5" />
                              <span className="text-xs font-medium">{generateReadTime(featuredNews.title)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-8 flex flex-col justify-between relative">
                          {/* Decorative corner */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#8b5d3b]/5 to-transparent"></div>
                          
                          <div>
                            <span className="inline-block text-[10px] uppercase tracking-widest text-[#8b5d3b] font-semibold mb-3 bg-[#8b5d3b]/10 px-3 py-1 rounded-full">
                              Exclusive Insight
                            </span>
                            <h3 className="text-2xl xl:text-3xl font-light text-gray-900 mb-4 group-hover:text-[#8b5d3b] transition-colors duration-300 leading-snug">
                              {featuredNews.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                              {generateExcerpt(featuredNews.title)}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-[#8b5d3b] to-[#d4a373] rounded-full flex items-center justify-center shadow-lg ring-2 ring-white">
                                <span className="text-white font-medium text-sm">ER</span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-800">Evernest Real Estate</p>
                                <p className="text-[11px] text-gray-500">Senior Market Analyst</p>
                              </div>
                            </div>
                            <motion.button 
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-[#8b5d3b] font-medium text-sm group/btn"
                            >
                              <span>Read Analysis</span>
                              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Regular News Grid */}
                {regularNews.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1 h-6 bg-gradient-to-b from-[#8b5d3b] to-[#c97a52] rounded-full"></div>
                      <h2 className="text-lg font-medium text-gray-900">Latest Articles</h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {regularNews.map((newsItem, index) => (
                        <motion.div
                          key={newsItem.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.08 }}
                          whileHover={{ y: -8 }}
                          className="bg-white rounded-sm overflow-hidden shadow-lg border border-gray-100/50 group cursor-pointer hover:shadow-2xl transition-all duration-500 relative"
                        >
                          {/* Top accent line */}
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8b5d3b]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="h-56 relative overflow-hidden">
                            <Image
                              src={newsItem.image}
                              alt={newsItem.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, 50vw"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/assets/img/property/project1.jpg";
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="absolute top-4 left-4">
                              <span className="bg-white/95 backdrop-blur-sm text-[#8b5d3b] px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wide shadow-sm">
                                Market Update
                              </span>
                            </div>
                            
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                              <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
                                {generateReadTime(newsItem.title)}
                              </span>
                            </div>
                          </div>

                          <div className="p-5 relative">
                            {/* Decorative line */}
                            <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#8b5d3b]/10 to-transparent"></div>
                            
                            <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 pt-1">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-[#8b5d3b]" />
                                <span>{formatDate(newsItem.date)}</span>
                              </div>
                            </div>

                            <h4 className="font-medium text-gray-900 mb-3 group-hover:text-[#8b5d3b] transition-colors duration-300 line-clamp-2 leading-snug text-[15px]">
                              {newsItem.title}
                            </h4>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-gradient-to-br from-[#8b5d3b]/20 to-[#c97a52]/20 rounded-full flex items-center justify-center">
                                  <span className="text-[#8b5d3b] text-[10px] font-semibold">ER</span>
                                </div>
                                <span className="text-xs text-gray-600">Evernest</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <button className="p-1.5 hover:bg-[#8b5d3b]/10 rounded-full transition-colors duration-300 group/share">
                                  <Share2 className="w-4 h-4 text-gray-400 group-hover/share:text-[#8b5d3b] transition-colors" />
                                </button>
                                <motion.button 
                                  whileHover={{ x: 3 }}
                                  className="flex items-center gap-1.5 text-[#8b5d3b] font-medium text-xs group/read"
                                >
                                  Read
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Luxury Pagination */}
                {lastPage > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center items-center gap-4 mt-12"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`p-3 rounded-full border-2 transition-all duration-300 ${
                        currentPage === 1
                          ? "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed"
                          : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white shadow-lg hover:shadow-[#8b5d3b]/25"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </motion.button>

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
                          <motion.button
                            key={page}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 font-medium text-sm ${
                              currentPage === page
                                ? "bg-gradient-to-br from-[#8b5d3b] to-[#c97a52] text-white border-transparent shadow-lg shadow-[#8b5d3b]/30"
                                : "border-gray-200 text-gray-600 hover:border-[#8b5d3b] hover:text-[#8b5d3b] bg-white hover:shadow-md"
                            }`}
                          >
                            {page}
                          </motion.button>
                        );
                      })}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === lastPage}
                      className={`p-3 rounded-full border-2 transition-all duration-300 ${
                        currentPage === lastPage
                          ? "border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed"
                          : "border-[#8b5d3b] text-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white shadow-lg hover:shadow-[#8b5d3b]/25"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}

                {/* Empty State */}
                {!loading && news.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-20"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-[#8b5d3b]/10 to-[#c97a52]/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      <BookOpen className="w-12 h-12 text-[#8b5d3b]/50" />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-3">No Articles Available</h3>
                    <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                      We&apos;re currently preparing new market insights. Check back soon.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#faf8f5] to-white rounded-sm border border-[#e8e0d8] p-5 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#8b5d3b]/5 to-transparent"></div>
                
                <h3 className="text-sm font-semibold text-[#8b5d3b] border-l-2 border-[#c97a52] pl-3 mb-4 uppercase tracking-wider">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((cat, index) => (
                    <motion.button
                      key={cat.name}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                      className="w-full flex items-center justify-between text-[13px] bg-white rounded-sm border border-gray-100 px-4 py-3 hover:border-[#8b5d3b]/50 hover:bg-[#fff9f5] hover:shadow-sm transition-all duration-300 group"
                      type="button"
                    >
                      <span className="text-gray-700 group-hover:text-[#8b5d3b] transition-colors">{cat.name}</span>
                      <span className="bg-[#8b5d3b]/10 text-[#8b5d3b] text-xs font-bold px-2 py-0.5 rounded-full">
                        {String(cat.count).padStart(2, "0")}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Popular Tags - Luxury Style */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-[#faf8f5] to-white rounded-sm border border-[#e8e0d8] p-5 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-[#8b5d3b] border-l-2 border-[#c97a52] pl-3 mb-4 uppercase tracking-wider">
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <motion.button
                      key={tag}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                      type="button"
                      className="text-[11px] px-3 py-1.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:border-[#8b5d3b] hover:text-[#8b5d3b] hover:bg-[#fff9f5] hover:shadow-sm transition-all duration-300"
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form - Luxury Style */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-sm border border-gray-100 shadow-lg overflow-hidden relative"
              >
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-[#8b5d3b] via-[#c97a52] to-[#8b5d3b]"></div>
                
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-gray-900 border-l-2 border-[#c97a52] pl-3 mb-4">
                    Speak With a Property Advisor
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-3 text-[13px]">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b] focus-within:bg-white transition-all duration-300">
                      <User className="w-4 h-4 text-[#8b5d3b]/60" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b] focus-within:bg-white transition-all duration-300">
                      <Mail className="w-4 h-4 text-[#8b5d3b]/60" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b] focus-within:bg-white transition-all duration-300">
                      <Phone className="w-4 h-4 text-[#8b5d3b]/60" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone (WhatsApp preferred)"
                        className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b] focus-within:bg-white transition-all duration-300">
                      <MapPin className="w-4 h-4 text-[#8b5d3b]/60" />
                      <select
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full bg-transparent text-gray-800 focus:outline-none"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="buying">Buying in Dubai</option>
                        <option value="selling">Selling Property</option>
                        <option value="offplan">Off-Plan Projects</option>
                      </select>
                    </div>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Tell us what you're looking for..."
                      className="w-full border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#8b5d3b] focus:bg-white resize-none transition-all duration-300"
                    />

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b5d3b] to-[#c97a52] text-white text-[13px] font-medium py-3 mt-2 shadow-lg shadow-[#8b5d3b]/20 hover:shadow-xl hover:shadow-[#8b5d3b]/30 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                      <span className="relative">Request Call Back</span>
                      <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </form>
                </div>
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
