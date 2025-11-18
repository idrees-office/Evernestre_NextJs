"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function RefinedFooter() {
  const year = new Date().getFullYear();

  const quick = [
    { label: "Careers", href: "/careers" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Developers", href: "/developer-guide" },
  ];

  const socials = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/evernestrealestatellc",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      Icon: Twitter,
      href: "https://x.com/evernest_dxb/status/1384846882665648133",
      label: "Twitter",
      color: "#1DA1F2",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/evernest_dubairealestate/",
      label: "Instagram",
      color: "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/company/evernest-real-estate-llc/",
      label: "LinkedIn",
      color: "#0A66C2",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#f0e4d9] bg-[#fffaf5] text-[#3c2f26]">
      <div
        className="h-0.5 w-full"
        style={{
          background:
            "linear-gradient(90deg, #8b5d3b 0%, #b06c48 45%, #d4a373 65%, #f6d8a4 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-64 w-64 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(closest-side, #d4a373, transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(closest-side, #8b5d3b, transparent)",
        }}
      />

      <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">

          <div className="lg:col-span-2">
            <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
              Evernest Real Estate
            </h3>
            <p className="text-sm leading-relaxed text-[#3c2f26]/90">
              Discover Dubai’s most prestigious developments—handpicked for
              luxury, innovation, and world-class design. Your key to
              exceptional real estate begins here.
            </p>

            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                   target="_blank"
                  aria-label={label}
                  whileHover={{ scale: 1.08 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:brightness-110"
                  style={{
                    background: label === "Instagram" ? color : undefined,
                    backgroundColor: label !== "Instagram" ? color : undefined,
                  }}
                >
                  <Icon className="h-[18px] w-[18px]" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quick.map((q) => (
                <li key={q.label} className="group">
                  <Link
                    href={q.href} target="_blank"
                    className="inline-flex items-center text-[#3c2f26]/90 transition-colors hover:text-[#8b5d3b]"
                  >
                    <ArrowRight className="mr-2 h-[14px] w-[14px] text-[#b06c48] transition-transform group-hover:translate-x-0.5" />
                    {q.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f0e4d9] bg-[#f6ecdf]">
                  <Phone className="h-4 w-4 text-[#8b5d3b]" />
                </div>
                <a
                  href="tel:+971527469500"
                  className="select-all hover:text-[#8b5d3b]"
                >
                  +971 52 746 9500
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f0e4d9] bg-[#f6ecdf]">
                  <Mail className="h-4 w-4 text-[#8b5d3b]" />
                </div>
                <a
                  href="mailto:info@evernestre.ae"
                  className="select-all hover:text-[#8b5d3b]"
                >
                  info@evernestre.ae
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#f0e4d9] bg-[#f6ecdf]">
                  <MapPin className="h-4 w-4 text-[#8b5d3b]" />
                </div>
                <address className="not-italic">
                  Business Bay, Dubai
                  <br /> United Arab Emirates
                </address>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
              <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
              Newsletter
            </h3>
            <p className="mb-3 text-sm text-[#3c2f26]/80">
              Subscribe to get updates on new properties and exclusive offers.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="rounded-sm border border-[#f0e4d9] bg-white px-3 py-2 text-sm text-[#3c2f26] placeholder-[#8b5d3b]/60 shadow-[0_2px_12px_rgba(139,93,59,0.08)] outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#d4a373]"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b5d3b] via-[#b06c48] to-[#d4a373] px-2 py-2 font-normal text-white shadow-[0_10px_25px_rgba(139,93,59,0.25)] transition hover:brightness-105"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-[#123456]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-center text-sm text-white/90">
            © {year} Evernest Real Estate. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm">
            {["Privacy", "Terms", "Cookies"].map((t) => (
              <Link key={t} href={`/${t.toLowerCase()}`}
                className="text-white/80 transition-colors hover:text-white"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full overflow-hidden">
        <div className="h-[2px] w-[200%] animate-[shine_4s_linear_infinite] bg-gradient-to-r from-transparent via-[#d4a373] to-transparent" />
      </div>
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </footer>
  );
}
