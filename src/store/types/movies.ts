export interface MoviesState {
 all: MovieState[];
}

export interface MovieState {
  nameRU: string;
  nameEN: string;
  year: number;
  ageRating: string;
  duration: number,
  text: string,
  trailerLink: string;
  idCountry: number;
  country: {
    id: number,
    nameRU: string,
    nameEN: string
  },
  arrGenres: {
    id: number;
    nameRU: string;
    nameEN: string;
  };
}