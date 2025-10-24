import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import PropertySearchBar from '../Components/PropertySearchBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f6]">
      <div className="relative">
        <HeroSlider />
        <PropertySearchBar />
      </div>
    </div>
  );
}