import { BASE_URL } from "./config";

export async function getAllBlogs(page: number = 1) {
  try {
    const res = await fetch(`${BASE_URL}/allblogs?page=${page}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    return res.json();
  } catch (error) {
    console.error("getAllAreas error:", error);
    return { blogs: [], error: true };
  }
}