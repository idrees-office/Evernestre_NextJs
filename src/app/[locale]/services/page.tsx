// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { createPageUrl } from "@/app/utils/url";
// import { useTranslations } from "next-intl";
// import {
//   Building2,
//   Home,
//   TrendingUp,
//   Key,
//   Users,
//   FileText,
//   BadgeCheck,
//   Clock,
//   Shield,
//   Award,
//   ChevronRight,
//   Phone,
//   Mail,
//   ArrowRight,
//   Sparkles,
//   Target,
//   Handshake,
//   CheckCircle2,
//   Star,
//   MapPin,
// } from "lucide-react";

// import Image from "next/image";


// const services = [
//   {
//     icon: Home,
//     title: "Property Buying",
//     description: "Find your dream home with our curated selection of premium properties across Dubai's most sought-after locations.",
//     features: ["Personalized property matching", "Virtual & in-person viewings", "Negotiation support", "Legal documentation"],
//   },
//   {
//     icon: TrendingUp,
//     title: "Off-Plan Investment",
//     description: "Secure exclusive access to Dubai's most promising off-plan developments with attractive payment plans.",
//     features: ["Early bird pricing", "Developer partnerships", "ROI analysis", "Payment plan guidance"],
//   },
//   {
//     icon: Key,
//     title: "Property Selling",
//     description: "Maximize your property's value with our strategic marketing and extensive buyer network.",
//     features: ["Market valuation", "Professional photography", "Global marketing", "Qualified buyer matching"],
//   },
//   {
//     icon: Building2,
//     title: "Property Management",
//     description: "Hassle-free management of your investment with comprehensive tenant and maintenance services.",
//     features: ["Tenant screening", "Rent collection", "Maintenance coordination", "Regular inspections"],
//   },
//   {
//     icon: FileText,
//     title: "Mortgage Advisory",
//     description: "Navigate financing options with expert guidance and access to competitive mortgage rates.",
//     features: ["Rate comparison", "Pre-approval assistance", "Documentation support", "Bank liaisons"],
//   },
//   {
//     icon: Users,
//     title: "Investment Consultation",
//     description: "Make informed decisions with our in-depth market analysis and personalized investment strategies.",
//     features: ["Portfolio planning", "Market insights", "Risk assessment", "Growth projections"],
//   },
// ];

// const stats = [
//   { value: "500+", label: "Properties Sold", icon: Home },
//   { value: "98%", label: "Client Satisfaction", icon: Star },
//   { value: "15+", label: "Years Experience", icon: Award },
//   { value: "AED 2B+", label: "Transaction Value", icon: TrendingUp },
// ];

// const processSteps = [
//   {
//     step: "01",
//     title: "Initial Consultation",
//     description: "Share your goals and preferences in a personalized meeting with our expert advisors.",
//     icon: Handshake,
//   },
//   {
//     step: "02",
//     title: "Property Discovery",
//     description: "We curate a selection of properties that perfectly match your criteria and budget.",
//     icon: Target,
//   },
//   {
//     step: "03",
//     title: "Viewings & Evaluation",
//     description: "Experience properties firsthand with guided tours and comprehensive market analysis.",
//     icon: MapPin,
//   },
//   {
//     step: "04",
//     title: "Seamless Transaction",
//     description: "From negotiation to handover, we manage every detail for a stress-free experience.",
//     icon: CheckCircle2,
//   },
// ];

// export default function Services() {
//   const [hoveredService, setHoveredService] = useState(null);
//   const t = useTranslations();

//   return (
//     <main className="bg-[#f6ecdf] min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#f6ecdf] via-[#f0e4d3] to-[#e8d9c5]" />
//         <div className="absolute top-20 right-20 w-96 h-96 bg-[#c9a882]/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#d0845b]/10 rounded-full blur-3xl" />
        
//         <div className="container mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-3xl"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-4 py-1.5 text-[13px] tracking-tight text-[#0e0e0e]/80 shadow-sm mb-6">
//               <Sparkles className="h-3.5 w-3.5 text-[#c9a882]" />
//               Premium Real Estate Services
//             </div>
            
