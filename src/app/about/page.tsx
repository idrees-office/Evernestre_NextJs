// "use client";

// import React from "react";
// import Header from "../includes/header";
// import SocialLinksSection from "../Components/SocialLinksSection";
// import Image from "next/image";

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
//             For over a decade, we have been helping clients navigate
//             Dubai&apos;s dynamic real estate market. Our commitment to
//             excellence and deep local expertise.
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
//                 width={800}
//                 height={600}
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
//                   make Dubai&apos;s real estate market accessible and
//                   understandable for everyone. What started as a small team of
//                   passionate property experts has grown into a comprehensive
//                   real estate consultancy.
//                 </p>
//                 <p>
//                   We&apos;ve witnessed Dubai&apos;s incredible transformation
//                   firsthand and have been instrumental in helping thousands of
//                   clients find their perfect properties—from luxury waterfront
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

//       {/* Vision Section */}
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
//               and deliver outstanding results for our customers in Dubai&apos;s
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

//       {/* Values Section */}
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
//     </>
//   );
// }

"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const coreValues = [
  {
    title: "Professionalism",
    description: "We uphold the highest professional standards, delivering exceptional service with precision, integrity, and expertise."
  },
  {
    title: "Innovation",
    description: "We embrace creativity and technology to redefine expectations and deliver smarter, seamless real estate experiences."
  },
  {
    title: "Integrity",
    description: "Integrity is our foundation — guiding every action with honesty, transparency, and accountability."
  },
  {
    title: "Commitment",
    description: "Our dedication ensures we exceed expectations and build lasting relationships grounded in trust and reliability."
  }
];

