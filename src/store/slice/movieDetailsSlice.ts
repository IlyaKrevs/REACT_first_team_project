import { createSlice } from "@reduxjs/toolkit";
import { IMovieDetails } from "../types/movie";
import { getMovieDetails } from "../actions/movies";

const initialState: IMovieDetails = {
  id: 0,
  nameRU: '',
  nameEN: '',
  year: 0,
  ageRating: '',
  duration: 0,
  imageName: '',
  rating: 0,
  countRating: 0,
  idCountry: 0,
  idFilm: 0,
  loading: false,
  error: null,
  movieDetails: null, 
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.movieDetails = action.payload;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error occurred';
      });
  },
});

export const {
  reducer: movieDetailsReducer,
} = movieDetailsSlice
 


