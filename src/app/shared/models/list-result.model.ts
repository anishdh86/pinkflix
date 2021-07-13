import { Movie } from "./movie.model";
import { TV } from "./tv.model";

export interface ListResult<T> {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
}