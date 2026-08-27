const TMDB_API_URL = "https://api.themoviedb.org/3";

const getHeaders = () => {
  const token = process.env.TMDB_ACCESS_TOKEN;
  if (!token) {
    throw new Error("TMDB_ACCESS_TOKEN is missing in .env.local");
  }
  return {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export async function getTrendingMedia() {
  const response = await fetch(
    `${TMDB_API_URL}/trending/all/day?language=en-US`,
    {
      headers: getHeaders(),
      next: { revalidate: 3600 }, // Cache the data for 1 hour
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch from TMDB");
  }

  return response.json();
}
