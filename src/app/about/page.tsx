'use client';

import React from 'react';
import Header from '../includes/header';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-light mb-6 text-[color:var(--charcoal)]">
            About Evernest Real Estate
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to Evernest Real Estate — your trusted property experts in Dubai.
          </p>
        </div>
      </main>
    </>
  );
}
