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
  ChevronRight,
} from "lucide-react";

import SocialLinksSection from "@/app/components/SocialLinksSection";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import { useTranslations } from "next-intl";


type Job = {
  id: string;
  title: string;
 department: "technology" | "creative" | "sales" | "operations" | "marketing";
  location: string;
  type: "full_time" | "part_time" | "remote";
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
};

const jobs: Job[] = [];
const departments = [
  "all",
  "technology",
  "creative",
  "sales",
  "marketing",
  "operations",
];



const benefits = [
  {
    icon: Award,
    title: 'career_growth',
    description: 'career_growth_desc'
  },
  {
    icon: GraduationCap,
    title: 'learning_development',
    description: 'learning_development_desc'
  },
  {
    icon: Users,
    title: 'great_culture',
    description: 'great_culture_desc'
  },
  {
    icon: TrendingUp,
    title: 'competitive_packages',
    description:'competitive_packages_desc'
  },
];


const cultureValues = [
  {
    title: "innovation_first",
    description: "innovation_first_desc",
  },
  {
    title: "collaborative_spirit",
    description: "collaborative_spirit_desc",
  },
  {
    title: "client_focused",
    description: "client_focused_desc",
  },
];

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState("All");
  const t = useTranslations()

  const filteredJobs = activeDepartment === "All"
    ? jobs
    : jobs.filter((job) => job.department === activeDepartment);

   

  return (
    <>
      <section className="relative min-h-[32vh] flex items-center justify-center bg-[#f6ecdf] to-white overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full " />
        <div className="absolute top-0 right-1/4 w-px h-full " />
        <div className="absolute top-1/2 left-0 w-full h-px " />

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="container relative z-10 mx-auto px-6 text-center py-14"
        >         
          <h1 className="text-3xl md:text-4xl font-light text-black leading-tight tracking-wide mb-4">
             { t('build_in_your_career')} {" "}
            <span className="font-normal"> { t('evernest') }</span>
          </h1>
          <p className="text-black text-sm max-w-lg mx-auto leading-relaxed mb-5">
            
            { t('join_our_dynamic_team') }
          </p>
          
        </motion.div>
      </section>

      
      <section className="bg-white py-14 border-t border-[#f0ebe4]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]"> { t('why_join_us')} </span>
            <h2 className="text-2xl md:text-[28px] font-light text-[#1a1a1a] mt-2">
              {t('employee')} <span className="text-[#d5a86e]"> {t('benefits')} </span>
            </h2>
            <div className="w-12 h-px bg-[#d5a86e] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-gradient-to-b from-[#faf8f5] to-white border border-[#f0ebe4] p-6 text-center hover:border-[#d5a86e]/40 hover:shadow-lg transition-all duration-400 rounded"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#d5a86e]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-12 h-12 mx-auto mb-4 bg-[#d5a86e]/10 rounded-full flex items-center justify-center group-hover:bg-[#d5a86e]/20 transition-colors">
                  <benefit.icon className="w-5 h-5 text-[#d5a86e]" />
                </div>
                <h3 className="text-sm font-medium text-[#1a1a1a] mb-2"> {t(benefit.title)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t(benefit.description)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="bg-[#faf8f5] border-y border-[#f0ebe4] sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={`min-w-[110px] h-10 px-5 text-xs font-medium tracking-wide transition-all duration-300 rounded relative overflow-hidden ${
                  activeDepartment === department
                    ? "bg-[#d5a86e] text-white shadow-md"
                    : "bg-white text-[#1a1a1a] border border-[#e8e0d8] hover:border-[#d5a86e] hover:text-[#d5a86e]"
                }`}
              >
                 {t(department)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]"> { t('opportunities')}</span>
            <h2 className="text-2xl md:text-[28px] font-light text-[#1a1a1a] mt-2">
              { t('open') } <span className="text-[#d5a86e]">{ t('positions') }</span>
            </h2>
            <div className="w-12 h-px bg-[#d5a86e] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-gradient-to-b from-[#faf8f5] to-white border border-[#f0ebe4] rounded overflow-hidden hover:border-[#d5a86e]/50 hover:shadow-xl transition-all duration-400"
              >
                <div className="h-1 bg-gradient-to-r from-[#d5a86e]/0 via-[#d5a86e] to-[#d5a86e]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-base font-medium text-[#1a1a1a] group-hover:text-[#d5a86e] transition-colors mb-1">
                        {job.title}
                      </h3>
                      <span className="text-[#d5a86e] text-[11px] font-medium uppercase tracking-wider">
                        {job.department}
                      </span>
                    </div>
                    <div className="w-10 h-10 bg-[#d5a86e]/10 rounded-full flex items-center justify-center group-hover:bg-[#d5a86e] transition-colors">
                      <Briefcase className="w-4 h-4 text-[#d5a86e] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 pb-4 border-b border-[#f0ebe4]">
                    {[
                      { icon: MapPin, text: job.location },
                      { icon: Clock, text: job.type },
                      { icon: Award, text: job.experience },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-gray-500">
                        <item.icon className="w-3.5 h-3.5 text-[#d5a86e]/70" />
                        <span className="text-[11px]">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-[11px] font-medium text-[#1a1a1a] uppercase tracking-wider mb-2">Requirements</h4>
                    <ul className="text-[11px] text-gray-500 space-y-1.5">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <ChevronRight className="w-3 h-3 text-[#d5a86e]" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {job.benefits.slice(0, 3).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-[#d5a86e] text-[10px] px-2.5 py-1 rounded-full border border-[#d5a86e]/20"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-[#d5a86e] text-white py-2.5 rounded text-xs font-medium hover:bg-[#c99a5e] transition-colors flex items-center justify-center gap-2 group/btn">
                    Apply Now
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[#faf8f5] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-base font-medium text-[#1a1a1a] mb-2">
                {t("no_open_positions")}
              </h3>
              <p className="text-gray-500 text-sm">
                {t("check_back_later")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Culture */}
      <section className="bg-[#f6ecdf] py-14 border-t border-[#e8ddd1]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]"> {t("our_foundation")}</span>
              <h2 className="text-2xl md:text-[28px] font-light text-[#1a1a1a] mt-2">
                {t("culture")} & <span className="text-[#d5a86e]">{t("values")}</span>
              </h2>
              <div className="w-12 h-px bg-[#d5a86e] mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group bg-white/80 backdrop-blur-sm border border-[#e8ddd1] p-6 rounded hover:border-[#d5a86e]/40 hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#d5a86e]/0 group-hover:bg-[#d5a86e] transition-colors" />
                  <h3 className="text-sm font-medium text-[#1a1a1a] mb-2 group-hover:text-[#d5a86e] transition-colors">{t(value.title)}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{t(value.description)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-white py-14 border-t border-[#f0ebe4]">
        <div className="container mx-auto px-6 text-center">
         <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]"> {t("get_started")}</span>
          <h2 className="text-2xl md:text-[28px] font-light text-[#1a1a1a] mt-2 mb-3">
            {t("ready_to")} <span className="text-[#d5a86e]">{t("join_us")}</span>
          </h2>
          <div className="w-12 h-px bg-[#d5a86e] mx-auto mb-5" />
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
            { t('the_perfect_role') }
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-[#d5a86e] text-white px-7 py-3 rounded text-sm font-medium hover:bg-[#c99a5e] transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-[#d5a86e]/20">
              {t("send_application")}
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="border border-[#d5a86e] text-[#d5a86e] px-7 py-3 rounded text-sm font-medium hover:bg-[#d5a86e] hover:text-white transition-all">
              {t("contact_hr")}
            </button>
          </div>
        </div>
      </section>
      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}