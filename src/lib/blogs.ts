import { BASE_URL } from "./config";

export async function getAllBlogs(page: number = 1, lang: string) {
  try {
    const res = await fetch(`${BASE_URL}/allblogs?page=${page}&lang=${lang}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    return res.json();
  } catch (error) {
    console.error("getAllAreas error:", error);
    return { blogs: [], error: true };
  }
}

export async function getBlogsBySlug(slug: string) {
  try {
    const res = await fetch(`${BASE_URL}/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch area by slug");                   

    return res.json();
  } catch (error) {
    console.error("getAreaBySlug error:", error);
    return { area: null, error: true };
  }
}