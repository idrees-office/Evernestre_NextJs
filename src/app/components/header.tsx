"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { createPageUrl } from "../utils/url";
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl'; 
import "flag-icons/css/flag-icons.min.css";
import ContactModal from "./ContactModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale(); 
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(locale);
  
  useEffect(() => {
    setIsMounted(true);
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


   const navItems = useMemo(() => [
    { 
      label: t('home'), 
      url: createPageUrl("Home"), 
      dropdown: null 
    },
    {
      label: t('offPlan'),
      url: createPageUrl("Projects"),
      dropdown: [
        { 
          label: t('allProjects'), 
          routeKey: "Projects"
        }
      ],
    },
    {
      label: t('areas'),
      url: createPageUrl("AreaGuide"),
      dropdown: [
        { 
          label: t('areaGuide'), 
          routeKey: "AreaGuide" 
        }
      ],
    },
    {
      label: t('developers'),
      url: createPageUrl("developers"),
      dropdown: [
        { 
          label: t('developers'), 
          routeKey: "All Developer"
        }
      ],
    },
    {
      label: t('news'),
      url: createPageUrl("News"),
      dropdown: [
        { 
          label: t('news'), 
          routeKey: "News" 
        },
        { 
          label: t('blogs'), 
          routeKey: "Blogs" 
        }
      ],
    },
    {
      label: t('about'),
      url: createPageUrl("About"),
      dropdown: [
        { 
          label: t('ourTeam'), 
          routeKey: "Our Team" 
        }
      ],
    },
  ], [t]); 

  const headerClass = "bg-white/90 backdrop-blur-2xl border-b border-[color:var(--brand)]/10 shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)]";

  const languages = [
    { code: "en", label: "EN", flagClass: "fi fi-gb", name: "English" },
    { code: "cz", label: "CZ", flagClass: "fi fi-cz", name: "Čeština" },
    { code: "es", label: "ES", flagClass: "fi fi-es", name: "Español" },
    { code: "ru", label: "RU", flagClass: "fi fi-ru", name: "Русский" }

  ];
  
  const handleLanguageChange = (langCode: string) => {
    setLangOpen(false);
    
    // Get current path without locale
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentLocale = pathSegments[0];
    
    // Check if the first segment is a valid locale
    const validLocales = ['en', 'cz', 'ru', 'es'];
    const isLocaleInPath = validLocales.includes(currentLocale);
    
    let newPath;
    if (isLocaleInPath) {
      // Replace locale and keep the rest of the path
      pathSegments[0] = langCode;
      newPath = `/${pathSegments.join('/')}`;
    } else {
      // Add locale to the beginning
      newPath = `/${langCode}${pathname}`;
    }
    
    router.push(newPath);
    setIsMobileMenuOpen(false);
  };

  const createLocalizedUrl = (url: string) => {
  // Ensure url starts with /
  const cleanUrl = url.startsWith('/') ? url : `/${url}`;
  
  // Don't double-add locale
  if (cleanUrl.startsWith(`/${locale}`)) {
    return cleanUrl;
  }
  
  // Don't add locale if it's already in the URL from createPageUrl
  const segments = cleanUrl.split('/').filter(Boolean);
  if (segments.length > 0 && ['en', 'cz', 'ru', 'es'].includes(segments[0])) {
    return cleanUrl;
  }
  
  return `/${locale}${cleanUrl}`;
};

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClass}`}
      >
        <div className="container mx-auto px-6 md:px-12">
          <nav className="flex items-center justify-between h-24">
            {/* UPDATE: Add locale to home link */}
            <Link href={createLocalizedUrl(createPageUrl("Home"))} className="flex items-center gap-2 group">
              <Image
                src="../../assets/EN-logo.png"
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
                <Link href={createLocalizedUrl(item.url)}
                    className={`relative px-4 py-1 text-[15px] font-light tracking-wide transition-all duration-300
                    flex items-center
                    text-[color:var(--charcoal)]/85 hover:text-[color:var(--brand)]
                    after:absolute after:left-1/2 after:bottom-0 after:h-[0.5px] after:w-0 
                    after:bg-[color:var(--brand)] after:transition-all after:duration-300 
                    after:-translate-x-1/2 hover:after:w-4/5
                    ${
                      pathname.includes(item.url) ? "text-[color:var(--brand)] after:w-3/5" : ""
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

                          {item.dropdown?.map((dropItem, index) => (
                            <Link
                              key={index}
                              href={createPageUrl(dropItem.routeKey, { locale })}
                              className="block px-3 py-2 text-sm text-[#1a1a1a]/75 hover:text-[color:var(--brand)] hover:bg-[color:var(--cream)] transition-all duration-200 border-b border-black/5 last:border-0 font-light"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
                <button
                  aria-label="Select language"
                  className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium tracking-wide text-[color:var(--charcoal)]/85 border border-black/10 rounded-sm bg-white hover:border-[color:var(--brand)] transition-all cursor-pointer">
                  <span className={`text-base ${languages.find(l => l.code === currentLang)?.flagClass}`}></span>
                  <span>{currentLang.toUpperCase()}</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} fill="none"  stroke="currentColor"  viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="
                        absolute right-0 mt-2 w-36
                        bg-white
                        border border-black/10
                        shadow-xl
                        rounded-sm
                        overflow-hidden
                        z-50
                      "
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-[color:var(--cream)] transition-all duration-200 cursor-pointer border-b border-black/5 last:border-0"
                        >
                          <span className={`text-base ${lang.flagClass}`}></span>
                          <span className="flex-1 text-left">{lang.name}</span>
                          <span className="text-xs text-[color:var(--charcoal)]/60">{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Now Button - UPDATED */}
              <button
                onClick={() => setIsContactOpen(true)}
                className="
                  cursor-pointer
                  relative px-6 py-2 text-sm font-normal tracking-wide rounded-sm
                  text-white bg-gradient-to-r from-[color:var(--brand)] to-[#c97a52]
                  overflow-hidden transition-all duration-300
                "
              >
                <span className="relative z-10">{t('bookNow')}</span>
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
                <span className={`block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 bg-[color:var(--charcoal)] transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
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
                {/* Add language switcher to mobile menu */}
                <div className="mb-4 pb-4 border-b border-black/10">
                  <p className="text-xs text-[#1a1a1a]/50 mb-2">Language</p>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-all flex-1 ${
                          currentLang === lang.code 
                            ? 'bg-[color:var(--cream)] text-[color:var(--brand)] border border-[color:var(--brand)]/30' 
                            : 'hover:bg-[color:var(--cream)] border border-transparent'
                        }`}
                      >
                        <span className={`${lang.flagClass}`}></span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link href={createLocalizedUrl(item.url)}
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
                  {t('contactUs')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}/>
    </>
  );
}