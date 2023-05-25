import { createSlice } from "@reduxjs/toolkit";

const MoviesFilterByGenre = createSlice({
    name: 'filtersByGenre',
    initialState: {
        currentHideStatus: true,
        currentFiltersParams: [],
    },
    reducers: {
        toggleShowGenre: (state, action) => {
            state.currentHideStatus = !state.currentHideStatus;
        },
        setCurrentFiltersParams: (state: any, action) => {
            state.currentFiltersParams.push(action.payload.value)
        }
    }
});


export const { toggleShowGenre, setCurrentFiltersParams } = MoviesFilterByGenre.actions;
export default MoviesFilterByGenre.reducer;

