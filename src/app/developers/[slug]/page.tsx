"use client";
import React, { useEffect, useState, use as usePromise } from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowLeft, Share2, Heart, MapPin, Building2, Calendar, Award, 
  Trophy, Users, Globe, TrendingUp, CheckCircle2, BedDouble, Bath, 
  Maximize, ArrowRight, Phone, Mail, Clock, Send, CheckCircle
} from 'lucide-react';
import RegisterCtaSection from '@/app/Components/RegisterCtaSection';
import OffPlanProjects from '@/app/Components/OffPlanProjects';
import { getDevelopersBySlug } from "@/lib/developer";

export default function DeveloperDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = usePromise(params);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [developers, setDevelopers] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // STATIC STATS YOU WANTED TO KEEP
    const staticStats = {
        projectsCount: "60+",
        yearEstablished: "1997",
        locations: "12+",
        awards: "45+"
    };

    useEffect(() => {
        const fetchArea = async () => {
            try {
                setLoading(true);
                const data = await getDevelopersBySlug(slug);
                setDevelopers(data.developers ?? data);
            } catch (err) {
                console.error(err);
                setError("Failed to load developer details.");
            } finally {
                setLoading(false);
            }
        };
        fetchArea();
    }, [slug]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (error) return <div className="p-10 text-center text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="relative bg-gradient-to-b from-[#f6ecdf] to-[#fffaf5] overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c97a52]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* LEFT SIDE */}
                        <motion.div 
                            initial={{ opacity: 0, x: -40 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.7 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-12 bg-[#c97a52]" />
                                <span className="text-[#8b5d3b] text-sm font-medium tracking-wider uppercase">Premier Developer</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3c2f26] mb-6 leading-tight">
                                {developers?.name}
                            </h1>

                            <p className="text-[#5a4a3f] text-lg leading-relaxed mb-8 max-w-xl">
                                {/* If you have a tagline, else fallback */}
                                {developers?.tagline ?? "A leading UAE real estate developer focused on quality and lifestyle living."}
                            </p>

                            {/* STATIC BOXES */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { icon: Building2, value: staticStats.projectsCount, label: 'Projects' },
                                    { icon: Calendar, value: staticStats.yearEstablished, label: 'Established' },
                                    { icon: MapPin, value: staticStats.locations, label: 'Locations' },
                                    { icon: Award, value: staticStats.awards, label: 'Awards' }
                                ].map((stat, idx) => (
                                    <div 
                                        key={idx} 
                                        className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-[#f0e4d9]"
                                    >
                                        <stat.icon className="w-5 h-5 text-[#c97a52] mb-2" />
                                        <p className="text-2xl font-semibold text-[#3c2f26]">{stat.value}</p>
                                        <p className="text-xs text-[#8b5d3b]">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 0.7, delay: 0.2 }} 
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#c97a52]/20 to-[#d4a373]/20 rounded-3xl blur-2xl scale-110" />
                                <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#f0e4d9]">
                                    <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
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

            {/* ABOUT SECTION */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT ABOUT IMAGE */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            className="relative"
                        >
                            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                                <Image
                                    src={developers?.image}
                                    alt={developers?.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* RIGHT ABOUT TEXT */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }} 
                            whileInView={{ opacity: 1, y: 0 }} 
                            viewport={{ once: true }} 
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="h-px w-12 bg-[#c97a52]" />
                                <span className="text-[#8b5d3b] text-sm font-medium tracking-wider uppercase">About the Developer</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-light text-[#3c2f26] mb-6">
                                A Legacy of Excellence in Real Estate
                            </h2>

                            <p className="text-[#5a4a3f] leading-relaxed mb-8"
                                dangerouslySetInnerHTML={{ __html: developers?.description }}
                            />

                            {/* If you ever add highlights from backend */}
                            {developers?.highlights?.map((h: string, i: number) => (
                                <div key={i} className="flex items-start gap-3 mb-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#c97a52]" />
                                    <span>{h}</span>
                                </div>
                            ))}
                        </motion.div>

                    </div>
                </div>
            </section>

            <RegisterCtaSection />
            <OffPlanProjects projects={developers?.projects?.data || []} />
            {/* <OffPlanProjects projects={[]} /> */}
        </div>
    );
}
