export enum EFilter {
  MotionTrendPick,
  Latest,
  Recommended,
}

export interface IGetMoviesRequest {
  page: number;
  limit: number;
  quality: string;
  query?: string;
}

export interface IMovie {
  id: number;
  large_cover_image: string;
  title: string;
  title_long: string;
  description_full: string;
  yt_trailer_code: string;
  rating: number;
  runtime: number;
  language: string;
}

export interface IMovieList {
  limit: number;
  movie_count: number;
  movies: IMovie[];
  page_number: number;
}

export interface IMovieListResponse {
  status: string;
  status_message: string;
  data: IMovieList;
}
