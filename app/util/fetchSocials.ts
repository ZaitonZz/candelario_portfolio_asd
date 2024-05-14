// utils/fetchSocials.ts
import { Social } from '../types/api/social';

export async function fetchSocials(): Promise<Social[]> {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/socials", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const socials: Social[] = await response.json();
    return socials;
  } catch (error) {
    console.error('Failed to fetch socials:', error);
    return [];
  }
}
