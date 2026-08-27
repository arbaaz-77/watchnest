import Image from "next/image";
import { getMediaDetails } from "@/lib/tmdb";
import { MediaDetails } from "@/types/tmdb";
import { notFound } from "next/navigation";

export default async function MediaDetailsPage({
  params,
}: {
  params: Promise<{ media_type: string; id: string }>;
}) {
  const resolvedParams = await params;
  const { media_type, id } = resolvedParams;

  // Validate that the media type is either 'movie' or 'tv'
  if (media_type !== "movie" && media_type !== "tv") {
    notFound(); // Triggers the Next.js 404 page
  }

  let media: MediaDetails;
  try {
    media = await getMediaDetails(media_type, id);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const title = media.title || media.name || "Untitled";
  const backdropUrl = media.backdrop_path
    ? `https://image.tmdb.org/t/p/original${media.backdrop_path}`
    : "/placeholder-backdrop.jpg";
  const posterUrl = media.poster_path
    ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
    : "/placeholder.png";

  const runtime = media.runtime || media.episode_run_time?.[0] || 0;
  const year = (media.release_date || media.first_air_date || "").substring(
    0,
    4,
  );

  return (
    <main className="relative min-h-screen bg-gray-950 text-white">
      {/* Hero Backdrop Overlay */}
      <div className="absolute inset-0 h-[60vh] w-full z-0">
        <Image
          src={backdropUrl}
          alt={title}
          fill
          className="object-cover opacity-30 mask-image-gradient"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mt-12 md:mt-24">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Poster Image */}
          <div className="w-64 shrink-0 mx-auto md:mx-0 overflow-hidden rounded-xl shadow-2xl border border-gray-800">
            <Image
              src={posterUrl}
              alt={`${title} Poster`}
              width={256}
              height={384}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
              {title} <span className="font-light text-gray-400">({year})</span>
            </h1>

            {media.tagline && (
              <p className="text-xl text-amber-500 font-medium italic mb-6">
                "{media.tagline}"
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-300 mb-6">
              <span className="flex items-center gap-1 bg-gray-900 px-3 py-1 rounded-full border border-gray-700">
                ⭐ {media.vote_average?.toFixed(1) || "NR"}
              </span>
              {runtime > 0 && (
                <span className="bg-gray-900 px-3 py-1 rounded-full border border-gray-700">
                  ⏱ {runtime} min
                </span>
              )}
              <span className="uppercase bg-gray-900 px-3 py-1 rounded-full border border-gray-700">
                {media.status}
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-gray-400 leading-relaxed max-w-3xl">
                {media.overview || "No overview available for this title."}
              </p>
            </div>

            {/* Genres */}
            {media.genres && media.genres.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Genres
                </h3>
                <div className="flex flex-wrap gap-2">
                  {media.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
