"use client";
import React, { useEffect, useState } from "react";
import { getHomePage } from "@/lib/home";
import PropertySearchBar from "../components/PropertySearchBar";
import HeroSlider from "../components/HeroSlider";
import LuxuryLoader from "../components/LuxuryLoader";
import CitiesGrid from "../components/CitiesGrid";
import OffPlanProjects from "../components/OffPlanProjects";
import HighlightedAreas from "../components/HighlightedAreas";
import WhyEvernest from "../components/WhyEvernest";
import StatsStrip from "../components/StatsStrip";
import NewsSection from "../components/NewsSection";
import TrustedRealEstateSection from "../components/ClientFeedBack";
import RegisterCtaSection from "../components/RegisterCtaSection";
import SocialLinksSection from "../components/SocialLinksSection";
import Vision from "../components/Vision";
import { useLocale } from "next-intl";

export default function App() {
 
  const locale = useLocale();
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      // const res = await getHomePage();
      const res = await getHomePage(locale);
      setData(res);
      setLoading(false);
    }
    load();
  },  [locale]);

  if (loading) return <LuxuryLoader />;
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <div className="relative">
        <HeroSlider hero={data.hero} />
      </div>
      <OffPlanProjects projects={data.projects}/>
      <HighlightedAreas areas={data.areas} />
      <WhyEvernest />
      <StatsStrip />
      <NewsSection news={data.news} />
      <TrustedRealEstateSection />
      <Vision />
      <RegisterCtaSection />
      <SocialLinksSection />
    </div>
  );
}