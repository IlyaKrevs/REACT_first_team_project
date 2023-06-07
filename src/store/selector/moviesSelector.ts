import { RootState } from "../types";

export const getMovies = (state: RootState) => state.movies.movies;
