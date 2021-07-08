import { Genre } from "./genre.model";

export interface TV {
  backdrop_path: string;
  created_by: string;
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: string[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}