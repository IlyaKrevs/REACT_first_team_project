import { RootState } from "../types/types";

export const getMovie = (state: RootState) => state.movie;

export const getTrailer = (state: RootState) => state.movie.trailerLink;