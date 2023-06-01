import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../types";
import { getAllMovies } from "../actions/movies";

export interface State {
    movies: IMovie[] | null;
    loading: boolean;
    error: string|null;
}

const initialState: State = {
    movies: [],
    loading: false,
    error: null,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
            }) 
            .addCase(getAllMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error occurred';
            });
    },
});

export const {
    reducer: moviesReducer,
} = moviesSlice;