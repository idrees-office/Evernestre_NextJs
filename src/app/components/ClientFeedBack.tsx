"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
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

function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const charLimit = 280;
  const isLongText = testimonial.quote.length > charLimit;
  const displayText =
    expanded || !isLongText
      ? testimonial.quote
      : testimonial.quote.slice(0, charLimit) + "...";

  return (
    <div className="group relative h-full">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#8b5d3b]/20 via-[#c2754e]/15 to-[#8b5d3b]/20 opacity-60 blur-sm transition-opacity duration-300 group-hover:opacity-80" />
      <div className="relative rounded-2xl bg-[#c9a882] p-6 h-full flex flex-col shadow-[0_18px_35px_-20px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:-translate-y-1 border border-[#8b5d3b]/20">
        {/* Top: name + Google icon */}
        <div className="flex items-center gap-3 mb-3">
          <div className="min-w-0">
            <h3 className="text-[17px] font-medium text-white leading-tight">
              {testimonial.name}
            </h3>
            <p className="text-[11px] text-[#f5e0c5] mt-0.5">
              {testimonial.time} • {testimonial.role}
            </p>
          </div>
          <div className="ml-auto flex items-center justify-center rounded-full bg-white/20 px-2 py-1 border border-white/30">
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
                  ? "text-amber-300 fill-amber-300"
                  : "text-white/30"
              }
            />
          ))}
        </div>

        {/* Quote */}
        <div className="flex-1">
          <p className="text-[13px] leading-relaxed text-white">
            "{displayText}"
          </p>
          {isLongText && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#f5e0c5] text-xs font-medium mt-2 hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        {/* Quote icon */}
        <Quote className="mt-4 w-5 h-5 text-white/70 self-end" />
      </div>
    </div>
  );
}
export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [totalReviews, setTotalReviews] = useState<number>(327); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const autoplayRef = useRef<number | null>(null);
  const t = useTranslations();
  const locale = useLocale();

  // Fetch reviews on component mount
  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await getGoogleReviews();
        
        if (data.status === 'success') {
          if (data.reviews) {
            const transformedReviews = transformReviews(data.reviews);
            setTestimonials(transformedReviews);
          }
          if (data.total_reviews !== undefined) {
            setTotalReviews(data.total_reviews);
          }
        } else {
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
  const gap = 16;
  const nextSlide = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  // Autoplay (pause on hover / focus)
  useEffect(() => {
    if (loading) return;
    if (paused) return;
    if (testimonials.length <= slidesToShow) return;

    autoplayRef.current = window.setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    }, 4500);

    return () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [loading, paused, testimonials.length, slidesToShow, maxSlide]);

  const SectionContent = () => (
    <div className="max-w-6xl mx-auto">
      {/* Section heading */}
      <div className="text-center mb-10">
        <p className="text-[13px] uppercase tracking-[0.25em] text-[#c2754e] mb-3">
          {t("TestimonialsTagline") ?? ""}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#8b5d3b]">
          {t("ClientFeedback")}
        </h2>
      </div>

      {/* Layout: left brand card + right slider */}
      <div className="grid gap-8 lg:grid-cols-4 items-stretch">
        {/* Left brand / Google summary card */}
        <div className="lg:col-span-1">
          <div className="relative h-full rounded-3xl bg-[#c9a882] p-7 border border-[#8b5d3b]/30 shadow-[0_25px_40px_-28px_rgba(0,0,0,0.2)] flex flex-col justify-between">
            <div>
              {/* Brand circle image placeholder */}
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
                  <span className="text-3xl font-semibold text-white">5.0</span>
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
                4.9 average based on{" "}
                <span className="text-white font-semibold">
                  {totalReviews}
                </span>{" "}
                {t("reviews")}
              </p>
            </div>

            <button className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-white text-[#8b5d3b] text-sm font-semibold py-3 px-4 hover:bg-[#f5e0c5] transition-colors">
              {t("WriteAReview") ?? "Write a Review"}
            </button>
          </div>
        </div>

        {/* Right slider */}
        <div className="lg:col-span-3">
          {testimonials.length > 0 ? (
            <div
              className="relative"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
            >
              {testimonials.length > slidesToShow && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer hover:-translate-y-1/2"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#8b5d3b]" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all border border-[#8b5d3b]/30 cursor-pointer hover:-translate-y-1/2"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 text-[#8b5d3b]" />
                  </button>
                </>
              )}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(-${
                      currentSlide * slideWidth
                    }% - ${currentSlide * gap}px))`,
                    gap: `${gap}px`,
                  }}
                >
                  {testimonials.map((t) => (
                    <div
                      key={t.id}
                      className="flex-shrink-0"
                      style={{
                        width: `calc(${slideWidth}% - ${
                          (gap * (slidesToShow - 1)) / slidesToShow
                        }px)`,
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
          <div className="text-center py-8 rounded-2xl border border-[#8b5d3b]/30 bg-[#c9a882]/50">
            <p className="text-white">{t("Norecenttestimonials")}</p>
            <p className="text-sm text-[#f5e0c5] mt-1">
              {t("CheckbackLater")}
            </p>
          </div>
          )}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <section className="bg-[#f5e0c5] py-12 px-4 sm:px-6 lg:px-10">
        <SectionContent />
      </section>
    );
  }

  return (
    <section className="bg-[#f5e0c5] py-12 px-4 sm:px-6 lg:px-10">
      <SectionContent />
    </section>
  );
}