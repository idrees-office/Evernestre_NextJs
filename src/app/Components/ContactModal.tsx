"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-5xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-10 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-1.5 transition-all duration-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left Side Image */}
              <div className="lg:col-span-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1740&q=80"
                  alt="Dubai Downtown"
                  className="w-full h-48 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/30 lg:to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-3">Get In Touch</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#d0845b]" />
                      <span className="text-xs font-light">
                        +971 4 123 4567
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#d0845b]" />
                      <span className="text-xs font-light">
                        info@evernest.ae
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#d0845b]" />
                      <span className="text-xs font-light">
                        Downtown Dubai, UAE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Form */}
              <div className="lg:col-span-2 p-8 md:p-10">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-normal text-[#1a1a1a] mb-2 tracking-tight">
                    Book Your <span className="text-[#d0845b]">Dream Home</span>
                  </h2>
                  <p className="text-[#1a1a1a]/60 mb-6 font-light text-sm">
                    Let's find your perfect property in Dubai. Our experts are
                    here to help.
                  </p>

                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md focus:border-[#d0845b] focus:outline-none transition-all bg-white/60 text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md focus:border-[#d0845b] focus:outline-none transition-all bg-white/60 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md focus:border-[#d0845b] focus:outline-none transition-all bg-white/60 text-sm"
                      />

                      <select className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md focus:border-[#d0845b] focus:outline-none transition-all bg-white/60 text-sm text-[#1a1a1a]/60">
                        <option value="">I'm interested in</option>
                        <option value="buy">Buying</option>
                        <option value="rent">Renting</option>
                        <option value="investment">Investment</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>

                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows={3}
                      className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md focus:border-[#d0845b] focus:outline-none transition-all bg-white/60 text-sm resize-none"
                    />

                    <button
                      type="submit"
                      className="cursor-pointer w-full bg-gradient-to-r from-[#d0845b] to-[#c97a52] text-white py-2.5 rounded-md text-sm tracking-wide hover:shadow-lg transition-all duration-300 hover:scale-[1.02] font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                  <p className="text-[10px] text-[#1a1a1a]/40 mt-4 text-center font-light">
                    By submitting this form, you agree to our privacy policy and
                    terms of service.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
