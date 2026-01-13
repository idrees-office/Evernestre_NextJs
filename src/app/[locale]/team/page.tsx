"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageCircle,
  MapPin,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  Filter,
  Cpu,
  Settings,
  UserCog,
} from "lucide-react";

import SocialLinksSection from "@/app/components/SocialLinksSection";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import Image from "next/image";
import { getTeam } from "@/lib/team";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

type TeamMember = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  designation: string | null;
  photo: string | null;
  photo_thumb: string | null;
  joining_date: string | null;
  slug: string;
};

type TeamData = {
  [designation: string]: TeamMember[];
};

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<string>("CEO");
  const [teamData, setTeamData] = useState<TeamData>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

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
    categoriesSet.add("Marketing Team");
    categoriesSet.add("Admins");

    return Array.from(categoriesSet);
  };

  // Flatten team data for display with CEO first
  const allTeamMembers: TeamMember[] = (() => {
    const allMembers = Object.values(teamData).flat();

    // Sort members: CEO first, then others
    return [...allMembers].sort((a, b) => {
      const aIsCEO = a.designation?.toLowerCase() === "ceo";
      const bIsCEO = b.designation?.toLowerCase() === "ceo";

      if (aIsCEO && !bIsCEO) return -1;
      if (!aIsCEO && bIsCEO) return 1;
      return 0;
    });
  })();

  // Get category for each member
  const getMemberCategory = (designation: string | null): string => {
    if (!designation) return "Admins";

    const designationLower = designation.toLowerCase();

    // CEO category
    if (designationLower.includes("ceo")) {
      return "CEO";
    }

    // Sales category
    if (
      designationLower.includes("agent") ||
      designationLower.includes("sale")
    ) {
      return "Sales";
    }

    // Creative category
    if (
      designationLower.includes("software") ||
      designationLower.includes("engineer") ||
      designationLower.includes("marketing") ||
      designationLower.includes("graphic") ||
      designationLower.includes("designer") ||
      designationLower.includes("creative") ||
      designationLower.includes("content") ||
      designationLower.includes("writer") ||
      designationLower.includes("video") ||
      designationLower.includes("editor") ||
      designationLower.includes("performance")
    ) {
      return "Marketing Team";
    }

    return "Admins";
  };

  // Format phone number
  const formatPhone = (phone: string | null): string => {
    if (!phone) return "+971500000000";
    return phone.startsWith("+") ? phone : `+${phone}`;
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
  const filteredTeam =
    activeCategory === "All"
      ? allTeamMembers
      : allTeamMembers.filter(
          (member) => getMemberCategory(member.designation) === activeCategory
        );

  const categories = getCategories();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const handleMemberClick = (member: TeamMember) => {
    router.push(`/${locale}/team/${member.slug}`);
  };

  if (loading) {
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-[#fdfbf9] via-[#f6ecdf] to-[#fdfbf9]">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <div className="h-8 w-48 mx-auto mb-4 bg-[#8b5d3b]/10 animate-pulse rounded-full" />
              <div className="h-12 w-80 mx-auto mb-4 bg-[#8b5d3b]/10 animate-pulse rounded-full" />
              <div className="h-4 w-96 mx-auto bg-[#8b5d3b]/10 animate-pulse rounded-full" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
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
      <div className="min-h-screen bg-[#fdfbf9] text-[#3c2f26]">
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div
            className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(139,93,59,0.16), transparent 60%)",
            }}
          />
          <div
            className="absolute -bottom-48 -left-48 h-[560px] w-[560px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(200,154,103,0.14), transparent 60%)",
            }}
          />
        </div>

        <header className="relative overflow-hidden">
          <div className="bg-[#f6ecdf]/70">
            <div className="container mx-auto px-4 py-10 md:py-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mx-auto max-w-3xl text-center"
              >
                {/* badge */}
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#8b5d3b]/15 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#8b5d3b]" />
                  <span className="text-sm font-medium text-[#3c2f26]/75 tracking-wide">
                    {allTeamMembers.length} {t("expert_professionals")}
                  </span>
                </div>

                <h1 className="mt-6 text-3xl md:text-4xl font-light tracking-tight leading-tight">
                  {t("excellence_meets")}{" "}
                  <span className="font-semibold bg-gradient-to-r from-[#8b5d3b] to-[#c89a67] bg-clip-text text-transparent">
                    {t("experience")}
                  </span>
                </h1>

                <p className="mt-4 text-base md:text-lg text-[#3c2f26]/65 leading-relaxed">
                  {t("real_estate_experience_description")}
                </p>
              </motion.div>
            </div>
          </div>
        </header>
        <section className="sticky top-0 z-40 border-b border-[#8b5d3b]/10 bg-[#fdfbf9]/80 backdrop-blur-xl">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 py-4 overflow-x-auto scrollbar-hide cursor-pointer">
              <Filter className="w-4 h-4 text-[#8b5d3b]/50 mr-1 flex-shrink-0 cursor-pointer" />
              {categories.map((category) => {
                const count =
                  category === "All"
                    ? allTeamMembers.length
                    : allTeamMembers.filter(
                        (m) => getMemberCategory(m.designation) === category
                      ).length;

                const isActive = activeCategory === category;

                return (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    whileTap={{ scale: 0.98 }}
                    className={[
                      "relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all whitespace-nowrap cursor-pointer",
                      isActive
                        ? "bg-[#8b5d3b] text-white shadow-md shadow-[#8b5d3b]/20 cursor-pointer"
                        : "bg-white text-[#3c2f26]/70 ring-1 ring-[#8b5d3b]/15 hover:bg-[#f6ecdf]/60 hover:ring-[#8b5d3b]/30 cursor-pointer",
                    ].join(" ")}
                  >
                    <span>{category}</span>
                    <span
                      className={[
                        "text-xs",
                        isActive ? "text-white/80" : "text-[#8b5d3b]/60",
                      ].join(" ")}
                    >
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                {filteredTeam.map((member) => {
                  const category = getMemberCategory(member.designation);
                  const formattedPhone = formatPhone(member.phone);

                  return (
                    <motion.div
                      key={member.id}
                      layout
                      onClick={() => handleMemberClick(member)}
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                      initial={{ opacity: 0, y: 14, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.99 }}
                      className="group cursor-pointer"
                    >
                      {/* CARD (no outer gradient border) */}
                      <div className="relative overflow-hidden rounded-md bg-white border border-[#8b5d3b]/10 shadow-sm transition-all duration-300 hover:shadow-[0_14px_40px_rgba(60,47,38,0.12)]">
                        {/* Top header strip */}
                        <div className="relative h-24 bg-[#f6ecdf] overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/35 to-transparent" />

                          {/* subtle shimmer */}
                          <motion.div
                            aria-hidden
                            className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12"
                            animate={{ x: ["0%", "220%"] }}
                            transition={{
                              duration: 2.4,
                              repeat: Infinity,
                              repeatDelay: 2.2,
                              ease: "easeInOut",
                            }}
                          />

                          {/* Category badge */}
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35 }}
                            className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-[#8b5d3b]/15 bg-white/75 px-3 py-1 text-[11px] font-semibold text-[#8b5d3b] backdrop-blur"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5d3b]" />
                            {category}
                          </motion.div>
                        </div>

                        {/* Body (reduced padding) */}
                        <div className="px-4 pb-4">
                          {/* Avatar (no colored border / no gradient ring) */}
                          <div className="-mt-10 flex justify-center">
                            <motion.div
                              initial={{ scale: 0.95, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              whileHover={{ scale: 1.02 }}
                              className="relative"
                            >
                              {/* soft pulse behind avatar (optional, subtle) */}
                              <motion.div
                                aria-hidden
                                className="absolute -inset-3 rounded-full"
                                style={{
                                  background:
                                    "radial-gradient(circle, rgba(139,93,59,0.12), transparent 65%)",
                                }}
                                animate={{ opacity: [0.25, 0.55, 0.25] }}
                                transition={{
                                  duration: 2.2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />

                              <div className="relative h-20 w-20 overflow-hidden rounded-full bg-[#fdfbf9] border border-black/5 shadow-sm">
                                <Image
                                  src={
                                    member.photo ||
                                    member.photo_thumb ||
                                    "/assets/team/default-profile.jpg"
                                  }
                                  alt={member.name}
                                  fill
                                  sizes="80px"
                                  className="object-cover transition duration-700 group-hover:scale-105 grayscale-[10%] group-hover:grayscale-0"
                                />
                              </div>
                            </motion.div>
                          </div>

                          {/* Name / role */}
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.06 }}
                            className="mt-3 text-center"
                          >
                            <h3 className="text-[15px] font-semibold tracking-tight text-[#3c2f26]">
                              {member.name}
                            </h3>
                            <p className="mt-0.5 text-[13px] text-[#3c2f26]/60">
                              {member.designation || "Team Member"}
                            </p>
                          </motion.div>

                          
                          <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[#8b5d3b]/15 to-transparent" />

                         
                          <div className="flex items-center justify-between">
                            <div className="text-[11px] text-[#3c2f26]/50">
                              {/* {getExperience(member.joining_date)} */}
                            </div>

                            <motion.div
                              initial={false}
                              animate={{
                                opacity: hoveredMember === member.id ? 1 : 0,
                                y: hoveredMember === member.id ? 0 : 3,
                              }}
                              transition={{ duration: 0.18 }}
                              className="text-[11px] font-medium text-[#8b5d3b]"
                            >
                              View Profile →
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
                <p className="text-[#3c2f26]/55 text-lg">
                  No team members found in this category.
                </p>
              </motion.div>
            )}
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#3c2f26]">
                {t("commitment_to_excellence_title")}{" "}
                <span className="font-semibold text-[#8b5d3b]">
                  {t("excellence_highlight")}
                </span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[#3c2f26]/60 leading-relaxed">
                {t("commitment_to_excellence_subtitle")}
              </p>
              <div className="mt-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-[#8b5d3b]/70 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "expert_advisory_title",
                  desc: "expert_advisory_desc",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 20s7-4 7-10V6l-7-3-7 3v4c0 6 7 10 7 10Z" />
                      <path d="M9 12l2 2 4-5" />
                    </svg>
                  ),
                },
                {
                  title: "creative_excellence_title",
                  desc: "creative_excellence_desc",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2Z" />
                      <path d="M19 14l.9 2.8L23 18l-3.1 1.2L19 22l-.9-2.8L15 18l3.1-1.2L19 14Z" />
                    </svg>
                  ),
                },
                {
                  title: "technology_driven_title",
                  desc: "technology_driven_desc",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M9 9h6v6H9z" />
                      <path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3" />
                    </svg>
                  ),
                },
                {
                  title: "client_first_title",
                  desc: "client_first_desc",
                  icon: (
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.6-7 10-7 10Z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-md border border-[#8b5d3b]/10 bg-white p-7 shadow-sm transition hover:shadow-[0_18px_45px_rgba(60,47,38,0.10)]"
                >
                  {/* subtle glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(600px_circle_at_20%_10%,rgba(139,93,59,0.10),transparent_55%)]" />

                  <div className="relative">
                    <h3 className="text-[15px] font-semibold tracking-tight text-[#3c2f26]">
                      {t(item.title)}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#3c2f26]/60">
                      {t(item.desc)}
                    </p>

                    <div className="mt-5 h-px w-10 bg-[#8b5d3b]/20 group-hover:w-14 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
       <RegisterCtaSection />
      <SocialLinksSection />
    </>
  );
}
