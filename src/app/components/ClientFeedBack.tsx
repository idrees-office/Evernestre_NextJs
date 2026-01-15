// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import { getGoogleReviews, transformReviews } from "@/lib/reviews";
// import { useTranslations, useLocale } from "next-intl";
// type Testimonial = {
//   id: number;
//   name: string;
//   role: string;
//   quote: string;
//   avatar?: string;
//   rating?: number;
//   time?: string;
// };

// function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
//   const [expanded, setExpanded] = useState(false);
//   const charLimit = 280;
//   const isLongText = testimonial.quote.length > charLimit;
//   const displayText = expanded || !isLongText  ? testimonial.quote : testimonial.quote.slice(0, charLimit) + "...";

//   return (
//     <div className="bg-white rounded-lg p-5 h-full flex flex-col border border-[#c9a882]/30">
//       <div className="flex items-center gap-3 mb-3">
//         <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[#c2754e] flex items-center justify-center">
//           {testimonial.avatar ? (
//             <Image
//               src={testimonial.avatar}
//               alt={testimonial.name}
//               width={40}
//               height={40}
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 const target = e.target as HTMLImageElement;
//                 target.style.display = 'none';
//               }}
//             />
//           ) : (
//             <span className="text-white font-medium text-sm">
//               {testimonial.name.charAt(0)}
//             </span>
//           )}
//         </div>
//         <div className="min-w-0">
//           <h3 className="text-[#c2754e] font-medium text-sm leading-tight">
//             {testimonial.name}
//           </h3>
//           <p className="text-xs text-gray-500">
//             {testimonial.role} • {testimonial.time}
//           </p>
//         </div>
//       </div>
//       <div className="flex gap-0.5 mb-3">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             size={14}
//             className={i < (testimonial.rating || 5) ? "text-amber-400 fill-amber-400" : "text-gray-300"}
//           />
//         ))}
//       </div>
//       <div className="flex-1">
//         <p className="text-[13px] leading-relaxed text-gray-700 italic">
//           {displayText}
//         </p>
//         {isLongText && (
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="text-[#c2754e] text-xs font-medium mt-2 hover:underline"
//           >
//             {expanded ? "Show less" : "Read more"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
// export default function TestimonialSlider() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [totalReviews, setTotalReviews] = useState<number>(327); 
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(3);
//   const [loading, setLoading] = useState(true);
//   const t = useTranslations();
//   const locale = useLocale();

//   // Fetch reviews on component mount
//   useEffect(() => {
//     async function loadReviews() {
//       try {
//         const data = await getGoogleReviews();
        
//         if (data.status === 'success') {
//           if (data.reviews) {
//             const transformedReviews = transformReviews(data.reviews);
//             setTestimonials(transformedReviews);
//           }
//           if (data.total_reviews !== undefined) {
//             setTotalReviews(data.total_reviews);
//           }
//         } else {
//           setTestimonials([]);
//         }
//       } catch (error) {
//         console.error("Error loading reviews:", error);
//         setTestimonials([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadReviews();
//   }, []);

//   // Adjust slides based on screen size
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setSlidesToShow(1);
//       else if (window.innerWidth < 1024) setSlidesToShow(2);
//       else setSlidesToShow(3);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxSlide = Math.max(0, testimonials.length - slidesToShow);
//   const slideWidth = 100 / slidesToShow;
//   const gap = 16;
//   const nextSlide = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
//   const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
//   if (loading) {
//     return (
//       <section className="bg-[#faf8f5] py-10 px-4 sm:px-6 lg:px-10">
//         <div className="max-w-8xl mx-auto">
//           {/* Header with Google badge skeleton */}
//           <div className="mb-6 md:mb-8 flex items-start justify-between">
//             <div>
//               <h2 className="text-3xl sm:text-4xl font-normal text-[#8b5d3b] mb-1">
//                 { t('ClientFeedback') }
//               </h2>
//               <p className="text-sm text-gray-500">
//                 { t('Loadingreviews') }
//               </p>
//             </div>
//             <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-[#faf8f5] py-10 px-4 sm:px-6 lg:px-10">
//       <div className="max-w-8xl mx-auto">
//         {/* Header with Google badge */}
//         <div className="mb-6 md:mb-8 flex items-start justify-between flex-col sm:flex-row gap-4 sm:gap-0">
//           <div>
//             <h2 className="text-3xl sm:text-4xl font-normal text-[#8b5d3b] mb-1">
//                { t('ClientFeedback') }
//             </h2>
//             <p className="text-sm text-gray-500">
//               { t('Real') } <span className="text-[#c2754e]">{t('testimonialss')}</span>  { t('valuedclients') }
//             </p>
//           </div>

