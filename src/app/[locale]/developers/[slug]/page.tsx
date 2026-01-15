"use client";
import React, { useEffect, useState, use as usePromise } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  Share2,
  Heart,
  MapPin,
  Building2,
  Calendar,
  Award,
  Trophy,
  Users,
  Globe,
  TrendingUp,
  CheckCircle2,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import OffPlanProjects from "@/app/components/OffPlanProjects";
import { getDevelopersBySlug } from "@/lib/developer";
import { useLocale } from "next-intl";
import LuxuryLoader from "@/app/components/LuxuryLoader";

export default function DeveloperDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = usePromise(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [developers, setDevelopers] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const locale = useLocale();

  // STATIC STATS YOU WANTED TO KEEP
  const staticStats = {
    projectsCount: "60+",
    yearEstablished: "1997",
    locations: "12+",
    awards: "45+",
  };

  useEffect(() => {
    const fetchArea = async () => {
      try {
        setLoading(true);
        const data = await getDevelopersBySlug(slug, locale);
        setDevelopers(data.developers ?? data);
      } catch (err) {
        console.error(err);
        setError("Failed to load developer details.");
      } finally {
        setLoading(false);
      }
    };
    fetchArea();
  }, [slug, locale]);

  if (loading) 
    return (
        <LuxuryLoader></LuxuryLoader>
  );
  if (error)
    return <div className="p-10 text-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-b from-[#f6ecdf] to-[#fffaf5] overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#d4a373]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#c97a52]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

        <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="h-px w-10 bg-[#c97a52]" />
                <span className="text-[#8b5d3b] text-xs font-medium tracking-wider uppercase">
                  Premier Developer
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#3c2f26] mb-4 leading-tight">
                {developers?.name}
              </h1>

              <p
                className="text-[#5a4a3f] leading-relaxed max-w-xl"
                dangerouslySetInnerHTML={{ __html: developers?.description }}
              />
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c97a52]/15 to-[#d4a373]/15 rounded-2xl blur-xl scale-105" />

                <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-[#f0e4d9]">
                  <div className="relative w-44 h-44 md:w-56 md:h-56 mx-auto">
                    <Image
                      src={developers?.image}
                      alt={developers?.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <OffPlanProjects projects={developers?.projects?.data || []} />
      <RegisterCtaSection />
    </div>
  );
}
