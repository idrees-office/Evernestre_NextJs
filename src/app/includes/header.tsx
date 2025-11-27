"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { createPageUrl } from "../utils/url";
import ContactModal from "../Components/ContactModal";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", url: createPageUrl("Home"), dropdown: null },
    {
      label: "Off-Plan",
      url: createPageUrl("Projects"),
      dropdown: ["All Projects"],
    },
    {
      label: "Areas",
      url: createPageUrl("AreaGuide"),
      dropdown: ["Area Guide"],
    },
    {
      label: "Developers",
      url: createPageUrl("Developers"),
      dropdown: ["All Developer"],
    },
    {
      label: "News & Blogs",
      url: createPageUrl("News"),
      dropdown: ["News", "Blogs"],
    },
    {
      label: "Careers",
      url: createPageUrl("Careers"),
      dropdown: null,
    },
    {
      label: "About Us",
      url: createPageUrl("About"),
      dropdown: null,
    },
  ] as const;

  const headerClass = isMounted
    ? isScrolled ? "bg-white/90 backdrop-blur-2xl border-b border-[color:var(--brand)]/10 shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)]" : "bg-transparent"
    : "bg-transparent";

  return (
    <>
      <style>{`
        :root { --brand:#d0845b; --charcoal:#1a1a1a; --cream:#faf8f6; }
        ::selection { background: rgba(208,132,91,.2); color: var(--charcoal); }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: var(--cream); }
        ::-webkit-scrollbar-thumb { background: linear-gradient(135deg,var(--brand),#c9a882); border-radius: 4px; }
      `}</style>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClass}`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-24">
            <Link
              href={createPageUrl("Home")}
              className="flex items-center gap-2 group"
            >
              <Image
                src="/assets/EN-logo.png"
                alt="Evernest Logo"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.url}
                    className={`relative px-4 py-1 text-[15px] font-light tracking-wide transition-all duration-300
                    flex items-center
                    text-[color:var(--charcoal)]/85 hover:text-[color:var(--brand)]
                    after:absolute after:left-1/2 after:bottom-0 after:h-[0.5px] after:w-0 
                    after:bg-[color:var(--brand)] after:transition-all after:duration-300 
                    after:-translate-x-1/2 hover:after:w-4/5
                    ${
                      pathname === item.url ? "text-[color:var(--brand)] after:w-3/5" : ""
                    }
                  `}
                  >
                    {item.label}
                  </Link>
                  {!!item.dropdown?.length && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-60 bg-white rounded-sm shadow-2xl border border-black/10 overflow-hidden"
                        >
                          {item.dropdown.map((drop) => (
                            <Link
                              key={drop}
                              href={createPageUrl(drop)}
                              className="block px-3 py-2 text-sm text-[#1a1a1a]/75 hover:text-[color:var(--brand)]
                              hover:bg-[color:var(--cream)] transition-all duration-200 border-b border-black/5 last:border-0 font-light"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {drop}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            <div>
              <button
                onClick={() => setIsContactOpen(true)}
                className="
                  cursor-pointer
                  relative px-6 py-2 text-sm font-normal tracking-wide rounded-sm
                  text-white bg-gradient-to-r from-[color:var(--brand)] to-[#c97a52]
                  overflow-hidden transition-all duration-300
                "
              >
                <span className="relative z-10">Book Now</span>

                <span
                  className="
                    absolute inset-0
                    w-[180%] h-[180%]
                    -top-[40%] -left-[40%]
                    rotate-45
                    bg-gradient-to-r from-transparent via-white/70 to-transparent
                    blur-[1px]
                    animate-[luxury-shine_1.6s_ease-in-out_infinite]
                    pointer-events-none
                  "
                ></span>
              </button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-black/10"
            >
              <div className="container mx-auto px-6 py-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.url}
                      className="block px-4 py-3 text-[#1a1a1a]/85 hover:text-[color:var(--brand)] hover:bg-[color:var(--cream)] rounded-lg transition-all duration-200 font-light"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
                <button
                  onClick={() => { setIsContactOpen(true); setIsMobileMenuOpen(false); }}
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[color:var(--brand)] to-[#c97a52] text-white rounded-lg font-light tracking-wider"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
