import { createSlice } from "@reduxjs/toolkit";
import { MoviesState } from "store/types/movies";

const initialState: MoviesState = {
    all: [],
}

const moviesSlice = createSlice({
    name: "movies",
    initialState: initialState,
    reducers: {
        setAllMovies: (state, action) => {
            state.all = action.payload;
        },
    } 
});

export const { setAllMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
