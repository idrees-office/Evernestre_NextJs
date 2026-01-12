"use client";

import React, { useState } from "react";
import { ArrowRight, User, Mail, Phone, MapPin } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";
import { submitLeadForm } from "@/lib/form";
import { useTranslations } from "next-intl";

export default function ShortModalForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [interest, setInterest] = useState("general");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const t = useTranslations();

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    ok?: string;
  }>({});

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nextErrors: typeof errors = {};

    if (!name.trim()) nextErrors.name = "Name is required";
    if (!email.trim()) nextErrors.email = "Email is required";
    else if (!isValidEmail(email)) nextErrors.email = "Invalid email";
    if (!phone) nextErrors.phone = "Phone is required";
    else if (!isValidPhoneNumber(phone)) nextErrors.phone = "Invalid number";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});

      const payload = {
        name,
        email,
        phone,
        interest,
        message,
        source: "Blog Sidebar",
      };

      await submitLeadForm(payload);

      setErrors({ ok: "Thank you! We will contact you shortly." });

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setErrors({
        phone: err instanceof Error ? err.message : "Failed to submit form.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2.5 text-[13px]">
      {/* NAME */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-white">
        <User className="w-6 h-6 text-gray-400" />
        <input
          type="text"
          placeholder={t('full_name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-800"
        />
      </div>
      {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}

      {/* EMAIL */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-white">
        <Mail className="w-6 h-6 text-gray-400" />
        <input
          type="email"
          placeholder={t('email_address')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-800"
        />
      </div>
      {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}  
        <PhoneInput
          international
          defaultCountry="AE"
          value={phone}
          onChange={(v) => setPhone(v || "")}
          placeholder="Phone Number"
          className="phone-input-custom w-full"
        />
      {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
      <div className="flex items-center gap-2 border border-gray-200 rounded-sm px-3 py-1.5 bg-white">
        <MapPin className="w-6 h-6 text-gray-400" />
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full bg-transparent focus:outline-none text-gray-800"
        >
          <option value="general">General Inquiry</option>
          <option value="buying">Buying in Dubai</option>
          <option value="selling">Selling Property</option>
          <option value="offplan">Off-Plan Projects</option>
        </select>
      </div>

      {/* MESSAGE */}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t('tell_us_what')}
        rows={3}
        className="w-full border border-gray-200 rounded-sm px-3 py-1.5 bg-white resize-none text-gray-800"
      />

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#8b5d3b] to-[#d4a373] text-white text-[13px] font-medium py-2 mt-1 hover:brightness-110 transition-all cursor-pointer"
      >
        {/* {loading ? "Submitting..." : "Request Call Back"} */}
        {loading ? t('submitting') : t('request_callback')}
        {!loading && <ArrowRight className="w-3 h-3" />}
      </button>

      {errors.ok && (
        <p className="text-xs text-green-600 text-center">{errors.ok}</p>
      )}
    </form>
  );
}
