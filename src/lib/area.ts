import { BASE_URL } from "./config";

export async function getAllAreas(page: number = 1) {
  try {
    const res = await fetch(`${BASE_URL}/allareas?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch areas");

    return res.json();
  } catch (error) {
    console.error("getAllAreas error:", error);
    return { areas: [], error: true };
  }
}

export async function getAreaBySlug(slug: string) {
  try {
    const res = await fetch(`${BASE_URL}/area/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch area by slug");

    return res.json();
  } catch (error) {
    console.error("getAreaBySlug error:", error);
    return { area: null, error: true };
  }
}