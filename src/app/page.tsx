"use client";

import React from 'react';
import HeroSlider from './Components/HeroSlider';
import PropertySearchBar from './Components/PropertySearchBar';
import OffPlanProjects from './Components/OffPlanProjects';
import HighlightedAreas from './Components/HighlightedAreas';
import WhyEvernest from './Components/WhyEvernest';
import StatsStrip from './Components/StatsStrip';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <div className="relative">
        <HeroSlider />
        <PropertySearchBar />
      </div>
      <OffPlanProjects />
      <WhyEvernest />
      <StatsStrip />
      <HighlightedAreas />
    </div>
  );
}

