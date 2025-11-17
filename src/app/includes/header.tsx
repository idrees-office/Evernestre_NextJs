"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPageUrl } from "../utils/url";
import ContactModal from "../Components/ContactModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", url: createPageUrl("Home"), dropdown: ["Main Home"] },
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
      label: "Services",
      url: "#",
      dropdown: [
        "Property Management",
        "Investment Consulting",
        "Legal Services",
      ],
    },
    {
      label: "About Us",
      url: createPageUrl("About"),
      dropdown: ["Our Team", "Careers"],
    },
    { 
      label: "News & Blogs",
      url: createPageUrl("News"),
      dropdown: ["News", "Blogs"]

     },
  ] as const;

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${
            isScrolled
              ? "bg-white/90 backdrop-blur-2xl border-b border-[color:var(--brand)]/10 shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)]"
              : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-24">
            <Link href={createPageUrl("Home")} className="flex items-center gap-2 group">
              <img
                src="/assets/EN-logo.png"
                alt="Evernest Logo"
                className="h-8 object-contain"
              />

              {/* Text */}
              {/* <div className="text-4xl md:text-[24px] font-light tracking-tight">
                <span className="text-[color:var(--brand)]">Evernest</span>
                <span
                  className={`ml-2 transition-colors duration-300 ${
                    isScrolled
                      ? "text-[color:var(--charcoal)]"
                      : "text-[color:var(--charcoal)]"
                  }`}
                >
                  Real Estate
                </span>
              </div> */}
            </Link>

            {/* <Link
              href={createPageUrl("Home")}
              className="flex items-center group"
            >
              <div className="text-4xl md:text-[24px] font-light tracking-tight">
                <span className="text-[color:var(--brand)]">Evernest</span>
                <span
                  className={`ml-2 transition-colors duration-300 ${
                    isScrolled
                      ? "text-[color:var(--charcoal)]"
                      : "text-[color:var(--charcoal)]"
                  }`}
                >
                  Real Estate
                </span>
              </div>
            </Link> */}
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
                    // className={`px-4 py-3 text-[15px] font-light tracking-wide rounded-lg transition-all duration-300
                    //   flex items-center gap-1
                    //   text-[color:var(--charcoal)]/85 hover:text-[color:var(--brand)]
                    //   hover:bg-[color:var(--brand)]/8
                    //   ${pathname === item.url ? 'text-[color:var(--brand)]' : ''}
                    // `}

                    className={`relative px-4 py-3 text-[15px] font-light tracking-wide transition-all duration-300
                    flex items-center
                    text-[color:var(--charcoal)]/85 hover:text-[color:var(--brand)]
                    after:absolute after:left-1/2 after:bottom-0 after:h-[1.5px] after:w-0 
                    after:bg-[color:var(--brand)] after:transition-all after:duration-300 
                    after:-translate-x-1/2 hover:after:w-4/5
                    ${
                      pathname === item.url
                        ? "text-[color:var(--brand)] after:w-4/5"
                        : ""
                    }
                  `}
                  >
                    {item.label}
                    {/* {!!item.dropdown?.length && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300
                          ${activeDropdown === item.label ? 'rotate-180' : ''}
                        `}
                      />
                    )} */}
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
                            <a
                              key={drop}
                              href={createPageUrl(drop)}
                              className="block px-3 py-2 text-sm text-[#1a1a1a]/75 hover:text-[color:var(--brand)]
                              hover:bg-[color:var(--cream)] transition-all duration-200 border-b border-black/5 last:border-0 font-light"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {drop}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-white cursor-pointer px-5 py-2 bg-gradient-to-r from-[color:var(--brand)] to-[#c97a52] text-white rounded-sm text-sm font-light tracking-wider transition-all duration-300 hover:shadow-lg hover:scale-[1.03]"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile burger */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300" />
                <span className="block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300" />
                <span className="block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300" />
              </div>
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
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
                <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-[color:var(--brand)] to-[#c97a52] text-white rounded-lg font-light tracking-wider">
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
