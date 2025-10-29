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
  blurb = "F&C Properties operates in Dubai, one of the most significant international centers of the 21st century, where culture coexists with cutting‑edge technologies.",
  artworkSrc = "https://evernest.ae/assets/img/aboutpage/Vision.jpg",
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

    // Require at least 9 digits (UAE mobiles are 9 after country code)
    if (!phoneE164) {
      nextErrors.phone = "Enter a valid UAE phone number.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    try {
      setLoading(true);
      if (onSubmit) {
        await onSubmit({ fullName: fullName.trim(), phoneE164: phoneE164! });
      } else {
        // Example: POST to your API route
        await fetch("/api/register-interest", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullName: fullName.trim(), phone: phoneE164 }),
        });
      }
      setErrors({ ok: "Thanks! We'll be in touch soon." });
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
    <section className={`bg-[#ffffff] py-8 md:py-8 lg:py-8`}>
      <div className="container mx-auto max-w-8xl px-6 md:px-8"> 
       {/* <div className="relative overflow-hidden rounded-xl bg-white ring-1 ring-gray-200"> */}
          <div className="pointer-events-none absolute -inset-px rounded-[inherit]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 p-8 md:p-10">
            {/* Left: Content & Image */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"> {title} </h2> */}
                {/* <p className="text-white/70 text-base md:text-lg"> {blurb} </p> */}
              </div>
              <div className="relative aspect-[4/3] w-full max-w-xl">
                <Image
                  src={artworkSrc}
                  alt="Property illustration"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  sizes="(min-width:1024px) 40vw, 80vw"
                  priority
                />
              </div>
            </div>
            
            {/* Right: Form */}
            <div className="flex items-center">
              <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-normal">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name *"
                    className={inputClass(errors.name)}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-300">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-normal">
                    Phone Number
                  </label>
                  <div className="flex items-stretch overflow-hidden rounded-sm ring-1 ring-inset focus-within:ring-sky-400/70">
                    <div className="flex items-center gap-2 px-3">
                      <UaeFlag className="h-4 w-6 rounded-[2px] ring-1" />
                      <span className="text-sm">+971</span>
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder="5x xxx xxxx"
                      value={phoneRaw}
                      onChange={(e) => setPhoneRaw(e.target.value)}
                      className="min-w-0 flex-1 px-4 py-3 text-[15px]"
                      aria-invalid={Boolean(errors.phone)}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-300">{errors.phone}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#c97a52] inline-flex h-11 w-full items-center justify-center rounded-sm from-sky-400 to-cyan-400 px-6 text-sm font-medium text-[#fff] transition-transform active:translate-y-[1px] disabled:opacity-60 hover:from-sky-500 hover:to-cyan-500"
                >
                  {loading ? "Submitting…" : "Submit"}
                  {!loading && <ArrowRight className="ml-2 h-4 w-4" />}
                </button>

                {/* Success Message */}
                {errors.ok && (
                  <p className="text-sm text-emerald-300">{errors.ok}</p>
                )}

                {/* Privacy Policy */}
                <p className="text-xs">
                  By submitting this form, you agree to the{" "}
                  <Link href="/privacy-policy" className="underline hover:text-white/80">
                    privacy policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

function toUaeE164(input: string): string | null {
  const digits = (input || "").replace(/[^0-9]/g, "");
  if (!digits) return null;

  let local = digits;
  if (local.startsWith("971")) local = local.slice(3);
  if (local.startsWith("00")) local = local.slice(2);
  if (local.startsWith("0")) local = local.slice(1);

  // after country code, UAE mobiles are typically 9 digits (5xxxxxxxx)
  if (local.length < 8 || local.length > 12) return null;

  return "+971" + local;
}

function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

function inputClass(hasError?: string) {
  return cn(
    "w-full rounded-sm px-4 py-3 text-[15px]",
    "ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-sky-400/70",
    hasError && "ring-red-400/50 focus:ring-red-400/70"
  );
}

// Minimal inline UAE flag to avoid extra assets
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