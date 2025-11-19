import { BASE_URL } from "./config"

export async function getHomePage() {
  const res = await fetch(`${BASE_URL}/homepage`, {
    cache: "no-store",
  });

  return res.json();
}
