"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import ShortModalForm from "./ShortModal";
import { useTranslations } from "next-intl";

type SidebarProps = {
  categories: { key: string; count: number, }[];
  popularTags: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formData: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleInputChange: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: any;
};

export default function NewsSideSection({categories, popularTags, formData, handleInputChange, handleSubmit,}: SidebarProps) {
   const t = useTranslations();
 
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-[#faf8f5] to-white rounded-sm border border-[#e8e0d8] p-5 shadow-sm relative overflow-hidden"
      >
        <h3 className="text-sm font-semibold text-[#8b5d3b] border-l-2 border-[#c97a52] pl-3 mb-4 uppercase tracking-wider">
          {t("categories")}
        </h3>

        <div className="space-y-2">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.key}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ x: 5 }}
              className="w-full flex items-center justify-between text-[13px] bg-white rounded-sm border border-gray-100 px-4 py-3 hover:border-[#8b5d3b]/50 hover:bg-[#fff9f5] hover:shadow-sm transition-all duration-300 group"
            >
              <span className="text-gray-700 group-hover:text-[#8b5d3b] transition-colors">
                  {t(cat.key)}
              </span>
              <span className="bg-[#8b5d3b]/10 text-[#8b5d3b] text-xs font-bold px-2 py-0.5 rounded-full">
                {String(cat.count).padStart(2, "0")}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-br from-[#faf8f5] to-white rounded-sm border border-[#e8e0d8] p-5 shadow-sm"
      >
        <h3 className="text-sm font-semibold text-[#8b5d3b] border-l-2 border-[#c97a52] pl-3 mb-4 uppercase tracking-wider">
          { t('popular_tag') }
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
              { t(``+tag+``) }
            </motion.button>
          ))}
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-sm border border-gray-100 shadow-lg overflow-hidden relative"
      >
        <div className="h-1 bg-gradient-to-r from-[#8b5d3b] via-[#c97a52] to-[#8b5d3b]" />

        <div className="p-5">
          <h3 className="text-sm font-semibold text-gray-900 border-l-2 border-[#c97a52] pl-3 mb-4">
            {t("speak_with_advisor")}
           
          </h3>
          <ShortModalForm />
        </div>
      </motion.div>
    </div>
  );
}
