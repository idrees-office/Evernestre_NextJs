'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from "next/link";
import { Bath, BedDouble, Heart, Home, MessageCircle, Phone, Ruler, Share2, Search, Filter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import Image from "next/image";
import { BASE_URL } from '@/lib/config';
import LuxuryLoader from '@/app/components/LuxuryLoader';
import { useTranslations, useLocale } from "next-intl";

interface Project {
  slug: string;
  price : string;
  banner: string;
  title: string;
  location_name: string;
  developer: string;
  size: string;
  status?: string;

}

interface PaginationData {
  current_page: number;
  data: Project[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<{
    url: string | null;
    label: string;
    active: boolean;
  }>;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}

type Currency = "AED" | "USD" | "EUR";

const FX: Record<Currency, number> = {
  AED: 1,
  USD: 0.272294,
  EUR: 0.249,
};

const CURRENCIES = ["AED", "USD", "EUR"] as const;

function formatMoney(amount: string, currency: Currency) {
  if (!amount) return "Price on Request";

  const clean = amount.toString().trim();

  // ✅ if backend sends sqft format by mistake
  if (/sq\.?ft/i.test(clean)) return "Price on Request";

  // ✅ if backend sends N/A or request
  if (/n\/a|request/i.test(clean)) return "Price on Request";

  // ✅ extract first number (works with commas)
  const match = clean.match(/[\d,.]+/);
  if (!match) return "Price on Request";

  const numeric = parseFloat(match[0].replace(/,/g, ""));
  if (isNaN(numeric)) return "Price on Request";

  const converted = numeric * FX[currency];

  const symbol = currency === "AED" ? "AED " : currency === "USD" ? "$" : "€";

  const formatted = converted.toLocaleString("en-US", {
    maximumFractionDigits: 0,
  });

  return `${symbol}${formatted}`;
}

function SearchBarContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Record<string, string | null>>({});
  const [properties, setProperties] = useState<Project[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState<Currency>("AED");
  const [currentPage, setCurrentPage] = useState(1);
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const params = {
      buyRent: searchParams.get('buyRent'),
      status: searchParams.get('status'),
      propertyType: searchParams.get('propertyType'),
      minArea: searchParams.get('minArea'),
      maxArea: searchParams.get('maxArea'),
      minBedroom: searchParams.get('minBedroom'),
      maxBedroom: searchParams.get('maxBedroom'),
      maxPrice: searchParams.get('maxPrice'),
      location: searchParams.get('location'),
      page: currentPage.toString(), // Add page parameter
    };
    setFilters(params);
    fetchProperties(params);
  }, [searchParams, currentPage]);

  const fetchProperties = async (filters: Record<string, string | null>) => {
    try {
      setLoading(true);
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value != null && value !== '')
      );
      
      const queryString = new URLSearchParams(cleanFilters as Record<string, string>).toString();
      const response = await fetch(`${BASE_URL}/search_property?${queryString}`);
      const data = await response.json();
      
      if (data.success && data.data) {
        setProperties(data.data.data || []);
        setPagination(data.data);
      } else {
        setProperties([]);
        setPagination(null);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
      setProperties([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    if (page < 1 || (pagination && page > pagination.last_page)) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pricedProperties = properties?.map((p) => ({
    ...p,
    displayPrice: formatMoney(p.price
, currency),
  }));

  const hasActiveFilters = Object.entries(filters).some(
    ([key, value]) => key !== 'page' && value != null && value !== ''
  );

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    if (!pagination) return [];
    
    const current = pagination.current_page;
    const last = pagination.last_page;
    const delta = 2;
    const range = [];
    const rangeWithDots: (string | number)[] = [];
    let l: number;

    for (let i = 1; i <= last; i++) {
      if (i === 1 || i === last || (i >= current - delta && i <= current + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen bg-[#faf8f6]">
    
      <div className="bg-gradient-to-r from-[#d0845b]/10 to-[#c9a882]/10 py-8 md:py-12">
        <div className="container mx-auto max-w-8xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#8b5d3b]">
                Property Search Results
              </h1>
              <p className="text-sm text-[#1a1a1a]/70 mt-2">
                Find your perfect property with our advanced search
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              {CURRENCIES.map((c) => {
                const active = currency === c;
                return (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    aria-pressed={!!active}
                    className={[
                      "h-9 px-4 rounded-full text-sm transition-all cursor-pointer",
                      active 
                        ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] text-white shadow" 
                        : "border border-[#d0845b]/50 text-[#8b5d3b] hover:bg-[#d0845b]/10"
                    ].join(" ")}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Filters Summary */}
      <div className="container mx-auto max-w-8xl px-6 md:px-10 py-6">
        <div className="bg-white rounded-lg shadow-sm border border-[#d0845b]/10 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-[#8b5d3b]" />
              <h2 className="text-lg font-medium text-gray-900">Applied Filters</h2>
            </div>
            {hasActiveFilters && (
              <span className="text-sm text-[#8b5d3b] bg-[#d0845b]/10 px-3 py-1 rounded-full">
                {Object.entries(filters).filter(([key, value]) => key !== 'page' && value != null && value !== '').length} filters
              </span>
            )}
          </div>
          
          {hasActiveFilters ? (
            <div className="flex flex-wrap gap-3">
              {Object.entries(filters).map(([key, value]) => (
                key !== 'page' && value ? (
                  <div key={key} className="flex items-center gap-2 bg-[#faf8f6] px-4 py-2 rounded-full border border-[#d0845b]/20">
                    <span className="text-sm font-medium text-[#8b5d3b] capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}:
                    </span>
                    <span className="text-sm text-gray-700">{String(value)}</span>
                  </div>
                ) : null
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No filters applied. Showing all available properties.</p>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="container mx-auto max-w-8xl px-6 md:px-10 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-[#8b5d3b]">
              {pagination ? `${pagination.from}-${pagination.to}` : '0-0'}
            </span> of <span className="font-semibold text-[#8b5d3b]">
              {pagination?.total || 0}
            </span> properties
          </p>
          
          {pagination && pagination.total > 0 && (
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Page {pagination.current_page} of {pagination.last_page}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto max-w-8xl px-6 md:px-8 pb-8">
        {loading ? (
            <LuxuryLoader/>
        ) : pricedProperties && pricedProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pricedProperties.map((p) => (
                <div 
                  key={p.slug} 
                  className="group relative overflow-hidden rounded-lg border border-[#d0845b]/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                >
                  <Link href={`/${locale}/project/${p.slug}.html`}>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={p.banner || "https://test_backend.leadshub.ae/media/7044/Untitled-2.webp"}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 shadow-lg">
                        <div className="text-sm font-normal text-[#c2754e]">
                          {p.displayPrice}
                        </div>
                      </div>
                      {p.status && (
                        <div className="absolute top-4 right-4 rounded-full bg-[#8b5d3b] px-3 py-1 shadow-lg">
                          <div className="text-xs font-medium text-white">
                            {p.status}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-md font-normal text-[#1a1a1a]/90 line-clamp-1">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#1a1a1a]/70">
                        {p.location_name || "Dubai"}
                      </p>

                      <div className="grid grid-cols-2 gap-3 text-sm text-[#1a1a1a] mt-3">
                        <div className="flex items-center">
                          <Home className="h-4 w-4 text-[#8b5d3b] mr-2" />
                          <span className="truncate">{p.size}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-5 w-5 text-[#8b5d3b] mr-2" />
                          <span>{p.developer || "—"}</span>
                        </div>
                       
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between border-t border-[#d0845b]/10 pt-3">
                        <div className="flex items-center gap-2">
                          <button 
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = `tel:+971XXXXXXXXXX`;
                            }}
                          >
                            <Phone className="h-3.5 w-3.5" />
                          </button>
                          <button 
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              window.location.href = 'https://wa.me/971XXXXXXXXXX';
                            }}
                          >
                            <MessageCircle className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button 
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              // Handle favorite
                            }}
                          >
                            <Heart className="h-3.5 w-3.5" />
                          </button>
                          <button 
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors"
                            onClick={(e) => {
                              e.preventDefault();
                              // Handle share
                            }}
                          >
                            <Share2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.last_page > 1 && (
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-600">
                  Showing {pagination.from}-{pagination.to} of {pagination.total} results
                </div>
                
                <div className="flex items-center gap-2">
                  {/* First Page Button */}
                  <button
                    onClick={() => handlePageChange(1)}
                    disabled={pagination.current_page === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0845b]/30 text-[#8b5d3b] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d0845b]/10 transition-colors cursor-pointer"
                    aria-label="First page"
                  >
                    <ChevronsLeft className="h-4 w-4" />
                  </button>

                  {/* Previous Page Button */}
                  <button
                    onClick={() => handlePageChange(pagination.current_page - 1)}
                    disabled={!pagination.prev_page_url}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0845b]/30 text-[#8b5d3b] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d0845b]/10 transition-colors cursor-pointer"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  {/* Page Numbers */}
                  <div className="flex items-center gap-1">
                    {getPageNumbers().map((pageNum, index) => (
                      pageNum === '...' ? (
                        <span key={`dots-${index}`} className="px-2 text-gray-400">
                          ...
                        </span>
                      ) : (
                        <button
                          key={`page-${pageNum}`}
                          onClick={() => handlePageChange(Number(pageNum))}
                          className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors cursor-pointer ${
                            pagination.current_page === pageNum
                              ? 'border-[#d0845b] bg-gradient-to-r from-[#d0845b] to-[#c9a882] text-white shadow cursor-pointer'
                              : 'border-[#d0845b]/30 text-[#8b5d3b] hover:bg-[#d0845b]/10 cursor-pointer'
                          }`}
                          aria-label={`Page ${pageNum}`}
                          aria-current={pagination.current_page === pageNum ? 'page' : undefined}
                        >
                          {pageNum}
                        </button>
                      )
                    ))}
                  </div>

                  {/* Next Page Button */}
                  <button
                    onClick={() => handlePageChange(pagination.current_page + 1)}
                    disabled={!pagination.next_page_url}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0845b]/30 text-[#8b5d3b] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d0845b]/10 transition-colors"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* Last Page Button */}
                  <button
                    onClick={() => handlePageChange(pagination.last_page)}
                    disabled={pagination.current_page === pagination.last_page}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d0845b]/30 text-[#8b5d3b] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d0845b]/10 transition-colors"
                    aria-label="Last page"
                  >
                    <ChevronsRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-[#d0845b]/10 to-[#c9a882]/10 rounded-full flex items-center justify-center mb-6">
              <Search className="h-12 w-12 text-[#8b5d3b]" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-3">No properties found</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We couldn&apos;t find any properties matching your search criteria. Try adjusting your filters or search again.
            </p>
            <button
              onClick={() => window.history.back()}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-[#d0845b] to-[#c9a882] text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              Adjust Search Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function MainSearchBar() {
  return (
    <Suspense fallback={
      // <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      //   <div className="text-center">
      //     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a882] mx-auto"></div>
      //     <p className="mt-4 text-gray-600">Loading search results...</p>
      //   </div>
      // </div>

      <LuxuryLoader/>

    }>
      <SearchBarContent />
    </Suspense>
  );
}