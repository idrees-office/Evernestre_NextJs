"use client";

import React, { useEffect, useState, use as usePromise } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import { getAreaBySlug } from "@/lib/area";
import LuxuryLoader from "@/app/components/LuxuryLoader";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function AreaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const locale = useLocale();
  const { slug } = usePromise(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [area1, setArea1] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [openAccordion, setOpenAccordion] = useState<any>(null);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const fetchArea = async () => {
      try {
        setLoading(true);
        const data = await getAreaBySlug(slug, locale);
        setArea1(data.area ?? data);

      } catch (err) {
        console.error(err);
        setError("Failed to load area details.");
      } finally {
        setLoading(false);
      }
    };
    fetchArea();
  }, [slug, locale]);

  if (loading) return <LuxuryLoader />;
  if (error || !area1) return <div className="p-10 text-center text-red-600">{error}</div>;

  const mainDesc = area1.main_description || "";
  const shortText =
    mainDesc.length > 611 ? mainDesc.substring(0, 611) + "..." : mainDesc;

  const accordionSections = [
    { id: "one", heading: area1.heading_one, content: area1.para_one },
    { id: "two", heading: area1.heading_two, content: area1.para_two },
    { id: "three", heading: area1.heading_three, content: area1.para_three },
    { id: "four", heading: area1.heading_four, content: area1.para_four },
    { id: "five", heading: area1.heading_five, content: area1.para_five },
    { id: "six", heading: area1.heading_six, content: area1.para_six },
    { id: "seven", heading: area1.heading_seven, content: area1.para_seven },
  ].filter((sec) => sec.heading && sec.content);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleAccordion = (id: any) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0]">
      <section className="bg-[#f6ecdf] py-8 border-b border-[#e8ddd0]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-medium text-[#3c2f26] mb-2">
            {area1?.title}
          </h1>
          <div className="mx-auto h-[3px] w-16 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-[#3c2f26] mb-4">
                {area1.title}, Area Guide
              </h2>

              <div className="text-[#6f5b4b] leading-relaxed space-y-3 [&>p]:mb-3">
                {!showFullText ? (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: shortText }} />
                    {area1.main_description.length > 611 && (
                      <button onClick={() => setShowFullText(true)} className="inline-block text-[#b06c48] font-normal"> Read More </button>
                    )}
                  </>
                ) : null}

                {showFullText && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2"
                  >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                      <div className="bg-white max-w-2xl w-full p-6 rounded-xl shadow-xl relative overflow-y-auto max-h-[80vh]">
                        <button
                          className="absolute top-3 right-3 text-gray-700 hover:text-black text-xl"
                          onClick={() => setShowFullText(false)}
                        >
                          ✕
                        </button>

                        <h3 className="text-2xl font-semibold text-[#3c2f26] mb-4">
                          {area1.title} — Full Overview
                        </h3>

                        <div
                          className="text-[#6f5b4b] leading-relaxed space-y-3 [&>p]:mb-3"
                          dangerouslySetInnerHTML={{ __html: area1.main_description }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md w-full h-[280px] md:h-[350px] relative">
                <Image
                  src={area1.image}
                  alt={area1.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <RegisterCtaSection />
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-8xl">
          <div className="space-y-3">
            {accordionSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-sm border border-[#e8ddd0] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  className={`w-full text-left px-5 py-4 flex justify-between items-center gap-4 transition-colors cursor-pointer ${
                    openAccordion === section.id
                      ? "bg-[#f6ecdf]"
                      : "hover:bg-[#faf7f2]"
                  }`}
                  onClick={() => toggleAccordion(section.id)}
                  type="button"
                >
                  <span className="text-lg md:text-xl font-normal text-[#3c2f26] cursor-pointer">
                    {section.heading}
                  </span>

                  <motion.span animate={{ rotate: openAccordion === section.id ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                    <ChevronDown className="w-5 h-5 text-[#b06c48]" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openAccordion === section.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                      <div className="px-5 pb-5 pt-2 border-t border-[#e8ddd0]">
                        <div className="text-[#6f5b4b] leading-relaxed
                          [&>p]:mb-3 [&>p]:last:mb-0
                          [&_ul]:mt-2 [&_ul]:space-y-1.5
                          [&_li]:pl-4 [&_li]:relative
                          [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2
                          [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:bg-[#d4a373] [&_li]:before:rounded-full
                          [&_strong]:text-[#3c2f26] [&_strong]:font-medium"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
