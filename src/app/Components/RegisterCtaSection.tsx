"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RegisterCtaSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneRaw, setPhoneRaw] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ first?: string; last?: string; phone?: string; ok?: string }>({});

  const phoneE164 = useMemo(() => toUaeE164(phoneRaw), [phoneRaw]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!firstName.trim()) nextErrors.first = "Please enter your first name.";
    if (!lastName.trim()) nextErrors.last = "Please enter your last name.";
    if (!phoneE164) nextErrors.phone = "Enter a valid UAE phone number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 1000)); // fake delay
      setErrors({ ok: "✅ Thank you! We'll reach out soon." });
      setFirstName("");
      setLastName("");
      setPhoneRaw("");
    } catch {
      setErrors({ phone: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#f6ecdf] py-14 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-[#8b5d3b] mb-3 tracking-tight">
            Register & Stay Updated on New Projects.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Join thousands of investors discovering Dubai’s finest off-plan developments and exclusive opportunities.
          </p>
        </motion.div>

        {/* Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-white ring-1 ring-[#c97a52]/20">
          {/* Left: Image with motion */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative h-[360px] md:h-[500px] lg:h-[550px] overflow-hidden"
          >
            <Image
              src="https://evernest.ae/assets/img/aboutpage/Vision.jpg"
              alt="Real estate project"
              fill
              className="object-cover scale-110 hover:scale-100 transition-transform duration-1000 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8b5d3bbd] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="p-8 md:p-12 flex flex-col justify-center"
          >
            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-6">
              {/* Inputs */}
              {[
                { label: "First Name *", value: firstName, setter: setFirstName, err: errors.first },
                { label: "Last Name *", value: lastName, setter: setLastName, err: errors.last },
              ].map(({ label, value, setter, err }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                >
                  <input
                    type="text"
                    placeholder={label}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    className={inputClass(err)}
                  />
                  {err && <p className="text-sm text-red-500 mt-1">{err}</p>}
                </motion.div>
              ))}

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex items-center overflow-hidden rounded-md ring-1 ring-inset focus-within:ring-[#c97a52]">
                  <div className="flex items-center gap-2 px-3 bg-[#faf8f6]">
                    <UaeFlag className="h-4 w-6 rounded-[2px] ring-1" />
                    <span className="text-sm">+971</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="5x xxx xxxx"
                    value={phoneRaw}
                    onChange={(e) => setPhoneRaw(e.target.value)}
                    className="flex-1 px-4 py-3 text-[15px] focus:outline-none"
                  />
                </div>
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </motion.div>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0px 10px 25px rgba(201, 122, 82, 0.5)",
                  backgroundPosition: "100% 0",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                type="submit"
                disabled={loading}
                className="relative overflow-hidden bg-gradient-to-r from-[#c97a52] via-[#b06c48] to-[#8b5d3b] bg-[length:200%_auto] animate-shimmer inline-flex h-12 w-full items-center justify-center rounded-md text-[15px] font-semibold text-white transition-all duration-200"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.4,
                        ease: "easeInOut",
                      }}
                      className="ml-2 inline-block"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {errors.ok && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-emerald-600 font-medium text-center"
                >
                  {errors.ok}
                </motion.p>
              )}

              {/* Privacy */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-xs text-gray-500 text-center"
              >
                By submitting this form, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-[#c97a52]">
                  Privacy Policy
                </Link>
                .
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

/* ---------- UTILITIES ---------- */
function toUaeE164(input: string): string | null {
  const digits = input.replace(/[^0-9]/g, "");
  if (!digits) return null;
  let local = digits;
  if (local.startsWith("971")) local = local.slice(3);
  if (local.startsWith("00")) local = local.slice(2);
  if (local.startsWith("0")) local = local.slice(1);
  if (local.length < 8 || local.length > 12) return null;
  return "+971" + local;
}

function inputClass(hasError?: string) {
  return [
    "w-full rounded-md px-4 py-3 text-[15px] ring-1 ring-inset transition-all duration-300 focus:scale-[1.02]",
    hasError
      ? "ring-red-400 focus:ring-red-400"
      : "ring-gray-300 focus:ring-[#c97a52] hover:ring-[#c97a52]",
  ].join(" ");
}

function UaeFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 3 2" className={className} aria-hidden="true">
      <rect width="3" height="2" fill="#fff" />
      <rect width="3" height="0.6667" y="0" fill="#00732f" />
      <rect width="3" height="0.6667" y="0.6667" fill="#fff" />
      <rect width="3" height="0.6667" y="1.3334" fill="#000" />
      <rect width="0.6" height="2" x="0" fill="#e10011" />
    </svg>
  );
}
