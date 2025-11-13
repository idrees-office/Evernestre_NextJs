"use client";

import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const socials = [
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6" />,
    href: "https://facebook.com/",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6" />,
    href: "https://twitter.com/",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    href: "https://instagram.com/",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6" />,
    href: "https://youtube.com/",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "https://wa.me/",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://linkedin.com/",
  },
];

export default function SocialLinksSection() {
  return (
    <section className="bg-[#faf8f6] border-t border-[#d0845b]/15">
      <div className="container mx-auto max-w-8xl md:px-2 py-2">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 
          divide-y sm:divide-y-0 sm:divide-x divide-[#d0845b]/10 text-center"
        >
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center gap-2 py-6 
              transition-all duration-300 hover:bg-[#fff5ef]"
            >
              {/* Icon */}
              <div
                className="text-[#d0845b] group-hover:text-[#b06c48] 
                transition-colors duration-300"
              >
                {item.icon}
              </div>

              {/* Label */}
              <span
                className="text-[15px] font-light text-[#1a1a1a] 
                group-hover:text-[#d0845b] tracking-wide"
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