//             <h1 className="text-4xl md:text-6xl font-light text-[#0e0e0e] leading-[1.1] tracking-tight mb-6">
//               Elevating Your{" "}
//               <span className="bg-gradient-to-r from-[#c9a882] to-[#8b5d3b] bg-clip-text text-transparent font-normal">
//                 Real Estate
//               </span>
//               <br />
//               Experience
//             </h1>
//             <p className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mb-8">
//               From finding your dream home to maximizing your investment returns, 
//               our comprehensive suite of services is designed to exceed your expectations 
//               at every step.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="bg-white py-10 border-y border-[#d0845b]/10">
//         <div className="container mx-auto max-w-7xl px-6 md:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c9a882]/10 mb-4">
//                   <stat.icon className="h-5 w-5 text-[#8b5d3b]" />
//                 </div>
//                 <div className="text-3xl md:text-4xl font-light text-[#8b5d3b] mb-1">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm text-[#1a1a1a]/60">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto max-w-7xl px-6 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-10"
//           >
//             <h2 className="text-3xl md:text-4xl font-light text-[#0e0e0e] mb-4">
//               Our <span className="text-[#8b5d3b]">Services</span>
//             </h2>
//             <p className="text-[#1a1a1a]/60 max-w-2xl mx-auto">
//               Comprehensive real estate solutions tailored to your unique needs
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 onMouseEnter={() => setHoveredService(index)}
//                 onMouseLeave={() => setHoveredService(null)}
//                 className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#d0845b]/10 overflow-hidden"
//               >
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9a882]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
//                 <div className="relative">
//                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a882]/20 to-[#d0845b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <service.icon className="h-6 w-6 text-[#8b5d3b]" />
//                   </div>
                  
//                   <h3 className="text-xl font-medium text-[#0e0e0e] mb-2">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-4">
//                     {service.description}
//                   </p>
                  
//                   <ul className="space-y-2">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="flex items-center gap-2 text-sm text-[#1a1a1a]/70">
//                         <div className="w-1.5 h-1.5 rounded-full bg-[#c9a882]" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
                  
