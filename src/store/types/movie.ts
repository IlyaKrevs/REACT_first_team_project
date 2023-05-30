export interface IMovieDetails  {
  id: number,
  nameRU: string;
  nameEN: string;
  year: number;
  ageRating: string;
  duration: number,
  imageName: string,
  rating: number,
  countRating: number,
  idCountry: number,
  idFilm: number,
  error: string | null,
  loading: boolean,
  movieDetails: IMovieDetails | null;
}

export interface IMovieInfo  {
  id: number,
  text: string,
  trailerLink: string,
  error: string | null,
  loading: boolean,
  movieInfo: IMovieInfo | null;
}