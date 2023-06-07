import { RootState } from "../types/types";

export const getMovieInfo = (state: RootState) => state.movieInfo.movieInfo;
export const getTrailer = (state: RootState) => state.movieInfo.movieInfo?.trailerLink;
export const getText = (state: RootState) => state.movieInfo.movieInfo?.text;
