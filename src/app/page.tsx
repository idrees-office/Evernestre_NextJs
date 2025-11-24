"use client";

import React, { useEffect, useState } from "react";
import { getHomePage } from "@/lib/home";

import HeroSlider from "./Components/HeroSlider";
import PropertySearchBar from "./Components/PropertySearchBar";
import OffPlanProjects from "./Components/OffPlanProjects";
import HighlightedAreas from "./Components/HighlightedAreas";
import WhyEvernest from "./Components/WhyEvernest";
import StatsStrip from "./Components/StatsStrip";
import NewsSection from "./Components/NewsSection";
import TrustedRealEstateSection from "./Components/ClientFeedBack";
import RegisterCtaSection from "./Components/RegisterCtaSection";
import SocialLinksSection from "./Components/SocialLinksSection";

function LuxuryLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] to-[#1a1a1a]">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-2 border-[#c9a882] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-2 border-[#d0845b] border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>
        <p className="text-white/60 font-light tracking-widest text-sm">
          LOADING PRESTIGE
        </p>
      </div>
    </div>
  );
}

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await getHomePage();
      setData(res);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return <LuxuryLoader />;

  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <div className="relative">
        <HeroSlider hero={data.hero} />
        <PropertySearchBar />
      </div>

      <OffPlanProjects projects={data.projects} />
      <HighlightedAreas areas={data.areas} />

      <WhyEvernest />
      <StatsStrip />

      <NewsSection news={data.news} />

      <TrustedRealEstateSection />
      <RegisterCtaSection />
      <SocialLinksSection />
    </div>
  );
}
