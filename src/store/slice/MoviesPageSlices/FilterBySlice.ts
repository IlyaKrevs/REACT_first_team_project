import { createSlice } from "@reduxjs/toolkit";

const MoviesFilterBy = createSlice({
    name: 'filtersBy',
    initialState: {
        currentViewScreen: '',
        currentFiltersParams: [],
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
        setCurrentFiltersParams: (state: any, action) => {
            if (state.currentFiltersParams.find((item: string) => item === action.payload.value)) {
                state.currentFiltersParams = state.currentFiltersParams.filter((item: string) => item !== action.payload.value).sort();
            } else {
                state.currentFiltersParams.push(action.payload.value);
                state.currentFiltersParams = state.currentFiltersParams.sort();
            }
        },
        setCurrentSortParams: (state: any, action) => {
            state.currentSortParams = action.payload.value;
        },
    }
});


export const { setCurrentViewScreen, resetCurrentViewScreen, setCurrentFiltersParams, setCurrentSortParams } = MoviesFilterBy.actions;
export default MoviesFilterBy.reducer;