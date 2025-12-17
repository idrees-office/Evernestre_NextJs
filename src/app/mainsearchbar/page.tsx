'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import Link from "next/link";
import { Bath, BedDouble, Heart, Home, MessageCircle, Phone, Ruler, Share2, Search, Filter } from "lucide-react";
import Image from "next/image";
import { BASE_URL } from '@/lib/config';

interface Project {
  slug: string;
  starting_price: string;
  banner: string;
  title: string;
  location_name: string;
  type: string;
  bedrooms_raw: string;
  bathrooms: string;
  starting_size: string;
  status?: string;
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

  // Extract numbers including decimals
  const numeric = parseFloat(amount.replace(/[^\d.]/g, ""));
  if (isNaN(numeric)) return "Price on Request";

  const converted = numeric * FX[currency];
  const symbol = currency === "AED" ? "AED " : currency === "USD" ? "USD " : "EUR ";

  // Format to show up to 2 decimal places only if needed
  const formatted = converted.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  });

  return `${symbol}${formatted}`;
}

function SearchBarContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Record<string, string | null>>({});
  const [properties, setProperties] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState<Currency>("AED");

  useEffect(() => {
    const params = {
      buyRent      : searchParams.get('buyRent'),
      status       : searchParams.get('status'),
      propertyType : searchParams.get('propertyType'),
      minArea      : searchParams.get('minArea'),
      maxArea      : searchParams.get('maxArea'),
      minBedroom   : searchParams.get('minBedroom'),
      maxBedroom   : searchParams.get('maxBedroom'),
      maxPrice     : searchParams.get('maxPrice'),
      location     : searchParams.get('location'),
    };
    setFilters(params);
    fetchProperties(params);
  }, [searchParams]);

  const fetchProperties = async (filters: Record<string, string | null>) => {
    try {
      setLoading(true);
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value != null)
      );
      const queryString = new URLSearchParams(cleanFilters as Record<string, string>).toString();
      const response = await fetch(`${BASE_URL}/search_property?${queryString}`);
      const data = await response.json();
      setProperties(data || []);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setProperties([]);
    } finally {
      setLoading(false);
    }
  };

  const pricedProperties = properties?.map((p) => ({
    ...p,
    displayPrice: formatMoney(p.starting_price, currency),
  }));

  const hasActiveFilters = Object.values(filters).some(val => val != null && val !== '');

  return (
    <div className="min-h-screen bg-[#faf8f6]">
      {/* Header Section */}
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
                {Object.values(filters).filter(val => val != null && val !== '').length} filters
              </span>
            )}
          </div>
          
          {hasActiveFilters ? (
            <div className="flex flex-wrap gap-3">
              {Object.entries(filters).map(([key, value]) => (
                value ? (
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
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Found <span className="font-semibold text-[#8b5d3b]">{pricedProperties?.length || 0}</span> properties
          </p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="container mx-auto max-w-8xl px-6 md:px-8 pb-16">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a882] mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading properties...</p>
            </div>
          </div>
        ) : pricedProperties && pricedProperties.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pricedProperties.map((p) => (
              <div 
                key={p.slug} 
                className="group relative overflow-hidden rounded-lg border border-[#d0845b]/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
              >
                <Link href={`/project/${p.slug}.html`}>
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
                        <span className="truncate">{p.type}</span>
                      </div>
                      <div className="flex items-center">
                        <BedDouble className="h-5 w-5 text-[#8b5d3b] mr-2" />
                        <span>{p.bedrooms_raw || "Studio"}</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-5 w-5 text-[#8b5d3b] mr-2" />
                        <span>{p.bathrooms || "—"}</span>
                      </div>
                      <div className="flex items-center">
                        <Ruler className="h-5 w-5 text-[#8b5d3b] mr-2" />
                        <span>{p.starting_size || "Various Sizes"}</span>
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a882] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchBarContent />
    </Suspense>
  );
}