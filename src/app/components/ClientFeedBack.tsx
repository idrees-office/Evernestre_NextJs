// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
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

// function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
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
//       <div className="relative rounded-md bg-white p-6 h-full flex flex-col border border-[#8b5d3b]/20 transition-all duration-300">
//         {/* Header: Avatar, Name, Google icon */}
//         <div className="flex items-start gap-3 mb-3">
//           {/* Avatar */}
//           <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f5e0c5] to-[#c9a882] flex items-center justify-center flex-shrink-0 ring-2 ring-[#f5e0c5]">
//             {testimonial.avatar ? (
//               <div className="w-full h-full rounded-full overflow-hidden relative">
//                 <Image
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-full h-full object-cover"
//                   fill
//                   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//                   onError={(e: any) => {
//                     // hide broken image; fallback UI handled by surrounding markup
//                     try {
//                       e.currentTarget.style.display = 'none';
//                       const parent = e.currentTarget.parentElement;
//                       if (parent) {
//                         const fallback = document.createElement('span');
//                         fallback.className = "text-base font-semibold text-[#8b5d3b]";
//                         fallback.textContent = testimonial.name.charAt(0);
//                         parent.appendChild(fallback);
//                       }
//                     } catch {}
//                   }}
//                 />
//               </div>
//             ) : (
//               <span className="text-base font-semibold text-[#8b5d3b]">
//                 {testimonial.name.charAt(0)}
//               </span>
//             )}
//           </div>
          
//           <div className="min-w-0 flex-1">
//             <h3 className="text-[15px] font-semibold text-[#8b5d3b] leading-tight">
//               {testimonial.name}
//             </h3>
//             <p className="text-[11px] text-[#c2754e] mt-0.5">
//               {testimonial.time} • {testimonial.role || "Client"}
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
//             {displayText}
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
//       </div>
//     </motion.div>
//   );
// }

// export default function TestimonialsPage() {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [totalReviews, setTotalReviews] = useState<number>(0);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(3);
//   const [paused, setPaused] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const autoplayRef = useRef<number | null>(null);
//   const t = useTranslations();
//   const locale = useLocale();

//   const [totalrading, setTotalRating] = useState<number>();

//   // Fetch reviews on component mount
//   useEffect(() => {
//     async function loadReviews() {
//       try {
//         setLoading(true);
//         const data = await getGoogleReviews();
        
//         if (data.status === 'success') {
//           if (data.reviews) {
//             setTotalRating(data.rating);
//             const transformedReviews = transformReviews(data.reviews);
//             setTestimonials(transformedReviews);
//           }
//           if (data.total_reviews !== undefined) {
//             setTotalReviews(data.total_reviews);
//           }
//         } else {
//           // Fallback to empty array if API fails
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
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-10">
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#8b5d3b]">
//               {t("ClientFeedback")}
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
//       <div className="container mx-auto max-w-8xl px-6 md:px-10">
//         <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#8b5d3b]">
//             {t("ClientFeedback")}
//           </h2>
//         </motion.div>
        
//         <div className="grid gap-8 lg:grid-cols-4 items-stretch">
//           {/* Left Stats Panel */}
//           <motion.div 
//             className="lg:col-span-1"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="relative h-full rounded-md bg-[#8b5d3b] p-7 flex flex-col justify-between border border-[#c2754e]/20">
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
//                     <span className="text-3xl font-semibold text-white">{totalrading || 0 }</span>
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
//                   {t("Real")} <span className="text-white font-semibold">
//                     {totalReviews}
//                   </span>{" "}
//                   {t("reviews")}
//                 </p>
//               </div>

