'use client';

import React from 'react';
import Header from '../includes/header';
import Link from 'next/link';
import RegisterCtaSection from '../Components/RegisterCtaSection';
import SocialLinksSection from '../Components/SocialLinksSection';
import { motion } from "framer-motion";

type DEVELOLPER = {
  name: string;
  slug: string;
  image: string;
};

const DEVELOPERS = [
  {
    name: "Danube Properties",
    slug: "danube-properties",
    image: "https://test_backend.leadshub.ae/media/6951/danube.jpg",
  },
  {
    name: "Meraas",
    slug: "meraas",
    image: "https://test_backend.leadshub.ae/media/6950/meraas.jpg",
  },
  {
    name: "Nakheel",
    slug: "nakheel",
    image: "https://test_backend.leadshub.ae/media/6949/nakheel.jpg",
  },
  {
    name: "Damac Properties",
    slug: "damac-properties",
    image: "https://test_backend.leadshub.ae/media/6944/damac.jpg",
  },
  {
    name: "Emaar Properties",
    slug: "emaar-properties",
    image: "https://test_backend.leadshub.ae/media/6945/emaar.jpg",
  },
  {
    name: "Aldar Properties",
    slug: "aldar-properties",
    image: "https://test_backend.leadshub.ae/media/6946/Aldar.jpg",
  },
  {
    name: "Binghatti Developers",
    slug: "binghatti-developers",
    image: "https://test_backend.leadshub.ae/media/6947/Binghtti.jpg",
  },
  {
    name: "Arada Developers",
    slug: "arada-developers",
    image: "https://test_backend.leadshub.ae/media/6948/arada.jpg",
  },
];


export default function DeveloperPage() {
  return (
    <>
      <Header />

    {/* Hero Section */}
    <section className="bg-[#f6ecdf] py-10">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-3xl font-normal text-gray-900 mb-4">
            Popular Developers for Real Estate in Dubai
            </h2>
            <div className="mx-auto h-[3px] w-24 bg-[color:var(--brand)] rounded"></div>
        </div>
    </section>

    {/* Developers Grid */}
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-10">
        {/* Title */}
        <div className="mb-14 text-center">
          <h2 className="text-[36px] md:text-[44px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8b5d3b] via-[#d4a373] to-[#f6d8a4] drop-shadow-md">
            Explore Top Communities
          </h2>
          <p className="text-[#3c2f26]/80 text-base mt-3 max-w-2xl mx-auto">
            Step into Dubai’s most vibrant developments — where elegance, 
            architecture, and lifestyle blend in timeless luxury.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
        <motion.form
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="flex items-center w-full max-w-4xl bg-white rounded-xl shadow-[0_0_25px_rgba(139,93,59,0.25)] ring-1 ring-[#d4a373]/40 overflow-hidden"
        >
            <input
            type="text"
            placeholder="Search Developers..."
            className="flex-1 px-6 py-3 text-[15px] focus:outline-none text-[#3c2f26] placeholder-[#8b5d3b]/70 bg-[#fffaf5] shadow-inner shadow-[0_0_15px_rgba(139,93,59,0.2)]"
            />

            <motion.button
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(139,93,59,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            type="submit"
            className="bg-gradient-to-r from-[#8b5d3b] via-[#b06c48] to-[#d4a373] hover:opacity-95 flex items-center justify-center px-6 py-3 text-white font-semibold text-sm shadow-[0_8px_25px_rgba(139,93,59,0.35)] transition-all duration-300 rounded-r-xl"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.15-4.65A7 7 0 1110 3a7 7 0 018 8z"
                />
            </svg>
            </motion.button>
        </motion.form>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {DEVELOPERS.map((developer, i) => (
            <motion.div
                key={developer.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{
                scale: 1.08,
                rotateZ: 1,
                boxShadow: "0px 25px 60px rgba(139, 93, 59, 0.45)", // elegant brown glow
                }}
                className="group"
            >
                <Link href={`/developer-guide/${developer.slug}`} className="block">
                <div className="relative overflow-hidden bg-gradient-to-tr from-[#8b5d3b] via-[#d4a373] to-[#f6d8a4] p-[2px] transition-all duration-700 hover:scale-[1.03] shadow-[0_15px_40px_rgba(139,93,59,0.35)] rounded-xl">
                    <div className="bg-white overflow-hidden relative rounded-xl">
                    <motion.div
                        className="flex `items-center justify-center h-[300px] w-full bg-white overflow-hidden"
                        whileHover={{ rotate: 0.5 }}
                    >
                        <img
                        src={developer.image}
                        alt={developer.name}
                        className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                        draggable={false}
                        />
                    </motion.div>

                    {/* Golden overlay shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8b5d3b]/60 via-transparent to-[#f6d8a4]/40 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500"></div>

                    {/* Name */}
                    <div className="absolute bottom-6 left-0 right-0 text-center">
                        <p className="text-black text-[20px] font-bold uppercase tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] group-hover:text-white transition-all duration-300">
                        {developer.name}
                        </p>
                        <div className="mt-1 mx-auto h-[3px] w-12 bg-gradient-to-r from-[#d4a373] to-[#f6d8a4] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    </div>
                </div>
                </Link>
            </motion.div>
            ))}

        </div>
      </div>
    </section>

    <SocialLinksSection/>
    <RegisterCtaSection/>
    </>
  );
}
