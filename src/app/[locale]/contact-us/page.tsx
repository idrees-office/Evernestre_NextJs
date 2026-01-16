"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Hero Section */}
      <div className="relative bg-[#3c2f26] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-block mb-4">
              <span className="text-[#d4a373] uppercase tracking-wider text-sm font-medium">Contact Us</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Let's Discuss Your <br />
              <span className="text-[#d4a373]">Dream Property</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Connect with Evernest Real Estate experts and discover exceptional properties across Dubai. We're here to turn your property dreams into reality.
            </p>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c97a52] via-[#d4a373] to-[#c97a52]" />
      </div>

      {/* Contact Information Grid */}
      <div className="bg-white border-b border-[#f0e4d9]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-[#3c2f26] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#c97a52] transition-colors duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3c2f26] mb-2">Call Us</h3>
              <a href="tel:+97145843555" className="text-[#c97a52] hover:text-[#b06c48] font-medium text-lg">
                +971 4 584 3555
              </a>
              <p className="text-[#8b5d3b]/60 text-sm mt-1">Mon - Sat</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#3c2f26] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#c97a52] transition-colors duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3c2f26] mb-2">Email Us</h3>
              <a href="mailto:info@evernestre.ae" className="text-[#c97a52] hover:text-[#b06c48] font-medium">
                info@evernestre.ae
              </a>
              <p className="text-[#8b5d3b]/60 text-sm mt-1">Quick Response</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#3c2f26] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#c97a52] transition-colors duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3c2f26] mb-2">Visit Office</h3>
              <p className="text-[#8b5d3b] text-sm px-4">
                Opus Tower A - Office 204<br />Business Bay, Dubai
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-[#3c2f26] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#c97a52] transition-colors duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#3c2f26] mb-2">Business Hours</h3>
              <p className="text-[#8b5d3b] text-sm">Mon - Fri: 10AM - 7PM</p>
              <p className="text-[#8b5d3b] text-sm">Sat: 10AM - 3PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Form */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f26] mb-4">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c97a52] to-[#d4a373] mb-4" />
              <p className="text-[#8b5d3b] text-lg">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#f0f8f0] border-2 border-[#4ade80] p-8 text-center">
                <CheckCircle className="w-16 h-16 text-[#22c55e] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#3c2f26] mb-2">Thank You!</h3>
                <p className="text-[#8b5d3b]">Your message has been sent successfully. We'll contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white border-2 border-[#f0e4d9] text-[#3c2f26] placeholder:text-[#8b5d3b]/50 focus:outline-none focus:border-[#c97a52] transition-all"
                    placeholder="Your Full Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white border-2 border-[#f0e4d9] text-[#3c2f26] placeholder:text-[#8b5d3b]/50 focus:outline-none focus:border-[#c97a52] transition-all"
                    placeholder="Your Email Address"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-white border-2 border-[#f0e4d9] text-[#3c2f26] placeholder:text-[#8b5d3b]/50 focus:outline-none focus:border-[#c97a52] transition-all"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-5 py-4 bg-white border-2 border-[#f0e4d9] text-[#3c2f26] placeholder:text-[#8b5d3b]/50 focus:outline-none focus:border-[#c97a52] transition-all resize-none"
                    placeholder="Tell us about your property requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3c2f26] hover:bg-[#c97a52] text-white font-bold py-5 px-8 transition-all duration-300 flex items-center justify-center gap-3 text-lg group"
                >
                  <span>Send Your Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Map */}
          <div className="lg:col-span-3">
            <div className="sticky top-6">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f26] mb-4">
                  Find Us Here
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#c97a52] to-[#d4a373] mb-4" />
                <p className="text-[#8b5d3b] text-lg">
                  Visit our office in the prestigious Business Bay district, easily accessible from all major areas of Dubai.
                </p>
              </div>

              <div className="bg-white border-2 border-[#f0e4d9] overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.561186543152!2d55.2689774!3d25.1884444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7a9f9b9b9b%3A0x9b9b9b9b9b9b9b9b!2sOpus%20Tower%20A%20-%20Office%20No%20204%2C%202nd%20Floor%20-%20Business%20Bay%20-%20Dubai!5e0!3m2!1sen!2sae!4v1641234567890!5m2!1sen!2sae"
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EverNest RE Office Location"
                />
              </div>

              {/* Quick Info Box */}
              <div className="mt-6 bg-[#3c2f26] p-8 text-white">
                <h3 className="text-xl font-bold mb-4 text-[#d4a373]">Why Choose Evernest Real Estate?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4a373] mt-2 flex-shrink-0" />
                    <p className="text-white/90">Over 10 years of experience in Dubai's property market</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4a373] mt-2 flex-shrink-0" />
                    <p className="text-white/90">Exclusive access to premium properties and off-plan developments</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4a373] mt-2 flex-shrink-0" />
                    <p className="text-white/90">Personalized consultation and end-to-end support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#d4a373] mt-2 flex-shrink-0" />
                    <p className="text-white/90">Trusted by hundreds of satisfied clients across the UAE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}