//           <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
//             <div className="flex items-center gap-1">
//               <svg className="w-5 h-5" viewBox="0 0 24 24">
//                 <path 
//                   fill="#4285F4" 
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 />
//                 <path 
//                   fill="#34A853" 
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 />
//                 <path 
//                   fill="#FBBC05" 
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 />
//                 <path 
//                   fill="#EA4335" 
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 />
//               </svg>
//               <span className="text-sm font-medium text-gray-700">{ t('Google')}</span>
//             </div>
//             <div className="h-4 w-px bg-gray-300"></div>
//             <div className="flex items-center gap-1">
//               <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
//               <span className="text-sm font-bold text-gray-800">5.0</span>
//               <span className="text-xs text-gray-500">({totalReviews} { t('reviews')})</span>
//             </div>
//           </div>
//         </div>
//         {testimonials.length > 0 ? (
//           <div className="relative">           
//             {testimonials.length > slidesToShow && (
//               <>
//                 <button onClick={prevSlide}
//                   className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer" aria-label="Previous"
//                 >
//                   <ChevronLeft className="w-5 h-5 text-[#c2754e]" />
//                 </button>
//                 <button onClick={nextSlide} className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-shadow border border-gray-100 cursor-pointer"
//                   aria-label="Next">
//                   <ChevronRight className="w-5 h-5 text-[#c2754e]" />
//                 </button>
//               </>
//             )}
//             <div className="overflow-hidden">
//               <div
//                 className="flex transition-transform duration-400 ease-out"
//                 style={{
//                   transform: `translateX(calc(-${currentSlide * slideWidth}% - ${currentSlide * gap}px))`,
//                   gap: `${gap}px`,
//                 }}
//               >
//                 {testimonials.map((t) => (
//                   <div
//                     key={t.id}
//                     className="flex-shrink-0"
//                     style={{ width: `calc(${slideWidth}% - ${(gap * (slidesToShow - 1)) / slidesToShow}px)` }}
//                   >
//                     <TestimonialCard testimonial={t} />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Dots */}
//             {maxSlide > 0 && (
//               <div className="flex justify-center mt-6 gap-2">
//                 {Array.from({ length: maxSlide + 1 }).map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentSlide(i)}
//                     className={`h-2 rounded-full transition-all ${
//                       i === currentSlide
//                         ? "bg-[#c2754e] w-5"
//                         : "bg-[#c9a882]/40 w-2 hover:bg-[#c2754e]/50"
//                     }`}
//                     aria-label={`Slide ${i + 1}`}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
//             <p className="text-gray-500"> { t('Norecenttestimonials')}</p>
//             <p className="text-sm text-gray-400 mt-1">{ t('CheckbackLater')}</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }








// import { useState, useEffect, useRef } from "react";
// import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const sampleTestimonials = [
//   {
//     id: 1,
//     name: "Sarah Mitchell",
//     role: "Homeowner",
//     quote: "Evernestre made our dream home a reality. Their attention to detail and understanding of what we wanted was exceptional. The entire process was smooth and professional from start to finish.",
//     rating: 5,
//     time: "2 weeks ago"
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Property Investor",
//     quote: "Outstanding service! They found me the perfect investment property within my budget. Their market knowledge is impressive and they negotiated a great deal on my behalf.",
//     rating: 5,
//     time: "1 month ago"
//   },
//   {
//     id: 3,
//     name: "Emma Thompson",
//     role: "First-time Buyer",
//     quote: "As a first-time buyer, I was nervous about the process. The team at Evernestre guided me through every step with patience and expertise. Couldn't be happier with my new apartment!",
//     rating: 5,
//     time: "3 weeks ago"
//   },
//   {
//     id: 4,
//     name: "David Rodriguez",
//     role: "Seller",
//     quote: "They sold our family home above asking price in just two weeks. Their marketing strategy and professional photography made all the difference. Highly recommended!",
//     rating: 5,
//     time: "1 month ago"
//   },
//   {
//     id: 5,
//     name: "Lisa Anderson",
//     role: "Luxury Home Buyer",
//     quote: "Exceptional experience from beginning to end. The level of service and discretion when dealing with high-value properties is unmatched. True professionals in every sense.",
//     rating: 5,
//     time: "2 months ago"
//   }
// ];

