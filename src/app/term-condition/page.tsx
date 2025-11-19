"use client";

import React, { useState } from "react";

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("agreement");

  const scrollToSection = (sectionId:any) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TERMS AND CONDITIONS</h1>
          <p className="text-gray-600">Last updated August 12, 2025</p>
        </div>

        {/* Main Content */}
        <div className="">
          {/* Agreement Section */}
          <section id="agreement" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We are <strong>Evernest Real Estate</strong> (<strong>Company</strong>, <strong>we</strong>, <strong>us</strong>, or <strong>our</strong>), 
                a company registered in the <strong>United Arab Emirates</strong> at <strong>Al zarouni business center - office no 301 & 302, 3rd floor, Dubai, 00000</strong>.
              </p>
              <p>
                We operate the website <a href="https://evernest.ae/" className="text-blue-600 hover:underline">https://evernest.ae/</a> (the <strong>Site</strong>), 
                as well as any other related products and services that refer or link to these legal terms (the <strong>Legal Terms</strong>) (collectively, the <strong>Services</strong>).
              </p>
              <p>
                <strong>Evernest Real Estate is your top choice, offering in-depth market expertise, a wide range of properties and a focus on personalized service to guarantee a smooth real estate journey.</strong>
              </p>

              <p>
                You can contact us by phone at <strong>+971527469500</strong>, email at <strong>evernestre@gmail.com</strong>, or by mail to <strong>Al zarouni business center - office no 301 & 302, 3rd floor, Dubai, Dubai 00000, United Arab Emirates</strong>.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="font-semibold">
                  These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (<strong>you</strong>), 
                  and <strong>Evernest Real Estate</strong>, concerning your access to and use of the Services. You agree that by accessing the Services, 
                  you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, 
                  THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="font-semibold">
                  The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                </p>
              </div>

              <p>We recommend that you print a copy of these Legal Terms for your records.</p>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="mb-8 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-4">TABLE OF CONTENTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "services", "ip", "userreps", "prohibited", "ugc", "license", 
                "sitemanage", "ppyes", "terms", "modifications", "law", "disputes",
                "corrections", "disclaimer", "liability", "indemnification", 
                "userdata", "electronic", "california", "misc", "contact"
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left text-blue-600 hover:text-blue-800 hover:underline transition-colors ${
                    activeSection === section ? "font-semibold text-blue-800" : ""
                  }`}
                >
                  {section === "services" && "1. OUR SERVICES"}
                  {section === "ip" && "2. INTELLECTUAL PROPERTY RIGHTS"}
                  {section === "userreps" && "3. USER REPRESENTATIONS"}
                  {section === "prohibited" && "4. PROHIBITED ACTIVITIES"}
                  {section === "ugc" && "5. USER GENERATED CONTRIBUTIONS"}
                  {section === "license" && "6. CONTRIBUTION LICENSE"}
                  {section === "sitemanage" && "7. SERVICES MANAGEMENT"}
                  {section === "ppyes" && "8. PRIVACY POLICY"}
                  {section === "terms" && "9. TERM AND TERMINATION"}
                  {section === "modifications" && "10. MODIFICATIONS AND INTERRUPTIONS"}
                  {section === "law" && "11. GOVERNING LAW"}
                  {section === "disputes" && "12. DISPUTE RESOLUTION"}
                  {section === "corrections" && "13. CORRECTIONS"}
                  {section === "disclaimer" && "14. DISCLAIMER"}
                  {section === "liability" && "15. LIMITATIONS OF LIABILITY"}
                  {section === "indemnification" && "16. INDEMNIFICATION"}
                  {section === "userdata" && "17. USER DATA"}
                  {section === "electronic" && "18. ELECTRONIC COMMUNICATIONS"}
                  {section === "california" && "19. CALIFORNIA USERS AND RESIDENTS"}
                  {section === "misc" && "20. MISCELLANEOUS"}
                  {section === "contact" && "21. CONTACT US"}
                </button>
              ))}
            </div>
          </section>

          {/* Key Sections */}
          <section id="services" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. OUR SERVICES</h2>
            <div className="space-y-4 text-gray-600">
              <p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.</p>
              <p>The Services are not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use the Services.</p>
            </div>
          </section>

          <section id="ip" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            <div className="space-y-4 text-gray-600">
              <h3 className="text-xl font-semibold text-gray-700">Our intellectual property</h3>
              <p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the Content), as well as the trademarks, service marks, and logos contained therein (the Marks).</p>
              
              <h3 className="text-xl font-semibold text-gray-700">Your use of our Services</h3>
              <p>Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>access the Services; and</li>
                <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
              </ul>
              <p>solely for your personal, non-commercial use or internal business purpose.</p>
            </div>
          </section>

          <section id="prohibited" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. PROHIBITED ACTIVITIES</h2>
            <div className="space-y-4 text-gray-600">
              <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.</p>
              
              <p>As a user of the Services, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Systematically retrieve data or other content from the Services to create or compile a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Use the Services to advertise or offer to sell goods and services.</li>
                <li>Engage in unauthorized framing of or linking to the Services.</li>
                <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
              </ul>
            </div>
          </section>

          <section id="ppyes" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. PRIVACY POLICY</h2>
            <div className="space-y-4 text-gray-600">
              <p>We care about data privacy and security. Please review our Privacy Policy: <a href="https://evernest.ae/privacy-policy" className="text-blue-600 hover:underline">https://evernest.ae/privacy-policy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.</p>
            </div>
          </section>

          <section id="law" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. GOVERNING LAW</h2>
            <div className="space-y-4 text-gray-600">
              <p>These Legal Terms shall be governed by and defined following the laws of the United Arab Emirates. Evernest Real Estate and yourself irrevocably consent that the courts of the United Arab Emirates shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.</p>
            </div>
          </section>

          <section id="disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">14. DISCLAIMER</h2>
            <div className="space-y-4 text-gray-600">
              <p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.</p>
            </div>
          </section>

          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">21. CONTACT US</h2>
            <div className="space-y-4 text-gray-600">
              <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Evernest Real Estate</p>
                <p>Al zarouni business center - office no 301 & 302, 3rd floor</p>
                <p>Dubai, Dubai 00000</p>
                <p>United Arab Emirates</p>
                <p className="mt-2">Phone: +971527469500</p>
                <p>Email: evernestre@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}