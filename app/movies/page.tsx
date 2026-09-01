import { getMediaByType } from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import Pagination from "@/components/Pagination";
import { MediaItem } from "@/types/tmdb";

export default async function MoviesPage({
  searchParams,
}: {
  // In Next.js, searchParams gives us access to URL query strings
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;

  // Extract the page number from the URL, defaulting to 1 if it doesn't exist
  const currentPage = Number(resolvedParams.page) || 1;

  // Pass the page number to our API function
  const data = await getMediaByType("movie", currentPage);

  const movies: MediaItem[] =
    data.results?.map((item: MediaItem) => ({
      ...item,
      media_type: "movie",
    })) || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Popular Movies</h1>
          <p className="mt-2 text-gray-400">
            The most watched movies this week.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-8">
        {movies.map((movie) => (
          <MediaCard
            key={movie.id}
            item={movie}
          />
        ))}
      </div>

      {/* Render the Pagination component below the grid */}
      {data.total_pages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={data.total_pages}
          basePath="/movies"
        />
      )}
    </main>
  );
}
