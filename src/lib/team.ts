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


export async function getTeamMemberBySlug(slug: string) {
  try {
    const res = await fetch(`${BASE_URL}/team/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch team member");
    }

    return res.json();
  } catch (error) {
    console.error("getTeamMemberBySlug error:", error);
    return null;
  }
}