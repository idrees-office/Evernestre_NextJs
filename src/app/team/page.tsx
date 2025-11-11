"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Header from "../includes/header";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";

type Member = {
  name: string;
  role: string;
  image: string;
  category: "Leadership" | "Creative" | "Technology" | "Sales";
  experience: string;
  specialty: string;
  email: string;
  phone: string;
  achievements: string[];
};

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const team: Member[] = [
    {
      name: "Mohammed Al Rashid",
      role: "Chief Executive Officer",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Leadership",
      experience: "15+ Years",
      specialty: "Strategic Vision & Business Development",
      email: "mohammed@evernestre.ae",
      phone: "+971501234567",
      achievements: ["Founded in 2010", "1000+ Projects", "Industry Pioneer"],
    },
    {
      name: "Sara Khan",
      role: "Creative Director",
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Creative",
      experience: "10+ Years",
      specialty: "Brand Strategy & Visual Identity",
      email: "sara@evernestre.ae",
      phone: "+971501234568",
      achievements: [
        "50+ Brand Campaigns",
        "Award Winning Designs",
        "Luxury Branding Expert",
      ],
    },
    {
      name: "David Joseph",
      role: "Tech Innovation Lead",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      experience: "12+ Years",
      specialty: "Proptech Solutions & Digital Transformation",
      email: "david@evernestre.ae",
      phone: "+971501234569",
      achievements: ["AI Integration", "Virtual Tours", "Market Analytics"],
    },
    {
      name: "Omar Khalid",
      role: "Head of Luxury Sales",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sales",
      experience: "14+ Years",
      specialty: "Premium Properties & VIP Clients",
      email: "omar@evernestre.ae",
      phone: "+971501234570",
      achievements: [
        "AED 2B+ Sales",
        "300+ Luxury Deals",
        "Top Performer 5 Years",
      ],
    },
    {
      name: "Aisha Noor",
      role: "Senior Visual Designer",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Creative",
      experience: "8+ Years",
      specialty: "Luxury Marketing Materials",
      email: "aisha@evernestre.ae",
      phone: "+971501234571",
      achievements: ["Brand Identity", "Print & Digital", "UI/UX Design"],
    },
    {
      name: "Idrees Ahmed",
      role: "Senior Developer",
      image:
        "https://images.pexels.com/photos/3771126/pexels-photo-3771126.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Technology",
      experience: "11+ Years",
      specialty: "Platform Architecture & Security",
      email: "idrees@evernestre.ae",
      phone: "+971501234572",
      achievements: [
        "System Architecture",
        "Security Protocols",
        "Performance Optimization",
      ],
    },
    {
      name: "Jessica Brown",
      role: "Senior Property Consultant",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sales",
      experience: "9+ Years",
      specialty: "Waterfront & Beach Properties",
      email: "jessica@evernestre.ae",
      phone: "+971501234573",
      achievements: [
        "150+ Beachfront Sales",
        "International Clients",
        "Luxury Apartments",
      ],
    },
    {
      name: "Hassan Ali",
      role: "Media Production Lead",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Creative",
      experience: "7+ Years",
      specialty: "Cinematic Property Videos",
      email: "hassan@evernestre.ae",
      phone: "+971501234574",
      achievements: [
        "4K Drone Shots",
        "Virtual Staging",
        "Award Winning Videos",
      ],
    },
  ];

  const categories = ["All", "Leadership", "Creative", "Technology", "Sales"];

  const filteredTeam =
    activeCategory === "All"
      ? team
      : team.filter((member) => member.category === activeCategory);

  return (
    <>
      <Header />

      {/* Hero Section */}
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
              Meet Our Expert Team
            </span>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 py-6 cursor-pointer">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`min-w-[140px] h-11 flex items-center justify-center rounded-md font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#c97a52] text-white shadow-md transform -translate-y-0.5 cursor-pointer"
                    : "bg-white text-[#3c2f26] hover:bg-[#f6ecdf] border border-gray-200 hover:border-[#8b5d3b]/30 hover:shadow-[0_0_10px_rgba(139,93,59,0.15)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-gradient-to-b from-white to-[#faf7f4] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTeam.map((member, index) => (
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                key={index}
                className="group relative bg-white rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#8b5d3b]/20"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Contact Icons */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <div className="flex items-center justify-center gap-4 bg-white/95 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
                      <a
                        href={`mailto:${member.email}`}
                        aria-label="Send Email"
                        className="text-[#EA4335] hover:scale-110 transition-transform duration-300"
                      >
                        <Mail size={20} />
                      </a>
                      <a
                        href={`https://wa.me/${member.phone.replace(
                          /\D/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="text-[#25D366] hover:scale-110 transition-transform duration-300"
                      >
                        <MessageCircle size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#8b5d3b] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#8b5d3b] font-medium text-sm mb-2">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f6ecdf] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-4">
              Our Commitment to Excellence
            </h2>
            <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Expert Advisory",
                description:
                  "Deep market knowledge and personalized guidance for every client.",
                icon: "🎯",
              },
              {
                title: "Creative Excellence",
                description:
                  "Innovative approaches to marketing and property presentation.",
                icon: "✨",
              },
              {
                title: "Technology Driven",
                description:
                  "Leveraging cutting-edge tools for seamless experiences.",
                icon: "💻",
              },
              {
                title: "Client First",
                description:
                  "Your success and satisfaction are our top priorities.",
                icon: "⭐",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-[#fdf8f3] rounded-lg p-6 text-center shadow-sm hover:shadow-md hover:border hover:border-[#8b5d3b]/20 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-semibold text-[#3c2f26] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-4">
            Ready to Work With Our Team?
          </h2>
          <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Let our expert team guide you through your real estate journey in
            Dubai. We're here to make your property dreams a reality.
          </p>
          <button className="bg-[#8b5d3b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7a4f32] hover:shadow-[0_0_15px_rgba(139,93,59,0.4)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
            Connect With Our Team
          </button>
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}
