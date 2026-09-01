import { getTrendingMovies } from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import { MovieItem } from "@/types/tmdb";

export default async function Home() {
  const data = await getTrendingMovies();
  const trendingMovies: MovieItem[] = data.results || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Trending Movies</h1>
        <p className="mt-2 text-gray-400">
          Discover the most popular movies today.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-8">
        {trendingMovies.map((movie) => (
          <MediaCard
            key={movie.id}
            item={movie}
          />
        ))}
      </div>
    </main>
  );
}
