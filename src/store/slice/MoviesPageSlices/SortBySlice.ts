import { createSlice } from "@reduxjs/toolkit";

const MoviesSortBySlice = createSlice({
    name: 'sortBy',
    initialState: {
        currentHideStatus: true,
        currentSortType: '',
    },
    reducers: {
        toggleShowSort: (state, action) => {
            state.currentHideStatus = !state.currentHideStatus;
        },
        setCurrentSortType: (state, action) => {
            state.currentSortType = action.payload.value;
        }
    }
});


export const { toggleShowSort, setCurrentSortType } = MoviesSortBySlice.actions;
export default MoviesSortBySlice.reducer;