//                   <div className="mt-4 pt-4 border-t border-[#d0845b]/10">
//                     <button className="flex items-center gap-2 text-[#8b5d3b] text-sm font-medium group-hover:gap-3 transition-all duration-300">
//                       Learn More
//                       <ChevronRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="bg-white py-12 md:py-16">
//         <div className="container mx-auto max-w-7xl px-6 md:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-10"
//           >
//             <h2 className="text-3xl md:text-4xl font-light text-[#0e0e0e] mb-4">
//               How We <span className="text-[#8b5d3b]">Work</span>
//             </h2>
//             <p className="text-[#1a1a1a]/60 max-w-2xl mx-auto">
//               A streamlined process designed to make your real estate journey effortless
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {processSteps.map((step, index) => (
//               <motion.div
//                 key={step.step}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.15 }}
//                 className="relative"
//               >
//                 {index < processSteps.length - 1 && (
//                   <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#c9a882]/40 to-transparent" />
//                 )}
                
//                 <div className="bg-[#f6ecdf]/50 rounded-2xl p-5 hover:bg-[#f6ecdf] transition-colors duration-300 h-full">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="w-12 h-12 rounded-full bg-[#8b5d3b] flex items-center justify-center text-white font-light text-lg">
//                       {step.step}
//                     </div>
//                     <step.icon className="h-6 w-6 text-[#c9a882]" />
//                   </div>
                  
//                   <h3 className="text-lg font-medium text-[#0e0e0e] mb-2">
//                     {step.title}
//                   </h3>
                  
//                   <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-12 md:py-16">
//         <div className="container mx-auto max-w-7xl px-6 md:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-light text-[#0e0e0e] mb-6">
//                 Why Choose{" "}
//                 <span className="text-[#8b5d3b]">Evernest</span>
//               </h2>
              
//               <p className="text-[#1a1a1a]/70 leading-relaxed mb-6">
//                 With over 15 years of excellence in Dubai real estate market, 
//                 we have built our reputation on trust, transparency, and delivering 
//                 exceptional results for our clients.
//               </p>
              
//               <div className="space-y-4">
//                 {[
//                   { icon: BadgeCheck, title: "RERA Certified", desc: "Fully licensed and regulated by Dubai's Real Estate Regulatory Agency" },
//                   { icon: Shield, title: "Secure Transactions", desc: "End-to-end protection for all your financial transactions" },
//                   { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance for all your real estate needs" },
//                   { icon: Award, title: "Award Winning", desc: "Recognized as one of Dubai's top real estate agencies" },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={item.title}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="flex gap-4"
//                   >
//                     <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-[#d0845b]/10">
//                       <item.icon className="h-5 w-5 text-[#8b5d3b]" />
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-[#0e0e0e] mb-1">{item.title}</h3>
//                       <p className="text-sm text-[#1a1a1a]/60">{item.desc}</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative"
//             >
//               <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
//                   alt="Luxury Property"
//                   className="w-full h-full object-cover"
//                   fill
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
//                 <div className="absolute bottom-6 left-6 right-6">
//                   <div className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-lg">
//                     <div className="flex items-center gap-4">
//                       <div className="w-14 h-14 rounded-full bg-[#c9a882]/20 flex items-center justify-center">
//                         <Star className="h-6 w-6 text-[#8b5d3b] fill-[#8b5d3b]" />
//                       </div>
//                       <div>
//                         <div className="text-2xl font-light text-[#8b5d3b]">4.9/5</div>
//                         <div className="text-sm text-[#1a1a1a]/60">Based on 500+ reviews</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#c9a882]/20 rounded-full blur-2xl" />
//               <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#d0845b]/20 rounded-full blur-2xl" />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }






"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/app/utils/url";
import { useTranslations } from "next-intl";
import {
  Building2,
  Home,
  TrendingUp,
  Key,
  Users,
  FileText,
  BadgeCheck,
  Clock,
  Shield,
  Award,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  Target,
  Handshake,
  CheckCircle2,
  Star,
  MapPin,
} from "lucide-react";

import Image from "next/image";

const services = [
  {
    icon: Home,
    title: "Property_Buying",
    description: "Property_Buying_Desc",
    features: [
      "Property_Buying_Feature_1",
      "Property_Buying_Feature_2",
      "Property_Buying_Feature_3",
      "Property_Buying_Feature_4",
    ],
  },
  {
    icon: TrendingUp,
    title: "Offplan_Investment",
    description: "Offplan_Investment_Desc",
    features: [
      "Offplan_Investment_Feature_1",
      "Offplan_Investment_Feature_2",
      "Offplan_Investment_Feature_3",
      "Offplan_Investment_Feature_4",
    ],
  },
  {
    icon: Key,
    title: "Property_Selling",
    description: "Property_Selling_Desc",
    features: [
      "Property_Selling_Feature_1",
      "Property_Selling_Feature_2",
      "Property_Selling_Feature_3",
      "Property_Selling_Feature_4",
    ],
  },
  {
    icon: Building2,
    title: "Property_Management",
    description: "Property_Management_Desc",
    features: [
      "Property_Management_Feature_1",
      "Property_Management_Feature_2",
      "Property_Management_Feature_3",
      "Property_Management_Feature_4",
    ],
  },
  {
    icon: FileText,
    title: "Mortgage_Advisory",
    description: "Mortgage_Advisory_Desc",
    features: [
      "Mortgage_Advisory_Feature_1",
      "Mortgage_Advisory_Feature_2",
      "Mortgage_Advisory_Feature_3",
      "Mortgage_Advisory_Feature_4",
    ],
  },
  {
    icon: Users,
    title: "Investment_Consultation",
    description: "Investment_Consultation_Desc",
    features: [
      "Investment_Consultation_Feature_1",
      "Investment_Consultation_Feature_2",
      "Investment_Consultation_Feature_3",
      "Investment_Consultation_Feature_4",
    ],
  },
];

const stats = [
  { value: "500+", label: "Properties Sold", icon: Home },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "AED 2B+", label: "Transaction Value", icon: TrendingUp },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Share your goals and preferences in a personalized meeting with our expert advisors.",
    icon: Handshake,
  },
  {
    step: "02",
    title: "Property Discovery",
    description: "We curate a selection of properties that perfectly match your criteria and budget.",
    icon: Target,
  },
  {
    step: "03",
    title: "Viewings & Evaluation",
    description: "Experience properties firsthand with guided tours and comprehensive market analysis.",
    icon: MapPin,
  },
  {
    step: "04",
    title: "Seamless Transaction",
    description: "From negotiation to handover, we manage every detail for a stress-free experience.",
    icon: CheckCircle2,
  },
];

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const t = useTranslations();

  return (
    <main className="bg-[#f6ecdf] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6ecdf] via-[#f0e4d3] to-[#e8d9c5]" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#c9a882]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#d0845b]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-4 py-1.5 text-[13px] tracking-tight text-[#0e0e0e]/80 shadow-sm mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[#c9a882]" />
              {t("Hero_Badge")}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-[#0e0e0e] leading-[1.1] tracking-tight mb-6">
              {t("Hero_Title_1")}{" "}
              <span className="bg-gradient-to-r from-[#c9a882] to-[#8b5d3b] bg-clip-text text-transparent font-normal">
                {t("Hero_Title_2")}
              </span>
            </h1>
            <p className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mb-8">
              {t("Hero_Description")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-10 border-y border-[#d0845b]/10">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c9a882]/10 mb-4">
                  <stat.icon className="h-5 w-5 text-[#8b5d3b]" />
                </div>
                <div className="text-3xl md:text-4xl font-light text-[#8b5d3b] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#1a1a1a]/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#0e0e0e] mb-4">
              {t("Our_Services_Title")}
            </h2>
            <p className="text-[#1a1a1a]/60 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to your unique needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#d0845b]/10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9a882]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a882]/20 to-[#d0845b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-[#8b5d3b]" />
                  </div>
                  
                  <h3 className="text-xl font-medium text-[#0e0e0e] mb-2">
                    {t(service.title)}
                  </h3>
                  
                  <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-4">
                    {t(service.description)}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-[#1a1a1a]/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c9a882]" />
                        {t(feature)}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-[#d0845b]/10">
                    <button className="flex items-center gap-2 text-[#8b5d3b] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                      {t("Learn_More")}
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#0e0e0e] mb-4">
              How We <span className="text-[#8b5d3b]">Work</span>
            </h2>
            <p className="text-[#1a1a1a]/60 max-w-2xl mx-auto">
              A streamlined process designed to make your real estate journey effortless
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#c9a882]/40 to-transparent" />
                )}
                
                <div className="bg-[#f6ecdf]/50 rounded-2xl p-5 hover:bg-[#f6ecdf] transition-colors duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#8b5d3b] flex items-center justify-center text-white font-light text-lg">
                      {step.step}
                    </div>
                    <step.icon className="h-6 w-6 text-[#c9a882]" />
                  </div>
                  
                  <h3 className="text-lg font-medium text-[#0e0e0e] mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#0e0e0e] mb-6">
                {t("Why_Choose_Evernest")}
              </h2>
              
              <p className="text-[#1a1a1a]/70 leading-relaxed mb-6">
                {t("Why_Choose_Desc")}
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: BadgeCheck, title: "RERA Certified", desc: "Fully licensed and regulated by Dubai's Real Estate Regulatory Agency" },
                  { icon: Shield, title: "Secure Transactions", desc: "End-to-end protection for all your financial transactions" },
                  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance for all your real estate needs" },
                  { icon: Award, title: "Award Winning", desc: "Recognized as one of Dubai's top real estate agencies" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-[#d0845b]/10">
                      <item.icon className="h-5 w-5 text-[#8b5d3b]" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#0e0e0e] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#1a1a1a]/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Luxury_Property"
                  className="w-full h-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-[#c9a882]/20 flex items-center justify-center">
                        <Star className="h-6 w-6 text-[#8b5d3b] fill-[#8b5d3b]" />
                      </div>
                      <div>
                        <div className="text-2xl font-light text-[#8b5d3b]">4.9/5</div>
                        <div className="text-sm text-[#1a1a1a]/60">Based on 500+ reviews</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#c9a882]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#d0845b]/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}