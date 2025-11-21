"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  current: number;
  last: number;
  onChange: (page: number) => void;
}

export default function Pagination({ current, last, onChange }: PaginationProps) {
  if (last <= 1) return null;

  const generatePages = () => {
    const pages = [];

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || Math.abs(i - current) <= 1) {
        pages.push(i);
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      
      {/* PREV */}
      <button
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        className={`flex items-center justify-center w-10 h-10 rounded-full border transition ${
          current === 1
            ? "border-gray-300 text-gray-400 cursor-not-allowed"
            : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* PAGE NUMBERS */}
      {pages.map((pageNum, idx) => {
        const next = pages[idx + 1];
        const showDots = next && next - pageNum > 1;

        return (
          <React.Fragment key={pageNum}>
            <button
              onClick={() => onChange(pageNum)}
              className={`flex items-center justify-center w-10 h-10 rounded-full border text-sm transition ${
                current === pageNum
                  ? "bg-[#c9a882] text-white border-[#c9a882]"
                  : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10"
              }`}
            >
              {pageNum}
            </button>

            {showDots && (
              <span className="w-10 h-10 flex items-center justify-center text-[#8b5d3b]">...</span>
            )}
          </React.Fragment>
        );
      })}

      {/* NEXT */}
      <button
        disabled={current === last}
        onClick={() => onChange(current + 1)}
        className={`flex items-center justify-center w-10 h-10 rounded-full border transition ${
          current === last
            ? "border-gray-300 text-gray-400 cursor-not-allowed"
            : "border-[#c9a882] text-[#8b5d3b] hover:bg-[#c9a882]/10"
        }`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
