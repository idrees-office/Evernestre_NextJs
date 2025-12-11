import { BASE_URL } from "./config";

export async function getTeam() {
  try {
    const res = await fetch(`${BASE_URL}/team`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch teams");

    return res.json();
  } catch (error) {
    console.error("getTeam error:", error);
    return { teams: [], error: true };
  }
}