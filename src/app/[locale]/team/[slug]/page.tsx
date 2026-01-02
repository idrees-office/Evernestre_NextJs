"use client";

import React, { useEffect, useState, use as usePromise } from "react";
import { notFound } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { getTeamMemberBySlug } from "@/lib/team";
import RegisterCtaSection from "@/app/components/RegisterCtaSection";
import SocialLinksSection from "@/app/components/SocialLinksSection";



type TeamMember = {
  status: boolean;
  id: number;
  name: string;
  email: string;
  slug: string;
  phone: string | null;
  designation: string | null;
  photo: string | null;
  photo_thumb: string | null;
  joining_date: string | null;
  description :  string | null;
};

export default function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = usePromise(params);

  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    getTeamMemberBySlug(slug)
      .then(setMember)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
    
        <div className="h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#8b5d3b] border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  if (!member || member.status === false) {
    notFound();
  }
  const whatsappNumber = member.phone ? member.phone.replace(/\D/g, "") : null;

  return (
    <>
    <section className="bg-[#f6ecdf] py-12 border-b border-[#f0e4d9]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-[#3c2f26] mb-2">
             {member.name}
          </h2>
          <div className="mx-auto h-[3px] w-20 bg-gradient-to-r from-[#b06c48] to-[#d4a373] rounded-full"></div>
        </div>
      </section>
      <div className="screen bg-[#ffffff] mb-8">
        <div className="container mx-auto px-2 py-2 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 max-w-6xl mx-auto">
            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src={
                    member.photo ||
                    member.photo_thumb ||
                    "/assets/team/default-profile.jpg"
                  }
                  alt={member.name}
                  width={500}
                  height={650}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>

              <div className="mt-6">
                <p className="text-xs tracking-widest text-gray-500 uppercase">
                  {member.designation || "Team Member"}
                </p>
                <h2 className="text-xl font-semibold text-[#111111] mt-1">
                  {member.name}
                </h2>
              </div>
            </div>

            {/* RIGHT – About Section */}
            <div className="lg:col-span-8">
              {/* <h1 className="text-2xl font-semibold text-[#111111] mb-6">
                About {member.name}
              </h1> */}

              <div
                    className="space-y-5 text-[15px] leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: member.description || "" }}
                    />

              {/* Divider */}
              <div className="mt-10 border-t border-gray-200 pt-10">

                {/* Reach Out Section */}
                <h3 className="text-lg font-semibold text-[#111111] mb-4">
                  Reach Out
                </h3>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5
                    rounded-lg border border-gray-200
                    text-sm font-medium text-[#111111]
                    hover:border-[#8b5d3b] hover:text-[#8b5d3b]
                    transition-all"
                  >
                    <Mail className="w-4 h-4 text-[#8b5d3b]" />
                    <span>Email {member.name.split(" ")[0]}</span>
                  </a>

                  {/* WhatsApp */}
                  {whatsappNumber && (
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5
                      rounded-lg border border-gray-200
                      text-sm font-medium text-[#111111]
                      hover:border-[#25D366] hover:text-[#25D366]
                      transition-all"
                    >
                      <svg
                        className="w-4 h-4 text-[#25D366]"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                      >
                        <path d="M16.01 3C8.84 3 3 8.84 3 16c0 2.82.75 5.47 2.06 7.78L3 29l5.37-1.99A12.9 12.9 0 0016 29c7.16 0 13-5.84 13-13S23.17 3 16.01 3z" />
                      </svg>
                      <span>WhatsApp {member.name.split(" ")[0]}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <SocialLinksSection />
    <RegisterCtaSection />

    </>
  );
}
