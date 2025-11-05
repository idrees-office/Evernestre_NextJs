"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export type RegisterCtaProps = {
  title?: string;
  blurb?: string;
  artworkSrc?: string;
  className?: string;
  onSubmit?: (payload: { fullName: string; phoneE164: string }) => Promise<void> | void;
};

export default function RegisterCtaSection({
  title = "Register & Stay Updated on New Projects.",
  blurb = "Join thousands of investors discovering Dubai’s finest off-plan developments and exclusive.",
  artworkSrc = "https://evernest.ae/assets/img/aboutpage/Vision.jpg", // ✅ your local image path
  className,
  onSubmit,
}: RegisterCtaProps) {
  const [fullName, setFullName] = useState("");
  const [phoneRaw, setPhoneRaw] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; ok?: string }>({});

  const phoneE164 = useMemo(() => toUaeE164(phoneRaw), [phoneRaw]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!fullName.trim()) nextErrors.name = "Please enter your full name.";
    if (!phoneE164) nextErrors.phone = "Enter a valid UAE phone number.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    try {
      setLoading(true);
      if (onSubmit) {
        await onSubmit({ fullName: fullName.trim(), phoneE164: phoneE164! });
      } else {
        await fetch("/api/register-interest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName: fullName.trim(), phone: phoneE164 }),
        });
      }
      setErrors({ ok: "✅ Thank you! We'll reach out soon." });
      setFullName("");
      setPhoneRaw("");
    } catch (err) {
      console.error(err);
      setErrors({ phone: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className={`bg-[#f6ecdf] py-10 md:py-10 ${className ?? ""}`}>
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
        {/* Top heading + text */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <h2 className="text-3xl md:text-4xl font-normal text-[#1a1a1a] mb-2">
            {title}
          </h2>
          <p className="text-gray-700 text-base md:text-md leading-relaxed">
            {blurb}
          </p>
        </div>

        {/* Card: Image + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-lg overflow-hidden bg-white shadow-xl ring-1 ring-black/10">
          {/* Left Side - Image */}
          <div className="relative h-[340px] md:h-[480px] lg:h-[550px]">
            <Image
              src={artworkSrc}
              alt="Real estate project preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side - Form */}
          <div className="p-8 md:p-12 bg-white h-full flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 mx-auto">
              {/* Name */}
              <div>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name *"
                  className={inputClass(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

                <div>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Full Name *"
                  className={inputClass(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center overflow-hidden rounded-sm ring-1 ring-inset focus-within:ring-[#c97a52]">
                  <div className="flex items-center gap-2 px-3 bg-[#faf8f6]">
                    <UaeFlag className="h-4 w-6 rounded-[2px] ring-1" />
                    <span className="text-sm">+971</span>
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="5x xxx xxxx"
                    value={phoneRaw}
                    onChange={(e) => setPhoneRaw(e.target.value)}
                    className="flex-1 px-4 py-3 text-[15px] focus:outline-none"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#c97a52] hover:bg-[#b06c48] inline-flex h-11 w-full items-center justify-center rounded-sm text-sm font-medium text-white shadow-md transition-all duration-200"
              >
                {loading ? "Submitting..." : "Submit"}
                {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
              </button>

              {/* Success */}
              {errors.ok && (
                <p className="text-sm text-emerald-600 font-medium">{errors.ok}</p>
              )}

              {/* Privacy */}
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our{" "}
                <Link href="/privacy-policy" className="underline hover:text-[#c97a52]">
                  Privacy Policy
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ----------------- Utilities -----------------
function toUaeE164(input: string): string | null {
  const digits = (input || "").replace(/[^0-9]/g, "");
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
    "w-full rounded-sm px-4 py-3 text-[15px] ring-1 ring-inset transition-all",
    hasError
      ? "ring-red-400 focus:ring-red-400"
      : "ring-gray-300 focus:ring-[#c97a52]",
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
