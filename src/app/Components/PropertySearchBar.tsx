import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Check, Search, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type DropdownName = | "buyRent" | "status" | "propertyType" | "minArea" | "maxArea" | "minBedroom" | "maxBedroom" | "maxPrice";

interface FiltersState {
  buyRent: string;
  status: string;
  propertyType: string;
  minArea: string;
  maxArea: string;
  minBedroom: string;
  maxBedroom: string;
  maxPrice: string;
  location: string;
}

export default function PropertySearchBar() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownName | null>(
    null
  );
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const router = useRouter();

  const dropdownOptions = {
    buyRent      : ["Buy", "Rent"],
    status       : ["Ready", "Off Plan"],
    propertyType : ["Apartment", "Villa", "Townhouse", "Penthouse", "Duplex"],
    minArea      : ["50 m²", "100 m²", "150 m²", "200 m²", "300 m²"],
    maxArea      : ["200 m²", "300 m²", "400 m²", "500 m²", "1000 m²"],
    minBedroom   : ["Studio", "1", "2", "3", "4", "5+"],
    maxBedroom   : ["1", "2", "3", "4", "5", "6+"],
    maxPrice     : ["AED 1M", "AED 2M", "AED 5M", "AED 10M", "AED 20M", "AED 50M+"],
  } as const;

  const [filters, setFilters] = useState<FiltersState>({
    buyRent: "",
    status: "",
    propertyType: "",
    minArea: "",
    maxArea: "",
    minBedroom: "",
    maxBedroom: "",
    maxPrice: "",
    location: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      if (!activeDropdown) return;
      const refEl = dropdownRefs.current[activeDropdown];
      if (refEl && !refEl.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown, isMounted]);

  const toggleDropdown = (name: DropdownName) => {
    if (!isMounted) return;
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  function handleFilterChange<K extends keyof FiltersState>(
    filterName: K,
    value: FiltersState[K]
  ) {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  }

  interface CustomDropdownProps {
    name: DropdownName;
    placeholder?: string;
    options: readonly string[];
    selected?: string;
    onSelect: (value: string) => void;
  }

  const CustomDropdown: React.FC<CustomDropdownProps> = ({
    name,
    placeholder,
    options,
    selected,
    onSelect,
  }) => {
    return (
      <div
        className="relative"
        ref={(el) => {
          dropdownRefs.current[name] = el;
        }}
      >
        <button
          type="button"
          className={`cursor-pointer w-full px-5 py-2 bg-white/95 backdrop-blur-sm border border-white/20 rounded-sm text-left flex items-center justify-between transition-all duration-300 hover:border-[#d0845b]/30 hover:bg-white focus:outline-none group ${
            activeDropdown === name ? "border-[#d0845b] bg-white shadow-lg" : ""
          }`}
          onClick={() => toggleDropdown(name)}
        >
          <span
            className={`text-sm font-light tracking-wide ${
              selected ? "text-[#1a1a1a]" : "text-[#1a1a1a]/50"
            }`}
          >
            {selected || placeholder}
          </span>
          <ChevronDown
            className={`h-4 w-4 text-[#1a1a1a]/40 transition-all duration-300 group-hover:text-[#d0845b] ${
              activeDropdown === name ? "rotate-180 text-[#d0845b]" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isMounted && activeDropdown === name && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-[100] mt-2 w-full bg-white border border-[#1a1a1a]/10 rounded-xl shadow-2xl"
            >
              <div className="max-h-64 overflow-y-auto">
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="px-5 py-2 cursor-pointer hover:bg-[#faf8f6] transition-all duration-200 flex items-center justify-between group border-b border-[#1a1a1a]/5 last:border-0"
                    onClick={() => {
                      onSelect(option);
                      setActiveDropdown(null);
                    }}
                  >
                    <span className="text-sm text-[#1a1a1a]/80 group-hover:text-[#d0845b] font-light tracking-wide transition-colors duration-200">
                      {option}
                    </span>
                    {selected === option && (
                      <Check className="h-4 w-4 text-[#d0845b]" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const handleSearch = () => {
    const query = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) query.append(key, value);
    });
    router.push(`/mainsearchbar?${query.toString()}`);
  };

  if (!isMounted) {
    return (
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 w-[68%] z-[90]">
        <div className="bg-white/95 backdrop-blur-2xl shadow-2xl rounded-sm border-white/40">
          <div className="p-4 md:p-4">
            <div className="flex flex-col lg:flex-row gap-4 mb-2">
              <div className="w-full lg:w-44">
                <div className="w-full px-5 py-2 bg-white/95 border border-white/20 rounded-sm text-left flex items-center justify-between">
                  <span
                    className={`text-sm font-light tracking-wide ${
                      filters.buyRent ? "text-[#1a1a1a]" : "text-[#1a1a1a]/50"
                    }`}
                  >
                    {filters.buyRent || "Buy / Rent"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1a1a1a]/40" />
                </div>
              </div>
              <div className="w-full lg:w-44">
                <div className="w-full px-5 py-2 bg-white/95 border border-white/20 rounded-sm text-left flex items-center justify-between">
                  <span
                    className={`text-sm font-light tracking-wide ${
                      filters.status ? "text-[#1a1a1a]" : "text-[#1a1a1a]/50"
                    }`}
                  >
                    {filters.status || "Status"}
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1a1a1a]/40" />
                </div>
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1a1a1a]/30" />
                <input
                  type="text"
                  placeholder="Enter location or project name"
                  value={filters.location}
                  readOnly
                  className="w-full pl-14 pr-5 py-2 bg-white/95 border border-white/20 rounded-sm text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 placeholder:font-light tracking-wide"
                />
              </div>
              <button 
                onClick={handleSearch}
                className="cursor-pointer w-full lg:w-auto px-10 py-2 bg-gradient-to-r from-[#d0845b] to-[#c97a52] text-white rounded-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] group tracking-wider font-normal"
              >
                <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300 font-normal" />
                <span className="font-normal">Search Properties</span>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {[
                { placeholder: "Property Type", value: filters.propertyType },
                { placeholder: "Min Area", value: filters.minArea },
                { placeholder: "Max Area", value: filters.maxArea },
                { placeholder: "Min Bedroom", value: filters.minBedroom },
                { placeholder: "Max Bedroom", value: filters.maxBedroom },
                { placeholder: "Max Price", value: filters.maxPrice },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-full px-5 py-2 bg-white/95 border border-white/20 rounded-sm text-left flex items-center justify-between"
                >
                  <span
                    className={`text-sm font-light tracking-wide ${
                      item.value ? "text-[#1a1a1a]" : "text-[#1a1a1a]/50"
                    }`}
                  >
                    {item.value || item.placeholder}
                  </span>
                  <ChevronDown className="h-4 w-4 text-[#1a1a1a]/40" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="hidden md:block absolute bottom-1 left-1/2 -translate-x-1/2 w-[68%] z-[90]"
    >
      <div className="bg-white/95 backdrop-blur-2xl shadow-2xl rounded-sm border-white/40">
        <div className="p-4 md:p-4">
          {/* Main Search Row */}
          <div className="flex flex-col lg:flex-row gap-4 mb-2">
            <div className="w-full lg:w-44">
              <CustomDropdown
                name="buyRent"
                placeholder="Buy / Rent"
                options={dropdownOptions.buyRent}
                selected={filters.buyRent}
                onSelect={(value) => handleFilterChange("buyRent", value)}
              />
            </div>

            <div className="w-full lg:w-44">
              <CustomDropdown
                name="status"
                placeholder="Status"
                options={dropdownOptions.status}
                selected={filters.status}
                onSelect={(value) => handleFilterChange("status", value)}
              />
            </div>

            <div className="flex-1 relative">
              <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#1a1a1a]/30" />
              <input
                type="text"
                placeholder="Enter location or project name"
                value={filters.location}
                onChange={(e) => handleFilterChange("location", e.target.value)}
                className="cursor-pointer w-full pl-14 pr-5 py-2 bg-white/95 backdrop-blur-sm border border-white/20 rounded-sm focus:outline-none focus:border-[#d0845b] focus:bg-white transition-all duration-300 text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a]/40 placeholder:font-light tracking-wide"
              />
            </div>
            <button 
              onClick={handleSearch}
              className="cursor-pointer w-full lg:w-auto px-10 py-2 bg-gradient-to-r from-[#d0845b] to-[#c97a52] text-white rounded-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] group tracking-wider font-normal"
            >
              <Search className="h-5 w-5 group-hover:scale-110 transition-transform duration-300 font-normal" />
              <span className="font-normal">Search Properties</span>
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            <CustomDropdown
              name="propertyType"
              placeholder="Property Type"
              options={dropdownOptions.propertyType}
              selected={filters.propertyType}
              onSelect={(value) => handleFilterChange("propertyType", value)}
            />
            <CustomDropdown
              name="minArea"
              placeholder="Min Area"
              options={dropdownOptions.minArea}
              selected={filters.minArea}
              onSelect={(value) => handleFilterChange("minArea", value)}
            />
            <CustomDropdown
              name="maxArea"
              placeholder="Max Area"
              options={dropdownOptions.maxArea}
              selected={filters.maxArea}
              onSelect={(value) => handleFilterChange("maxArea", value)}
            />

            <CustomDropdown
              name="minBedroom"
              placeholder="Min Bedroom"
              options={dropdownOptions.minBedroom}
              selected={filters.minBedroom}
              onSelect={(value) => handleFilterChange("minBedroom", value)}
            />

            <CustomDropdown
              name="maxBedroom"
              placeholder="Max Bedroom"
              options={dropdownOptions.maxBedroom}
              selected={filters.maxBedroom}
              onSelect={(value) => handleFilterChange("maxBedroom", value)}
            />

            <CustomDropdown
              name="maxPrice"
              placeholder="Max Price"
              options={dropdownOptions.maxPrice}
              selected={filters.maxPrice}
              onSelect={(value) => handleFilterChange("maxPrice", value)}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}