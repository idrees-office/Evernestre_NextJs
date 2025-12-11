import { BASE_URL } from "./config";

export async function submitLeadForm(formData: {
  name: string; 
  email: string;
  phone: string;
  source?: string;
  timestamp?: string;
}) {
  try {
    const res = await fetch(`${BASE_URL}/save_website_form`, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to submit form");
    }

    return await res.json();
  } catch (error) {
    console.error("submitLeadForm error:", error);
    throw error;
  }
}