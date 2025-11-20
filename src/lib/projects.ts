import { BASE_URL } from "./config";
export async function getProjects(page: number = 1) {
  try {
    const res = await fetch(`${BASE_URL}/projects/all_projects?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    return res.json();
  } catch (error) {
    console.error("getProjects error:", error);
    return { projects: [], error: true };
  }
}