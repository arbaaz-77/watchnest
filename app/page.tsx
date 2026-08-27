import { getTrendingMedia } from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import { MediaItem } from "@/types/tmdb";

export default async function Home() {
  // Fetch data directly on the server
  const data = await getTrendingMedia();
  const trendingItems: MediaItem[] = data.results || [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Trending Today</h1>
        <p className="mt-2 text-gray-400">
          Discover the most popular movies and TV shows right now.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-8">
        {trendingItems.map((item) => (
          <MediaCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </main>
  );
}
