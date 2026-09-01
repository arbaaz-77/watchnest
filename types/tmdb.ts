export interface Genre {
  id: number;
  name: string;
}
export interface MovieItem {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  release_date: string;
}
export interface MovieDetails extends MovieItem {
  genres: Genre[];
  runtime: number;
  status: string;
  tagline: string;
}
