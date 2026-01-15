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

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
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

// 3D Process Step Component
function ProcessStep({ 
  step, 
  index, 
  isLast 
}: { 
  step: typeof processSteps[0]; 
  index: number;
  isLast: boolean;
}) {
  const stepRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ["start end", "start center"]
  });
  
  const stepY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const stepRotateY = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -15 : 15, 0]);
  const stepOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const stepScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  
  return (
    <motion.div
      ref={stepRef}
      style={{
        y: stepY,
        rotateY: stepRotateY,
        opacity: stepOpacity,
        scale: stepScale,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 0,
        z: 30,
        transition: { duration: 0.3 }
      }}
      className="relative"
    >
      {!isLast && (
        <motion.div 
          className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[#c9a882]/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
        />
      )}
      
      <motion.div 
        className="bg-[#f6ecdf]/50 rounded-2xl p-5 hover:bg-[#f6ecdf] transition-colors duration-300 h-full"
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(201, 168, 130, 0.2)",
          border: "1px solid rgba(201, 168, 130, 0.3)"
        }}
      >
        <motion.div 
          className="flex items-center gap-4 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="w-12 h-12 rounded-full bg-[#8b5d3b] flex items-center justify-center text-white font-light text-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {step.step}
          </motion.div>
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <step.icon className="h-6 w-6 text-[#c9a882]" />
          </motion.div>
        </motion.div>
        
        <h3 className="text-lg font-medium text-[#0e0e0e] mb-2">
          {step.title}
        </h3>
        
        <p className="text-[#1a1a1a]/60 text-sm leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

// 3D Service Card Component
function ServiceCard({ 
  service, 
  index, 
  isHovered, 
  onHover 
}: { 
  service: typeof services[0]; 
  index: number; 
  isHovered: boolean;
  onHover: (index: number | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"]
  });
  
  const cardY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const cardRotateX = useTransform(scrollYProgress, [0, 1], [25, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const cardScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateXValue = useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]);
  const rotateYValue = useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onHover(null);
  };
  
  return (
    <motion.div
      ref={cardRef}
      style={{
        y: cardY,
        rotateX: cardRotateX,
        opacity: cardOpacity,
        scale: cardScale,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => onHover(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={isHovered ? {
        rotateX: rotateXValue,
        rotateY: rotateYValue,
        scale: 1.05,
        z: 50
      } : {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        z: 0
      }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#d0845b]/10 overflow-hidden"
    >
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#c9a882]/10 to-transparent rounded-bl-full"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c9a882]/20 to-[#d0845b]/10 flex items-center justify-center mb-4"
          animate={isHovered ? { 
            scale: 1.2, 
            rotate: 360,
            boxShadow: "0 10px 30px rgba(201, 168, 130, 0.3)"
          } : { 
            scale: 1, 
            rotate: 0,
            boxShadow: "0 0 0 rgba(201, 168, 130, 0)"
          }}
          transition={{ duration: 0.5 }}
        >
          <service.icon className="h-6 w-6 text-[#8b5d3b]" />
        </motion.div>
        
        <h3 className="text-xl font-medium text-[#0e0e0e] mb-2">
          {service.title}
        </h3>
        
        <p className="text-[#1a1a1a]/60 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-center gap-2 text-sm text-[#1a1a1a]/70"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-[#c9a882]"
                animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
              />
              {feature}
            </motion.li>
          ))}
        </ul>
        
        <div className="mt-4 pt-4 border-t border-[#d0845b]/10">
          <motion.button 
            className="flex items-center gap-2 text-[#8b5d3b] text-sm font-medium"
            animate={isHovered ? { gap: 8 } : { gap: 2 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
            <motion.div
              animate={isHovered ? { x: 5 } : { x: 0 }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
<<<<<<< HEAD
  const [hoveredService, setHoveredService] = useState(null);
  const t = useTranslations();
=======
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScroll = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // 3D Transform values
  const heroY = useTransform(heroScroll.scrollYProgress, [0, 1], [0, -100]);
  const heroScale = useTransform(heroScroll.scrollYProgress, [0, 1], [1, 0.95]);
  const heroOpacity = useTransform(heroScroll.scrollYProgress, [0, 0.5], [1, 0]);
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  // Smooth spring animations
  const smoothY = useSpring(parallaxY, { stiffness: 100, damping: 30 });
  const smoothRotate = useSpring(rotateX, { stiffness: 100, damping: 30 });
>>>>>>> e974220 (fix the status)

  return (
    <main ref={containerRef} className="bg-[#f6ecdf] min-h-screen overflow-hidden">
      {/* Hero Section with 3D Parallax */}
      <section ref={heroRef} className="relative overflow-hidden h-screen flex items-center">
        <motion.div 
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-br from-[#f6ecdf] via-[#f0e4d3] to-[#e8d9c5]"
        />
        
        {/* Animated Background Elements */}
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -300]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#c9a882]/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -200]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180])
          }}
          className="absolute bottom-10 left-10 w-72 h-72 bg-[#d0845b]/10 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ 
              perspective: 1000,
              transformStyle: "preserve-3d"
            }}
            className="max-w-3xl"
          >
<<<<<<< HEAD
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
=======
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 backdrop-blur px-4 py-1.5 text-[13px] tracking-tight text-[#0e0e0e]/80 shadow-sm mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-3.5 w-3.5 text-[#c9a882]" />
              </motion.div>
              Premium Real Estate Services
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-light text-[#0e0e0e] leading-[1.1] tracking-tight mb-6"
            >
              Elevating Your{" "}
              <motion.span 
                className="bg-gradient-to-r from-[#c9a882] to-[#8b5d3b] bg-clip-text text-transparent font-normal inline-block"
                animate={{ 
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  backgroundSize: "200% 200%"
                }}
              >
                Real Estate
              </motion.span>
              <br />
              Experience
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[#1a1a1a]/70 text-lg md:text-xl leading-relaxed font-light max-w-2xl mb-8"
            >
              From finding your dream home to maximizing your investment returns, 
              our comprehensive suite of services is designed to exceed your expectations 
              at every step.
            </motion.p>
>>>>>>> e974220 (fix the status)
          </motion.div>
        </div>
      </section>

      {/* Stats Section with 3D Cards */}
      <motion.section 
        style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -50]) }}
        className="bg-white py-10 border-y border-[#d0845b]/10 relative z-20"
      >
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50, rotateY: 15, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateY: 5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000
                }}
                className="text-center"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#c9a882]/10 mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-5 w-5 text-[#8b5d3b]" />
                </motion.div>
                <motion.div 
                  className="text-3xl md:text-4xl font-light text-[#8b5d3b] mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: index * 0.15 
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-[#1a1a1a]/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Grid with 3D Cards */}
      <section ref={servicesRef} className="py-12 md:py-16 relative">
        <motion.div
          style={{ 
            y: useTransform(scrollYProgress, [0.2, 0.4], [0, -100]),
            opacity: useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 1])
          }}
          className="container mx-auto max-w-7xl px-6 md:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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
              <ServiceCard
                key={service.title}
