"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { submitLeadForm } from "@/lib/form";


interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [interest, setInterest] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const nextErrors: any = {};

    if (!fullName.trim()) nextErrors.fullName = "Full name is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    if (!phone.trim()) nextErrors.phone = "Phone number is required";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      const payload = {
        name: fullName,
        email,
        phone,
        interest,
        message,
        source: "Website",
      };

      const res = await submitLeadForm(payload);
      console.log(res)

      if (res.message != 'Success') throw new Error("Failed to submit");

      setErrors({ ok: "Message sent successfully!" });

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
      setInterest("");
      setMessage("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  }


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
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1740&q=80"
                  alt="Dubai Downtown"
                  fill
                  className="w-full h-48 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/70 lg:via-black/30 lg:to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-light mb-3">Get In Touch</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#d0845b]" />
                      <span className="text-xs font-light">
                        +971 52 74 69 500
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#d0845b]" />
                      <span className="text-xs font-light">
                        info@evernestre.ae
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
              <div className="lg:col-span-2 p-8 md:p-10">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-normal text-[#1a1a1a] mb-2 tracking-tight">
                    Book Your <span className="text-[#d0845b]">Dream Home</span>
                  </h2>
                  <p className="text-[#1a1a1a]/60 mb-6 font-light text-sm">
                    Let&apos;s find your perfect property in Dubai. Our experts
                    are here to help.
                  </p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            setErrors((p) => ({ ...p, fullName: "" }));
                          }}
                          className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md"
                        />
                        {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
                      </div>

                      <div className="input-group">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setErrors((p) => ({ ...p, email: "" }));
                          }}
                          className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md"
                        />
                        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="input-group">
                        <PhoneInput
                          international
                          defaultCountry="AE"
                          value={phone}
                          onChange={(value) => {
                            setPhone(value || "");
                          }}
                          placeholder="Enter phone number"
                          className={`phone-input-custom ${errors.phone ? "error" : ""}`}
                        />
                        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                      </div>

                      <div className="input-group">
                        <select value={interest} onChange={(e) => setInterest(e.target.value)} className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md"
                        >
                          <option value="">I&apos;m interested in</option>
                          <option value="buy">Buying</option>
                          <option value="rent">Renting</option>
                          <option value="investment">Investment</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                    </div>
                    <div className="input-group">
                      <textarea
                        placeholder="Tell us about your requirements..."
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="cursor-pointer w-full px-3 py-2 border border-[#1a1a1a]/15 rounded-md"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#d0845b] to-[#c97a52] text-white py-2.5 rounded-md text-sm cursor-pointer"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>

                    {errors.ok && (
                      <p className="text-emerald-600 text-center text-sm mt-2">{errors.ok}</p>
                    )}

                    {errors.general && (
                      <p className="text-red-600 text-center text-sm mt-2">{errors.general}</p>
                    )}

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
