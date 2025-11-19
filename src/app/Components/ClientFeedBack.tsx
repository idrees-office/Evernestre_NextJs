"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sonia Chhabra",
    role: "Senior Property Consultant",
    quote:
      "Sonia Chhabra is an amazing agent. She handled the deal professionally and chased all NOC’s without the need to do any effort from my side. Got me the price in a smooth",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 2,
    name: "David Johnson",
    role: "Luxury Property Expert",
    quote:
      "David was fantastic! He understood exactly what I wanted and made the entire purchase journey effortless. Highly recommend his expertise in Dubai real estate.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Investment Specialist",
    quote:
      "Emma guided me throughout the process with patience and care. Her market knowledge and attention to detail were truly exceptional.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Property Consultant",
    quote:
      "Emma guided me throughout the process with patience and care. Her market knowledge and attention to detail were truly exceptional.",
    avatar: "https://i.pravatar.cc/150?img=22",
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // Adjust slides based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials.length;
  const maxSlide = Math.max(0, totalSlides - slidesToShow);

  const nextSlide = () => setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));

  return (
    <section className="bg-[#c283550a] py-8 md:py-8 lg:py-8">
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
         <div className="mb-6 md:mb-8 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[32px] md:text-[34px] lg:text-[38px] font-normal tracking-tight text-[#8b5d3b]">
              Client Feedback
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm">
              See what our valued clients say about their experience with our top property consultants.
            </p>
          </div>
        </div>
        <div className="relative">
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-[#c9a882]/40 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-[#c2754e] cursor-pointer" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-[#c9a882]/40"
            aria-label="Next slide cursor-pointer"
          >
            <ChevronRight className="h-5 w-5 text-[#c2754e] cursor-pointer" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slidesToShow)
                }%)`,
              }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  style={{
                    flex: `0 0 calc(${100 / slidesToShow}% - ${
                      (6 * (slidesToShow - 1)) / slidesToShow
                    }px)`,
                  }}
                >
                  <div className="rounded-[8px] border border-[#c9a882]/40 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_44px_rgba(0,0,0,0.1)] transition-all">
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-sm overflow-hidden ring-1 ring-[#d0845b]/30">
                          <Image
                            src={
                              t.avatar || "/images/news/placeholder-thumb.jpg"
                            }
                            alt={t.name}
                            width={56}
                            height={56}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-[#c2754e] font-normal text-base leading-tight">
                            {t.name}
                          </h3>
                          <p className="text-sm text-[#1a1a1a]/70">{t.role}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="text-sm leading-relaxed text-[#1a1a1a]/80 italic">
                      “{t.quote}”
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {maxSlide > 0 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-sm transition-all ${
                    i === currentSlide
                      ? "bg-[#c2754e] w-6"
                      : "bg-[#c9a882]/40 hover:bg-[#c2754e]/60"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
