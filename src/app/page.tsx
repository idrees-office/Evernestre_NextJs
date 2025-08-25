"use client";
import { Fragment , useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const slides = [
    {
      image: "/assets/header.png",
      title: "Mansory Residences",
      subtitle: "1–3 Bedrooms Apartments",
      price: "AED 2.2M",
      plan: "70/30 Payment Plan",
    },
    {
      image: "/assets/header-bg.webp",
      title: "Palm Views Villas",
      subtitle: "4–6 Bedroom Luxury Villas",
      price: "AED 6.5M",
      plan: "60/40 Payment Plan",
    },
  ];

  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  return (
    <main>
      <div className="relative w-full h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0" }`}>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/40 flex items-start">
              <div className="container mx-auto py-40 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    {slide.price}
                  </h2>
                  <p className="text-gray-200">{slide.plan}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="cursor-pointer absolute top-1/2 left-6 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg text-gray-800 p-3 rounded-full transition-all">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <button onClick={nextSlide} className="cursor-pointer absolute top-1/2 right-6 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg text-gray-800 p-3 rounded-full transition-all">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
        <div className="w-full flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm font-medium">Filters</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5 lg:w-3/4 bg-white rounded-2xl shadow-lg p-4">
      <div className="flex flex-col md:flex-row gap-4 items-center mb-2">
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            has-[option:checked:not([value=''])]:border-gray-300">
          <option value="">Buy / Rent</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            has-[option:checked:not([value=''])]:border-gray-300">
          <option value="">Status</option>
          <option value="ready">Ready</option>
          <option value="completion">Completion</option>
        </select>
        <input type="text" placeholder="Location" className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            has-[option:checked:not([value=''])]:border-gray-300"/>
        <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">
          Find
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-2 items-center">
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            has-[option:checked:not([value=''])]:border-gray-300">
          <option value="">Property Type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="townhouse">Townhouse</option>
        </select>
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            has-[option:checked:not([value=''])]:border-gray-300">
          <option value="">Min Area</option>
          <option value="50">50 m²</option>
          <option value="100">100 m²</option>
          <option value="150">150 m²</option>
        </select>
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            has-[option:checked:not([value=''])]:border-gray-300">
          <option value="">Max Area</option>
          <option value="100">100 m²</option>
          <option value="200">200 m²</option>
          <option value="300">300 m²</option>
        </select>
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            text-gray-400 has-[option:checked:not([value=''])]:text-gray-900">
          <option className="text-gray-400" value="">Min Bedroom</option>
          <option className="text-gray-400" value="1">1</option>
          <option className="text-gray-400" value="2">2</option>
          <option className="text-gray-400" value="3">3</option>
        </select>
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            text-gray-400 has-[option:checked:not([value=''])]:text-gray-900">
          <option className="text-gray-400" value="">Max Bedroom</option>
          <option className="text-gray-400" value="3">3</option>
          <option className="text-gray-400" value="4">4</option>
          <option className="text-gray-400" value="5">5</option>
        </select>
        <select className="w-full md:flex-1 px-2 py-2 bg-gray-50 border border-gray-300 focus:outline-none 
            text-gray-400 has-[option:checked:not([value=''])]:text-gray-900">
          <option value="" className="text-gray-400">Max Price</option>
          <option className="text-gray-400" value="2000000">AED 2M</option>
          <option className="text-gray-400" value="5000000">AED 5M</option>
          <option className="text-gray-400" value="10000000">AED 10M</option>
        </select>
        </div>
       </div>
      </div>
    </main>
  );
}


