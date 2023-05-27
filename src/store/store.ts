import { configureStore } from "@reduxjs/toolkit";

import LanguageSwitchSlice from "./slice/HeaderSlices/LanguageSwitchSlice";

import showDropDownSlice from './slice/HeaderSlices/showDropDownSlice';
import movingListSlice from "./slice/HeaderSlices/movingListSlice";
import MoviesSortBySlice from './slice/MoviesPageSlices/SortBySlice';
import FiltersByGenreSlice from "./slice/MoviesPageSlices/FiltersByGenreSlice";
import { movieReducer } from "./slice/movieSlice";



export const store = configureStore({
    reducer: {
        movie: movieReducer,
        LanguageSwitch: LanguageSwitchSlice,
        HeaderShowDropDown: showDropDownSlice,
        HeaderMovingList: movingListSlice,
        MoviesSortBy: MoviesSortBySlice,
        MoviesFilterByGenre: FiltersByGenreSlice,
    },
});

