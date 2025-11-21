"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { BASE_URL } from "@/lib/config";

export default function RegisterCtaSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState<string>();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    first?: string;
    last?: string;
    phone?: string;
    ok?: string;
  }>({});

  // Check if all fields are valid and filled
  const isFormValid = useMemo(() => {
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      phone !== undefined &&
      phone !== "" &&
      isValidPhoneNumber(phone)
    );
  }, [firstName, lastName, phone]);

  const validatePhoneNumber = (phoneNumber: string | undefined): boolean => {
    if (!phoneNumber) return false;
    return isValidPhoneNumber(phoneNumber);
  };

 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  
  if (!isFormValid) return;

  const nextErrors: typeof errors = {};
  
  if (!firstName.trim()) nextErrors.first = "Please enter your first name.";
  if (!lastName.trim()) nextErrors.last = "Please enter your last name.";
  
  if (!phone) {
    nextErrors.phone = "Please enter your phone number.";
  } else if (!validatePhoneNumber(phone)) {
    nextErrors.phone = "Please enter a valid phone number for the selected country.";
  }
  
  setErrors(nextErrors);
  if (Object.keys(nextErrors).length) return;

  try {
    setLoading(true);

    const formData = {
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      phone: phone,
      source: "website_registration",
      timestamp: new Date().toISOString(),
    };

    // ✅ Use BASE_URL here
    const response = await fetch(`${BASE_URL}/get_website_lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to submit form');
    }

    setErrors({ ok: "✅ Thank you! We'll reach out soon." });
    setFirstName("");
    setLastName("");
    setPhone("");
    
  } catch (error) {
    console.error('Submission error:', error);
    setErrors({ 
      phone: error instanceof Error 
        ? error.message 
        : "Something went wrong. Please try again."
    });
  } finally {
    setLoading(false);
  }
}


  const handlePhoneChange = (value: string | undefined) => {
    setPhone(value);
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, field: string) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      if (errors[field as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    };

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
            Join thousands of investors discovering Dubai's finest off-plan
            developments and exclusive opportunities.
          </p>
        </motion.div>

        {/* Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden bg-white ring-1 ring-[#c97a52]/20">
          {/* Left: Image */}
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
            className="p-6 md:p-12 flex flex-col justify-center"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md mx-auto space-y-6"
            >
              {/* Inputs */}
              {[
                {
                  label: "First Name *",
                  value: firstName,
                  setter: setFirstName,
                  field: 'first',
                  err: errors.first,
                },
                {
                  label: "Last Name *",
                  value: lastName,
                  setter: setLastName,
                  field: 'last',
                  err: errors.last,
                },
              ].map(({ label, value, setter, field, err }, i) => (
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
                    onChange={handleInputChange(setter, field)}
                    className={inputClass(err)}
                  />
                  {err && <p className="text-sm text-red-500 mt-1">{err}</p>}
                </motion.div>
              ))}

              {/* Phone Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="phone-input-wrapper"
              >
                <div className={`phone-input-custom ${errors.phone ? "error" : ""}`}>
                  <PhoneInput
                    international
                    defaultCountry="AE"
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="Enter phone number"
                  />
                </div>

                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
                
                {phone && !errors.phone && (
                  <p className={`text-xs mt-1 ${
                    validatePhoneNumber(phone) ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {validatePhoneNumber(phone) 
                      ? '✓ Valid phone number format' 
                      : '⚠ Please check the number format for the selected country'
                    }
                  </p>
                )}
              </motion.div>

              {/* Button */}
              <motion.button
                whileHover={isFormValid ? {
                  scale: 1.06,
                  boxShadow: "0px 10px 25px rgba(201, 122, 82, 0.5)",
                } : {}}
                whileTap={isFormValid ? { scale: 0.95 } : {}}
                transition={{ type: "spring", stiffness: 200 }}
                type="submit"
                disabled={!isFormValid || loading}
                className={`relative overflow-hidden bg-gradient-to-r from-[#c97a52] via-[#b06c48] to-[#8b5d3b] inline-flex h-12 w-full items-center justify-center rounded-sm text-[15px] text-white transition-all duration-200 ${
                  !isFormValid || loading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-lg'
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
                        isFormValid ? {
                          repeat: Infinity,
                          duration: 1.4,
                          ease: "easeInOut",
                        } : {}
                      }
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
                  className="text-sm text-emerald-600 text-center"
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
                <Link
                  href="/privacy-policy"
                  className="underline hover:text-[#c97a52]"
                >
                  Privacy Policy
                </Link>
                .
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .phone-input-wrapper {
          width: 100%;
        }

        .phone-input-custom :global(.PhoneInput) {
          display: flex;
          align-items: center;
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          padding: 0 !important;
          transition: all 0.3s ease;
          background: white;
        }

        .phone-input-custom :global(.PhoneInput:focus-within) {
          border-color: #c97a52;
          outline: none;
          box-shadow: none;
        }

        .phone-input-custom :global(.PhoneInputCountry) {
          padding: 12px;
          display: flex;
          align-items: center;
          background: #fafafa;
          border-right: 1px solid #e5e7eb;
          margin: 0;
        }

        .phone-input-custom :global(.PhoneInputCountrySelect) {
          padding: 8px 4px;
          border: none;
          background: transparent;
          cursor: pointer;
          font-size: 14px;
        }

        .phone-input-custom :global(.PhoneInputCountryIcon) {
          width: 20px;
          height: 15px;
          margin-right: 8px;
          border-radius: 2px;
        }

        .phone-input-custom :global(.PhoneInputInput) {
          flex: 1;
          padding: 8px 8px;
          font-size: 15px;
          cursor: pointer;
          border: none;
          outline: none;
          background: transparent;
        }

        .phone-input-custom :global(.PhoneInputInput:focus) {
          outline: none;
          box-shadow: none;
        }

        .phone-input-custom.error :global(.PhoneInput) {
          border-color: #ef4444;
        }
      `}</style>
    </motion.section>
  );
}

function inputClass(hasError?: string) {
  return [
    "w-full rounded-sm px-4 py-2 text-[15px] border border-gray-300 transition-all duration-300 cursor-pointer",
    "focus:outline-none focus:border-[#c97a52] focus:scale-[1.02]",
    hasError
      ? "border-red-400 focus:border-red-400"
      : "border-gray-300"
  ].join(" ");
}