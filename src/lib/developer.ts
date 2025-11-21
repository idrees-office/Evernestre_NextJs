import { BASE_URL } from "./config";

export async function getDevelopers(page: number = 1) {
  try {
    const res = await fetch(`${BASE_URL}/developers/all_developers?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    return res.json();
  } catch (error) {
    console.error("getDevelopers error:", error);
    return { projects: [], error: true };
  }
}