// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
// } from "lucide-react";

// export default function RefinedFooter() {
//   const [year, setYear] = useState<number | null>(null);

//   useEffect(() => {
//     setYear(new Date().getFullYear());
//   }, []);

//   const quick = [
//     { label: "Careers", href: "/careers" },
//     { label: "FAQs", href: "/faqs" },
//     { label: "Blog", href: "/blogs" },
//     // { label: "Testimonials", href: "/testimonials" },
//     { label: "Developers", href: "/developers" },
//   ];

//   const socials = [
//     {
//       Icon: Facebook,
//       href: "https://www.facebook.com/evernestrealestatellc",
//       label: "Facebook",
//       color: "#1877F2",
//     },
//     {
//       Icon: Twitter,
//       href: "https://x.com/evernest_dxb/status/1384846882665648133",
//       label: "Twitter",
//       color: "#1DA1F2",
//     },
//     {
//       Icon: Instagram,
//       href: "https://www.instagram.com/evernest_dubairealestate/",
//       label: "Instagram",
//       color: "linear-gradient(45deg,#F58529,#DD2A7B,#8134AF,#515BD4)",
//     },
//     {
//       Icon: Linkedin,
//       href: "https://www.linkedin.com/company/evernest-real-estate-llc/",
//       label: "LinkedIn",
//       color: "#0A66C2",
//     },
//   ];

//   return (
//     <footer className="relative overflow-hidden border-t border-[#f0e4d9] bg-[#fffaf5] text-[#3c2f26]">
//       <div
//         className="h-0.5 w-full"
//         style={{
//           background:
//             "linear-gradient(90deg, #8b5d3b 0%, #b06c48 45%, #d4a373 65%, #f6d8a4 100%)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute -top-24 right-[-10%] h-64 w-64 rounded-full blur-3xl opacity-20"
//         style={{
//           background: "radial-gradient(closest-side, #d4a373, transparent)",
//         }}
//       />
//       <div
//         className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full blur-3xl opacity-20"
//         style={{
//           background: "radial-gradient(closest-side, #8b5d3b, transparent)",
//         }}
//       />

//       <div className="relative z-10">
//         <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-5">
//           <div className="lg:col-span-2">
//             <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
//               <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
//               Evernest Real Estate
//             </h3>
//             <p className="text-sm leading-relaxed text-[#3c2f26]/90">
//               Discover Dubai&apos;s most prestigious developments—handpicked for
//               luxury, innovation, and world-class design. Your key to
//               exceptional real estate begins here.
//             </p>

//             <div className="mt-5 flex gap-3">
//               {socials.map(({ Icon, href, label, color }) => (
//                 <motion.a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={label}
//                   whileHover={{ scale: 1.08 }}
//                   className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:brightness-110"
//                   style={{
//                     background: label === "Instagram" ? color : undefined,
//                     backgroundColor: label !== "Instagram" ? color : undefined,
//                   }}
//                 >
//                   <Icon className="h-[18px] w-[18px]" />
//                   <span className="sr-only">{label}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </div>
//           <div>
//             <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
//               <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
//               Quick Links
//             </h3>
//             <ul className="space-y-2 text-sm">
//               {quick.map((q) => (
//                 <li key={q.label} className="group">
//                   <Link
//                     href={q.href}
//                     className="inline-flex items-center text-[#3c2f26]/90 transition-colors hover:text-[#8b5d3b]"
//                   >
//                     <ArrowRight className="mr-2 h-[14px] w-[14px] text-[#b06c48] transition-transform group-hover:translate-x-0.5" />
//                     {q.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
//               <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
//               Contact
//             </h3>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f0e4d9] bg-[#f6ecdf]">
//                   <Phone className="h-4 w-4 text-[#8b5d3b]" />
//                 </div>
//                 <a
//                   href="tel:+971527469500"
//                   className="select-all hover:text-[#8b5d3b]"
//                 >
//                   +971 52 746 9500
//                 </a>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#f0e4d9] bg-[#f6ecdf]">
//                   <Mail className="h-4 w-4 text-[#8b5d3b]" />
//                 </div>
//                 <a
//                   href="mailto:info@evernestre.ae"
//                   className="select-all hover:text-[#8b5d3b]"
//                 >
//                   info@evernestre.ae
//                 </a>
//               </div>
//               <div className="flex items-start gap-3">
//                 <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-[#f0e4d9] bg-[#f6ecdf]">
//                   <MapPin className="h-4 w-4 text-[#8b5d3b]" />
//                 </div>
//                 <address className="not-italic">
//                   Business Bay, Dubai
//                   <br /> United Arab Emirates
//                 </address>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="mb-3 flex items-center text-xl font-semibold text-[#8b5d3b]">
//               <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#d4a373]" />{" "}
//               Newsletter
//             </h3>
//             <p className="mb-3 text-sm text-[#3c2f26]/80">
//               Subscribe to get updates on new properties and exclusive offers.
//             </p>
//             <form
//               onSubmit={(e) => e.preventDefault()}
//               className="flex flex-col gap-3"
//             >
//               <input
//                 type="email"
//                 required
//                 placeholder="Enter your email"
//                 className="rounded-sm border border-[#f0e4d9] bg-white px-3 py-2 text-sm text-[#3c2f26] placeholder-[#8b5d3b]/60 shadow-[0_2px_12px_rgba(139,93,59,0.08)] outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#d4a373]"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b5d3b] via-[#b06c48] to-[#d4a373] px-2 py-2 font-normal text-white shadow-[0_10px_25px_rgba(139,93,59,0.25)] transition hover:brightness-105"
//               >
//                 Subscribe <ArrowRight className="h-4 w-4" />
//               </motion.button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="relative z-10 bg-[#123456]">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
//           <p className="text-center text-sm text-white/90">
//             © {year || "2024"} Evernest Real Estate. All rights reserved.
//           </p>
//           <div className="flex gap-5 text-sm">
//             <Link
//               key="privacy-policy"
//               href={`/privacy-policy`}
//               className="text-white/80 transition-colors hover:text-white"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               key="term-condition"
//               href={`/term-condition`}
//               className="text-white/80 transition-colors hover:text-white"
//             >
//               Term Condition
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div className="h-[2px] w-full overflow-hidden">
//         <div className="h-[2px] w-[200%] animate-[shine_4s_linear_infinite] bg-gradient-to-r from-transparent via-[#d4a373] to-transparent" />
//       </div>
//       <style jsx>{`
//         @keyframes shine {
//           0% {
//             transform: translateX(-50%);
//           }
//           100% {
//             transform: translateX(0%);
//           }
//         }
//       `}</style>
//     </footer>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

