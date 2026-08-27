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

export async function getMediaDetails(mediaType: string, id: string) {
  const response = await fetch(
    `${TMDB_API_URL}/${mediaType}/${id}?language=en-US`,
    {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    const errorDetails = await response.text();
    console.error("TMDB API Error Details:", {
      status: response.status,
      body: errorDetails,
    });
    throw new Error(`Failed to fetch details for ${mediaType} ${id}`);
  }

  return response.json();
}
