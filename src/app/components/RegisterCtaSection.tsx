"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { isValidPhoneNumber } from "react-phone-number-input";
import { submitLeadForm } from "@/lib/form";
import RegisterLeadForm from "./RegisterLeadForm";
import { useTranslations } from "next-intl";

export default function RegisterCtaSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>();
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    phone?: string;
    ok?: string;
  }>({});

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = useMemo(() => {
    return (
      fullName.trim() !== "" &&
      email.trim() !== "" &&
      isValidEmail(email) && // This will work now
      phone !== undefined &&
      phone !== "" &&
      isValidPhoneNumber(phone)
    );
  }, [fullName, email, phone]);

  const validatePhoneNumber = (phoneNumber: string | undefined): boolean => {
    if (!phoneNumber) return false;
    return isValidPhoneNumber(phoneNumber);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    // Validation
    const nextErrors: typeof errors = {};
    if (!fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!phone) {
      nextErrors.phone = "Please enter your phone number.";
    } else if (!validatePhoneNumber(phone)) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({}); 

      const formData = {
        name: fullName.trim(), 
        email: email.trim(), 
        phone: phone!,
        source: "Website",
        timestamp: new Date().toISOString(),
      };

      // Use the API function
      await submitLeadForm(formData);

      // Success
      setErrors({ ok: "✅ Thank you! We'll reach out to you soon." });
      setFullName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      setErrors({
        phone: error instanceof Error 
          ? error.message 
          : "Failed to submit form. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  const handlePhoneChange = (value: string | undefined) => {
    setPhone(value);
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, field: string) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
      if (errors[field as keyof typeof errors]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
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
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-[#8b5d3b] mb-3 tracking-tight">
            { t('registerStayUpdatedTitle')}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
             { t('registerStayUpdatedDesc')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-sm overflow-hidden bg-white ring-1 ring-[#c97a52]/20">
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9, ease: "easeOut" }} className="relative h-[360px] md:h-[500px] lg:h-[550px] overflow-hidden"
          >
            <Image
              src="/assets/about/Vision.jpg"
              alt="Real estate project"
              fill
              className="object-cover scale-110 hover:scale-100 transition-transform duration-1000 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#8b5d3bbd] via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="p-6 md:p-12 flex flex-col justify-center"
          >
            <RegisterLeadForm
              fullName={fullName}
              email={email}
              phone={phone}
              errors={errors}
              loading={loading}
              isFormValid={isFormValid}
              handleSubmit={handleSubmit}
              handlePhoneChange={handlePhoneChange}
              handleInputChange={handleInputChange}
              validatePhoneNumber={validatePhoneNumber}
              setFullName={setFullName}
              setEmail={setEmail}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
