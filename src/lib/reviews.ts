import { BASE_URL } from "./config";

export async function getGoogleReviews() {
  try {
    const res = await fetch(`${BASE_URL}/get_google_reviews`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch reviews");

    return res.json();
  } catch (error) {
    console.error("getGoogleReviews error:", error);
    return { reviews: [], error: true };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function transformReviews(apiReviews: any[]) {
  if (!apiReviews || !Array.isArray(apiReviews)) return [];

  return apiReviews.map((review, index) => ({
    id: review.id || index + 1,
    name: review.author_name || "Anonymous",
    role: "Client",
    quote: review.text || "No review text available",
    avatar: review.profile_photo_url || `https://i.pravatar.cc/150?img=${index + 1}`,
    rating: review.rating || 5,
    time: review.relative_time_description || "Recently",
    original: review 
  }));
}