"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Bath,
  BedDouble,
  Heart,
  Home,
  MessageCircle,
  Phone,
  Ruler,
  Share2,
} from "lucide-react";
import Image from "next/image";
import { getCityWiseProject } from "@/lib/projects";

interface Project {
  slug: string;
  starting_price: string;
  banner: string;
  title: string;
  location_name: string;
  type: string;
  bedrooms_raw: string;
  bathrooms: string;
  starting_size: string;
}

type Currency = "AED" | "USD" | "EUR";

const FX: Record<Currency, number> = {
  AED: 1,
  USD: 0.272294,
  EUR: 0.249,
};

const CURRENCIES = ["AED", "USD", "EUR"] as const;

function formatMoney(amount: string, currency: Currency) {
  if (!amount) return "Price on Request";

  const numeric = parseFloat(amount.replace(/[^\d.]/g, ""));
  if (isNaN(numeric)) return "Price on Request";

  const converted = numeric * FX[currency];
  const symbol =
    currency === "AED" ? "AED " : currency === "USD" ? "USD " : "EUR ";

  return `${symbol}${Math.round(converted).toLocaleString()}`;
}

interface CitywiseProjectProps {
  id: number;
}

export default function CitywiseProject({ id: propId }: CitywiseProjectProps) {
  
   const params = useParams();

   const id = Number(params.id || propId);

   console.log(id);


  const [currency, setCurrency] = useState<Currency>("AED");
  const [projects, setProjects] = useState<Project[]>([]);
  const [cityName, setCityName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch city-wise projects
  useEffect(() => {
    const fetchCityProjects = async () => {
      try {
        setLoading(true);
        const data = await getCityWiseProject(id);

        if (data && data.projects) {
          setCityName(data.projects.data[0].city?.name || "City");
          setProjects(data.projects.data || []);
        } else {
          setError("No projects found for this city");
        }
      } catch (err) {
        console.error("Error fetching city projects:", err);
        setError("Failed to load projects. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCityProjects();
  }, [id]);

  // Format projects with current currency
  const pricedProjects = useMemo(() => {
    return projects?.map((p) => ({
      ...p,
      displayPrice: formatMoney(p.starting_price, currency),
    }));
  }, [projects, currency]);

  if (loading) {
    return (
      <section className="bg-[#ffffff] py-10">
        <div className="container mx-auto max-w-8xl px-6 md:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8b5d3b] mx-auto"></div>
              <p className="mt-4 text-[#8b5d3b]">Loading projects...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-[#ffffff] py-10">
        <div className="container mx-auto max-w-8xl px-6 md:px-8">
          <div className="text-center py-12">
            <h2 className="text-2xl text-[#8b5d3b] mb-4">Error Loading Projects</h2>
            <p className="text-[#1a1a1a]/70">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#ffffff] py-10">
      <div className="container mx-auto max-w-8xl px-6 md:px-8">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-[32px] lg:text-[38px] font-normal text-[#8b5d3b]">
              Projects in {cityName}
            </h2>
            <p className="text-sm text-[#1a1a1a]/70 mt-1">
              Explore off-plan projects in {cityName}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {CURRENCIES.map((c) => {
              const active = currency === c;
              return (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  aria-pressed={!!active}
                  className={[
                    "h-9 px-4 rounded-full text-sm transition-all cursor-pointer",
                    active
                      ? "bg-gradient-to-r from-[#d0845b] to-[#c9a882] text-white shadow"
                      : "border border-[#d0845b]/50 text-[#8b5d3b] hover:bg-[#d0845b]/10",
                  ].join(" ")}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl text-[#8b5d3b] mb-2">No Projects Found</h3>
            <p className="text-[#1a1a1a]/70">
              There are currently no off-plan projects available in {cityName}.
            </p>
            <Link
              href="/projects"
              className="inline-block mt-4 px-6 py-2 bg-[#8b5d3b] text-white rounded-lg hover:bg-[#7a4d2a] transition-colors"
            >
              Browse All Projects
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pricedProjects?.map((p) => (
                <div
                  key={p.slug}
                  className="group relative overflow-hidden rounded-lg border border-[#d0845b]/20 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1"
                >
                  <Link href={`/project/${p.slug}.html`}>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={
                          p.banner ||
                          "https://test_backend.leadshub.ae/media/7044/Untitled-2.webp"
                        }
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1.5 shadow-lg">
                        <div className="text-sm font-normal text-[#c2754e]">
                          {p.displayPrice}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-md font-normal text-[#1a1a1a]/70 line-clamp-1">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#1a1a1a]/70">
                        {p.location_name || "Dubai"}
                      </p>

                      <div className="grid grid-cols-2 gap-3 text-sm text-[#1a1a1a] mt-3">
                        <div className="flex items-center">
                          <Home className="h-4 w-4 text-[#8b5d3b] mr-2" />
                          <span>{p.type}</span>
                        </div>
                        <div className="flex items-center">
                          <BedDouble className="h-5 w-5 text-[#8b5d3b] mr-2" />
                          <span>{p.bedrooms_raw || "Studio"}</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-5 w-5 text-[#8b5d3b] mr-2" />
                          <span>{p.bathrooms || "—"}</span>
                        </div>
                        <div className="flex items-center">
                          <Ruler className="h-5 w-5 text-[#8b5d3b] mr-2" />
                          <span>{p.starting_size || "Various Sizes"}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-[#d0845b]/10 pt-3">
                        <div className="flex items-center gap-2">
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                            <Phone className="h-3.5 w-3.5" />
                          </button>
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                            <MessageCircle className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2">
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                            <Heart className="h-3.5 w-3.5" />
                          </button>
                          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d0845d]/40 text-[#8b5d3b] hover:bg-[#d0845d]/10 transition-colors">
                            <Share2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[#1a1a1a]/70 text-sm">
                Showing {projects.length} project{projects.length !== 1 ? "s" : ""} in {cityName}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}