"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import Header from "../includes/header";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import Image from "next/image";

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
    name: "Alex",
    role: "Real Estate Agent",
    image: "/assets/team/Alex.jpg",
    category: "Sales",
    experience: "15+ Years",
    specialty: "Luxury Properties & Investments",
    email: "alex@evernestre.ae",
    phone: "+971501234567",
    achievements: [
      "15+ Years in Dubai Real Estate",
      "1000+ Successful Property Transactions",
      "Recognized Leader in Luxury Property Market",
    ],
  },
  {
    name: "Haider",
    role: "Real Estate Agent",
    image: "/assets/team/Haider.jpg",
    category: "Sales",
    experience: "10+ Years",
    specialty: "Brand Presentation & Property Showcasing",
    email: "haider@evernestre.ae",
    phone: "+971501234568",
    achievements: [
      "50+ Luxury Marketing Campaigns",
      "Award-Winning Design Background",
      "Expert in High-End Property Presentation",
    ],
  },
  {
    name: "Hassan",
    role: "Real Estate Agent",
    image: "/assets/team/Hassan.jpg",
    category: "Sales",
    experience: "12+ Years",
    specialty: "Digital Property Solutions & Virtual Tours",
    email: "hassan@evernestre.ae",
    phone: "+971501234569",
    achievements: [
      "AI-Powered Property Tools",
      "Advanced Market Analytics",
      "Virtual Property Tour Specialist",
    ],
  },
  {
    name: "Komal",
    role: "Real Estate Agent",
    image: "/assets/team/Komal.jpg",
    category: "Sales",
    experience: "14+ Years",
    specialty: "Ultra-Luxury Properties & VIP Clients",
    email: "komal@evernestre.ae",
    phone: "+971501234570",
    achievements: [
      "AED 2B+ Lifetime Sales",
      "300+ Successful High-End Deals",
      "Top Sales Performer for 5 Years",
    ],
  },
  {
    name: "Lana",
    role: "Real Estate Agent",
    image: "/assets/team/Lana.jpg",
    category: "Sales",
    experience: "8+ Years",
    specialty: "Property Branding & Client Engagement",
    email: "lana@evernestre.ae",
    phone: "+971501234571",
    achievements: [
      "Expert in Luxury Property Visuals",
      "High-End Digital & Print Designs",
      "UI/UX for Real Estate Platforms",
    ],
  },
  {
    name: "Sadok",
    role: "Real Estate Agent",
    image: "/assets/team/Sadok.jpg",
    category: "Sales",
    experience: "11+ Years",
    specialty: "Property Technology, Security & Client Platforms",
    email: "sadok@evernestre.ae",
    phone: "+971501234572",
    achievements: [
      "Platform Architecture Expert",
      "Strong Understanding of Property Systems",
      "Performance Optimization Background",
    ],
  },
  {
    name: "Vakhid",
    role: "Real Estate Agent",
    image: "/assets/team/Vakhid.jpg",
    category: "Sales",
    experience: "9+ Years",
    specialty: "Waterfront & Premium Luxury Properties",
    email: "vakhid@evernestre.ae",
    phone: "+971501234573",
    achievements: [
      "150+ Beachfront Sales",
      "International Client Network",
      "Luxury Apartment Specialist",
    ],
  },
  {
    name: "Yaseen",
    role: "Accountant", 
    image: "/assets/team/Yaseen.jpg",
    category: "Leadership",
    experience: "6+ Years",
    specialty: "Financial Reporting & Corporate Accounting",
    email: "yaseen@evernestre.ae",
    phone: "+971501234574",
    achievements: [
      "Financial System Optimization",
      "Compliance & Reporting Accuracy",
      "Budgeting & Expense Control",
    ],
  },
];


  const categories = ["All", "Leadership", "Creative", "Technology", "Sales"];

  const filteredTeam = activeCategory === "All" ? team
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

    
        <section className="bg-gradient-to-b from-[#fdfbf9] to-white py-10">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-14">
            <span className="text-[#8b5d3b] text-sm font-semibold tracking-widest uppercase">Our Experts</span>
            <h2 className="text-3xl md:text-4xl font-light text-[#3c2f26] mt-3">
              Meet The <span className="font-semibold">Professionals</span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8b5d3b] to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredTeam.map((member, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="group"
              >
                <div className="relative bg-white rounded-sm overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(139,93,59,0.15)] transition-all duration-500">
                  <div className="relative h-80 overflow-hidden">
                    <div className="absolute top-0 right-0 z-20 overflow-hidden w-32 h-32">
                      <div className="absolute top-6 right-[-30px] w-[140px] bg-white text-[#8b5d3b] text-[10px] font-semibold text-center py-1.5 transform rotate-45 shadow-md">
                        {member.role}
                      </div>
                    </div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3c2f26] via-[#3c2f26]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Contact Icons - Slide up on hover */}
                    <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 group-hover:bottom-24 transition-all duration-500">
                      <a
                        href={`mailto:${member.email}`}
                        aria-label="Send Email"
                        className="w-10 h-10 bg-white rounded-sm flex items-center justify-center text-[#EA4335] hover:bg-[#EA4335] hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                      >
                        <Mail size={18} />
                      </a>
                      <a
                        href={`https://wa.me/${member.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat on WhatsApp"
                        className="w-10 h-10 bg-white rounded-sm flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>

                    {/* Name on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <h3 className="text-white text-xl font-semibold drop-shadow-lg">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="p-4 bg-gradient-to-r from-[#f6ecdf] to-[#faf7f4] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#8b5d3b] rounded-full"></div>
                      <span className="text-[#3c2f26]/70 text-xs font-medium">{member.experience}</span>
                    </div>
                    <span className="text-[#8b5d3b] text-xs font-semibold tracking-wide cursor-pointer hover:text-[#6b4a2e] transition-colors">
                      View Profile →
                    </span>
                  </div>
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
            Dubai. We&apos;re here to make your property dreams a reality.
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

