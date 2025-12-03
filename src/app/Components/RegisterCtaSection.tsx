"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { BASE_URL } from "@/lib/config";
import RegisterLeadForm from "./RegisterLeadForm";

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
      nextErrors.phone =
        "Please enter a valid phone number for the selected country.";
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

      const response = await fetch(`${BASE_URL}/get_website_lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      setErrors({ ok: "✅ Thank you! We'll reach out soon." });
      setFirstName("");
      setLastName("");
      setPhone("");
    } catch (error) {
      setErrors({
        phone:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
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
            Join thousands of investors discovering Dubai&apos;s finest off-plan
            developments and exclusive opportunities.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-sm overflow-hidden bg-white ring-1 ring-[#c97a52]/20">

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
          <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="p-6 md:p-12 flex flex-col justify-center"
            >
              <RegisterLeadForm
                firstName={firstName}
                lastName={lastName}
                phone={phone}
                errors={errors}
                loading={loading}
                isFormValid={isFormValid}
                handleSubmit={handleSubmit}
                handlePhoneChange={handlePhoneChange}
                handleInputChange={handleInputChange}
                validatePhoneNumber={validatePhoneNumber}
                setFirstName={setFirstName}
                setLastName={setLastName}
              />
            </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

