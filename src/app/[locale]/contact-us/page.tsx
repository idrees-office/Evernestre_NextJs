"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#3c2f26] via-[#4a3b30] to-[#3c2f26] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-sm mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch with Evernest Real Estate</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Ready to find your dream property in Dubai? Our team is here to assist you every step of the way.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white shadow-xl p-6 border border-[#f0e4d9] hover:shadow-2xl transition-all duration-300">
            {/* <div className="w-14 h-14 bg-gradient-to-br from-[#c97a52] to-[#b06c48] flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-white" />
            </div> */}
            <h3 className="font-semibold text-[#3c2f26] mb-2">Phone</h3>
            <a href="tel:+97141234567" className="text-[#c97a52] hover:text-[#b06c48] font-medium">
              +971 4 584 3555
            </a>
          </div>

          <div className="bg-white shadow-xl p-6 border border-[#f0e4d9] hover:shadow-2xl transition-all duration-300">
            {/* <div className="w-14 h-14 bg-gradient-to-br from-[#c97a52] to-[#b06c48] flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-white" />
            </div> */}
            <h3 className="font-semibold text-[#3c2f26] mb-2">Email</h3>
            <a href="mailto:info@evernest.ae" className="text-[#c97a52] hover:text-[#b06c48] font-medium">
              info@evernestre.ae
            </a>
          </div>

          <div className="bg-white shadow-xl p-6 border border-[#f0e4d9] hover:shadow-2xl transition-all duration-300">
            {/* <div className="w-14 h-14 bg-gradient-to-br from-[#c97a52] to-[#b06c48] flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-white" />
            </div> */}
            <h3 className="font-semibold text-[#3c2f26] mb-2">Address</h3>
            <p className="text-[#8b5d3b] text-sm">Opus Tower A - Office No 204, 2nd Floor - Business Bay - Dubai</p>
          </div>

          <div className="bg-white shadow-xl p-6 border border-[#f0e4d9] hover:shadow-2xl transition-all duration-300">
            {/* <div className="w-14 h-14 bg-gradient-to-br from-[#c97a52] to-[#b06c48] flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-white" />
            </div> */}
            <h3 className="font-semibold text-[#3c2f26] mb-2">Working Hours</h3>
            <p className="text-[#8b5d3b] text-sm">Mon - Fri: 10AM - 7PM</p>
            <p className="text-[#8b5d3b] text-sm">Sat: 10AM - 3PM</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 pb-20">
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#3c2f26] mb-3">Send us a Message</h2>
              <p className="text-[#8b5d3b]">
                Have questions? Fill out the form below and we'll respond within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 text-center">
                <div className="w-16 h-16 bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent!</h3>
                <p className="text-green-700">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#3c2f26] mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-[#f0e4d9] focus:outline-none focus:ring-2 focus:ring-[#c97a52] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3c2f26] mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-[#f0e4d9] focus:outline-none focus:ring-2 focus:ring-[#c97a52] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#3c2f26] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-white border border-[#f0e4d9] focus:outline-none focus:ring-2 focus:ring-[#c97a52] focus:border-transparent transition-all"
                    placeholder="+971 4 584 3555"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3c2f26] mb-2">Your Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3.5 bg-white border border-[#f0e4d9] focus:outline-none focus:ring-2 focus:ring-[#c97a52] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#c97a52] to-[#b06c48] hover:from-[#b06c48] hover:to-[#9a5f3f] text-white font-semibold py-4 px-6 shadow-lg shadow-[#c97a52]/30 hover:shadow-xl hover:shadow-[#c97a52]/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Map Section */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-[#3c2f26] mb-3">Visit Our Office</h2>
              <p className="text-[#8b5d3b]">
                Located in the heart of Dubai Marina, we're easily accessible and ready to welcome you.
              </p>
            </div>

            <div className="bg-white shadow-xl overflow-hidden border border-[#f0e4d9]">
              <div className="h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28860.08721246664!2d55.1398!3d25.0772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7b1d6b1e5%3A0x1e3e3e3e3e3e3e3e!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-gradient-to-br from-[#3c2f26] to-[#4a3b30] p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Why Choose Evernest?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4a373] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Expert knowledge of Dubai's real estate market</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4a373] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Personalized service tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4a373] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Access to exclusive property listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4a373] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">Trusted by hundreds of satisfied clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}