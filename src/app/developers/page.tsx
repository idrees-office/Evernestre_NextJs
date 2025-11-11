// "use client";

// import React from "react";
// import Header from "../includes/header";
// import Link from "next/link";
// import RegisterCtaSection from "../Components/RegisterCtaSection";
// import SocialLinksSection from "../Components/SocialLinksSection";
// import { motion } from "framer-motion";

// type DEVELOLPER = {
//   name: string;
//   slug: string;
//   image: string;
// };

// const DEVELOPERS = [
//   {
//     name: "Danube Properties",
//     slug: "danube-properties",
//     image: "https://test_backend.leadshub.ae/media/6951/danube.jpg",
//   },
//   {
//     name: "Meraas",
//     slug: "meraas",
//     image: "https://test_backend.leadshub.ae/media/6950/meraas.jpg",
//   },
//   {
//     name: "Nakheel",
//     slug: "nakheel",
//     image: "https://test_backend.leadshub.ae/media/6949/nakheel.jpg",
//   },
//   {
//     name: "Damac Properties",
//     slug: "damac-properties",
//     image: "https://test_backend.leadshub.ae/media/6944/damac.jpg",
//   },
//   {
//     name: "Emaar Properties",
//     slug: "emaar-properties",
//     image: "https://test_backend.leadshub.ae/media/6945/emaar.jpg",
//   },
//   {
//     name: "Aldar Properties",
//     slug: "aldar-properties",
//     image: "https://test_backend.leadshub.ae/media/6946/Aldar.jpg",
//   },
//   {
//     name: "Binghatti Developers",
//     slug: "binghatti-developers",
//     image: "https://test_backend.leadshub.ae/media/6947/Binghtti.jpg",
//   },
//   {
//     name: "Arada Developers",
//     slug: "arada-developers",
//     image: "https://test_backend.leadshub.ae/media/6948/arada.jpg",
//   },
// ];

