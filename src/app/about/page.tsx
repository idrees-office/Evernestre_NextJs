"use client";

import React from "react";
import Header from "../includes/header";
import Link from "next/link";
import RegisterCtaSection from "../Components/RegisterCtaSection";
import SocialLinksSection from "../Components/SocialLinksSection";

const TEAM_MEMBERS = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    experience: "15+ years in Dubai real estate",
  },
  {
    name: "Ahmed Al Mansouri",
    role: "Head of Sales",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    experience: "12+ years in property investment",
  },
  {
    name: "Emily Chen",
    role: "Senior Property Consultant",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    experience: "8+ years in market analysis",
  },
  {
    name: "Marcus Rodriguez",
    role: "Client Relations Director",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
    experience: "10+ years in customer service",
  },
];

const VALUES = [
  {
    title: "Trust & Transparency",
    description:
      "We believe in honest communication and building long-term relationships based on trust.",
    icon: "🤝",
  },
  {
    title: "Expert Guidance",
    description:
      "Deep market knowledge to help you make informed real estate decisions.",
    icon: "🎯",
  },
  {
    title: "Client First",
    description:
      "Your goals and aspirations are at the center of everything we do.",
    icon: "⭐",
  },
  {
    title: "Innovation",
    description:
      "Leveraging technology to provide seamless real estate experiences.",
    icon: "💡",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f6ecdf] py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            About Our Real Estate Journey
          </h1>
          <div className="mx-auto h-[3px] w-24 bg-[color:var(--brand)] rounded mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we have been helping clients navigate Dubai's
            dynamic real estate market. Our commitment to excellence and deep
            local expertise has made us a trusted partner for investors and
            homeowners alike.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[32px] md:text-[36px] font-normal tracking-tight text-[#8b5d3b] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010, our journey began with a simple vision: to
                  make Dubai's real estate market accessible and understandable
                  for everyone. What started as a small team of passionate
                  property experts has grown into a comprehensive real estate
                  consultancy.
                </p>
                <p>
                  We've witnessed Dubai's incredible transformation firsthand
                  and have been instrumental in helping thousands of clients
                  find their perfect properties—from luxury waterfront
                  apartments to family-friendly villas in thriving communities.
                </p>
                <p>
                  Today, we continue to innovate while staying true to our core
                  values of transparency, expertise, and client-centric service.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Our office and team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#f9f7f4] py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[36px] font-normal tracking-tight text-[#8b5d3b] mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every client
              we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

      {/* Team Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-[32px] md:text-[36px] font-normal tracking-tight text-[#8b5d3b] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to finding your perfect
              property in Dubai
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[color:var(--brand)] font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#8b5d3b] py-16 text-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-90">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Communities Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}
