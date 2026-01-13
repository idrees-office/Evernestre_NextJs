"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Rocket } from "lucide-react";

interface TimelineItem {
  year: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  startYear?: number;
  endYear?: number;
}

export default function Timeline({ items, startYear = 2014, endYear = 2024 }: TimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex] || items[0];

  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);
  const activeYearIndex = years.indexOf(activeItem.year);

  const handleYearClick = (year: number) => {
    const itemIndex = items.findIndex(item => item.year === year);
    if (itemIndex !== -1) {
      setActiveIndex(itemIndex);
    }
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-[#faf8f5] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section - Year Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {years.map((year) => {
              const isActive = year === activeItem.year;
              const hasItem = items.some(item => item.year === year);
              
              return (
                <button
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#d5a86e] text-white shadow-lg shadow-[#d5a86e]/50"
                      : hasItem
                      ? "bg-[#e8e0d8] text-gray-700 hover:bg-[#d5a86e]/20"
                      : "bg-[#e8e0d8]/50 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!hasItem}
                >
                  {year}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#d5a86e] rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Progress Line */}
          <div className="relative h-0.5 bg-[#e8e0d8] max-w-4xl mx-auto">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#d5a86e]"
              initial={{ width: 0 }}
              animate={{
                width: activeYearIndex >= 0 ? `${((activeYearIndex + 1) / years.length) * 100}%` : "0%"
              }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Middle Section - Content Display */}
        <div className="relative min-h-[400px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#faf8f5] rounded-lg"
            >
              {/* Background Year */}
              <div className="absolute left-0 top-0 text-[200px] md:text-[300px] font-extrabold text-[#e8e0d8] leading-none select-none">
                {activeItem.year}
              </div>

              {/* Content Card */}
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-8 md:p-12">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-[#d5a86e] to-[#8b5d3b] flex items-center justify-center shadow-lg shadow-[#d5a86e]/30">
                    <div className="text-white">
                      {activeItem.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Year Label */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-block mb-4"
                  >
                    <span className="bg-[#d5a86e] text-white text-xs px-3 py-1 rounded-md font-medium">
                      {activeItem.year}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  >
                    {activeItem.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl"
                  >
                    {activeItem.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Section - Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="w-10 h-10 rounded-full bg-[#e8e0d8] hover:bg-[#d5a86e]/30 text-gray-700 flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination Dots */}
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#d5a86e] w-8"
                    : "bg-[#e8e0d8] hover:bg-[#d5a86e]/40"
                }`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-[#e8e0d8] hover:bg-[#d5a86e]/30 text-gray-700 flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
