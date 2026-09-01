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

export async function getTrendingMovies() {
  const response = await fetch(
    `${TMDB_API_URL}/trending/movie/day?language=en-US`,
    {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies from TMDB");
  }

  return response.json();
}

export async function getPopularMovies(page: number = 1) {
  const response = await fetch(
    `${TMDB_API_URL}/movie/popular?language=en-US&page=${page}`,
    {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies from TMDB");
  }

  return response.json();
}

export async function getMovieDetails(id: string) {
  const response = await fetch(`${TMDB_API_URL}/movie/${id}?language=en-US`, {
    headers: getHeaders(),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movie details for ID ${id}`);
  }

  return response.json();
}

export async function searchMovies(query: string, page: number = 1) {
  const response = await fetch(
    `${TMDB_API_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=${page}`,
    {
      headers: getHeaders(),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to search TMDB movies for: ${query}`);
  }

  return response.json();
}
