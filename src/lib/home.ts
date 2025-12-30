import { BASE_URL } from "./config";

export async function getHomePage(locale: string) {
  const res = await fetch(
    `${BASE_URL}/homepage?lang=${locale}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch homepage");
  }

  return res.json();
}