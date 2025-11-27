// "use client";

// import React, { JSX, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Briefcase,
//   MapPin,
//   Clock,
//   Award,
//   GraduationCap,
//   Users,
//   TrendingUp,
// } from "lucide-react";
// import Header from "../includes/header";
// import SocialLinksSection from "../Components/SocialLinksSection";
// import RegisterCtaSection from "../Components/RegisterCtaSection";

// type Job = {
//   id: string;
//   title: string;
//   department: "Technology" | "Creative" | "Sales" | "Operations" | "Marketing";
//   location: string;
//   type: "Full-time" | "Part-time" | "Remote";
//   experience: string;
//   description: string;
//   requirements: string[];
//   benefits: string[];
// };

// type Benefit = {
//   icon: JSX.Element;
//   title: string;
//   description: string;
// };

// export default function CareersPage() {
//   const [activeDepartment, setActiveDepartment] = useState<string>("All");

//   const jobs: Job[] = [
//     {
//       id: "1",
//       title: "Senior Frontend Developer",
//       department: "Technology",
//       location: "Dubai, UAE",
//       type: "Full-time",
//       experience: "5+ Years",
//       description:
//         "Join our technology team to build cutting-edge real estate platforms and proptech solutions.",
//       requirements: [
//         "React/Next.js expertise",
//         "TypeScript proficiency",
//         "Modern CSS frameworks",
//         "API integration experience",
//       ],
//       benefits: [
//         "Flexible hours",
//         "Learning budget",
//         "Health insurance",
//         "Remote options",
//       ],
//     },
//     {
//       id: "2",
//       title: "Luxury Property Photographer",
//       department: "Creative",
//       location: "Dubai, UAE",
//       type: "Full-time",
//       experience: "3+ Years",
//       description:
//         "Capture stunning visuals of luxury properties and create compelling marketing content.",
//       requirements: [
//         "Professional photography portfolio",
//         "Drone operation license",
//         "Video editing skills",
//         "Luxury brand experience",
//       ],
//       benefits: [
//         "Equipment allowance",
//         "Creative freedom",
//         "Travel opportunities",
//         "Performance bonuses",
//       ],
//     },
//     {
//       id: "3",
//       title: "Real Estate Consultant",
//       department: "Sales",
//       location: "Dubai, UAE",
//       type: "Full-time",
//       experience: "2+ Years",
//       description:
//         "Help clients find their dream properties and provide expert market guidance.",
//       requirements: [
//         "Real estate license",
//         "Sales experience",
//         "Market knowledge",
//         "Client relationship skills",
//       ],
//       benefits: [
//         "Commission based",
//         "Car allowance",
//         "Laptop provided",
//         "Career growth",
//       ],
//     },
//     {
//       id: "4",
//       title: "UI/UX Designer",
//       department: "Creative",
//       location: "Remote",
//       type: "Full-time",
//       experience: "4+ Years",
//       description:
//         "Design intuitive and beautiful interfaces for our digital real estate platforms.",
//       requirements: [
//         "Figma/Adobe Creative Suite",
//         "User research experience",
//         "Prototyping skills",
//         "Mobile-first design",
//       ],
//       benefits: [
//         "Remote work",
//         "Design budget",
//         "Conference tickets",
//         "Flexible schedule",
//       ],
//     },
//     {
//       id: "5",
//       title: "Digital Marketing Specialist",
//       department: "Marketing",
//       location: "Dubai, UAE",
//       type: "Full-time",
//       experience: "3+ Years",
//       description:
//         "Drive our digital presence and create impactful marketing campaigns.",
//       requirements: [
//         "Social media management",
//         "Content strategy",
//         "Analytics tools",
//         "SEO/SEM knowledge",
//       ],
//       benefits: [
//         "Campaign budget",
//         "Performance bonuses",
//         "Training programs",
//         "Creative control",
//       ],
//     },
//     {
//       id: "6",
//       title: "Operations Coordinator",
//       department: "Operations",
//       location: "Dubai, UAE",
//       type: "Full-time",
//       experience: "2+ Years",
//       description:
//         "Ensure smooth operations and support our growing team across departments.",
//       requirements: [
//         "Project management",
//         "Communication skills",
//         "Problem solving",
//         "Multitasking ability",
//       ],
//       benefits: [
//         "Stable hours",
//         "Health insurance",
//         "Team events",
//         "Career development",
//       ],
//     },
//   ];

