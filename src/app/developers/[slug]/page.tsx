
// "use client";
// import React, { useEffect, useState, use as usePromise } from "react";
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { 
//   ArrowLeft, Share2, Heart, MapPin, Building2, Calendar, Award, 
//   Trophy, Users, Globe, TrendingUp, CheckCircle2, BedDouble, Bath, 
//   Maximize, ArrowRight, Phone, Mail, Clock, Send, CheckCircle
// } from 'lucide-react';
// import RegisterCtaSection from '@/app/Components/RegisterCtaSection';
// import OffPlanProjects from '@/app/Components/OffPlanProjects';
// import { getDevelopersBySlug } from "@/lib/developer";

// // Static Data
// const developer = {
//   name: "Emaar Properties",
//   logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop&auto=format",
//   tagline: "Shaping skylines and creating communities that inspire people around the world.",
//   yearEstablished: "1997",
//   projectsCount: 60,
//   locations: 12,
//   awards: 45,
//   happyClients: "50K",
//   countries: 8,
//   investment: "$35B",
//   aboutImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&auto=format",
//   description: "Emaar Properties PJSC is one of the world's most valuable and admired real estate development companies. With proven competencies in properties, shopping malls & retail and hospitality & leisure, Emaar shapes new lifestyles with a focus on design excellence, build quality and timely delivery.",
//   highlights: [
//     "Developer of Burj Khalifa, the world's tallest building",
//     "Created Dubai Mall, one of the world's largest shopping destinations",
//     "Over 50,000 residential units delivered globally",
//     "Pioneer in integrated community development"
//   ]
// };

// const projects = [
//   { id: 1, name: "Downtown Views II", location: "Downtown Dubai", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&auto=format", price: "AED 1.2M", beds: "1-4 Beds", baths: "1-4 Baths", size: "650-2,500 sq.ft", status: "Ready", type: "residential" },
//   { id: 2, name: "Creek Harbour Tower", location: "Dubai Creek Harbour", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&auto=format", price: "AED 2.8M", beds: "2-5 Beds", baths: "2-5 Baths", size: "1,200-4,000 sq.ft", status: "Under Construction", type: "residential" },
//   { id: 3, name: "Marina Shores", location: "Dubai Marina", image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop&auto=format", price: "AED 1.8M", beds: "1-3 Beds", baths: "1-3 Baths", size: "800-2,000 sq.ft", status: "Ready", type: "residential" },
//   { id: 4, name: "Business Bay Executive", location: "Business Bay", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&auto=format", price: "AED 5.5M", beds: "Office Space", baths: "Multiple", size: "2,000-10,000 sq.ft", status: "Ready", type: "commercial" },
//   { id: 5, name: "The Valley Villas", location: "Dubai Land", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop&auto=format", price: "AED 3.2M", beds: "3-5 Beds", baths: "3-6 Baths", size: "2,500-5,000 sq.ft", status: "Off Plan", type: "residential" },
//   { id: 6, name: "Palm Heights", location: "Palm Jumeirah", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&auto=format", price: "AED 4.5M", beds: "2-4 Beds", baths: "2-5 Baths", size: "1,800-4,500 sq.ft", status: "Ready", type: "residential" }
// ];

// // export default function DeveloperDetail() {
// export default function DeveloperDetail({ params }: { params: Promise<{ slug: string }> }) {
//     const { slug } = usePromise(params);
//     const [developers, setDevelopers] = useState<any>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//   const [activeFilter, setActiveFilter] = useState('all');
//   const [formData, setFormData] = useState({ 
//     name: '', 
//     email: '', 
//     phone: '', 
//     interest: '', 
//     message: '' 
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const filteredProjects = activeFilter === 'all' 
//     ? projects 
//     : projects.filter(p => p.type === activeFilter);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
//       setSubmitted(false);
//     }, 3000);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//    useEffect(() => {
//       const fetchArea = async () => {
//         try {
//           setLoading(true);
//         const data = await getDevelopersBySlug(slug);
//           setDevelopers(data.developers ?? data);
  
//         } catch (err) {
//           console.error(err);
//           setError("Failed to load area details.");
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchArea();
//     }, [slug]);

//   return (
//     <div className="min-h-screen bg-white">
      
//       <section className="relative bg-gradient-to-b from-[#f6ecdf] to-[#fffaf5] overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
//         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c97a52]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
//         <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <motion.div 
//               initial={{ opacity: 0, x: -40 }} 
//               animate={{ opacity: 1, x: 0 }} 
//               transition={{ duration: 0.7 }}
//             >
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="h-px w-12 bg-[#c97a52]" />
//                 <span className="text-[#8b5d3b] text-sm font-medium tracking-wider uppercase">Premier Developer</span>
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3c2f26] mb-6 leading-tight">
//                 {developer.name}
//               </h1>
//               <p className="text-[#5a4a3f] text-lg leading-relaxed mb-8 max-w-xl">
//                 {developer.tagline}
//               </p>
              
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 {[
//                   { icon: Building2, value: `${developer.projectsCount}+`, label: 'Projects' },
//                   { icon: Calendar, value: developer.yearEstablished, label: 'Established' },
//                   { icon: MapPin, value: `${developer.locations}+`, label: 'Locations' },
//                   { icon: Award, value: `${developer.awards}+`, label: 'Awards' }
//                 ].map((stat, idx) => (
//                   <div 
//                     key={idx} 
//                     className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#f0e4d9]"
//                   >
//                     <stat.icon className="w-5 h-5 text-[#c97a52] mb-2" />
//                     <p className="text-2xl font-semibold text-[#3c2f26]">{stat.value}</p>
//                     <p className="text-xs text-[#8b5d3b]">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }} 
//               animate={{ opacity: 1, scale: 1 }} 
//               transition={{ duration: 0.7, delay: 0.2 }} 
//               className="flex justify-center"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#c97a52]/20 to-[#d4a373]/20 rounded-3xl blur-2xl scale-110" />
//                 <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#f0e4d9]">
//                   <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
//                     <Image
//                       src={developer.logo}
//                       alt={developer.name}
//                       fill
//                       className="object-contain"
//                       sizes="(max-width: 768px) 192px, 256px"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="bg-white py-16 md:py-24">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <motion.div 
//               initial={{ opacity: 0, y: 40 }} 
//               whileInView={{ opacity: 1, y: 0 }} 
//               viewport={{ once: true }} 
//               className="relative"
//             >
//               <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#c97a52]" />
//               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#c97a52]" />
//               <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
//                 <Image
//                   src={developer.aboutImage}
//                   alt="About Developer"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 50vw"
//                 />
//               </div>
//             </motion.div>
            
//             <motion.div 
//               initial={{ opacity: 0, y: 40 }} 
//               whileInView={{ opacity: 1, y: 0 }} 
//               viewport={{ once: true }} 
//               transition={{ delay: 0.2 }}
//             >
//               <div className="flex items-center gap-2 mb-4">
//                 <span className="h-px w-12 bg-[#c97a52]" />
//                 <span className="text-[#8b5d3b] text-sm font-medium tracking-wider uppercase">About the Developer</span>
//               </div>
//               <h2 className="text-3xl md:text-4xl font-light text-[#3c2f26] mb-6">
//                 A Legacy of Excellence in Real Estate
//               </h2>
//               <p className="text-[#5a4a3f] leading-relaxed mb-8">{developer.description}</p>
//               <div className="space-y-4">
//                 {developer.highlights.map((highlight, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <CheckCircle2 className="w-5 h-5 text-[#c97a52] mt-0.5 flex-shrink-0" />
//                     <span className="text-[#3c2f26]">{highlight}</span>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//         <RegisterCtaSection />
//         <OffPlanProjects projects={[]} />
//     </div>
//   );
// }





"use client";
import React, { useEffect, useState, use as usePromise } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowLeft, Share2, Heart, MapPin, Building2, Calendar, Award, 
  Trophy, Users, Globe, TrendingUp, CheckCircle2, BedDouble, Bath, 
  Maximize, ArrowRight, Phone, Mail, Clock, Send, CheckCircle
} from 'lucide-react';
import RegisterCtaSection from '@/app/Components/RegisterCtaSection';
import OffPlanProjects from '@/app/Components/OffPlanProjects';
import { getDevelopersBySlug } from "@/lib/developer";

export default function DeveloperDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = usePromise(params);
    const [developers, setDevelopers] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // STATIC STATS YOU WANTED TO KEEP
    const staticStats = {
        projectsCount: "60+",
        yearEstablished: "1997",
        locations: "12+",
        awards: "45+"
    };

    useEffect(() => {
        const fetchArea = async () => {
            try {
                setLoading(true);
                const data = await getDevelopersBySlug(slug);
                setDevelopers(data.developers ?? data);
            } catch (err) {
                console.error(err);
                setError("Failed to load developer details.");
            } finally {
                setLoading(false);
            }
        };
        fetchArea();
    }, [slug]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-b from-[#f6ecdf] to-[#fffaf5] overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c97a52]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE */}
                        <motion.div 
                            initial={{ opacity: 0, x: -40 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-12 bg-[#c97a52]" />
                                <span className="text-[#8b5d3b] text-sm font-medium tracking-wider uppercase">Premier Developer</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3c2f26] mb-6 leading-tight">
                                {developers?.name}
                            </h1>

                            <p className="text-[#5a4a3f] text-lg leading-relaxed mb-8 max-w-xl">
                                {/* If you have a tagline, else fallback */}
                                {developers?.tagline ?? "A leading UAE real estate developer focused on quality and lifestyle living."}
                            </p>

                            {/* STATIC BOXES */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { icon: Building2, value: staticStats.projectsCount, label: 'Projects' },
                                    { icon: Calendar, value: staticStats.yearEstablished, label: 'Established' },
                                    { icon: MapPin, value: staticStats.locations, label: 'Locations' },
                                    { icon: Award, value: staticStats.awards, label: 'Awards' }
                                ].map((stat, idx) => (
                                    <div 
                                        key={idx} 
                                        className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#f0e4d9]"
                                    >
                                        <stat.icon className="w-5 h-5 text-[#c97a52] mb-2" />
                                        <p className="text-2xl font-semibold text-[#3c2f26]">{stat.value}</p>
                                        <p className="text-xs text-[#8b5d3b]">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.7, delay: 0.2 }} 
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#c97a52]/20 to-[#d4a373]/20 rounded-3xl blur-2xl scale-110" />
                                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#f0e4d9]">
                                    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
                                        <Image
                                            src={developers?.image}
                                            alt={developers?.name}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT ABOUT IMAGE */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            className="relative"
                        >
                            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                                <Image
                                    src={developers?.image}
                                    alt={developers?.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* RIGHT ABOUT TEXT */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-12 bg-[#c97a52]" />
                                <span className="text-[#8b5d3b] text-sm font-medium tracking-wider uppercase">About the Developer</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light text-[#3c2f26] mb-6">
                                A Legacy of Excellence in Real Estate
                            </h2>

                            <p className="text-[#5a4a3f] leading-relaxed mb-8"
                                dangerouslySetInnerHTML={{ __html: developers?.description }}
                            />

                            {/* If you ever add highlights from backend */}
                            {developers?.highlights?.map((h: string, i: number) => (
                                <div key={i} className="flex items-start gap-3 mb-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#c97a52]" />
                                    <span>{h}</span>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>

            <RegisterCtaSection />
            <OffPlanProjects projects={[]} />
        </div>
    );
}
