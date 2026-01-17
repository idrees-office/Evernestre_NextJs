"use client";
import React, { useState } from "react";
import { Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SocialLinksSection from "@/app/components/SocialLinksSection";
import { submitLeadForm } from "@/lib/form";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      // source: "Website Contact Page",
      source: "Website",
      timestamp: new Date().toISOString(),
      message : formData.message,
    };

    await submitLeadForm(payload);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 3000);
  } catch (error) {
    console.error("Form submit failed:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Section */}
      <section className="relative h-[45vh] sm:h-[50vh] min-h-[350px] sm:min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&q=95&fit=crop&auto=format" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3c2f26]/40 via-[#3c2f26]/20 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl bg-[#3c2f26]/60 backdrop-blur-md p-6 sm:p-8"
          >
            <span className="inline-block text-[#d4a373] text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-2 sm:mb-3">
              Get in Touch
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-3 sm:mb-4 leading-snug">
              Let's Talk About Your Property
            </h1>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              Our expert team is here to guide you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#f6ecdf]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4 sm:space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white p-5 sm:p-6 border border-[#e8e4de] hover:border-[#d4a373]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f6ecdf] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#c97a52]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#8b5d3b]/70 text-xs uppercase tracking-wide mb-1">Call Us</p>
                    <a href="tel:+97145843555" className="text-[#3c2f26] hover:text-[#c97a52] transition-colors text-sm sm:text-base break-all">
                      +971 4 584 3555
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-5 sm:p-6 border border-[#e8e4de] hover:border-[#d4a373]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f6ecdf] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#c97a52]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#8b5d3b]/70 text-xs uppercase tracking-wide mb-1">Email Us</p>
                    <a href="mailto:info@evernestre.ae" className="text-[#3c2f26] hover:text-[#c97a52] transition-colors text-sm sm:text-base break-all">
                      info@evernestre.ae
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white p-5 sm:p-6 border border-[#e8e4de] hover:border-[#d4a373]/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#f6ecdf] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c97a52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#8b5d3b]/70 text-xs uppercase tracking-wide mb-1">Visit Us</p>
                    <p className="text-[#3c2f26] text-sm leading-relaxed">
                      Opus Tower A - Office 204<br />
                      Business Bay, Dubai
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-[#3c2f26] p-5 sm:p-6"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#d4a373]" />
                  </div>
                  <p className="text-white/90 text-sm">Office Hours</p>
                </div>
                <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between text-white/80">
                    <span>Monday - Friday</span>
                    <span className="ml-2">10AM - 7PM</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Saturday</span>
                    <span className="ml-2">10AM - 3PM</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Sunday</span>
                    <span className="ml-2">Closed</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-6 sm:p-8 md:p-10 border border-[#e8e4de]">
                <div className="mb-6 sm:mb-8">
                  <p className="text-[#8b5d3b]/80 text-sm">
                    Fill out the form below and our team will respond within 24 hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-12 sm:py-16"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f0f8f0] mx-auto mb-4 sm:mb-5 flex items-center justify-center">
                        <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
                      </div>
                      <h3 className="text-lg sm:text-xl text-[#3c2f26] mb-2">Thank You!</h3>
                      <p className="text-[#8b5d3b]/80 text-sm px-4">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4 sm:space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label className="block text-[#8b5d3b]/80 mb-2 text-xs uppercase tracking-wide">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            autoComplete="off"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-[#faf9f7] border border-[#e8e4de] focus:border-[#c97a52] focus:outline-none transition-colors text-[#3c2f26] text-sm"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-[#8b5d3b]/80 mb-2 text-xs uppercase tracking-wide">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            autoComplete="off"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-[#faf9f7] border border-[#e8e4de] focus:border-[#c97a52] focus:outline-none transition-colors text-[#3c2f26] text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[#8b5d3b]/80 mb-2 text-xs uppercase tracking-wide">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          autoComplete="off"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-[#faf9f7] border border-[#e8e4de] focus:border-[#c97a52] focus:outline-none transition-colors text-[#3c2f26] text-sm"
                          placeholder="+971 50 123 4567"
                        />
                      </div>

                      <div>
                        <label className="block text-[#8b5d3b]/80 mb-2 text-xs uppercase tracking-wide">
                          Your Message
                        </label>
                        <textarea
                          required
                          autoComplete="off"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={5}
                          className="w-full px-4 py-3 bg-[#faf9f7] border border-[#e8e4de] focus:border-[#c97a52] focus:outline-none transition-colors resize-none text-[#3c2f26] text-sm"
                          placeholder="Tell us about your property requirements..."
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full sm:w-auto bg-[#c97a52] hover:bg-[#b06c48] text-white py-3 px-8 transition-all duration-300 flex items-center justify-center gap-3 text-sm group"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.561186543152!2d55.2689774!3d25.1884444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7a9f9b9b9b%3A0x9b9b9b9b9b9b9b9b!2sOpus%20Tower%20A%20-%20Office%20No%20204%2C%202nd%20Floor%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1641234567890!5m2!1sen!2sae"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EverNest RE Office Location"
            className="sm:h-[400px] md:h-[450px]"
          />
        </motion.div>
      </section>

      <SocialLinksSection/>
    </div>
  );
}