//   const departments = [
//     "All",
//     "Technology",
//     "Creative",
//     "Sales",
//     "Marketing",
//     "Operations",
//   ];

//   const benefits: Benefit[] = [
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Career Growth",
//       description:
//         "Clear progression paths and regular promotion opportunities",
//     },
//     {
//       icon: <GraduationCap className="w-8 h-8" />,
//       title: "Learning & Development",
//       description:
//         "Annual training budget and professional certification support",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Great Culture",
//       description: "Collaborative environment with team-building activities",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8" />,
//       title: "Competitive Packages",
//       description: "Attractive salaries, bonuses, and comprehensive benefits",
//     },
//   ];

//   const filteredJobs =
//     activeDepartment === "All"
//       ? jobs
//       : jobs.filter((job) => job.department === activeDepartment);

//   return (
//     <>
//       <Header />
//       <section className="relative min-h-[40vh] flex items-center justify-center bg-[#f6ecdf] overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#f6ecdf] via-[#fffaf5] to-[#f6ecdf]/90"></div>
//         <div className="absolute top-20 left-16 w-20 h-20 bg-[#8b5d3b]/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-24 right-16 w-32 h-32 bg-[#3c2f26]/10 rounded-full blur-3xl"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="container relative z-10 mx-auto px-6 text-center"
//         >
//           <h1 className="text-3xl md:text-4xl font-light text-[#3c2f26] leading-tight tracking-tight mb-4 mt-6">
//             Build Your Career in{" "}
//             <span className="bg-gradient-to-r from-[#8b5d3b] to-[#c89a67] bg-clip-text text-transparent font-medium">
//               Luxury Real Estate
//             </span>
//           </h1>
//           <p className="text-[#3c2f26]/70 text-lg mx-auto max-w-2xl leading-relaxed mb-6">
//             Join our dynamic team and shape the future of real estate in Dubai.
//             Grow with us while delivering exceptional experiences to our
//             clients.
//           </p>
//           <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-[#8b5d3b]/20 rounded-full px-4 py-2 mb-6 shadow-sm">
//             <span className="w-2 h-2 bg-[#8b5d3b] rounded-full"></span>
//             <span className="text-[#3c2f26]/70 text-sm font-normal tracking-wide">
//               Currently hiring for {jobs.length} positions
//             </span>
//           </div>
//         </motion.div>
//       </section>
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-4">
//               Why Join Our Team?
//             </h2>
//             <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {benefits.map((benefit, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="bg-gradient-to-br from-[#f6ecdf] to-[#fdf8f3] rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-[#8b5d3b]/10"
//               >
//                 <div className="text-[#8b5d3b] mb-4 flex justify-center">
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-[#3c2f26] mb-3">
//                   {benefit.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {benefit.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Department Filter */}
//       <section className="bg-[#faf7f4] border-y border-gray-100 sticky top-0 z-40 shadow-sm">
//         <div className="container mx-auto px-6">
//           <div className="flex flex-wrap justify-center gap-3 py-6">
//             {departments.map((department) => (
//               <button
//                 key={department}
//                 onClick={() => setActiveDepartment(department)}
//                 className={`min-w-[140px] h-11 flex items-center justify-center rounded-md font-medium transition-all duration-300 ${
//                   activeDepartment === department
//                     ? "bg-[#c97a52] text-white shadow-md transform -translate-y-0.5 cursor-pointer"
//                     : "bg-white text-[#3c2f26] hover:bg-[#f6ecdf] border border-gray-200 hover:border-[#8b5d3b]/30 hover:shadow-[0_0_10px_rgba(139,93,59,0.15)]"
//                 }`}
//               >
//                 {department}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Jobs Grid */}
//       <section className="bg-gradient-to-b from-white to-[#faf7f4] py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
//             {filteredJobs.map((job, index) => (
//               <motion.div
//                 key={job.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#8b5d3b]/20"
//               >
//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#8b5d3b] transition-colors duration-300">
//                       {job.title}
//                     </h3>
//                     <span className="bg-[#8b5d3b]/10 text-[#8b5d3b] text-xs font-medium px-3 py-1 rounded-full">
//                       {job.department}
//                     </span>
//                   </div>

//                   <div className="flex flex-wrap gap-4 mb-4">
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <MapPin size={16} />
//                       <span className="text-sm">{job.location}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <Clock size={16} />
//                       <span className="text-sm">{job.type}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <Briefcase size={16} />
//                       <span className="text-sm">{job.experience}</span>
//                     </div>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">
//                     {job.description}
//                   </p>

//                   <div className="mb-4">
//                     <h4 className="font-semibold text-gray-900 mb-2">
//                       Key Requirements:
//                     </h4>
//                     <ul className="text-sm text-gray-600 space-y-1">
//                       {job.requirements.slice(0, 3).map((req, idx) => (
//                         <li key={idx} className="flex items-center gap-2">
//                           <span className="w-1.5 h-1.5 bg-[#8b5d3b] rounded-full"></span>
//                           {req}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {job.benefits.slice(0, 2).map((benefit, idx) => (
//                       <span
//                         key={idx}
//                         className="bg-[#f6ecdf] text-[#8b5d3b] text-xs font-medium px-3 py-1 rounded-full"
//                       >
//                         {benefit}
//                       </span>
//                     ))}
//                   </div>
//                   <button className="w-full bg-[#8b5d3b] text-white py-2 rounded-sm font-normal hover:bg-[#7a4f32] hover:shadow-[0_0_15px_rgba(139,93,59,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm">
//                     Apply Now
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {filteredJobs.length === 0 && (
//             <div className="text-center py-12">
//               <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 No Open Positions
//               </h3>
//               <p className="text-gray-600 max-w-md mx-auto">
//                 There are currently no open positions in the {activeDepartment}{" "}
//                 department. Please check back later or explore other
//                 departments.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Culture Section */}
//       <section className="bg-[#f6ecdf] py-16">
//         <div className="container mx-auto px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-6">
//               Our Culture & Values
//             </h2>
//             <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto mb-8"></div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
//               {[
//                 {
//                   title: "Innovation First",
//                   description:
//                     "We embrace new ideas and technologies to stay ahead in the real estate industry.",
//                 },
//                 {
//                   title: "Collaborative Spirit",
//                   description:
//                     "Teamwork and open communication are at the heart of everything we do.",
//                 },
//                 {
//                   title: "Client Focused",
//                   description:
//                     "Our success is measured by the satisfaction and success of our clients.",
//                 },
//               ].map((value, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/60 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300"
//                 >
//                   <h3 className="text-lg font-semibold text-[#3c2f26] mb-3">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="bg-white py-16 text-center">
//         <div className="container mx-auto px-6">
//           <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-4">
//             Ready to Start Your Journey?
//           </h2>
//           <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto mb-6"></div>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
//             Can&apos;t find the perfect role? Send us your resume and we&apos;ll
//             keep you in mind for future opportunities.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-[#8b5d3b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7a4f32] hover:shadow-[0_0_15px_rgba(139,93,59,0.4)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
//               Send General Application
//             </button>
//             <button className="border border-[#8b5d3b] text-[#8b5d3b] px-8 py-3 rounded-full font-medium hover:bg-[#8b5d3b] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//               Contact HR Team
//             </button>
//           </div>
//         </div>
//       </section>

//       <SocialLinksSection />
//       <RegisterCtaSection />
//     </>
//   );
// }




"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Award,
  GraduationCap,
  Users,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Header from "../includes/header";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";

type Job = {
  id: string;
  title: string;
  department: "Technology" | "Creative" | "Sales" | "Operations" | "Marketing";
  location: string;
  type: "Full-time" | "Part-time" | "Remote";
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
};

const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Technology",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "5+ Years",
    description: "Join our technology team to build cutting-edge real estate platforms and proptech solutions.",
    requirements: ["React/Next.js expertise", "TypeScript proficiency", "Modern CSS frameworks", "API integration experience"],
    benefits: ["Flexible hours", "Learning budget", "Health insurance", "Remote options"],
  },
  {
    id: "2",
    title: "Luxury Property Photographer",
    department: "Creative",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "3+ Years",
    description: "Capture stunning visuals of luxury properties and create compelling marketing content.",
    requirements: ["Professional photography portfolio", "Drone operation license", "Video editing skills", "Luxury brand experience"],
    benefits: ["Equipment allowance", "Creative freedom", "Travel opportunities", "Performance bonuses"],
  },
  {
    id: "3",
    title: "Real Estate Consultant",
    department: "Sales",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "2+ Years",
    description: "Help clients find their dream properties and provide expert market guidance.",
    requirements: ["Real estate license", "Sales experience", "Market knowledge", "Client relationship skills"],
    benefits: ["Commission based", "Car allowance", "Laptop provided", "Career growth"],
  },
  {
    id: "4",
    title: "UI/UX Designer",
    department: "Creative",
    location: "Remote",
    type: "Full-time",
    experience: "4+ Years",
    description: "Design intuitive and beautiful interfaces for our digital real estate platforms.",
    requirements: ["Figma/Adobe Creative Suite", "User research experience", "Prototyping skills", "Mobile-first design"],
    benefits: ["Remote work", "Design budget", "Conference tickets", "Flexible schedule"],
  },
  {
    id: "5",
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "3+ Years",
    description: "Drive our digital presence and create impactful marketing campaigns.",
    requirements: ["Social media management", "Content strategy", "Analytics tools", "SEO/SEM knowledge"],
    benefits: ["Campaign budget", "Performance bonuses", "Training programs", "Creative control"],
  },
  {
    id: "6",
    title: "Operations Coordinator",
    department: "Operations",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "2+ Years",
    description: "Ensure smooth operations and support our growing team across departments.",
    requirements: ["Project management", "Communication skills", "Problem solving", "Multitasking ability"],
    benefits: ["Stable hours", "Health insurance", "Team events", "Career development"],
  },
];

const departments = ["All", "Technology", "Creative", "Sales", "Marketing", "Operations"];

const benefits = [
  { icon: Award, title: "Career Growth", description: "Clear progression paths and regular promotion opportunities" },
  { icon: GraduationCap, title: "Learning & Development", description: "Annual training budget and professional certification support" },
  { icon: Users, title: "Great Culture", description: "Collaborative environment with team-building activities" },
  { icon: TrendingUp, title: "Competitive Packages", description: "Attractive salaries, bonuses, and comprehensive benefits" },
];

const cultureValues = [
  { title: "Innovation First", description: "We embrace new ideas and technologies to stay ahead in the real estate industry." },
  { title: "Collaborative Spirit", description: "Teamwork and open communication are at the heart of everything we do." },
  { title: "Client Focused", description: "Our success is measured by the satisfaction and success of our clients." },
];

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState("All");

  const filteredJobs = activeDepartment === "All"
    ? jobs
    : jobs.filter((job) => job.department === activeDepartment);

  return (
    <>
      <Header />

      {/* Compact Luxury Hero */}
      <section className="relative min-h-[32vh] flex items-center justify-center bg-gradient-to-br from-[#f6ecdf] via-[#fffaf5] to-[#f6ecdf] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#8b5d3b]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#c97a52]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#8b5d3b]/5 to-[#c97a52]/5 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container relative z-10 mx-auto px-6 text-center py-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-[#8b5d3b]/20 rounded-full px-4 py-2 mb-5 shadow-sm"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-[#8b5d3b] to-[#c97a52] rounded-full animate-pulse"></span>
            <span className="text-[#3c2f26]/80 text-xs font-medium tracking-wider uppercase">
              {jobs.length} Open Positions
            </span>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-light text-[#3c2f26] leading-tight tracking-tight mb-3">
            Build Your Career in{" "}
            <span className="bg-gradient-to-r from-[#8b5d3b] via-[#c97a52] to-[#c89a67] bg-clip-text text-transparent font-medium">
              Luxury Real Estate
            </span>
          </h1>
          <p className="text-[#3c2f26]/60 text-base max-w-xl mx-auto leading-relaxed font-light">
            Join our dynamic team and shape the future of real estate in Dubai.
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5d3b]/20 to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-light text-[#3c2f26] mb-3">
              Why Join <span className="font-medium text-[#8b5d3b]">Our Team?</span>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#8b5d3b] to-[#c97a52] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-[#faf8f5] to-white rounded-sm p-5 text-center hover:shadow-xl transition-all duration-500 border border-[#e8e0d8] hover:border-[#8b5d3b]/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#8b5d3b]/5 to-transparent"></div>
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#8b5d3b]/10 to-[#c97a52]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-[#8b5d3b]" />
                </div>
                <h3 className="text-base font-medium text-[#3c2f26] mb-2 group-hover:text-[#8b5d3b] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="bg-white/95 backdrop-blur-md border-y border-[#e8e0d8] sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {departments.map((department, index) => (
              <motion.button
                key={department}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setActiveDepartment(department)}
                className={`relative min-w-[110px] h-10 flex items-center justify-center font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer overflow-hidden rounded-sm ${
                  activeDepartment === department
                    ? "bg-gradient-to-r from-[#8b5d3b] to-[#c97a52] text-white shadow-lg shadow-[#8b5d3b]/25"
                    : "bg-[#faf8f5] text-[#3c2f26] border border-[#e8e0d8] hover:border-[#8b5d3b]/40 hover:bg-white hover:shadow-md"
                }`}
              >
                {activeDepartment === department && (
                  <motion.div
                    layoutId="activeDept"
                    className="absolute inset-0 bg-gradient-to-r from-[#8b5d3b] to-[#c97a52]"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{department}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="bg-gradient-to-b from-white to-[#faf8f5] py-14">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#8b5d3b]/20 relative"
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#8b5d3b]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-[#8b5d3b] transition-colors duration-300">
                      {job.title}
                    </h3>
                    <span className="bg-gradient-to-r from-[#8b5d3b]/10 to-[#c97a52]/10 text-[#8b5d3b] text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
                      {job.department}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-3">
                    {[
                      { icon: MapPin, text: job.location },
                      { icon: Clock, text: job.type },
                      { icon: Briefcase, text: job.experience },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-gray-500">
                        <item.icon className="w-3.5 h-3.5 text-[#8b5d3b]/60" />
                        <span className="text-xs">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-800 text-sm mb-2">Requirements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#8b5d3b] rounded-full"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {job.benefits.slice(0, 3).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-[#faf8f5] text-[#8b5d3b] text-[10px] font-medium px-2.5 py-1 rounded-full border border-[#8b5d3b]/10"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-[#8b5d3b] to-[#c97a52] text-white py-2.5 rounded-sm font-medium text-sm hover:shadow-lg hover:shadow-[#8b5d3b]/25 transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
                    <span className="relative">Apply Now</span>
                    <ArrowRight className="w-4 h-4 relative group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#8b5d3b]/10 to-[#c97a52]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-[#8b5d3b]/50" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No Open Positions</h3>
              <p className="text-gray-500 max-w-md mx-auto text-sm">
                No positions in {activeDepartment} department. Check back later or explore others.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-[#f6ecdf] py-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8b5d3b]/20 to-transparent"></div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-[#3c2f26] mb-3">
              Our <span className="font-medium text-[#8b5d3b]">Culture & Values</span>
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#8b5d3b] to-[#c97a52] mx-auto mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-sm p-5 hover:shadow-lg transition-all duration-300 border border-white/50 hover:border-[#8b5d3b]/20 text-left"
                >
                  <h3 className="text-base font-medium text-[#3c2f26] mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}
