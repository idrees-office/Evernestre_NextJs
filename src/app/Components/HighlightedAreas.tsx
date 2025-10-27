// app/components/HighlightedAreas.tsx
import Link from "next/link";
import Image from "next/image";

type Area = {
  name: string;
  slug: string;
  image: string;
  startFrom: string; 
};

const AREAS: Area[] = [
  { name: "Bluewaters Island", slug: "bluewaters-island", image: "https://test_backend.leadshub.ae/media/6806/Business-Bay.webp", startFrom: "2,000,000" }, 
  { name: "Dubai Marina", slug: "dubai-marina", image: "https://test_backend.leadshub.ae/media/6807/Downtown.webp", startFrom: "2,000,000" },        
  { name: "Downtown", slug: "downtown", image: "https://test_backend.leadshub.ae/media/6823/Dubai-Marina.webp", startFrom: "2,000,000" },                    
  { name: "Ras Al Khaimah", slug: "ras-al-khaimah", image: "https://test_backend.leadshub.ae/media/6815/Emirates-Living.webp", startFrom: "2,000,000" },
];

function AreaCard({
  area,
  className = "",
  priority = false,
}: {
  area: Area;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href={`/areas/${area.slug}`} className={`group relative overflow-hidden rounded-[7px] ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={area.image}
          alt={area.name}
          fill
          priority={priority}
          sizes="(min-width:1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
      <div className="absolute left-6 right-6 bottom-5">
        <p className="text-white text-[22px] md:text-[24px] font-normal leading-tight drop-shadow">
          {area.name}
        </p>
        <p className="text-white/90 text-xs">
          Starting price from {area.startFrom} AED
        </p>
      </div>
    </Link>
  );
}

export default function HighlightedAreas() {
  return (
    <section className="bg-[#ffffff] py-8 md:py-8 lg:py-8">
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
        <div className="mb-6 md:mb-8 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[32px] md:text-[34px] lg:text-[38px] font-normal tracking-tight text-[#8b5d3b]">
              Highlighted Areas
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm">
              Explore The UAE&apos;s Latest Off-Plan Projects By Top Developers, Representing A New Era Of Investment Excellence.
            </p>
          </div>
          <Link href="/areas" className="h-10 shrink-0 rounded-full px-5 text-sm text-white bg-gradient-to-r from-[#d0845b] to-[#c9a882] flex items-center">
            Explore All Areas
          </Link>
        </div>
        <div className="grid gap-6 md:gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px] lg:auto-rows-[260px]">
          <AreaCard area={AREAS[0]} className="lg:col-span-2 lg:row-span-2 h-full" priority />
          <AreaCard area={AREAS[1]} />
          <AreaCard area={AREAS[2]} />
          <AreaCard area={AREAS[3]} className="lg:col-span-2 h-full" />
        </div>
      </div>
    </section>
  );
}
