import { Movie } from "./movie.model";
import { TV } from "./tv.model";

export interface ListResult {
  page: number;
  results: Movie[] | TV[];
  total_results: number;
  total_pages: number;
}