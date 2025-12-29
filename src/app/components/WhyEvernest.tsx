'use client';

import React from 'react';
import { Home, Headphones, Coins } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Feature = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const FEATURES: Feature[] = [
  {
    title: 'propertySections',
    desc: 'propertySectionsDesc',
    icon: Home,
  },
  {
    title: 'localKnowledgeTitle',
    desc:'localKnowledgeDesc',
    icon: Headphones,
  },
  {
    title : 'valueYourTimeTitle',
    desc :'valueYourTimeDesc',
    icon: Coins,
  },
];

export default function WhyEvernest() {
  const t = useTranslations();

  return (
    <section className="bg-[#f6ecdf]">
      <div className="container mx-auto max-w-8xl px-6 md:px-8 py-14 md:py-18 lg:py-20">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-[#8b5d3b] text-[34px] md:text-[44px] lg:text-[45px] leading-tight font-serif">{t('whyEvernestTitle')}</h2>
          <p className="mt-4 text-base md:text-lg text-[#111]/80 font-normal">
            {t('whyEvernestDesc')}
          </p>
        </div>
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {FEATURES.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-[9px] bg-white border border-[#c9a882]/40 shadow-[0_10px_30px_rgba(0,0,0,0.06)] px-8 py-9 text-center transition-all hover:shadow-[0_16px_44px_rgba(0,0,0,0.10)] hover:-translate-y-0.5">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f7e9e1] ring-1 ring-[#d0845b]/30">
                <Icon className="h-7 w-7 text-[#c2754e]" aria-hidden="true" />
              </div>
              <h3 className="text-[#c2754e] tracking-wide font-normal"> {t(``+title+``)} </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/75"> {t(``+desc+``)} </p>
              <div className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 ring-1 ring-white/50 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}