const values = [
  {
    num: "1",
    title: "Professionalism",
    description: "We maintain our professionalism by providing exceptional service, paying close attention to detail, and possessing expert knowledge."
  },
  {
    num: "2",
    title: "Innovation",
    description: "Using technology and inventive solutions, we exceed expectations, set quality standards, and pioneer new strategies."
  },
  {
    num: "3",
    title: "Integrity",
    description: "Our fundamental value is integrity, which guarantees openness, moral behavior, and reliability in all our commitments."
  },
  {
    num: "4",
    title: "Commitment",
    description: "Our unwavering dedication ensures we exceed client expectations, fostering lasting relationships built on trust and reliability."
  }
];

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#f6ecdf] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3">
            Evernest Real Estate Journey
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            For over a decade, we have been helping clients navigate Dubai&apos;s dynamic real estate market. 
            Our commitment to excellence and deep local expertise.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative">

          <Image
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
                width={800}
                height={600}
                alt="Our office and team"
                className="rounded-lg shadow-2xl"
              />

              {/* <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our office and team"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              /> */}
            </div>
            <div>
              <h2 className="text-3xl md:text-[34px] font-normal text-[#8b5d3b] mb-5 tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
                <p>
                  Founded in 2010, our journey began with a simple vision: to make Dubai&apos;s 
                  real estate market accessible and understandable for everyone. What started 
                  as a small team of passionate property experts has grown into a comprehensive 
                  real estate consultancy.
                </p>
                <p>
                  We&asop;ve witnessed Dubai&apos;s incredible transformation firsthand and have been 
                  instrumental in helping thousands of clients find their perfect properties—from 
                  luxury waterfront apartments to family-friendly villas in thriving communities.
                </p>
                <p>
                  Today, we continue to innovate while staying true to our core values of 
                  transparency, expertise, and client-centric service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Vision Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: "url('https://evernest.ae/assets/img/aboutpage/Vision.jpg')"
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h2 className="text-[40px] md:text-[46px] font-serif text-black mb-5 tracking-wide [text-shadow:_2px_2px_4px_rgba(255,255,255,0.8)]">
              VISION
            </h2>
            <p className="text-black text-[17px] leading-relaxed [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)] font-medium">
              At{" "}
              <span className="font-semibold text-[#8b5d3b] [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)]">
                Evernest Real Estate
              </span>
              , our vision is to consistently provide exceptional experiences and deliver 
              outstanding results for our customers in Dubai&apos;s competitive real estate market.
            </p>
            <p className="text-black text-[17px] leading-relaxed mt-4 [text-shadow:_1px_1px_2px_rgba(255,255,255,0.8)] font-medium">
              We are committed to maintaining the highest standards of service quality and 
              ensuring customer satisfaction through integrity, professionalism, and innovation.
            </p>
          </div>
        </div>
      </section>


      {/* Mission & Values Section */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-[#c9a87c] to-transparent" />
              <h2 className="text-3xl md:text-[38px] font-light text-[#8b5d3b] mb-6 tracking-wide">
                MISSION
              </h2>
              <p className="text-gray-600 text-[15px] leading-[1.9] text-justify mb-8">
                At <span className="text-[#8b5d3b] font-medium">Evernest Real Estate</span>, our mission is to realize our vision through hard work, optimism, and focus 
                on the end product. Our commitment lies in providing astute and efficient communication while enhancing 
                the real estate industry and our clients&asop; experiences.
              </p>
              <p className="text-gray-600 text-[15px] leading-[1.9] text-justify mb-8">
                We aspire to be a reliable and trustworthy partner by delivering outstanding results and cultivating 
                enduring relationships through our dedication to innovation and quality.
              </p>
              <div className="flex justify-end">
                <div className="relative">
                  <svg className="w-16 h-16 text-[#c9a87c]/20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-1 h-16 bg-gradient-to-b from-[#c9a87c] to-transparent lg:hidden" />
              <h2 className="text-3xl md:text-[38px] font-light text-[#8b5d3b] mb-6 tracking-wide">
                VALUES
              </h2>
              <div className="bg-gradient-to-br from-[#faf8f6] to-[#f5efe8] rounded-2xl p-6 md:p-8 space-y-6 border border-[#e8ddd1]/50">
                {values.map((value, index) => (
                  <motion.div 
                    key={value.num} 
                    className="flex gap-5 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-5xl font-extralight text-[#c9a87c] group-hover:text-[#8b5d3b] transition-colors">
                      {value.num}
                    </span>
                    <div className="pt-2">
                      <h3 className="font-semibold text-gray-900 mb-1.5 text-[15px]">{value.title}</h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Values Section */}
      <section className="bg-[#faf8f6] py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-[34px] md:text-[38px] font-normal text-[#7c4a2f] mb-3">
              Our Main Values
            </h2>
            <div className="h-[3px] w-16 bg-[#c18a5a] mx-auto rounded-full mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto text-[15px] leading-relaxed">
              The foundation of our success lies in these guiding principles — shaping 
              every interaction and decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl border border-[#f0e6dd] p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <h3 className="text-lg font-normal text-[#c18a5a] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-[14px] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> 

       <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#8b5d3b] mb-4 tracking-wide">
            OUR APPROACH TO REAL ESTATE
          </h2>
          <p className="text-gray-700 text-[15px] leading-[1.8] text-justify mb-6">
            Greetings from Evernest Real Estate, where we are committed to transforming your real estate 
            aspirations into reality. Established in 2019, Evernest has swiftly emerged as a distinguished 
            leader in Dubai&apos;s dynamic real estate landscape, earning accolades for our unwavering dedication 
            to excellence.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-gray-700 text-[15px] leading-[1.8]">
                Greetings from Evernest Real Estate, where we are committed to transforming your real estate 
                aspirations into reality. Established in 2019, Evernest has swiftly emerged as a distinguished 
                leader in Dubai&apos;s dynamic real estate landscape, earning accolades for our unwavering dedication to excellence.
              </p>
              <p className="text-gray-700 text-[15px] leading-[1.8]">
                Greetings from Evernest Real Estate, where we are committed to transforming your real estate 
                aspirations into reality. Established in 2019, Evernest has swiftly emerged as a distinguished 
                leader in Dubai&apos;s dynamic real estate landscape, earning accolades for our unwavering dedication to excellence.
              </p>
            </div>
            
            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#f6ecdf] h-24 rounded" />
                <div className="bg-[#8b5d3b] h-24 rounded flex items-center justify-center p-3">
                  <p className="text-white text-xs text-center font-medium">Experience Investment</p>
                </div>
                <div className="bg-[#f6ecdf] h-24 rounded" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="bg-[#8b5d3b] h-24 rounded flex items-center justify-center p-3">
                  <p className="text-white text-xs text-center font-medium">Experience Investment</p>
                </div>
                <div className="bg-[#f6ecdf] h-24 rounded" />
                <div className="bg-[#8b5d3b] h-24 rounded flex items-center justify-center p-3">
                  <p className="text-white text-xs text-center font-medium">Experience Investment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}