import { BASE_URL } from "./config";
export async function getProjects(page: number = 1, locale: string) {
  try {
    const res = await fetch(`${BASE_URL}/projects/all_projects?page=${page}&lang=${locale}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch projects");

    return res.json();
  } catch (error) {
    console.error("getProjects error:", error);
    return { projects: [], error: true };
  }
}



export async function getProjectBySlug(slug: string) {
  try {
    const res = await fetch(`${BASE_URL}/project/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch area by slug");                   

    return res.json();
  } catch (error) {
    console.error("getAreaBySlug error:", error);
    return { area: null, error: true };
  }
}



export async function getCityWiseProject(id: number) {
  try {
    const res = await fetch(`${BASE_URL}/city/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch area by slug");                   

    return res.json();
  } catch (error) {
    console.error("getAreaBySlug error:", error);
    return { area: null, error: true };
  }
}