// export default function DeveloperPage() {
//   return (
//     <>
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-[#f6ecdf] py-10">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-3xl font-normal text-gray-900 mb-4">
//             Popular Developers for Real Estate in Dubai
//           </h2>
//           <div className="mx-auto h-[3px] w-24 bg-[color:var(--brand)] rounded"></div>
//         </div>
//       </section>

//       <section className="bg-[#ffffff] py-10 md:py-12">
//         <div className="container mx-auto px-6 md:px-10">
//           <div className="mb-10 text-center">
//             <h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-normal tracking-tight text-[#8b5d3b]">
//               Explore Top Communities
//             </h2>
//             <p className="text-[#1a1a1a]/70 text-sm max-w-2xl mx-auto">
//               Discover Dubai’s most desirable neighborhoods — from luxury
//               waterfront living. from luxury waterfront living.
//             </p>
//           </div>

//           <div className="flex justify-center mb-12">
//             <motion.form
//               whileHover={{ scale: 1.02 }}
//               transition={{ type: "spring", stiffness: 150 }}
//               className="flex items-center w-full max-w-4xl bg-white rounded-xl shadow-[0_0_25px_rgba(139,93,59,0.25)] ring-1 ring-[#d4a373]/40 overflow-hidden"
//             >
//               <input
//                 type="text"
//                 placeholder="Search Developers..."
//                 className="flex-1 px-6 py-3 text-[15px] focus:outline-none text-[#3c2f26] placeholder-[#8b5d3b]/70 bg-[#fffaf5] shadow-inner shadow-[0_0_15px_rgba(139,93,59,0.2)]"
//               />

//               <motion.button
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0px 10px 25px rgba(139,93,59,0.5)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 type="submit"
//                 className="bg-gradient-to-r from-[#8b5d3b] via-[#b06c48] to-[#d4a373] hover:opacity-95 flex items-center justify-center px-6 py-3 text-white font-semibold text-sm shadow-[0_8px_25px_rgba(139,93,59,0.35)] transition-all duration-300 rounded-r-xl"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 21l-4.35-4.35m1.15-4.65A7 7 0 1110 3a7 7 0 018 8z"
//                   />
//                 </svg>
//               </motion.button>
//             </motion.form>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
//             {DEVELOPERS.map((developer, i) => (
//               <motion.div
//                 key={developer.slug}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
//                 whileHover={{
//                   scale: 1.08,
//                   rotateZ: 1,
//                   boxShadow: "0px 25px 60px rgba(139, 93, 59, 0.45)", // elegant brown glow
//                 }}
//                 className="group"
//               >
//                 <Link
//                   href={`/developer-guide/${developer.slug}`}
//                   className="block"
//                 >
//                   <div className="relative overflow-hidden bg-gradient-to-tr from-[#8b5d3b] via-[#d4a373] to-[#f6d8a4] p-[2px] transition-all duration-700 hover:scale-[1.03] shadow-[0_15px_40px_rgba(139,93,59,0.35)] rounded-xl">
//                     <div className="bg-white overflow-hidden relative rounded-xl">
//                       <motion.div
//                         className="flex `items-center justify-center h-[300px] w-full bg-white overflow-hidden"
//                         whileHover={{ rotate: 0.5 }}
//                       >
//                         <img
//                           src={developer.image}
//                           alt={developer.name}
//                           className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
//                           draggable={false}
//                         />
//                       </motion.div>

//                       {/* Golden overlay shimmer */}
//                       <div className="absolute inset-0 bg-gradient-to-t from-[#8b5d3b]/60 via-transparent to-[#f6d8a4]/40 mix-blend-overlay group-hover:opacity-70 transition-opacity duration-500"></div>

//                       {/* Name */}
//                       <div className="absolute bottom-6 left-0 right-0 text-center">
//                         <p className="text-black text-[20px] font-bold uppercase tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] group-hover:text-white transition-all duration-300">
//                           {developer.name}
//                         </p>
//                         <div className="mt-1 mx-auto h-[3px] w-12 bg-gradient-to-r from-[#d4a373] to-[#f6d8a4] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <SocialLinksSection />
//       <RegisterCtaSection />
//     </>
//   );
// }

"use client";

import React from "react";
import Header from "../includes/header";
import Link from "next/link";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import SocialLinksSection from "../Components/SocialLinksSection";
import { motion } from "framer-motion";
import OffPlanProjects from "../Components/OffPlanProjects";

type DEVELOPER = {
  name: string;
  slug: string;
  image: string;
};

const DEVELOPERS: DEVELOPER[] = [
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
  const [query, setQuery] = React.useState("");
  const filteredDevelopers = DEVELOPERS.filter((dev) =>
    dev.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f6ecdf] py-12 relative overflow-hidden border-b border-[#f0e4d9]">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
            Popular Developers in Dubai
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 md:px-10">
          {/* Search Bar */}
          <div className="flex justify-center mb-10">
            <motion.form
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex items-center w-full max-w-2xl bg-white border border-[#d4a373]/40 rounded-full shadow-sm overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search developers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-5 h-11 text-[15px] bg-transparent text-[#3c2f26] placeholder-[#8b5d3b]/60 focus:outline-none"
              />

              <button
                type="submit"
                className="h-11 w-12 flex items-center justify-center bg-[#c97a52] text-white rounded-r-full hover:brightness-110 transition-all duration-300"
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
              </button>
            </motion.form>
          </div>

          {/* Developer Grid */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredDevelopers.map((developer) => (
              <motion.div
                key={developer.slug}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                  boxShadow: "0 12px 30px rgba(139,93,59,0.25)",
                }}
                transition={{ duration: 0.25 }}
                className="group bg-white border border-[#f0e4d9] rounded-xl overflow-hidden cursor-pointer"
              >
                <Link href={`/developer-guide/${developer.slug}`}>
                  <div className="relative h-[160px] flex items-center justify-center bg-[#fffaf5]">
                    <img
                      src={developer.image}
                      alt={developer.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-[16px] font-semibold text-[#3c2f26] group-hover:text-[#8b5d3b] transition-colors">
                      {developer.name}
                    </p>
                    <div className="mt-1 mx-auto h-[2px] w-10 bg-gradient-to-r from-[#d4a373] to-[#f6d8a4] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
      <OffPlanProjects />

      {/* <SocialLinksSection /> */}
      {/* <RegisterCtaSection /> */}
    </>
  );
}
