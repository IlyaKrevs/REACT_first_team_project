import { Root } from "react-dom/client";
import { RootState } from "../types/types";

export const getMovie = (state: RootState) => state.movieDetails.movieDetails;
