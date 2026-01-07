import { BASE_URL } from "./config";

export async function getDevelopers(page: number = 1, lang: string, query: string = "") {
  try {
    const res = await fetch(
      `${BASE_URL}/developers/all_developers?page=${page}&lang=${lang}&search=${query}`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch developers");

    return await res.json();
  } catch (error) {
    console.error("getDevelopers error:", error);

    return {
      developers: {
        data: [],
        current_page: 1,
        last_page: 1,
      },
      error: true,
    };
  }
}



export async function getDevelopersBySlug(slug: string, locale: string) {
  try {
    const res = await fetch(`${BASE_URL}/developers/${slug}?lang=${locale}`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch area by slug");                   

    return res.json();
  } catch (error) {
    console.error("getAreaBySlug error:", error);
    return { area: null, error: true };
  }
}