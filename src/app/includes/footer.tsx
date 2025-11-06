"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  // tweak these two to match your brand vibe
  const accent = "#fff"; // Evernest-ish deep chestnut
  const bg = "#cf916fff";      // warm neutral (not white, not dark)

  const links = [
    { label: "Projects", href: "#" },
    { label: "Buy", href: "#" },
    { label: "Rent", href: "#" },
    { label: "Property Management", href: "#" },
  ];

  return (
    <footer className="font-normal text-slate-700" style={{ backgroundColor: bg }}>
      <div className="container mx-auto max-w-7xl px-6 md:px-8 py-10">
        {/* Top: Brand + short blurb */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: accent }}
              aria-hidden
            >
              <Building className="h-6 w-6 text-white" />
            </div>
            <span className="text-base tracking-wide text-slate-900">
              ELITE PROPERTIES
            </span>
          </div>

          {/* Compact nav pills */}
          <nav className="flex flex-wrap gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="px-3 py-1.5 text-sm rounded-full border border-slate-200 hover:bg-white/60 hover:border-slate-300 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px my-8" style={{ background: "rgba(0,0,0,0.06)" }} />

        {/* Middle: compact 3-col layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About (short) */}
          <p className="text-sm leading-relaxed">
            Luxury properties, off-plan investments, and dependable management
            across the UAE—delivered with clarity and care.
          </p>

          {/* Contact (very concise) */}
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200">
                <Phone className="h-4 w-4" style={{ color: accent }} />
              </span>
              <a href="tel:+971527469500" className="hover:underline">
                +971 52 746 9500
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200">
                <Mail className="h-4 w-4" style={{ color: accent }} />
              </span>
              <a href="mailto:info@evernestre.ae" className="hover:underline text-white">
                info@evernestre.ae
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white border border-slate-200 mt-0.5">
                <MapPin className="h-4 w-4" style={{ color: accent }} />
              </span>
              <span>
                Business Bay, Dubai <br /> United Arab Emirates
              </span>
            </div>
          </div>

          {/* Newsletter (ultra minimal) */}
          <form
            className="text-sm"
            onSubmit={(e) => {
              e.preventDefault();
              // handle submit here
            }}
          >
            <label htmlFor="newsletter" className="block mb-2 text-slate-600">
              Newsletter
            </label>
            <div className="flex">
              <input
                id="newsletter"
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-md border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[rgba(145,76,57,0.18)]"
              />
              <button
                aria-label="Subscribe"
                className="px-3 py-2 rounded-r-md border border-l-0 border-slate-200 hover:bg-white transition"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div className="h-px my-8" style={{ background: "rgba(0,0,0,0.06)" }} />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} Elite Properties. All rights reserved.
          </div>

          <div className="flex flex-wrap gap-5 text-sm text-slate-600">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Shield className="h-4 w-4" style={{ color: accent }} />
            <span>RERA: #123456</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
