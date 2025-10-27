'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/header.module.css';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
    return(
         <footer className="bg-[#1a1a1a] text-white py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-light mb-6 text-[#d0845b]">Premium Realty</h3>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                Discover luxury properties and off-plan investments in prime locations.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d0845b] flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d0845b] flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d0845b] flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#d0845b] flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-light mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Properties', 'Services', 'Careers', 'Blog'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/60 hover:text-[#d0845b] transition-colors duration-300 font-light">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-light mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {['Buy Property', 'Rent Property', 'Off-Plan', 'Property Management', 'Investment'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-white/60 hover:text-[#d0845b] transition-colors duration-300 font-light">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-light mb-6 text-white">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/60 font-light">
                  <MapPin className="h-5 w-5 mt-0.5 text-[#d0845b] flex-shrink-0" />
                  <span>123 Business Bay, Dubai, UAE</span>
                </li>
                <li className="flex items-center gap-3 text-white/60 font-light">
                  <Phone className="h-5 w-5 text-[#d0845b] flex-shrink-0" />
                  <span>+971 4 XXX XXXX</span>
                </li>
                <li className="flex items-center gap-3 text-white/60 font-light">
                  <Mail className="h-5 w-5 text-[#d0845b] flex-shrink-0" />
                  <span>info@premiumrealty.ae</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
}