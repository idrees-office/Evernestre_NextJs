// components/NewsSection.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

// Props
export type NewsPost = {
  id: string | number;
  title: string;
  excerpt: string;
  date: string | Date; 
  href: string;
  cover?: string; 
};

export default function NewsSection({
  posts = defaultPosts,
  subtitle = "Explore the UAE's latest Off-Plan projects by top developers, representing a new era of investment excellence.",
  locale = "en-GB",
  timeZone = "Asia/Dubai",
}: {
  posts?: NewsPost[];
  subtitle?: string;
  locale?: string;
  timeZone?: string;
}) {
  if (!posts || posts.length === 0) return null;

  const featured = posts[0];
  const sidePosts = posts.slice(1, 5);

  const formatDate = (d: string | Date) =>
    new Date(d).toLocaleDateString(locale, {
      day: "2-digit",
      month: "short",
      year: "numeric",
      timeZone,
    });

  return (
    <section className="bg-[#ffffff] py-8 md:py-8 lg:py-8">
      <div className="container mx-auto max-w-8xl px-6 md:px-10">
        <div className="mb-6 md:mb-8 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-[32px] md:text-[34px] lg:text-[38px] font-normal tracking-tight text-[#8b5d3b]">
              Latest News
            </h2>
            <p className="text-[#1a1a1a]/70 text-sm">
              {subtitle}
            </p>
          </div>
          <Link href="/areas" className="h-10 shrink-0 rounded-full px-5 text-sm text-white bg-gradient-to-r from-[#d0845b] to-[#c9a882] flex items-center">
            Explore All News
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-stretch">
        <article className="lg:col-span-2 h-full">
          <Link
            href={featured.href}
            className="group relative block h-full min-h-[400px] rounded-sm overflow-hidden shadow-sm ring-1 ring-black/5"
          >
            <Image
              src={featured.cover || "/images/news/placeholder.jpg"}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-sm text-xs font-medium text-neutral-700">
              {formatDate(featured.date)}
            </div>
          </Link>
        </article>
        <div className="lg:col-span-1 flex flex-col h-full">
          <ul className="flex-1 divide-y divide-dotted divide-[2px] divide-neutral-500/70">
            {sidePosts.map((p, idx) => (
              <li
                key={p.id}
                className={`py-6 flex-1 ${idx === 0 ? "pt-0" : ""} ${
                  idx === sidePosts.length - 1 ? "flex-grow" : ""
                }`}
              >
                <Link href={p.href} className="flex gap-4 group h-full">
                  <div className="relative h-24 w-40 shrink-0 overflow-hidden rounded-sm ring-1 ring-black/5">
                    <Image
                      src={p.cover || featured.cover || "/images/news/placeholder-thumb.jpg"}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                      sizes="160px"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-neutral-700">
                      {formatDate(p.date)}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-center">
                    <h4 className="line-clamp-2 text-base font-normal text-neutral-900 group-hover:underline">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{p.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}

/* --- Default static data (you can remove) --- */
const defaultPosts: NewsPost[] = [
  {
    id: 1,
    title: "Dubai Real Estate Market Trends 2024",
    excerpt: "Analysis of the latest trends in Dubai's off-plan property market and investment opportunities.",
    date: "2024-01-15",
    href: "/news/dubai-trends-2024",
    cover: "https://test_backend.leadshub.ae/media/6929/Market-Soars-with-AED-142.7-Billion-in-Q1-Sales.jpg",
  },
  {
    id: 2,
    title: "New Development in Downtown Dubai",
    excerpt: "Exciting new residential project announced in the heart of Downtown Dubai.",
    date: "2024-01-12",
    href: "/news/downtown-development",
    cover: "https://test_backend.leadshub.ae/media/6929/Market-Soars-with-AED-142.7-Billion-in-Q1-Sales.jpg",
  },
  {
    id: 3,
    title: "Investment Opportunities in Abu Dhabi",
    excerpt: "Discover prime investment locations in Abu Dhabi's growing real estate market.",
    date: "2024-01-10",
    href: "/news/abu-dhabi-opportunities",
    cover: "https://test_backend.leadshub.ae/media/6929/Market-Soars-with-AED-142.7-Billion-in-Q1-Sales.jpg",
  },
  {
    id: 4,
    title: "Sustainable Living in UAE Projects",
    excerpt: "How new developments are incorporating green technology and sustainable design.",
    date: "2024-01-08",
    href: "/news/sustainable-living-uae",
    cover: "https://test_backend.leadshub.ae/media/6929/Market-Soars-with-AED-142.7-Billion-in-Q1-Sales.jpg",
  },
   {
    id: 5,
    title: "dsdsd Living in UAE Projects",
    excerpt: "How new developments are incorporating green technology and sustainable design.",
    date: "2024-01-08",
    href: "/news/sustainable-living-uae",
    cover: "https://test_backend.leadshub.ae/media/6929/Market-Soars-with-AED-142.7-Billion-in-Q1-Sales.jpg",
  },

   {
    id: 6,
    title: "56565656 Living in UAE Projects",
    excerpt: "How new developments are incorporating green technology and sustainable design.",
    date: "2024-01-08",
    href: "/news/sustainable-living-uae",
    cover: "https://test_backend.leadshub.ae/media/6929/Market-Soars-with-AED-142.7-Billion-in-Q1-Sales.jpg",
  },
];