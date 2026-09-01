import Image from "next/image";
import Link from "next/link";
import { MovieItem } from "@/types/tmdb";

export default function MediaCard({ item }: { item: MovieItem }) {
  const title = item.title || "Untitled";
  const year = item.release_date ? item.release_date.substring(0, 4) : "N/A";
  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "/placeholder.png";

  return (
    <Link
      href={`/movie/${item.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-md transition-all hover:scale-105 hover:ring-2 hover:ring-amber-500"
    >
      <div className="relative aspect-2/3 w-full overflow-hidden bg-gray-800">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <h3 className="line-clamp-1 text-sm font-bold text-white group-hover:text-amber-500 transition-colors">
          {title}
        </h3>

        <div className="mt-3 flex items-center justify-between text-xs font-medium text-gray-400">
          <span>{year}</span>
          <span className="flex items-center gap-1">
            ⭐ {item.vote_average?.toFixed(1) || "NR"}
          </span>
        </div>
      </div>
    </Link>
  );
}