export default function RefinedFooter() {
  const [year, setYear] = useState<number | null>(null);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(true);

  useEffect(() => {
    setYear(new Date().getFullYear());
    // Hide WhatsApp button on very small screens to prevent clutter
    const checkScreenSize = () => {
      setShowWhatsAppButton(window.innerWidth > 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const quick = [
    { label: "Careers", href: "/careers" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blogs" },
    // { label: "Testimonials", href: "/testimonials" },
    { label: "Developers", href: "/developers" },
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

  const handleWhatsAppClick = () => {
    const phoneNumber = "+971527469500";
    const message = "Hello, I'm interested in your properties. Can you please provide more information?";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = "tel:+971527469500";
  };
  return (
    <footer className="relative overflow-hidden border-t border-[#f0e4d9] bg-[#fffaf5] text-[#3c2f26]">
      {showWhatsAppButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.3)" }}
        >
          {/* Original WhatsApp SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="22"
            height="22"
            fill="white"
          >
            <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.589 4.46 1.708 6.41L3.2 28.8l6.58-1.689A12.74 12.74 0 0 0 16 28.8h.001c7.06 0 12.799-5.74 12.799-12.8S23.06 3.2 16.001 3.2zm7.52 18.323c-.314.879-1.838 1.676-2.525 1.784-.647.1-1.46.143-2.35-.147-.543-.173-1.24-.403-2.137-.786-3.763-1.63-6.218-5.424-6.408-5.676-.19-.252-1.53-2.037-1.53-3.885 0-1.848.97-2.757 1.314-3.14.343-.383.744-.478.99-.478.246 0 .495.003.71.013.228.01.533-.086.835.637.314.755 1.066 2.614 1.16 2.803.094.189.157.414.03.666-.126.252-.19.414-.378.636-.19.222-.4.497-.57.668-.19.19-.387.397-.166.78.222.383.987 1.623 2.122 2.627 1.46 1.274 2.682 1.67 3.066 1.86.383.19.603.158.825-.095.222-.252.95-1.11 1.202-1.492.252-.383.504-.316.835-.19.343.126 2.17 1.024 2.547 1.214.377.189.628.283.72.44.094.157.094.91-.22 1.788z"/>
          </svg>

          <span className="text-sm font-medium text-white">WhatsApp</span>

          <motion.div
            className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />

          <motion.div
            className="absolute -inset-1 rounded-full border-2 border-[#25D366] opacity-30"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </motion.button>
      )}
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
              Discover Dubai&apos;s most prestigious developments—handpicked for
              luxury, innovation, and world-class design. Your key to
              exceptional real estate begins here.
            </p>

            {/* WhatsApp and Call Buttons inside footer (for mobile) */}
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
              
              {/* Mobile WhatsApp Button */}
              <div className="md:hidden flex gap-2 mt-2">
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 bg-[#25D366] text-white text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </motion.button>
                {/* <motion.button
                  onClick={handleCallClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-[#8b5d3b] to-[#b06c48] text-white text-sm rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <Phone className="h-4 w-4" />
                  Call Us
                </motion.button> */}
              </div>
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
                    href={q.href}
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
            © {year || "2024"} Evernest Real Estate. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm">
            <Link
              key="privacy-policy"
              href={`/privacy-policy`}
              className="text-white/80 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              key="term-condition"
              href={`/term-condition`}
              className="text-white/80 transition-colors hover:text-white"
            >
              Term Condition
            </Link>
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
        
        /* Pulse animation for WhatsApp button */
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        .pulse {
          animation: pulse-ring 2s infinite;
        }
      `}</style>
    </footer>
  );
}