// function GoogleGIcon({ className = "w-5 h-5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
//       <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
//       <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//       <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
//       <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
//     </svg>
//   );
// }

// function TestimonialCard({ testimonial }) {
//   const [expanded, setExpanded] = useState(false);
//   const charLimit = 180;
//   const isLongText = testimonial.quote.length > charLimit;
//   const displayText = expanded || !isLongText 
//     ? testimonial.quote 
//     : testimonial.quote.slice(0, charLimit) + "...";

//   return (
//     <motion.div 
//       className="group relative h-full"
//       whileHover={{ y: -4 }}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Card */}
//       <div className="relative rounded-2xl bg-white p-6 h-full flex flex-col border border-[#8b5d3b]/20 transition-all duration-300">
//         {/* Header: Avatar, Name, Google icon */}
//         <div className="flex items-start gap-3 mb-3">
//           {/* Avatar */}
//           <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f5e0c5] to-[#c9a882] flex items-center justify-center flex-shrink-0 ring-2 ring-[#f5e0c5]">
//             <span className="text-base font-semibold text-[#8b5d3b]">
//               {testimonial.name.charAt(0)}
//             </span>
//           </div>
          
//           <div className="min-w-0 flex-1">
//             <h3 className="text-[15px] font-semibold text-[#8b5d3b] leading-tight">
//               {testimonial.name}
//             </h3>
//             <p className="text-[11px] text-[#c2754e] mt-0.5">
//               {testimonial.time} • {testimonial.role}
//             </p>
//           </div>

//           {/* Google Badge */}
//           <div className="flex items-center justify-center rounded-full bg-[#f5e0c5]/50 p-1.5 border border-[#c2754e]/30">
//             <GoogleGIcon className="w-4 h-4" />
//           </div>
//         </div>

//         {/* Stars */}
//         <div className="flex items-center gap-0.5 mb-4">
//           {[...Array(5)].map((_, i) => (
//             <Star
//               key={i}
//               size={14}
//               className={
//                 i < (testimonial.rating || 5)
//                   ? "text-amber-400 fill-amber-400"
//                   : "text-[#f5e0c5] fill-[#f5e0c5]"
//               }
//             />
//           ))}
//         </div>

//         {/* Quote */}
//         <div className="flex-1">
//           <p className="text-[13px] leading-relaxed text-[#8b5d3b]/80">
//             "{displayText}"
//           </p>
//           {isLongText && (
//             <button
//               onClick={() => setExpanded(!expanded)}
//               className="text-[#c2754e] text-xs font-medium mt-2 hover:text-[#8b5d3b] transition-colors"
//             >
//               {expanded ? "Show less" : "Read more"}
//             </button>
//           )}
//         </div>

//         {/* Quote icon */}
//         {/* <Quote className="mt-4 w-5 h-5 text-[#f5e0c5] self-end" /> */}
//       </div>
//     </motion.div>
//   );
// }

// export default function TestimonialsPage() {
//   const [testimonials, setTestimonials] = useState([]);
//   const [totalReviews, setTotalReviews] = useState(327);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(3);
//   const [paused, setPaused] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const autoplayRef = useRef(null);

//   // Fetch reviews on mount
//   useEffect(() => {
//     async function loadReviews() {
//       try {
//         // TODO: Replace with your actual review fetching logic
//         // Option 1: Fetch from a Review entity if you created one
//         // const reviews = await base44.entities.Review.list('-created_date');
        
//         // Option 2: Fetch from Google Reviews API using integration
//         // const data = await base44.integrations.YourIntegration.GetReviews();
        
