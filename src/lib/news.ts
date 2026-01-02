import { BASE_URL } from "./config";

export async function getAllNews(page: number = 1, lang: string) {
  try {
    const res = await fetch(`${BASE_URL}/allnews?page=${page}&lang=${lang}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch areas");

    return res.json();
  } catch (error) {
    console.error("getAllAreas error:", error);
    return { areas: [], error: true };
  }
}

export async function getNewsBySlug(slug: string) {
  try {
    const res = await fetch(`${BASE_URL}/news/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch area by slug");                   

    return res.json();
  } catch (error) {
    console.error("getAreaBySlug error:", error);
    return { area: null, error: true };
  }
}