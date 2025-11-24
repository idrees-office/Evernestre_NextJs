// "use client";

// import React from "react";
// import Header from "../includes/header";
// // import Link from "next/link";
// // import RegisterCtaSection from "../Components/RegisterCtaSection";
// import SocialLinksSection from "../Components/SocialLinksSection";
// import Image from "next/image";

// const TEAM_MEMBERS = [
//   {
//     name: "Sarah Johnson",
//     role: "Founder & CEO",
//     image:
//       "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
//     experience: "15+ years in Dubai real estate",
//   },
//   {
//     name: "Ahmed Al Mansouri",
//     role: "Head of Sales",
//     image:
//       "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
//     experience: "12+ years in property investment",
//   },
//   {
//     name: "Emily Chen",
//     role: "Senior Property Consultant",
//     image:
//       "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
//     experience: "8+ years in market analysis",
//   },
//   {
//     name: "Marcus Rodriguez",
//     role: "Client Relations Director",
//     image:
//       "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
//     experience: "10+ years in customer service",
//   },
// ];

// const VALUES = [
//   {
//     title: "Trust & Transparency",
//     description:
//       "We believe in honest communication and building long-term relationships based on trust.",
//   },
//   {
//     title: "Expert Guidance",
//     description:
//       "Deep market knowledge to help you make informed real estate decisions.",
//   },
//   {
//     title: "Client First",
//     description:
//       "Your goals and aspirations are at the center of everything we do.",
//   },
//   {
//     title: "Innovation",
//     description:
//       "Leveraging technology to provide seamless real estate experiences.",
//   },
// ];

