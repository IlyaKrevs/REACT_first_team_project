import { createSlice } from "@reduxjs/toolkit";
import { IMovieInfo } from "../types/movie";
import { getMovieInfo } from "../actions/movies";

export interface State {
    movieInfo: IMovieInfo|null;
    loading: boolean;
    error: string|null;
}

const initialState: State = {
    movieInfo: null,
    loading: false,
    error: null,
};

const movieInfoSlice = createSlice({
    name: "movieInfo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovieInfo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.movieInfo = action.payload;
            })
            .addCase(getMovieInfo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error occurred';
            });
    },
});

export const {
    reducer: movieInfoReducer,
} = movieInfoSlice;