//               {/* <button className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-white text-[#8b5d3b] text-sm font-semibold py-3 px-4 hover:bg-[#f5e0c5] transition-colors">
//                 {t("exploreAllNews")}
//               </button> */}
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
//                 <p className="text-[#8b5d3b]">{t("Norecenttestimonials")}</p>
//                 <p className="text-sm text-[#c2754e] mt-1">
//                   {t("CheckbackLater")}
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
import Image from "next/image";
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
      <div className="relative rounded-md bg-white p-4 sm:p-6 h-full flex flex-col border border-[#8b5d3b]/20 transition-all duration-300">
        {/* Header: Avatar, Name, Google icon */}
        <div className="flex items-start gap-3 mb-3">
          {/* Avatar */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#f5e0c5] to-[#c9a882] flex items-center justify-center flex-shrink-0 ring-2 ring-[#f5e0c5]">
            {testimonial.avatar ? (
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  fill
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onError={(e: any) => {
                    // hide broken image; fallback UI handled by surrounding markup
                    try {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const fallback = document.createElement('span');
                        fallback.className = "text-base font-semibold text-[#8b5d3b]";
                        fallback.textContent = testimonial.name.charAt(0);
                        parent.appendChild(fallback);
                      }
                    } catch {}
                  }}
                />
              </div>
            ) : (
              <span className="text-sm sm:text-base font-semibold text-[#8b5d3b]">
                {testimonial.name.charAt(0)}
              </span>
            )}
          </div>
          
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-[15px] font-semibold text-[#8b5d3b] leading-tight">
              {testimonial.name}
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#c2754e] mt-0.5">
              {testimonial.time} • {testimonial.role || "Client"}
            </p>
          </div>

          {/* Google Badge */}
          <div className="flex items-center justify-center rounded-full bg-[#f5e0c5]/50 p-1 sm:p-1.5 border border-[#c2754e]/30">
            <GoogleGIcon className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center gap-0.5 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
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
          <p className="text-xs sm:text-[13px] leading-relaxed text-[#8b5d3b]/80">
            {displayText}
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
      else if (window.innerWidth < 768) setSlidesToShow(1.5); // For tablets in portrait
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - Math.floor(slidesToShow));
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
      <section className="bg-[#f6ecdf] py-8 px-4 sm:px-6 lg:px-10">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6 md:px-10">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#8b5d3b]">
              {t("ClientFeedback")}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 items-stretch">
            <div className="lg:col-span-1">
              <div className="h-full rounded-md bg-[#8b5d3b]/10 animate-pulse p-4 sm:p-7" style={{ minHeight: '300px' }} />
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className="h-48 sm:h-64 rounded-md bg-white/50 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f6ecdf] py-8 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto max-w-8xl px-4 sm:px-6 md:px-10">
        <motion.div className="mb-6 sm:mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#8b5d3b]">
            {t("ClientFeedback")}
          </h2>
        </motion.div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {/* Left Stats Panel - Mobile: Full width, Desktop: 1 column */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-full rounded-md bg-[#8b5d3b] p-4 sm:p-6 lg:p-7 flex flex-col justify-between border border-[#c2754e]/20">
              <div>
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 sm:border-4 border-white/50 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#c2754e] to-[#8b5d3b] flex items-center justify-center">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">E</span>
                </div>

                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-1">
                    Evernestre
                  </h3>
                  <p className="text-xs sm:text-sm text-[#f5e0c5]">Real Estate</p>
                </div>

                <div className="flex flex-col items-center justify-center mb-4 sm:mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <GoogleGIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white">{totalrading?.toFixed(1) || "0.0"}</span>
                      <span className="text-xs sm:text-sm text-[#f5e0c5]">/ 5.0</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-amber-300 fill-amber-300"
                      />
                    ))}
                  </div>

                  <p className="text-center text-xs sm:text-[13px] text-[#f5e0c5]">
                    {t("Real")} <span className="text-white font-semibold">
                      {totalReviews}
                    </span>{" "}
                    {t("reviews")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right slider - Mobile: Full width, Desktop: 3 columns */}
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
                      className="absolute -left-2 sm:-left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-[#8b5d3b]" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute -right-2 sm:-right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-[#8b5d3b]" />
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

                {/* Dots - Hidden on small screens */}
                {maxSlide > 0 && (
                  <div className="hidden sm:flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
                    {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1.5 sm:h-2 rounded-full transition-all ${
                          i === currentSlide
                            ? "bg-[#8b5d3b] w-4 sm:w-5"
                            : "bg-[#c2754e]/40 w-1.5 sm:w-2 hover:bg-[#8b5d3b]/60"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
                
                {/* Mobile dots indicator */}
                {window.innerWidth < 640 && maxSlide > 0 && (
                  <div className="flex justify-center mt-4">
                    <span className="text-xs text-[#8b5d3b]">
                      {currentSlide + 1} / {maxSlide + 1}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 sm:py-8 rounded-md border border-[#8b5d3b]/30 bg-white">
                <p className="text-[#8b5d3b] text-sm sm:text-base">{t("Norecenttestimonials")}</p>
                <p className="text-xs sm:text-sm text-[#c2754e] mt-1">
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