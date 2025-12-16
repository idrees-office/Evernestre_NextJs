


"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface Props {
  fullName: string; // Changed from firstName
  email: string; // Changed from lastName
  phone?: string;
  errors: {
    fullName?: string; // Changed from first
    email?: string; // Changed from last
    phone?: string;
    ok?: string;
  };
  loading: boolean;
  isFormValid: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  handlePhoneChange: (value: string | undefined) => void;
  handleInputChange: (
    setter: React.Dispatch<React.SetStateAction<string>>,
    field: string
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  validatePhoneNumber: (phoneNumber: string | undefined) => boolean;
  setFullName: React.Dispatch<React.SetStateAction<string>>; 
  setEmail: React.Dispatch<React.SetStateAction<string>>; 
}

export default function RegisterLeadForm({
  fullName,
  email,
  phone,
  errors,
  loading,
  isFormValid,
  handleSubmit,
  handlePhoneChange,
  handleInputChange,
  validatePhoneNumber,
  setFullName,
  setEmail,
}: Props) {
  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
        {[
          {
            label: "Full Name *",
            value: fullName,
            setter: setFullName,
            field: "fullName",
            err: errors.fullName,
            type: "text",
          },
          {
            label: "Email *",
            value: email,
            setter: setEmail,
            field: "email",
            err: errors.email,
            type: "email",
          },
        ].map(({ label, value, setter, field, err, type }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <input
              type={type}
              placeholder={label}
              value={value}
              onChange={handleInputChange(setter, field)}
              className={inputClass(err)}
            />
            {err && <p className="text-sm text-red-500 mt-1">{err}</p>}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="phone-input-wrapper"
        >
          <PhoneInput
            international
            defaultCountry="AE"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter phone number *"
            className={`phone-input-custom ${errors.phone ? "error" : ""}`}
          />

          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
          )}

          {phone && !errors.phone && (
            <p
              className={`text-xs mt-1 ${
                validatePhoneNumber(phone)
                  ? "text-emerald-600"
                  : "text-amber-600"
              }`}
            >
              {validatePhoneNumber(phone)
                ? "✓ Valid phone number format"
                : "⚠ Please check the number format"}
            </p>
          )}
        </motion.div>
        <motion.button
          whileHover={
            isFormValid
              ? {
                  scale: 1.06,
                  boxShadow: "0px 10px 25px rgba(201, 122, 82, 0.5)",
                }
              : {}
          }
          whileTap={isFormValid ? { scale: 0.95 } : {}}
          transition={{ type: "spring", stiffness: 200 }}
          type="submit"
          disabled={!isFormValid || loading}
          className={`relative overflow-hidden bg-gradient-to-r from-[#c97a52] via-[#b06c48] to-[#8b5d3b] inline-flex h-10 w-full items-center justify-center rounded-sm text-[15px] text-white transition-all duration-200 cursor-pointer ${
            !isFormValid || loading
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-lg"
          }`}
        >
          {loading ? (
            "Submitting..."
          ) : (
            <>
              Submit
              <motion.span
                animate={isFormValid ? { x: [0, 5, 0] } : { x: 0 }}
                transition={
                  isFormValid
                    ? { repeat: Infinity, duration: 1.4, ease: "easeInOut" }
                    : {}
                }
                className="ml-2 inline-block"
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </>
          )}
        </motion.button>

        {errors.ok && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-emerald-600 text-center"
          >
            {errors.ok}
          </motion.p>
        )}

        {/* Privacy Policy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xs text-gray-500 text-center"
        >
          By submitting this form, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="underline hover:text-[#c97a52]"
          >
            Privacy Policy
          </Link>
          .
        </motion.p>
      </form>
    </>
  );
}

function inputClass(hasError?: string) {
  return [
    "w-full rounded-sm px-4 py-2 text-[15px] border border-gray-300 transition-all duration-300 cursor-pointer",
    "focus:outline-none focus:border-[#c97a52] focus:scale-[1.02]",
    hasError ? "border-red-400 focus:border-red-400" : "border-gray-300",
  ].join(" ");
}