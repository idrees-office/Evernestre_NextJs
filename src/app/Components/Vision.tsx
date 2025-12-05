"use client";
import { motion } from "framer-motion";

export default function Vision() {
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
          <span className="text-[#d5a86e] text-xs uppercase tracking-[0.2em]">
            Our Purpose
          </span>

          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mt-2 mb-4">
            Vision
          </h2>

          <div className="w-12 h-px bg-[#d5a86e] mb-5" />

          <p className="text-gray-600 text-[14px] leading-[1.8] mb-4">
            At{" "}
            <span className="text-[#d5a86e] font-medium">
              Evernest Real Estate
            </span>
            , our vision is to consistently provide exceptional experiences and
            deliver outstanding results for our customers in Dubai&apos;s
            competitive real estate market.
          </p>

          <p className="text-gray-600 text-[14px] leading-[1.8]">
            We are committed to maintaining the highest standards of service
            quality and ensuring customer satisfaction through integrity,
            professionalism, and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
