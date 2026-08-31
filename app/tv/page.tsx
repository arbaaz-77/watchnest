import { getMediaByType } from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import { MediaItem } from "@/types/tmdb";

export default async function TvShowsPage() {
  const data = await getMediaByType("tv");

  const tvShows: MediaItem[] =
    data.results?.map((item: MediaItem) => ({
      ...item,
      media_type: "tv",
    })) || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Popular TV Shows</h1>
        <p className="mt-2 text-gray-400">
          Binge-worthy series trending right now.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-8">
        {tvShows.map((show) => (
          <MediaCard
            key={show.id}
            item={show}
          />
        ))}
      </div>
    </main>
  );
}
