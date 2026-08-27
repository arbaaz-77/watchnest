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
export interface Genre {
  id: number;
  name: string;
}

export interface MediaDetails extends MediaItem {
  genres: Genre[];
  runtime?: number; // Movies use runtime
  episode_run_time?: number[]; // TV shows use episode_run_time
  status: string;
  tagline: string;
}
