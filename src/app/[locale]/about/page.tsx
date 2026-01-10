"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Vision from "@/app/components/Vision";
import { useTranslations } from "next-intl";

const coreValues = [
  {
    title: "value_professionalism",
    description: "value_professionalism_desc"
  },
  {
    title: "value_innovation",
    description: "value_innovation_desc"
  },
  {
    title: "value_integrity",
    description: "value_integrity_desc"
  },
  {
    title: "value_commitment",
    description: "value_commitment_desc"
  }
];

const pointvalues = [
  {
    num: "01",
    title: "professionalism_title",
    description: "professionalism_description"
  },
  {
    num: "02",
    title: "innovation_title",
    description: "innovation_description"
  },
  {
    num: "03",
    title: "integrity_title",
    description: "integrity_description"
  },
  {
    num: "04",
    title: "commitment_title",
    description: "commitment_description"
  }
];

export default function AboutUs() {

  const t = useTranslations();

  return (
    <div className="min-h-screen bg-[#faf8f5]">
     

       <section className="bg-[#f6ecdf] py-12">
         <div className="max-w-4xl mx-auto px-6 text-center">
           <h1 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3"> {t('evernest')} {t('journey')}
           </h1>
           <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            {t('real_estate_expertise_description')}
             
           </p>
         </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-[#d5a86e]/40" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-[#d5a86e]/40" />
              <Image
                src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
                width={800}
                height={600}
                alt="Our office and team"
                className="rounded shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]">Since 2010</span>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mt-2 mb-5">
                Our Story
              </h2>
              <div className="w-12 h-px bg-[#d5a86e] mb-5" />
              <div className="space-y-4 text-gray-600 text-[14px] leading-[1.8]">
                <p>
                   {t('our_story_p1')}
                 
                </p>
                <p>
                   {t('our_story_p2')}
                  
                </p>
                <p>
                   {t('our_story_p3')}
                  
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Vision />     
      <section className="bg-[#1a1a1a] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]"> {t('mission_label')}</span>
              <h2 className="text-2xl md:text-3xl font-light text-white mt-2 mb-4">
                 {t('mission_title')}
              </h2>
              <div className="w-12 h-px bg-[#d5a86e] mb-5" />
              <p className="text-gray-400 text-[14px] leading-[1.9] mb-4">
                At <span className="text-[#d5a86e]">{t('evernest')}</span>,
                {t('mission_p1')}
              </p>
              <p className="text-gray-400 text-[14px] leading-[1.9]">
                 {t('mission_p2')}
                
              </p>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]"> {t('values_label')}</span>
              <h2 className="text-2xl md:text-3xl font-light text-white mt-2 mb-4"> {t('values_title')} </h2>
              <div className="w-12 h-px bg-[#d5a86e] mb-5" />
              <div className="space-y-5">
                {pointvalues.map((value, index) => (
                  <motion.div 
                    key={value.num} 
                    className="flex gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                   >
                    <span className="text-3xl font-extralight text-[#d5a86e]/50 group-hover:text-[#d5a86e] transition-colors">
                      {value.num}
                    </span>
                    <div>
                      <h3 className="font-medium text-white text-[14px] mb-1"> { t(``+value.title+``) } </h3>
                      <p className="text-gray-500 text-[12px] leading-relaxed"> { t(``+value.description+``) }</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]">{t('core_values_label')}</span>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mt-2 mb-3">
                {t('core_values_title')}
            </h2>
            <div className="w-12 h-px bg-[#d5a86e] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#faf8f5] border border-[#e8e0d8] p-6 text-center hover:bg-[#1a1a1a] hover:border-[#1a1a1a] transition-all duration-500 rounded"
              >
                <div className="w-10 h-px bg-[#d5a86e] mx-auto mb-4 group-hover:w-16 transition-all duration-300" />
                <h3 className="text-[15px] font-medium text-[#d5a86e] mb-2">
                  { t(``+value.title+``) }
                </h3>
                <p className="text-gray-600 group-hover:text-gray-400 text-[13px] leading-relaxed transition-colors">
                  { t(``+value.description+``) }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-[#faf8f5] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]">{t('approach_label')}</span>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mt-2 mb-4">
               {t('approach_title')}
              </h2>
              <div className="w-12 h-px bg-[#d5a86e] mb-5" />
              <div className="space-y-4 text-gray-600 text-[14px] leading-[1.8]">
                <p>

                  {t('approach_p1')}
                  
                </p>
                <p>
                    {t('approach_p2')}
          
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#e8e0d8] h-25 rounded shadow" />
                <div className="bg-[#8b5d3b] h-25 rounded flex items-center justify-center p-2 shadow">
                  <p className="text-white text-[10px] text-center font-medium uppercase tracking-wider ">{t('approach_box_guidance')}</p>
                </div>
                <div className="bg-[#e8e0d8] h-25 rounded" />
                <div className="bg-[#8b5d3b] h-25 rounded flex items-center justify-center p-2 shadow">
                  <p className="text-white text-[10px] text-center font-medium uppercase tracking-wider "> {t('approach_box_investment')}</p>
                </div>
                <div className="bg-[#e8e0d8] h-25 rounded" />
                <div className="bg-[#8b5d3b] h-25 rounded flex items-center justify-center p-2 shadow">
                  <p className="text-white text-[10px] text-center font-medium uppercase tracking-wider">{t('approach_box_trust')} </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}