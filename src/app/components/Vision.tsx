"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Vision() {
  const t = useTranslations()
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{
        backgroundImage: "url('./assets/about/Vision.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-xl bg-white/95 backdrop-blur-sm p-8 rounded shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]">{ t('our_purpose') }</span>

          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mt-2 mb-4">
             { t('vision_title') }
          </h2>

          <div className="w-12 h-px bg-[#d5a86e] mb-5" />
          <p className="text-gray-600 text-[14px] leading-[1.8] mb-4">
            { t('at') } {" "}<span className="text-[#d5a86e] font-medium"> { t('evernest') } </span>,{ t('vision_description_1') }
          </p>
          <p className="text-gray-600 text-[14px] leading-[1.8]">
            { t('vision_description_2') }
          </p>
        </motion.div>
      </div>
    </section>
  );
}