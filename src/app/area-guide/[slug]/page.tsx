"use client";

import React, { useEffect, useState } from "react";
import Header from "../../includes/header";
import Link from "next/link";
import RegisterCtaSection from "../../Components/RegisterCtaSection";
import SocialLinksSection from "../../Components/SocialLinksSection";
import { getAreaBySlug } from "@/lib/area";
import LuxuryLoader from "../../Components/LuxuryLoader";
import Image from "next/image";

type Area = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
};

type ApiArea = {
  id: number;
  title: string;
  slug: string;
  image: string;
  price: string;
};

interface ProjectDetailParams {
  params: {
    slug: any;
  };
}


export default function AreaGuidePage({params}: ProjectDetailParams) {
  const [areas, setAreas] = useState<Area[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { slug } = params;

  const fetchAreas = async (page: number = 1) => {
    try {
      setLoading(true);
      const data = await getAreaBySlug(slug);
      if (data.areas && data.areas.data) {
        const transformedAreas = data.areas.data.map((area: ApiArea) => ({
          id: area.id,
          title: area.title,
          slug: area.slug,
          image: area.image,
          price: area.price,
        }));

        setAreas(transformedAreas);
      } else {
        setAreas([]);
      }
    } catch (err) {
      console.error("Error fetching areas:", err);
      setError("Failed to load areas. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAreas(slug);
  }, []);

  if (loading) {
    return (
      <div className="w-full overflow-x-hidden">
        <Header />
        <section className="bg-[#f6ecdf] py-12 relative border-b border-[#f0e4d9] w-full">
          <div className="container mx-auto px-6 text-center relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
              Popular Areas in Dubai
            </h2>
            <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
          </div>
        </section>

        {/* Luxury Loader for initial load */}
        <LuxuryLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <section className="bg-[#f6ecdf] py-12 relative border-b border-[#f0e4d9] w-full">
          <div className="container mx-auto px-6 text-center relative z-10 w-full">
            <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
              Popular Areas in Dubai
            </h2>
            <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
          </div>
        </section>

        <section className="relative bg-white py-10 sm:py-12 md:py-16 w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <svg
                className="w-12 h-12 text-red-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <h3 className="text-lg font-medium text-red-800 mb-2">
                Error Loading Areas
              </h3>
              <p className="text-red-600">{error}</p>
              <button
                onClick={() => fetchAreas(1)}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <section className="bg-[#f6ecdf] py-12 relative border-b border-[#f0e4d9] w-full">
        <div className="container mx-auto px-6 text-center relative z-10 w-full">
          <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
            Areas
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>

      <section className="relative bg-white py-10 sm:py-12 md:py-16 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8f5f0] to-[#f6ecdf] opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          
        <div className="w-full">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            
            {/* TEXT CONTENT */}
            <div
              className="w-full md:w-1/2"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#3c2f26] mb-4">
                  Dubai Area Guide
                </h2>

                <p className="text-[#6f5b4b] leading-relaxed mb-4">
                  Transmds is the world’s driving worldwide coordinations supplier — we uphold
                  industry and exchange the worldwide trade of merchandi and exchange the
                  worldwide trade of merchandi.
                </p>

                <p className="text-[#6f5b4b] leading-relaxed">
                  Transmds is the world’s driving worldwide coordinations supplier — we uphold
                  industry and exchange the worldwide trade of merchandi and exchange the
                  worldwide trade of merchandi.
                </p>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="w-full md:w-1/2"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://evernest.ae/assets/img/projectspage/offplan_project_dubai_market.jpg"
                  alt="Dubai Area Guide"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>

          
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
    </div>
  );
}
