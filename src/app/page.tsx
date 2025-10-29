"use client";

import React from 'react';
import HeroSlider from './Components/HeroSlider';
import PropertySearchBar from './Components/PropertySearchBar';
import OffPlanProjects from './Components/OffPlanProjects';
import HighlightedAreas from './Components/HighlightedAreas';
import WhyEvernest from './Components/WhyEvernest';
import StatsStrip from './Components/StatsStrip';
import NewsSection from './Components/NewsSection';
import TrustedRealEstateSection from './Components/ClientFeedBack';
import RegisterCtaSection from './Components/RegisterCtaSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <div className="relative">
        <HeroSlider />
        <PropertySearchBar />
      </div>
      <OffPlanProjects />
      <HighlightedAreas />
      <WhyEvernest />
      <StatsStrip />
      <NewsSection />
      <TrustedRealEstateSection/>
      <RegisterCtaSection />

    </div>
  );
}