//         // For now, using sample data
//         setTestimonials(sampleTestimonials);
//         setTotalReviews(327);
//       } catch (error) {
//         console.error("Error loading reviews:", error);
//         setTestimonials(sampleTestimonials);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadReviews();
//   }, []);

//   // Adjust slides based on screen size
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setSlidesToShow(1);
//       else if (window.innerWidth < 1024) setSlidesToShow(2);
//       else setSlidesToShow(3);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const maxSlide = Math.max(0, testimonials.length - slidesToShow);
//   const slideWidth = 100 / slidesToShow;
//   const gap = 20;
  
//   const nextSlide = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
//   const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

//   // Autoplay
//   useEffect(() => {
//     if (loading || paused || testimonials.length <= slidesToShow) return;

//     autoplayRef.current = window.setInterval(() => {
//       setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
//     }, 4500);

//     return () => {
//       if (autoplayRef.current) {
//         window.clearInterval(autoplayRef.current);
//       }
//     };
//   }, [loading, paused, testimonials.length, slidesToShow, maxSlide]);

//   if (loading) {
//     return (
//       <section className="bg-[#f6ecdf] py-12 px-4 sm:px-6 lg:px-10">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#8b5d3b]">
//               What Our Clients Say
//             </h2>
//           </div>
//           <div className="grid gap-8 lg:grid-cols-4 items-stretch">
//             <div className="lg:col-span-1">
//               <div className="h-full rounded-3xl bg-[#8b5d3b]/10 animate-pulse p-7" style={{ minHeight: '400px' }} />
//             </div>
//             <div className="lg:col-span-3 space-y-4">
//               <div className="h-64 rounded-2xl bg-white/50 animate-pulse" />
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="bg-[#f6ecdf] py-12 px-4 sm:px-6 lg:px-10">
//       <div className="max-w-6xl mx-auto">
//         <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#8b5d3b]"> What Our Clients Say </h2>
//         </motion.div>
//         <div className="grid gap-8 lg:grid-cols-4 items-stretch">
//           <motion.div 
//             className="lg:col-span-1"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="relative h-full rounded-3xl bg-[#8b5d3b] p-7 flex flex-col justify-between border border-[#c2754e]/20">
//               <div>
//                 <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 mx-auto mb-6 bg-gradient-to-br from-[#c2754e] to-[#8b5d3b] flex items-center justify-center">
//                   <span className="text-3xl font-semibold text-white">E</span>
//                 </div>

//                 <div className="text-center mb-6">
//                   <h3 className="text-2xl font-medium text-white mb-1">
//                     Evernestre
//                   </h3>
//                   <p className="text-sm text-[#f5e0c5]">Real Estate</p>
//                 </div>

//                 <div className="flex items-center justify-center gap-3 mb-4">
//                   <GoogleGIcon className="w-6 h-6" />
//                   <div className="flex items-baseline gap-1">
//                     <span className="text-3xl font-semibold text-white">5.0</span>
//                     <span className="text-sm text-[#f5e0c5]">/ 5.0</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-center gap-1 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={18}
//                       className="text-amber-300 fill-amber-300"
//                     />
//                   ))}
//                 </div>

//                 <p className="text-center text-[13px] text-[#f5e0c5]">
//                   4.9 average based on{" "}
//                   <span className="text-white font-semibold">
//                     {totalReviews}
//                   </span>{" "}
//                   reviews
//                 </p>
//               </div>

//               <button className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-white text-[#8b5d3b] text-sm font-semibold py-3 px-4 hover:bg-[#f5e0c5] transition-colors">
//                 Write a Review
//               </button>
//             </div>
//           </motion.div>

//           {/* Right slider */}
//           <motion.div 
//             className="lg:col-span-3"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             {testimonials.length > 0 ? (
//               <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
//                 {testimonials.length > slidesToShow && (
//                   <>
//                     <button
//                       onClick={prevSlide}
//                       className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer"
//                       aria-label="Previous"
//                     >
//                       <ChevronLeft className="w-5 h-5 text-[#8b5d3b]" />
//                     </button>
//                     <button
//                       onClick={nextSlide}
//                       className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer"
//                       aria-label="Next"
//                     >
//                       <ChevronRight className="w-5 h-5 text-[#8b5d3b]" />
//                     </button>
//                   </>
//                 )}

