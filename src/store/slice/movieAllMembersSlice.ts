import { createSlice } from "@reduxjs/toolkit";
import { MovieAllMembers } from "../types";
import { getAllMembers } from "../actions/members";

export interface State {
    movieAllMembers: MovieAllMembers[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    movieAllMembers: null,
    loading: false,
    error: null,
};

const movieAllMembersSlice = createSlice({
    name: "movieAllMembers",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllMembers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllMembers.fulfilled, (state, action) => {
                state.loading = false;
                state.movieAllMembers = action.payload;
            })
            .addCase(getAllMembers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error occurred";
            });
    },
});

export const {
    reducer: movieAllMembersReducer,
} = movieAllMembersSlice;
