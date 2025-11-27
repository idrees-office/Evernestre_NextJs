'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function SearchBarContent() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Record<string, string | null>>({});
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
      const cleanFilters = Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => value != null)
      );
      const queryString = new URLSearchParams(cleanFilters as Record<string, string>).toString();
      const response = await fetch(`/api/properties?${queryString}`);
      const properties = await response.json();
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Property Search Results</h1>
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Applied Filters:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(filters).map(([key, value]) => (
              value ? (
                <div key={key} className="bg-gray-100 rounded-lg p-3">
                  <span className="font-medium capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                  </span>
                  <span className="ml-2 text-gray-700">{String(value)}</span>
                </div>
              ) : null
            ))}
          </div>
          {Object.values(filters).every(val => !val) && (
            <p className="text-gray-500">No filters applied. Showing all properties.</p>
          )}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Properties</h2>
          <p className="text-gray-600">
            Property listings filtered by your search criteria will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MainSearchBar() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading search results...</p>
        </div>
      </div>
    }>
      <SearchBarContent />
    </Suspense>
  );
}