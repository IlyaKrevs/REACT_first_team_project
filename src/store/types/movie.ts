export interface FilmGenre {
  id: number;
  idFilm: number;
  idGenre: number;
}

export interface Genre {
  id: number;
  nameRU: string;
  nameEN: string;
  createdAt: string;
  updatedAt: string;
  FilmGenre: FilmGenre;
}

export interface Country {
  id: number;
  nameRU: string;
  nameEN: string;
  createdAt: string;
  updatedAt: string;
}

export interface IMovieDetails {
  id: number;
  nameRU: string;
  nameEN: string;
  year: number;
  ageRating: string;
  duration: number;
  imageName: string;
  rating: number;
  countRating: number;
  idCountry: number;
  idFilm: number;
  error: string | null;
  loading: boolean;
  movieDetails: IMovieDetails | null;
  country: Country;
  genres: Genre[];
}


export interface IMovieInfo  {
  id: number,
  text: string,
  trailerLink: string,
  error: string | null,
  loading: boolean,
  movieInfo: IMovieInfo | null;
}

export interface IMovie {
  id: number;
  nameRU: string;
  nameEN: string;
  year: number;
  ageRating: string;
  duration: number;
  imageName: string;
  rating: number;
  countRating: number;
  idCountry: number;
}

export interface IMovies {
  movies: IMovie[];
}