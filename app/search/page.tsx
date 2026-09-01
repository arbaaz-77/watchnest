import { searchMovies } from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import Pagination from "@/components/Pagination";
import { MovieItem } from "@/types/tmdb";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q;
  const currentPage = Number(resolvedParams.page) || 1;

  if (!query) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-white">
          Please enter a search term.
        </h1>
      </main>
    );
  }

  const data = await searchMovies(query, currentPage);
  const results: MovieItem[] = data.results || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen flex flex-col">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Movie Results for "{query}"
        </h1>
      </div>

      {results.length === 0 ? (
        <p className="text-gray-400 text-lg">
          No movies found matching your query.
        </p>
      ) : (
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-8">
            {results.map((movie) => (
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
              basePath="/search"
              searchQuery={query}
            />
          )}
        </div>
      )}
    </main>
  );
}
