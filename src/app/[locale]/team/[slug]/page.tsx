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

  const whatsappNumber = member.phone
    ? member.phone.replace(/\D/g, "")
    : null;

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

      <div className="screen bg-[#ffffff]">
        <div className="container mx-auto px-2 py-2 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 max-w-6xl mx-auto">

            {/* LEFT – Image + Name */}
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

                <div className="flex flex-col sm:flex-row gap-4">

                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 hover:border-[#8b5d3b] hover:bg-[#8b5d3b] hover:text-white transition-all group"
                  >
                    <Mail className="w-5 h-5 text-[#8b5d3b] group-hover:text-white" />
                    <span className="text-sm font-medium">
                      Email {member.name.split(" ")[0]}
                    </span>
                  </a>

                  {/* WhatsApp */}
                  {whatsappNumber && (
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 rounded-xl border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white transition-all group"
                    >
                      {/* WhatsApp SVG */}
                      <svg
                        className="w-5 h-5 text-[#25D366] group-hover:text-white"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19.11 17.24c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.2-1.34-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3 0 1.36.99 2.67 1.13 2.85.14.18 1.95 2.98 4.73 4.18.66.28 1.17.45 1.57.57.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                        <path d="M16.01 3C8.84 3 3 8.84 3 16c0 2.82.75 5.47 2.06 7.78L3 29l5.37-1.99A12.9 12.9 0 0016 29c7.16 0 13-5.84 13-13S23.17 3 16.01 3zm0 23.52c-2.4 0-4.63-.7-6.51-1.91l-.47-.29-3.18 1.18 1.21-3.09-.31-.5A10.5 10.5 0 015.5 16c0-5.8 4.72-10.51 10.51-10.51 5.8 0 10.51 4.72 10.51 10.51s-4.72 10.52-10.51 10.52z" />
                      </svg>

                      <span className="text-sm font-medium">
                        WhatsApp {member.name.split(" ")[0]}
                      </span>
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
