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
  text: string,
  trailerLink: string,
  idFilm: number,
  error: string | null,
  loading: boolean,
  movieDetails: IMovieDetails | null;
}