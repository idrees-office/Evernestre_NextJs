"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, Award, Users, Sparkles, ArrowRight, Filter, Cpu, Settings, UserCog } from "lucide-react";
import Header from "../includes/header";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import Image from "next/image";
import { getTeam } from "@/lib/team";

type TeamMember = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  designation: string | null;
  photo: string | null;
  photo_thumb: string | null;
  joining_date: string | null;
};

type TeamData = {
  [designation: string]: TeamMember[];
};

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<string>("CEO");
  const [teamData, setTeamData] = useState<TeamData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  // Fetch team data
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        setLoading(true);
        const data = await getTeam();
        
        if (data.status && data.teams) {
          setTeamData(data.teams);
        } else {
          console.error("Failed to load team data");
        }
      } catch (err) {
        console.error("Error fetching team data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamData();
  }, []);

  // Get all categories from data
  const getCategories = () => {
    const designations = Object.keys(teamData);
    const categoriesSet = new Set<string>();
    
    // Always include these categories
    categoriesSet.add("CEO");
    categoriesSet.add("Sales");
    categoriesSet.add("Creative");
    categoriesSet.add("Support");
    
    return Array.from(categoriesSet);
  };

  // Flatten team data for display with CEO first
  const allTeamMembers: TeamMember[] = (() => {
    const allMembers = Object.values(teamData).flat();
    
    // Sort members: CEO first, then others
    return [...allMembers].sort((a, b) => {
      const aIsCEO = a.designation?.toLowerCase() === 'ceo';
      const bIsCEO = b.designation?.toLowerCase() === 'ceo';
      
      if (aIsCEO && !bIsCEO) return -1;
      if (!aIsCEO && bIsCEO) return 1;
      return 0;
    });
  })();

  // Get category for each member
  const getMemberCategory = (designation: string | null): string => {
    if (!designation) return "Support";
    
    const designationLower = designation.toLowerCase();
    
    // CEO category
    if (designationLower.includes('ceo')) {
      return "CEO";
    }
    
    // Sales category
    if (designationLower.includes('agent') || designationLower.includes('sale')) {
      return "Sales";
    }
    
    // Creative category
    if (
      designationLower.includes('software') || 
      designationLower.includes('engineer') ||
      designationLower.includes('marketing') ||
      designationLower.includes('graphic') ||
      designationLower.includes('designer') ||
      designationLower.includes('creative') ||
      designationLower.includes('content') ||
      designationLower.includes('writer') ||
      designationLower.includes('video') ||
      designationLower.includes('editor') ||
      designationLower.includes('performance')
    ) {
      return "Creative";
    }
    
    // Support category (everything else)
    return "Support";
  };

  // Format phone number
  const formatPhone = (phone: string | null): string => {
    if (!phone) return "+971500000000";
    return phone.startsWith('+') ? phone : `+${phone}`;
  };

  // Get experience based on joining date
  const getExperience = (joiningDate: string | null): string => {
    if (!joiningDate) return "";
    
    try {
      const joinYear = new Date(joiningDate).getFullYear();
      const currentYear = new Date().getFullYear();
      const years = currentYear - joinYear;
      
      if (years <= 0) return "New";
      if (years === 1) return "1+ yr";
      return `${years}+ yrs`;
    } catch {
      return "Experienced";
    }
  };

  // Filter team members by category
  const filteredTeam = activeCategory === "All" 
    ? allTeamMembers
    : allTeamMembers.filter(member => 
        getMemberCategory(member.designation) === activeCategory
      );

  const categories = getCategories();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-[#fdfbf9] via-[#f6ecdf] to-[#fdfbf9]">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <div className="h-8 w-48 mx-auto mb-4 bg-[#8b5d3b]/10 animate-pulse rounded-full" />
              <div className="h-12 w-80 mx-auto mb-4 bg-[#8b5d3b]/10 animate-pulse rounded-full" />
              <div className="h-4 w-96 mx-auto bg-[#8b5d3b]/10 animate-pulse rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-80 w-full bg-[#8b5d3b]/10 animate-pulse" />
                  <div className="p-6">
                    <div className="h-6 w-3/4 mb-2 bg-[#8b5d3b]/10 animate-pulse rounded-full" />
                    <div className="h-4 w-1/2 bg-[#8b5d3b]/10 animate-pulse rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-[#fdfbf9] via-[#f6ecdf]/30 to-[#fdfbf9]">
        {/* Decorative Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#8b5d3b]/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#c89a67]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <section className="relative min-h-[20vh] flex items-center justify-center bg-[#f6ecdf] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f6ecdf] via-[#fffaf5] to-[#f6ecdf]/90"></div>
          <div className="absolute top-20 left-16 w-20 h-20 bg-[#8b5d3b]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 right-16 w-32 h-32 bg-[#3c2f26]/10 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container relative z-10 mx-auto px-6 text-center"
          >
            <h1 className="text-3xl md:text-3xl font-light text-[#3c2f26] leading-tight tracking-tight mb-2 mt-6">
              Excellence Meets{" "}
              <span className="bg-gradient-to-r from-[#8b5d3b] to-[#c89a67] bg-clip-text text-transparent font-medium">
                Experience
              </span>
            </h1>
            <p className="text-[#3c2f26]/70 text-md mx-auto leading-relaxed">
              Our professionals blend creativity, technology, and expertise to
              redefine the real estate experience.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-[#8b5d3b]/20 rounded-full px-4 py-2 mb-6 shadow-sm mt-6">
              <span className="w-2 h-2 bg-[#8b5d3b] rounded-full"></span>
              <span className="text-[#3c2f26]/70 text-sm font-medium tracking-wide">
                {allTeamMembers.length} Expert Professionals
              </span>
            </div>
          </motion.div>
        </section>

        {/* Filter Section */}
        <section className="sticky top-0 z-40 bg-white/70 backdrop-blur-xl border-y border-[#8b5d3b]/5">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 py-5 overflow-x-auto scrollbar-hide">
              <Filter className="w-4 h-4 text-[#8b5d3b]/50 mr-2 flex-shrink-0" />
              {categories.map((category) => {
                const count = category === "All" 
                  ? allTeamMembers.length 
                  : allTeamMembers.filter(m => getMemberCategory(m.designation) === category).length;
                
                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      activeCategory === category
                        ? "bg-[#8b5d3b] text-white shadow-lg shadow-[#8b5d3b]/25 cursor-pointer"
                        : "bg-white text-[#3c2f26]/70 hover:bg-[#f6ecdf] border border-[#8b5d3b]/10 hover:border-[#8b5d3b]/30"
                    }`}
                  >
                    {category}
                    <span className={`ml-2 text-xs ${activeCategory === category ? "text-white/70" : "text-[#8b5d3b]/50"}`}>
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 cursor-pointer"
              >
                {filteredTeam.map((member) => {
                  const category = getMemberCategory(member.designation);
                  const experience = getExperience(member.joining_date);
                  const formattedPhone = formatPhone(member.phone);

                  return (
                    <motion.div
                      key={member.id}
                      layout
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                      className="group"
                    >
                      <div className="relative bg-white rounded-md overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer">
                        {/* Image Container */}
                        <div className="relative h-[400px] overflow-hidden">
                          <Image
                            src={
                              member.photo ||
                              member.photo_thumb ||
                              "/assets/team/default-profile.jpg"
                            }
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />

                          {/* Subtle bottom gradient just to read text */}
                          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                          {/* Name & Role */}
                          <div className="absolute inset-x-0 bottom-0 px-5 pb-2">
                            <h3 className="text-white text-lg font-normal tracking-tight">
                              {member.name}
                            </h3>
                            {/* <p className="text-white/80 text-xs mt-1">
                              {member.designation || "Team Member"}
                            </p> */}
                          </div>

                          {/* Category Icon (top right, subtle) */}
                          <div className="absolute top-4 right-4">
                            <div className="w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center shadow-md">
                              {category === "CEO" && (
                                <Award className="w-4 h-4 text-white" />
                              )}
                              {category === "Sales" && (
                                <Users className="w-4 h-4 text-white" />
                              )}
                              {category === "Creative" && (
                                <Sparkles className="w-4 h-4 text-white" />
                              )}
                              {category === "Support" && (
                                <Settings className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Bottom Content */}
                        <div className="px-5 py-4 bg-white">
                          <div className="flex items-center justify-between gap-3">
                            {/* Chips */}
                            <div className="flex flex-wrap gap-2">
                              {/* <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-600">
                                {experience}
                              </span> */}
                              <span className="inline-flex items-center rounded-full bg-[#f6ecdf] px-2.5 py-1 text-[11px] font-semibold text-[#8b5d3b] uppercase tracking-wide">
                                {category}
                              </span>
                            </div>

                            {/* Contact Actions */}
                            <motion.div
                              initial={{ opacity: 0.5, y: 4 }}
                              animate={{
                                opacity: hoveredMember === member.id ? 1 : 0.7,
                                y: hoveredMember === member.id ? 0 : 4,
                              }}
                              transition={{ duration: 0.25 }}
                              className="flex items-center gap-2"
                            >
                              <a
                                href={`mailto:${member.email}`}
                                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:border-[#8b5d3b] hover:text-[#8b5d3b] hover:shadow-sm transition-all duration-200"
                              >
                                <Mail className="w-4 h-4" />
                              </a>
                              <a
                                href={`https://wa.me/${formattedPhone.replace(/\D/g, "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-sm transition-all duration-200"
                              >
                                <MessageCircle className="w-4 h-4" />
                              </a>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {filteredTeam.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#f6ecdf] flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#8b5d3b]/50" />
                </div>
                <p className="text-[#3c2f26]/50 text-lg">
                  No team members found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-light text-[#3c2f26] mb-4">
                Our Commitment to <span className="font-semibold text-[#8b5d3b]">Excellence</span>
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8b5d3b] to-transparent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { title: "Expert Advisory", desc: "Deep market knowledge and personalized guidance for every client.", icon: "🎯" },
                { title: "Creative Excellence", desc: "Innovative approaches to marketing and property presentation.", icon: "✨" },
                { title: "Technology Driven", desc: "Leveraging cutting-edge tools for seamless experiences.", icon: "💻" },
                { title: "Client First", desc: "Your success and satisfaction are our top priorities.", icon: "⭐" },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl hover:shadow-[#8b5d3b]/5 transition-all duration-500 border border-[#8b5d3b]/5"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-[#3c2f26] mb-3">{value.title}</h3>
                  <p className="text-[#3c2f26]/60 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}

