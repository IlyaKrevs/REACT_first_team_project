import { RootState } from "../types/types";

export const getMovie = (state: RootState) => state.movieDetails.movieDetails;