<<<<<<< HEAD
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
                </div>
              </motion.div>
=======
                service={service}
                index={index}
                isHovered={hoveredService === index}
                onHover={setHoveredService}
              />
>>>>>>> e974220 (fix the status)
            ))}
          </div>
        </motion.div>
      </section>
<<<<<<< HEAD
      
      <section className="bg-white py-12 md:py-16">
=======

      {/* Process Section with 3D Timeline */}
      <motion.section 
        ref={processRef}
        style={{ 
          y: useTransform(scrollYProgress, [0.4, 0.6], [0, -80]),
        }}
        className="bg-white py-12 md:py-16 relative"
      >
>>>>>>> aeea617 (fix the c)
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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
              <ProcessStep
                key={step.step}
                step={step}
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us with 3D Parallax */}
      <motion.section 
        style={{ 
          y: useTransform(scrollYProgress, [0.6, 0.8], [0, -100]),
        }}
        className="py-12 md:py-16 relative"
      >
        <div className="container mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
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
                    initial={{ opacity: 0, x: -30, rotateY: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="flex gap-4"
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 border border-[#d0845b]/10"
                      whileHover={{ 
                        rotate: 360, 
                        scale: 1.1,
                        boxShadow: "0 10px 20px rgba(201, 168, 130, 0.3)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-5 w-5 text-[#8b5d3b]" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-[#0e0e0e] mb-1">{item.title}</h3>
                      <p className="text-sm text-[#1a1a1a]/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d", perspective: 1000 }}
              className="relative"
            >
<<<<<<< HEAD
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
=======
              <motion.div 
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img
>>>>>>> e974220 (fix the status)
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                  alt="Luxury_Property"
                  className="w-full h-full object-cover"
<<<<<<< HEAD
                  fill
=======
                  style={{
                    scale: useTransform(scrollYProgress, [0.6, 0.9], [1, 1.1])
                  }}
>>>>>>> e974220 (fix the status)
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.div 
                    className="bg-white/95 backdrop-blur rounded-xl p-5 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-14 h-14 rounded-full bg-[#c9a882]/20 flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Star className="h-6 w-6 text-[#8b5d3b] fill-[#8b5d3b]" />
                      </motion.div>
                      <div>
                        <div className="text-2xl font-light text-[#8b5d3b]">4.9/5</div>
                        <div className="text-sm text-[#1a1a1a]/60">Based on 500+ reviews</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 w-32 h-32 bg-[#c9a882]/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#d0845b]/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}