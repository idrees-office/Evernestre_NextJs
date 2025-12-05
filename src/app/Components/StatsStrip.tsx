// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// type Stat = {
//   value: number;
//   label: string;
//   suffix?: string;
//   abbrK?: boolean;
// };

// const BACKGROUND_IMG = "/assets/home/counter-image.webp";

// const STATS: Stat[] = [
//   { value: 500, label: "Successful Deals", suffix: "+", abbrK: false },
//   { value: 550, label: "Satisfied Clients", suffix: "+", abbrK: false },
//   { value: 2000, label: "Satisfied Clients", abbrK: true },
//   { value: 30, label: "Top Developer Partnership", suffix: "+", abbrK: false },
// ];

// function formatVal(n: number, abbrK?: boolean) {
//   if (abbrK && n >= 1000) {
//     const k = Math.round(n / 100) / 10;
//     return `${Number.isInteger(k) ? k.toFixed(0) : k}\u00A0K`;
//   }
//   return Math.round(n).toLocaleString();
// }

// function useCountUp(target: number, start: boolean, duration = 1400) {
//   const [val, setVal] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let raf = 0;
//     const t0 = performance.now();
//     const tick = (now: number) => {
//       const p = Math.min(1, (now - t0) / duration);
//       setVal(target * (1 - Math.pow(1 - p, 3)));
//       if (p < 1) raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [start, target, duration]);
//   return val;
// }

// function Counter({
//   value,
//   abbrK,
//   start,
// }: {
//   value: number;
//   abbrK?: boolean;
//   start: boolean;
// }) {
//   const animatedValue = useCountUp(value, start);
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   const shown = mounted ? animatedValue : 0;
//   return <>{formatVal(shown, abbrK)}</>;
// }

// export default function StatsStrip() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.35 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <section className="relative">
//       <Image
//         src={BACKGROUND_IMG}
//         alt=""
//         aria-hidden
//         fill
//         className="absolute inset-0 h-full w-full object-cover"
//       />
//       <div className="absolute inset-0 bg-black/60" />

//       <div ref={ref} className="relative">
//         <div className="container mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
//           <div className="grid grid-cols-1 gap-8 text-center text-white md:grid-cols-4 md:divide-x md:divide-white/20">
//             {STATS.map((s, i) => (
//               <div key={s.label} className="px-2">
//                 <div className="text-[35px] md:text-[40px] lg:text-[45px] font-normal leading-none tracking-wide text-[#ddb19a]">
//                   <span className="tabular-nums">
//                     <Counter value={s.value} abbrK={s.abbrK} start={inView} />
//                   </span>
//                   {s.suffix && (
//                     <span className="pl-1 align-top">{s.suffix}</span>
//                   )}
//                 </div>
//                 <div className="mt-2 text-sm md:text-base font-medium text-white/90">
//                   {s.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Stat = {
  value: number;
  label: string;
  suffix?: string;
  abbrK?: boolean;
};

const BACKGROUND_IMG = "/assets/home/counter-image.webp";

// FIXED: Changed duplicate "Satisfied Clients" to unique labels
const STATS: Stat[] = [
  { value: 500, label: "Successful Deals", suffix: "+", abbrK: false },
  { value: 550, label: "Satisfied Clients", suffix: "+", abbrK: false },
  { value: 2000, label: "Managed Properties", suffix: "+", abbrK: true }, // Changed from duplicate
  { value: 30, label: "Top Developer Partnership", suffix: "+", abbrK: false },
];

// OR alternative fix with unique IDs if you want to keep the same label text:
// const STATS: Stat[] = [
//   { value: 500, label: "Successful Deals", suffix: "+", abbrK: false },
//   { value: 550, label: "Satisfied Clients", suffix: "+", abbrK: false },
//   { value: 2000, label: "Happy Clients", suffix: "+", abbrK: true }, // Alternative label
//   { value: 30, label: "Top Developer Partnership", suffix: "+", abbrK: false },
// ];

function formatVal(n: number, abbrK?: boolean) {
  if (abbrK && n >= 1000) {
    const k = Math.round(n / 100) / 10;
    return `${Number.isInteger(k) ? k.toFixed(0) : k}\u00A0K`;
  }
  return Math.round(n).toLocaleString();
}

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      setVal(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function Counter({
  value,
  abbrK,
  start,
}: {
  value: number;
  abbrK?: boolean;
  start: boolean;
}) {
  const animatedValue = useCountUp(value, start);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const shown = mounted ? animatedValue : 0;
  return <>{formatVal(shown, abbrK)}</>;
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative">
      <Image
        src={BACKGROUND_IMG}
        alt=""
        aria-hidden
        fill
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div ref={ref} className="relative">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 text-center text-white md:grid-cols-4 md:divide-x md:divide-white/20">
            {STATS.map((s, i) => (
              <div key={`${s.label}-${i}`} className="px-2"> {/* Added index for uniqueness */}
                <div className="text-[35px] md:text-[40px] lg:text-[45px] font-normal leading-none tracking-wide text-[#ddb19a]">
                  <span className="tabular-nums">
                    <Counter value={s.value} abbrK={s.abbrK} start={inView} />
                  </span>
                  {s.suffix && (
                    <span className="pl-1 align-top">{s.suffix}</span>
                  )}
                </div>
                <div className="mt-2 text-sm md:text-base font-medium text-white/90">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
