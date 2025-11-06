"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Building,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const gradient =
    "linear-gradient(135deg, #8b4c1d 0%, #c68043 30%, #eab676 60%, #ffdfb3 100%)";

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background Gradient + Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: gradient,
          filter: "brightness(1.05)",
        }}
      ></div>

      {/* Animated shimmer overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      ></motion.div>

      <div className="relative z-10">
        {/* Top Brand Bar */}
        <div className="bg-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                <Building className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold tracking-wider drop-shadow-md">
                ELITE PROPERTIES
              </h2>
            </motion.div>

            <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              {["Projects", "Buy", "Rent", "Management"].map((item) => (
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 10px rgba(255,255,255,0.8)",
                  }}
                  key={item}
                  href="#"
                  className="hover:underline hover:text-[#fff4da]"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* Middle Section */}
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#fff4da]">
              About Us
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              Discover Dubai’s most prestigious developments, handpicked for
              luxury, architecture, and exclusivity. Your key to exceptional
              real estate begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#fff4da]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["About", "Careers", "FAQs", "Contact"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{
                    x: 6,
                    color: "#fff4da",
                    textShadow: "0 0 8px rgba(255,255,255,0.8)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href="#" className="transition-all duration-200">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#fff4da]">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#fff4da]" />
                <span>+971 52 746 9500</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#fff4da]" />
                <span>info@evernestre.ae</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#fff4da]" />
                <span>
                  Business Bay, Dubai <br /> United Arab Emirates
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#fff4da]">
              Newsletter
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex bg-white/15 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 text-sm bg-transparent placeholder-white/70 text-white focus:outline-none"
              />
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(255,255,255,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="px-3 py-2 bg-white/25 hover:bg-white/40 text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/25 py-6 text-center text-sm text-white/80">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center max-w-7xl mx-auto px-6 gap-3">
            <p>
              © {new Date().getFullYear()} Elite Properties. All rights
              reserved.
            </p>

            <div className="flex gap-5">
              {["Privacy", "Terms", "Cookies"].map((t) => (
                <a key={t} href="#" className="hover:text-[#fff4da]">
                  {t}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#fff4da]" />
              <span>RERA: #123456</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
