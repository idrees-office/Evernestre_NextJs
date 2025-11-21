import { BASE_URL } from "./config";

export async function getAllNews(page: number = 1) {
  try {
    const res = await fetch(`${BASE_URL}/allnews?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch areas");

    return res.json();
  } catch (error) {
    console.error("getAllAreas error:", error);
    return { areas: [], error: true };
  }
}