//                 <div className="overflow-hidden px-1 py-2">
//                   <div
//                     className="flex transition-transform duration-500 ease-out"
//                     style={{
//                       transform: `translateX(calc(-${currentSlide * slideWidth}% - ${currentSlide * gap}px))`,
//                       gap: `${gap}px`,
//                     }}
//                   >
//                     {testimonials.map((t) => (
//                       <div
//                         key={t.id}
//                         className="flex-shrink-0"
//                         style={{
//                           width: `calc(${slideWidth}% - ${(gap * (slidesToShow - 1)) / slidesToShow}px)`,
//                         }}
//                       >
//                         <TestimonialCard testimonial={t} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Dots */}
//                 {maxSlide > 0 && (
//                   <div className="flex justify-center mt-6 gap-2">
//                     {Array.from({ length: maxSlide + 1 }).map((_, i) => (
//                       <button
//                         key={i}
//                         onClick={() => setCurrentSlide(i)}
//                         className={`h-2 rounded-full transition-all ${
//                           i === currentSlide
//                             ? "bg-[#8b5d3b] w-5"
//                             : "bg-[#c2754e]/40 w-2 hover:bg-[#8b5d3b]/60"
//                         }`}
//                         aria-label={`Slide ${i + 1}`}
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="text-center py-8 rounded-2xl border border-[#8b5d3b]/30 bg-white">
//                 <p className="text-[#8b5d3b]">No recent testimonials</p>
//                 <p className="text-sm text-[#c2754e] mt-1">
//                   Check back later
//                 </p>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getGoogleReviews, transformReviews } from "@/lib/reviews";
import { useTranslations, useLocale } from "next-intl";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
  rating?: number;
  time?: string;
};

function GoogleGIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const charLimit = 180;
  const isLongText = testimonial.quote.length > charLimit;
  const displayText = expanded || !isLongText 
    ? testimonial.quote 
    : testimonial.quote.slice(0, charLimit) + "...";

  return (
    <motion.div 
      className="group relative h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Card */}
      <div className="relative rounded-2xl bg-white p-6 h-full flex flex-col border border-[#8b5d3b]/20 transition-all duration-300">
        {/* Header: Avatar, Name, Google icon */}
        <div className="flex items-start gap-3 mb-3">
          {/* Avatar */}
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f5e0c5] to-[#c9a882] flex items-center justify-center flex-shrink-0 ring-2 ring-[#f5e0c5]">
            {testimonial.avatar ? (
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('span');
                      fallback.className = "text-base font-semibold text-[#8b5d3b]";
                      fallback.textContent = testimonial.name.charAt(0);
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>
            ) : (
              <span className="text-base font-semibold text-[#8b5d3b]">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-semibold text-[#8b5d3b] leading-tight">
              {testimonial.name}
            </h3>
            <p className="text-[11px] text-[#c2754e] mt-0.5">
              {testimonial.time} • {testimonial.role || "Client"}
            </p>
          </div>

          {/* Google Badge */}
          <div className="flex items-center justify-center rounded-full bg-[#f5e0c5]/50 p-1.5 border border-[#c2754e]/30">
            <GoogleGIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < (testimonial.rating || 5)
                  ? "text-amber-400 fill-amber-400"
                  : "text-[#f5e0c5] fill-[#f5e0c5]"
              }
            />
          ))}
        </div>

        {/* Quote */}
        <div className="flex-1">
          <p className="text-[13px] leading-relaxed text-[#8b5d3b]/80">
            "{displayText}"
          </p>
          {isLongText && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#c2754e] text-xs font-medium mt-2 hover:text-[#8b5d3b] transition-colors"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const autoplayRef = useRef<number | null>(null);
  const t = useTranslations();
  const locale = useLocale();

  const [totalrading, setTotalRating] = useState<number>();

  // Fetch reviews on component mount
  useEffect(() => {
    async function loadReviews() {
      try {
        setLoading(true);
        const data = await getGoogleReviews();
        
        if (data.status === 'success') {
          if (data.reviews) {
            setTotalRating(data.rating);
            const transformedReviews = transformReviews(data.reviews);
            setTestimonials(transformedReviews);
          }
          if (data.total_reviews !== undefined) {
            setTotalReviews(data.total_reviews);
          }
        } else {
          // Fallback to empty array if API fails
          setTestimonials([]);
        }
      } catch (error) {
        console.error("Error loading reviews:", error);
        setTestimonials([]);
      } finally {
        setLoading(false);
      }
    }

    loadReviews();
  }, []);

  // Adjust slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - slidesToShow);
  const slideWidth = 100 / slidesToShow;
  const gap = 20;
  
  const nextSlide = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  // Autoplay
  useEffect(() => {
    if (loading || paused || testimonials.length <= slidesToShow) return;

    autoplayRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4500);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
      }
    };
  }, [loading, paused, testimonials.length, slidesToShow, maxSlide]);

  if (loading) {
    return (
      <section className="bg-[#f6ecdf] py-12 px-4 sm:px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#8b5d3b]">
              {t("ClientFeedback")}
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-4 items-stretch">
            <div className="lg:col-span-1">
              <div className="h-full rounded-3xl bg-[#8b5d3b]/10 animate-pulse p-7" style={{ minHeight: '400px' }} />
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className="h-64 rounded-2xl bg-white/50 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f6ecdf] py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#8b5d3b]">
            {t("ClientFeedback")}
          </h2>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-4 items-stretch">
          {/* Left Stats Panel */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full rounded-3xl bg-[#8b5d3b] p-7 flex flex-col justify-between border border-[#c2754e]/20">
              <div>
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/50 mx-auto mb-6 bg-gradient-to-br from-[#c2754e] to-[#8b5d3b] flex items-center justify-center">
                  <span className="text-3xl font-semibold text-white">E</span>
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-medium text-white mb-1">
                    Evernestre
                  </h3>
                  <p className="text-sm text-[#f5e0c5]">Real Estate</p>
                </div>

                <div className="flex items-center justify-center gap-3 mb-4">
                  <GoogleGIcon className="w-6 h-6" />
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-white">{totalrading || 0 }</span>
                    <span className="text-sm text-[#f5e0c5]">/ 5.0</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-amber-300 fill-amber-300"
                    />
                  ))}
                </div>

                <p className="text-center text-[13px] text-[#f5e0c5]">
                  {t("Real")} <span className="text-white font-semibold">
                    {totalReviews}
                  </span>{" "}
                  {t("reviews")}
                </p>
              </div>

              {/* <button className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-white text-[#8b5d3b] text-sm font-semibold py-3 px-4 hover:bg-[#f5e0c5] transition-colors">
                {t("exploreAllNews")}
              </button> */}
            </div>
          </motion.div>

          {/* Right slider */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {testimonials.length > 0 ? (
              <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
                {testimonials.length > slidesToShow && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-5 h-5 text-[#8b5d3b]" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-5 h-5 text-[#8b5d3b]" />
                    </button>
                  </>
                )}

                <div className="overflow-hidden px-1 py-2">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{
                      transform: `translateX(calc(-${currentSlide * slideWidth}% - ${currentSlide * gap}px))`,
                      gap: `${gap}px`,
                    }}
                  >
                    {testimonials.map((t) => (
                      <div
                        key={t.id}
                        className="flex-shrink-0"
                        style={{
                          width: `calc(${slideWidth}% - ${(gap * (slidesToShow - 1)) / slidesToShow}px)`,
                        }}
                      >
                        <TestimonialCard testimonial={t} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots */}
                {maxSlide > 0 && (
                  <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2 rounded-full transition-all ${
                          i === currentSlide
                            ? "bg-[#8b5d3b] w-5"
                            : "bg-[#c2754e]/40 w-2 hover:bg-[#8b5d3b]/60"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 rounded-2xl border border-[#8b5d3b]/30 bg-white">
                <p className="text-[#8b5d3b]">{t("Norecenttestimonials")}</p>
                <p className="text-sm text-[#c2754e] mt-1">
                  {t("CheckbackLater")}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}