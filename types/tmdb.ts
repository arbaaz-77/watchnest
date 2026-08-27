export interface MediaItem {
  id: number;
  title?: string; // Movies use 'title'
  name?: string; // TV shows use 'name'
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  media_type: "movie" | "tv";
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
}
