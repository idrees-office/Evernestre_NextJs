"use client";

import React, { JSX, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Award, GraduationCap, Users, TrendingUp } from "lucide-react";
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

type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function CareersPage() {
  const [activeDepartment, setActiveDepartment] = useState<string>("All");

  const jobs: Job[] = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      department: "Technology",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "5+ Years",
      description: "Join our technology team to build cutting-edge real estate platforms and proptech solutions.",
      requirements: [
        "React/Next.js expertise",
        "TypeScript proficiency",
        "Modern CSS frameworks",
        "API integration experience"
      ],
      benefits: ["Flexible hours", "Learning budget", "Health insurance", "Remote options"]
    },
    {
      id: "2",
      title: "Luxury Property Photographer",
      department: "Creative",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "3+ Years",
      description: "Capture stunning visuals of luxury properties and create compelling marketing content.",
      requirements: [
        "Professional photography portfolio",
        "Drone operation license",
        "Video editing skills",
        "Luxury brand experience"
      ],
      benefits: ["Equipment allowance", "Creative freedom", "Travel opportunities", "Performance bonuses"]
    },
    {
      id: "3",
      title: "Real Estate Consultant",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "2+ Years",
      description: "Help clients find their dream properties and provide expert market guidance.",
      requirements: [
        "Real estate license",
        "Sales experience",
        "Market knowledge",
        "Client relationship skills"
      ],
      benefits: ["Commission based", "Car allowance", "Laptop provided", "Career growth"]
    },
    {
      id: "4",
      title: "UI/UX Designer",
      department: "Creative",
      location: "Remote",
      type: "Full-time",
      experience: "4+ Years",
      description: "Design intuitive and beautiful interfaces for our digital real estate platforms.",
      requirements: [
        "Figma/Adobe Creative Suite",
        "User research experience",
        "Prototyping skills",
        "Mobile-first design"
      ],
      benefits: ["Remote work", "Design budget", "Conference tickets", "Flexible schedule"]
    },
    {
      id: "5",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "3+ Years",
      description: "Drive our digital presence and create impactful marketing campaigns.",
      requirements: [
        "Social media management",
        "Content strategy",
        "Analytics tools",
        "SEO/SEM knowledge"
      ],
      benefits: ["Campaign budget", "Performance bonuses", "Training programs", "Creative control"]
    },
    {
      id: "6",
      title: "Operations Coordinator",
      department: "Operations",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "2+ Years",
      description: "Ensure smooth operations and support our growing team across departments.",
      requirements: [
        "Project management",
        "Communication skills",
        "Problem solving",
        "Multitasking ability"
      ],
      benefits: ["Stable hours", "Health insurance", "Team events", "Career development"]
    }
  ];

  const departments = ["All", "Technology", "Creative", "Sales", "Marketing", "Operations"];

  const benefits: Benefit[] = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Career Growth",
      description: "Clear progression paths and regular promotion opportunities"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Learning & Development",
      description: "Annual training budget and professional certification support"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Great Culture",
      description: "Collaborative environment with team-building activities"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Competitive Packages",
      description: "Attractive salaries, bonuses, and comprehensive benefits"
    }
  ];

  const filteredJobs = activeDepartment === "All" 
    ? jobs 
    : jobs.filter((job) => job.department === activeDepartment);

  return (
    <>
      <Header />
      <section className="relative min-h-[40vh] flex items-center justify-center bg-[#f6ecdf] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f6ecdf] via-[#fffaf5] to-[#f6ecdf]/90"></div>
        <div className="absolute top-20 left-16 w-20 h-20 bg-[#8b5d3b]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 right-16 w-32 h-32 bg-[#3c2f26]/10 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container relative z-10 mx-auto px-6 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-light text-[#3c2f26] leading-tight tracking-tight mb-4 mt-6">
            Build Your Career in{" "}
            <span className="bg-gradient-to-r from-[#8b5d3b] to-[#c89a67] bg-clip-text text-transparent font-medium">
              Luxury Real Estate
            </span>
          </h1>
          <p className="text-[#3c2f26]/70 text-lg mx-auto max-w-2xl leading-relaxed mb-6">
            Join our dynamic team and shape the future of real estate in Dubai. 
            Grow with us while delivering exceptional experiences to our clients.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-[#8b5d3b]/20 rounded-full px-6 py-3 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-[#8b5d3b] rounded-full"></span>
            <span className="text-[#3c2f26]/70 text-sm font-medium tracking-wide">
              Currently hiring for {jobs.length} positions
            </span>
          </div>
        </motion.div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-4">
              Why Join Our Team?
            </h2>
            <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#f6ecdf] to-[#fdf8f3] rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 border border-[#8b5d3b]/10"
              >
                <div className="text-[#8b5d3b] mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#3c2f26] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="bg-[#faf7f4] border-y border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3 py-6">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={`min-w-[140px] h-11 flex items-center justify-center rounded-md font-medium transition-all duration-300 ${
                  activeDepartment === department
                    ? "bg-[#c97a52] text-white shadow-md transform -translate-y-0.5 cursor-pointer"
                    : "bg-white text-[#3c2f26] hover:bg-[#f6ecdf] border border-gray-200 hover:border-[#8b5d3b]/30 hover:shadow-[0_0_10px_rgba(139,93,59,0.15)]"
                }`}
              >
                {department}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Grid */}
      <section className="bg-gradient-to-b from-white to-[#faf7f4] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#8b5d3b]/20"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#8b5d3b] transition-colors duration-300">
                      {job.title}
                    </h3>
                    <span className="bg-[#8b5d3b]/10 text-[#8b5d3b] text-xs font-medium px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock size={16} />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase size={16} />
                      <span className="text-sm">{job.experience}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#8b5d3b] rounded-full"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.benefits.slice(0, 2).map((benefit, idx) => (
                      <span
                        key={idx}
                        className="bg-[#f6ecdf] text-[#8b5d3b] text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-[#8b5d3b] text-white py-2 rounded-sm font-normal hover:bg-[#7a4f32] hover:shadow-[0_0_15px_rgba(139,93,59,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 text-sm">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Open Positions
              </h3>
              <p className="text-gray-600 max-w-md mx-auto">
                There are currently no open positions in the {activeDepartment} department. 
                Please check back later or explore other departments.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-[#f6ecdf] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-6">
              Our Culture & Values
            </h2>
            <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Innovation First",
                  description: "We embrace new ideas and technologies to stay ahead in the real estate industry."
                },
                {
                  title: "Collaborative Spirit",
                  description: "Teamwork and open communication are at the heart of everything we do."
                },
                {
                  title: "Client Focused",
                  description: "Our success is measured by the satisfaction and success of our clients."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold text-[#3c2f26] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-normal text-[#3c2f26] mb-4">
            Ready to Start Your Journey?
          </h2>
          <div className="w-16 h-1 bg-[#8b5d3b] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Can't find the perfect role? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#8b5d3b] text-white px-8 py-3 rounded-full font-medium hover:bg-[#7a4f32] hover:shadow-[0_0_15px_rgba(139,93,59,0.4)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
              Send General Application
            </button>
            <button className="border border-[#8b5d3b] text-[#8b5d3b] px-8 py-3 rounded-full font-medium hover:bg-[#8b5d3b] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Contact HR Team
            </button>
          </div>
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}