// export default function AboutUsPage() {
//   return (
//     <>
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-[#f6ecdf] py-10">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
//             Evernest Real Estate Journey
//           </h1>
//           <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
//             For over a decade, we have been helping clients navigate Dubai's
//             dynamic real estate market. Our commitment to excellence and deep
//             local expertise.
//           </p>
//         </div>
//       </section>

//       {/* Story Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6 md:px-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="relative">
//               <Image
//                 src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
//                 alt="Our office and team"
//                 className="rounded-lg shadow-2xl"
//               />
//             </div>
//             <div>
//               <h2 className="text-[32px] md:text-[36px] font-normal tracking-tight text-[#8b5d3b] mb-6">
//                 Our Story
//               </h2>
//               <div className="space-y-4 text-gray-700">
//                 <p>
//                   Founded in 2010, our journey began with a simple vision: to
//                   make Dubai's real estate market accessible and understandable
//                   for everyone. What started as a small team of passionate
//                   property experts has grown into a comprehensive real estate
//                   consultancy.
//                 </p>
//                 <p>
//                   We've witnessed Dubai's incredible transformation firsthand
//                   and have been instrumental in helping thousands of clients
//                   find their perfect properties—from luxury waterfront
//                   apartments to family-friendly villas in thriving communities.
//                 </p>
//                 <p>
//                   Today, we continue to innovate while staying true to our core
//                   values of transparency, expertise, and client-centric service.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section
//         className="relative bg-cover bg-center bg-no-repeat py-32 text-left"
//         style={{
//           backgroundImage:
//             "url('https://evernest.ae/assets/img/aboutpage/Vision.jpg')",
//         }}
//       >
//         <div className="container mx-auto px-6 md:px-12">
//           <div className="max-w-3xl">
//             <h2 className="text-[42px] md:text-[48px] font-serif text-black mb-6 tracking-wide [text-shadow:_2px_2px_4px_rgba(255,255,255,0.8)]">
//               VISION
//             </h2>
//             <p className="text-black text-lg md:text-[18px] leading-relaxed [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)] font-medium">
//               At{" "}
//               <span className="font-semibold text-[#8b5d3b] [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)]">
//                 Evernest Real Estate
//               </span>
//               , our vision is to consistently provide exceptional experiences
//               and deliver outstanding results for our customers in Dubai's
//               competitive real estate market.
//             </p>
//             <p className="text-black text-lg md:text-[18px] leading-relaxed mt-4 [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)] font-medium">
//               We are committed to maintaining the highest standards of service
//               quality and ensuring customer satisfaction through integrity,
//               professionalism, and innovation.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#faf8f6] py-16">
//         <div className="container mx-auto px-6 md:px-10">
//           <div className="text-center mb-12">
//             <h2 className="text-[36px] md:text-[40px] font-normal text-[#7c4a2f] mb-4">
//               Our Main Values
//             </h2>
//             <div className="h-[3px] w-20 bg-[#c18a5a] mx-auto rounded-full mb-6"></div>
//             <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-[16px]">
//               The foundation of our success lies in these guiding principles —
//               shaping every interaction and decision we make.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Card 1 */}
//             <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//               <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
//                 Professionalism
//               </h3>
//               <p className="text-gray-700 leading-relaxed text-[15px]">
//                 We uphold the highest professional standards, delivering
//                 exceptional service with precision, integrity, and expertise.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//               <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
//                 Innovation
//               </h3>
//               <p className="text-gray-700 leading-relaxed text-[15px]">
//                 We embrace creativity and technology to redefine expectations
//                 and deliver smarter, seamless real estate experiences.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//               <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
//                 Integrity
//               </h3>
//               <p className="text-gray-700 leading-relaxed text-[15px]">
//                 Integrity is our foundation — guiding every action with honesty,
//                 transparency, and accountability.
//               </p>
//             </div>

//             {/* Card 4 */}
//             <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//               <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
//                 Commitment
//               </h3>
//               <p className="text-gray-700 leading-relaxed text-[15px]">
//                 Our dedication ensures we exceed expectations and build lasting
//                 relationships grounded in trust and reliability.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <SocialLinksSection />

//       {/* Vision Section */}
//     </>
//   );
// }



"use client";

import React from "react";
import Header from "../includes/header";
import SocialLinksSection from "../Components/SocialLinksSection";
import Image from "next/image";

export default function AboutUsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f6ecdf] py-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-4">
            Evernest Real Estate Journey
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we have been helping clients navigate Dubai&apos;s
            dynamic real estate market. Our commitment to excellence and deep
            local expertise.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
                width={800}
                height={600}
                alt="Our office and team"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-[32px] md:text-[36px] font-normal tracking-tight text-[#8b5d3b] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010, our journey began with a simple vision: to
                  make Dubai&apos;s real estate market accessible and
                  understandable for everyone. What started as a small team of
                  passionate property experts has grown into a comprehensive
                  real estate consultancy.
                </p>
                <p>
                  We&apos;ve witnessed Dubai&apos;s incredible transformation
                  firsthand and have been instrumental in helping thousands of
                  clients find their perfect properties—from luxury waterfront
                  apartments to family-friendly villas in thriving communities.
                </p>
                <p>
                  Today, we continue to innovate while staying true to our core
                  values of transparency, expertise, and client-centric service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 text-left"
        style={{
          backgroundImage:
            "url('https://evernest.ae/assets/img/aboutpage/Vision.jpg')",
        }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-[42px] md:text-[48px] font-serif text-black mb-6 tracking-wide [text-shadow:_2px_2px_4px_rgba(255,255,255,0.8)]">
              VISION
            </h2>
            <p className="text-black text-lg md:text-[18px] leading-relaxed [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)] font-medium">
              At{" "}
              <span className="font-semibold text-[#8b5d3b] [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)]">
                Evernest Real Estate
              </span>
              , our vision is to consistently provide exceptional experiences
              and deliver outstanding results for our customers in Dubai&apos;s
              competitive real estate market.
            </p>
            <p className="text-black text-lg md:text-[18px] leading-relaxed mt-4 [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)] font-medium">
              We are committed to maintaining the highest standards of service
              quality and ensuring customer satisfaction through integrity,
              professionalism, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#faf8f6] py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[40px] font-normal text-[#7c4a2f] mb-4">
              Our Main Values
            </h2>
            <div className="h-[3px] w-20 bg-[#c18a5a] mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-[16px]">
              The foundation of our success lies in these guiding principles —
              shaping every interaction and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
                Professionalism
              </h3>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                We uphold the highest professional standards, delivering
                exceptional service with precision, integrity, and expertise.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
                Innovation
              </h3>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                We embrace creativity and technology to redefine expectations
                and deliver smarter, seamless real estate experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
                Integrity
              </h3>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                Integrity is our foundation — guiding every action with honesty,
                transparency, and accountability.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-[#f0e6dd] shadow-sm p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-medium text-[#c18a5a] mb-3">
                Commitment
              </h3>
              <p className="text-gray-700 leading-relaxed text-[15px]">
                Our dedication ensures we exceed expectations and build lasting
                relationships grounded in trust and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SocialLinksSection />
    </>
  );
}

