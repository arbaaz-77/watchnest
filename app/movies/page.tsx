import { getMediaByType } from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import { MediaItem } from "@/types/tmdb";

export default async function MoviesPage() {
  const data = await getMediaByType("movie");

  // Ensure the media_type is explicitly set since the discover endpoint omits it sometimes
  const movies: MediaItem[] =
    data.results?.map((item: MediaItem) => ({
      ...item,
      media_type: "movie",
    })) || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Popular Movies</h1>
        <p className="mt-2 text-gray-400">The most watched movies this week.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-8">
        {movies.map((movie) => (
          <MediaCard
            key={movie.id}
            item={movie}
          />
        ))}
      </div>
    </main>
  );
}
