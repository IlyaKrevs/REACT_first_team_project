import { createSlice } from "@reduxjs/toolkit";

const MoviesFilterBy = createSlice({
    name: 'filtersBy',
    initialState: {
        currentViewScreen: '',
        currentGenresParams: [],
        currentSortParams: {
            showText: 'По рейтингу',
            queryParam: 'ratign',
        },
    },
    reducers: {
        setCurrentViewScreen: (state: any, action) => {
            state.currentViewScreen = action.payload.value;
        },
        resetCurrentViewScreen: (state: any, action) => {
            state.currentViewScreen = '';
        },
        setCurrentGenresParams: (state: any, action) => {
            state.currentGenresParams = action.payload.value;
        },
        setCurrentSortParams: (state: any, action) => {
            state.currentSortParams = action.payload.value;
        },
    }
});


export const { setCurrentViewScreen, resetCurrentViewScreen, setCurrentGenresParams, setCurrentSortParams } = MoviesFilterBy.actions;
export default MoviesFilterBy.reducer;