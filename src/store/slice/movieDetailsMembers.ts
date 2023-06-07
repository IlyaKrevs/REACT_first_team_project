import { createSlice } from "@reduxjs/toolkit";
import { MovieDetailsMembers } from "../types";
import { getMovieDetailsMembers } from "../actions/members";

export interface State {
    movieDetailsMembers: MovieDetailsMembers[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: State = {
    movieDetailsMembers: null,
    loading: false,
    error: null,
};

const movieDetailsMembersSlice = createSlice({
    name: "movieDetailsMembers",
    initialState,
    reducers: {
        filterMovieDetailsMembers: (state, action) => {
            const memberIdToFilter = action.payload;
            if (state.movieDetailsMembers) {
                const filteredMembers = state.movieDetailsMembers.filter(
                    (member) => member.id === memberIdToFilter
                );
                if (filteredMembers.length > 0) {
                    state.movieDetailsMembers = filteredMembers;
                } else {
                    state.movieDetailsMembers = null;
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovieDetailsMembers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMovieDetailsMembers.fulfilled, (state, action) => {
                state.loading = false;
                state.movieDetailsMembers = action.payload;
            })
            .addCase(getMovieDetailsMembers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Error occurred";
            });
    },
});

export const {
    reducer: movieDetailsMembersReducer,
} = movieDetailsMembersSlice;

export const { filterMovieDetailsMembers } = movieDetailsMembersSlice.actions;
