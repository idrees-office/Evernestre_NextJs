"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, Mail, Phone, MapPin, ArrowRight, Clock, Share2 } from "lucide-react";
import Header from "../includes/header";
import SocialLinksSection from "../Components/SocialLinksSection";
import RegisterCtaSection from "../Components/RegisterCtaSection";

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  featured: boolean;
};

export default function NewsContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: "general"
  });

  const news: NewsItem[] = [
    {
      id: "1",
      title: "Dubai Real Estate Market Shows Strong Growth in Q4 2023",
      excerpt: "Luxury property prices continue to rise as international investors flock to Dubai's stable market.",
      content: "The Dubai real estate market has demonstrated remarkable resilience and growth in the final quarter of 2023, with luxury properties leading the charge. Prime locations like Palm Jumeirah and Downtown Dubai have seen unprecedented demand from international buyers.",
      date: "Dec 15, 2023",
      author: "Sarah Johnson",
      category: "Market Trends",
      image: "/api/placeholder/800/400",
      readTime: "4 min read",
      featured: true
    },
    {
      id: "2",
      title: "New Sustainable Development Project Launched in Jumeirah",
      excerpt: "Eco-friendly luxury residences set new standards for sustainable living in Dubai.",
      content: "A groundbreaking sustainable development project has been announced in Jumeirah, featuring state-of-the-art green technologies and eco-friendly design principles.",
      date: "Dec 12, 2023",
      author: "Michael Chen",
      category: "Development",
      image: "/api/placeholder/400/200",
      readTime: "3 min read",
      featured: false
    },
    {
      id: "3",
      title: "Investment Opportunities in Emerging Dubai Neighborhoods",
      excerpt: "Discover hidden gem locations offering high ROI potential for savvy investors.",
      content: "While established areas continue to perform well, emerging neighborhoods like Dubai Hills and JVC present exciting opportunities for investors seeking higher returns.",
      date: "Dec 10, 2023",
      author: "Emma Davis",
      category: "Investment",
      image: "/api/placeholder/400/200",
      readTime: "5 min read",
      featured: false
    },
    {
      id: "4",
      title: "The Future of Smart Homes in Luxury Real Estate",
      excerpt: "How technology is transforming luxury living experiences in Dubai properties.",
      content: "Smart home technology is becoming a standard expectation in luxury properties, with advanced automation systems enhancing both security and convenience.",
      date: "Dec 8, 2023",
      author: "Ahmed Al Mansouri",
      category: "Technology",
      image: "/api/placeholder/400/200",
      readTime: "4 min read",
      featured: false
    }
    ,
     {
      id: "4",
      title: "The Future of Smart Homes in Luxury Real Estate",
      excerpt: "How technology is transforming luxury living experiences in Dubai properties.",
      content: "Smart home technology is becoming a standard expectation in luxury properties, with advanced automation systems enhancing both security and convenience.",
      date: "Dec 8, 2023",
      author: "Ahmed Al Mansouri",
      category: "Technology",
      image: "/api/placeholder/400/200",
      readTime: "4 min read",
      featured: false
    },
     {
      id: "4",
      title: "The Future of Smart Homes in Luxury Real Estate",
      excerpt: "How technology is transforming luxury living experiences in Dubai properties.",
      content: "Smart home technology is becoming a standard expectation in luxury properties, with advanced automation systems enhancing both security and convenience.",
      date: "Dec 8, 2023",
      author: "Ahmed Al Mansouri",
      category: "Technology",
      image: "/api/placeholder/400/200",
      readTime: "4 min read",
      featured: false
    }
    ,
     {
      id: "4",
      title: "The Future of Smart Homes in Luxury Real Estate",
      excerpt: "How technology is transforming luxury living experiences in Dubai properties.",
      content: "Smart home technology is becoming a standard expectation in luxury properties, with advanced automation systems enhancing both security and convenience.",
      date: "Dec 8, 2023",
      author: "Ahmed Al Mansouri",
      category: "Technology",
      image: "/api/placeholder/400/200",
      readTime: "4 min read",
      featured: false
    },
     {
      id: "4",
      title: "The Future of Smart Homes in Luxury Real Estate",
      excerpt: "How technology is transforming luxury living experiences in Dubai properties.",
      content: "Smart home technology is becoming a standard expectation in luxury properties, with advanced automation systems enhancing both security and convenience.",
      date: "Dec 8, 2023",
      author: "Ahmed Al Mansouri",
      category: "Technology",
      image: "/api/placeholder/400/200",
      readTime: "4 min read",
      featured: false
    }
    ,
     {
      id: "4",
      title: "The Future of Smart Homes in Luxury Real Estate",
      excerpt: "How technology is transforming luxury living experiences in Dubai properties.",
      content: "Smart home technology is becoming a standard expectation in luxury properties, with advanced automation systems enhancing both security and convenience.",
      date: "Dec 8, 2023",
      author: "Ahmed Al Mansouri",
      category: "Technology",
      image: "/api/placeholder/400/200",
      readTime: "4 min read",
      featured: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const featuredNews = news.find(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <>
      <Header />
      
       <section className="bg-[#f6ecdf] py-12 relative overflow-hidden border-b border-[#f0e4d9]">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
            Popular News in Dubai
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container-fluid mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#f6ecdf] to-[#fdf8f3] rounded-lg p-8 border border-[#8b5d3b]/10 shadow-lg sticky top-8"
              >
                <h2 className="text-2xl font-semibold text-[#3c2f26] mb-2">Get In Touch</h2>
                <p className="text-gray-600 mb-6">Our team will respond within 24 hours</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5d3b] focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5d3b] focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5d3b] focus:border-transparent transition-all duration-300"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I'm Interested In
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5d3b] focus:border-transparent transition-all duration-300"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="partnership">Business Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8b5d3b] focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#8b5d3b] text-white py-3 rounded-lg font-medium hover:bg-[#7a4f32] hover:shadow-[0_0_15px_rgba(139,93,59,0.3)] transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-3 text-gray-600 mb-3">
                    <Phone className="w-4 h-4" />
                    <span>+971 4 123 4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 mb-3">
                    <Mail className="w-4 h-4" />
                    <span>info@luxuryestate.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Dubai Marina, Dubai, UAE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - News Section (8 cols) */}
            <div className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-semibold text-[#3c2f26]">Latest News & Insights</h2>
                  <button className="flex items-center gap-2 text-[#8b5d3b] hover:text-[#7a4f32] transition-colors duration-300">
                    View All News
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Featured News (Top - Full Width) */}
                {featuredNews && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 mb-8 group cursor-pointer hover:shadow-xl transition-all duration-500"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="h-64 md:h-auto bg-gray-200 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-[#8b5d3b] text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{featuredNews.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{featuredNews.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#8b5d3b] transition-colors duration-300">
                          {featuredNews.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {featuredNews.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">{featuredNews.author}</span>
                          </div>
                          <button className="flex items-center gap-2 text-[#8b5d3b] hover:text-[#7a4f32] transition-colors duration-300">
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Regular News Grid (Bottom - 2x2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {regularNews.map((newsItem, index) => (
                    <motion.div
                      key={newsItem.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 group cursor-pointer hover:shadow-lg transition-all duration-300"
                    >
                      <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {newsItem.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <span>{newsItem.date}</span>
                          <span>•</span>
                          <span>{newsItem.readTime}</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-[#8b5d3b] transition-colors duration-300 line-clamp-2">
                          {newsItem.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {newsItem.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">By {newsItem.author}</span>
                          <div className="flex items-center gap-2">
                            <button className="p-1 hover:bg-gray-100 rounded transition-colors duration-300">
                              <Share2 className="w-3 h-3 text-gray-400" />
                            </button>
                            <button className="flex items-center gap-1 text-[#8b5d3b] hover:text-[#7a4f32] transition-colors duration-300 text-sm">
                              Read
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SocialLinksSection />
      <RegisterCtaSection />
    </>
  );
}