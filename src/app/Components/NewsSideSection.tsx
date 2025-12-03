"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

type SidebarProps = {
  categories: { name: string; count: number }[];
  popularTags: string[];
  formData: any;
  handleInputChange: any;
  handleSubmit: any;
};

export default function NewsSideSection({
  categories,
  popularTags,
  formData,
  handleInputChange,
  handleSubmit,
}: SidebarProps) {
  return (
    <div className="space-y-6">

      {/* ------------------------- */}
      {/* 1️⃣ CATEGORIES */}
      {/* ------------------------- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#faf8f5] to-white rounded-sm border border-[#e8e0d8] p-5 shadow-sm relative overflow-hidden"
      >
        <h3 className="text-sm font-semibold text-[#8b5d3b] border-l-2 border-[#c97a52] pl-3 mb-4 uppercase tracking-wider">
          Categories
        </h3>

        <div className="space-y-2">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              className="w-full flex items-center justify-between text-[13px] bg-white rounded-sm border border-gray-100 px-4 py-3 hover:border-[#8b5d3b]/50 hover:bg-[#fff9f5] hover:shadow-sm transition-all duration-300 group"
            >
              <span className="text-gray-700 group-hover:text-[#8b5d3b] transition-colors">
                {cat.name}
              </span>
              <span className="bg-[#8b5d3b]/10 text-[#8b5d3b] text-xs font-bold px-2 py-0.5 rounded-full">
                {String(cat.count).padStart(2, "0")}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ------------------------- */}
      {/* 2️⃣ POPULAR TAGS */}
      {/* ------------------------- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-br from-[#faf8f5] to-white rounded-sm border border-[#e8e0d8] p-5 shadow-sm"
      >
        <h3 className="text-sm font-semibold text-[#8b5d3b] border-l-2 border-[#c97a52] pl-3 mb-4 uppercase tracking-wider">
          Popular Tags
        </h3>

        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="text-[11px] px-3 py-1.5 rounded-full bg-white border border-gray-100 text-gray-600 hover:border-[#8b5d3b] hover:text-[#8b5d3b] hover:bg-[#fff9f5] hover:shadow-sm transition-all duration-300"
            >
              {tag}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ------------------------- */}
      {/* 3️⃣ SPEAK WITH ADVISOR FORM */}
      {/* ------------------------- */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-sm border border-gray-100 shadow-lg overflow-hidden relative"
      >
        <div className="h-1 bg-gradient-to-r from-[#8b5d3b] via-[#c97a52] to-[#8b5d3b]" />

        <div className="p-5">
          <h3 className="text-sm font-semibold text-gray-900 border-l-2 border-[#c97a52] pl-3 mb-4">
            Speak With a Property Advisor
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3 text-[13px]">

            {/* Full Name */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b]">
              <User className="w-4 h-4 text-[#8b5d3b]/60" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b]">
              <Mail className="w-4 h-4 text-[#8b5d3b]/60" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b]">
              <Phone className="w-4 h-4 text-[#8b5d3b]/60" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            {/* Interest */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-2.5 bg-gray-50/50 focus-within:border-[#8b5d3b]">
              <MapPin className="w-4 h-4 text-[#8b5d3b]/60" />
              <select
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full bg-transparent focus:outline-none"
              >
                <option value="general">General Inquiry</option>
                <option value="buying">Buying in Dubai</option>
                <option value="selling">Selling Property</option>
                <option value="offplan">Off-Plan Projects</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              placeholder="Tell us what you're looking for..."
              className="w-full border border-gray-200 rounded-sm px-3 py-2 bg-gray-50/50 focus:outline-none focus:border-[#8b5d3b] resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b5d3b] to-[#c97a52] text-white text-[13px] font-medium py-3 mt-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request Call Back
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
