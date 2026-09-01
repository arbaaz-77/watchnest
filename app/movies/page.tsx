import { getPopularMovies } from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import Pagination from "@/components/Pagination";
import { MovieItem } from "@/types/tmdb";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const data = await getPopularMovies(currentPage);
  const movies: MovieItem[] = data.results || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Popular Movies</h1>
          <p className="mt-2 text-gray-400">
            The most watched movies right now.
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
