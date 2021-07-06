import { Movie } from "./movie.model";

export interface ListResult {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}