"use client";

import React from "react";
import Header from "../includes/header";
import Link from "next/link";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import SocialLinksSection from "../Components/SocialLinksSection";
import NewsSection from "../Components/NewsSection";
import OffPlanProjects from "../Components/OffPlanProjects";

type Area = {
  name: string;
  slug: string;
  image: string;
  price: string;
};

const AREAS: Area[] = [
  {
    name: "Business Bay",
    slug: "business-bay",
    image: "https://test_backend.leadshub.ae/media/6806/Business-Bay.webp",
    price: "AED 950,000",
  },
  {
    name: "Downtown Dubai",
    slug: "downtown-dubai",
    image:
      "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.3M",
  },
  {
    name: "Dubai Marina",
    slug: "dubai-marina",
    image:
      "https://images.pexels.com/photos/1121724/pexels-photo-1121724.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.1M",
  },
  {
    name: "Palm Jumeirah",
    slug: "palm-jumeirah",
    image:
      "https://images.pexels.com/photos/3146187/pexels-photo-3146187.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 2.5M",
  },
  {
    name: "Jumeirah Village Circle (JVC)",
    slug: "jumeirah-village-circle",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 650,000",
  },
  {
    name: "Arabian Ranches",
    slug: "arabian-ranches",
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.9M",
  },
  {
    name: "Meydan",
    slug: "meydan",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 900,000",
  },
  {
    name: "Jumeirah Lake Towers (JLT)",
    slug: "jumeirah-lake-towers",
    image:
      "https://images.pexels.com/photos/306744/pexels-photo-306744.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.2M",
  },
  {
    name: "Dubai Hills Estate",
    slug: "dubai-hills-estate",
    image:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 1.6M",
  },
  {
    name: "Bluewaters Island",
    slug: "bluewaters-island",
    image:
      "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200",
    price: "AED 3.2M",
  },
];

export default function AreaGuidePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f6ecdf] py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-3xl font-normal text-gray-900 mb-4">
            Popular Areas for Real Estate in Dubai
          </h2>
          <div className="mx-auto h-[3px] w-24 bg-[color:var(--brand)] rounded"></div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-[#ffffff] py-10 md:py-12">
        <div className="container mx-auto px-6 md:px-10">
          <div className="mb-10 text-center">
            <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-normal tracking-tight text-[#8b5d3b]">
              Explore Top Communities
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm max-w-2xl mx-auto">
              Discover Dubai’s most desirable neighborhoods — from luxury
              waterfront living to family-friendly suburbs, each area offers its
              own charm and investment potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/area-guide/${area.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-md bg-[#eae7e4] shadow-[0_14px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-[color:var(--brand)] text-white text-xs font-normal px-2 py-1 rounded-sm shadow-md z-10 tracking-wide group-hover:shadow-lg transition-all duration-300">
                    From {area.price}
                  </div>

                  <img
                    src={area.image}
                    alt={area.name}
                    className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <p className="text-white text-lg font-medium tracking-wide">
                      {area.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SocialLinksSection />
      <RegisterCtaSection />
      <OffPlanProjects />
    </>
  );
}
