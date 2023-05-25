import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import LanguageSwitchSlice from "./slice/HeaderSlices/LanguageSwitchSlice";

import movieReducer from './slice/moviesSlice';
import showDropDownSlice from './slice/HeaderSlices/showDropDownSlice';
import movingListSlice from "./slice/HeaderSlices/movingListSlice";
import MoviesSortBySlice from './slice/MoviesPageSlices/SortBySlice';
import FiltersByGenreSlice from "./slice/MoviesPageSlices/FiltersByGenreSlice";



export const store = configureStore({
    reducer: {
        movies: movieReducer,
        LanguageSwitch: LanguageSwitchSlice,
        HeaderShowDropDown: showDropDownSlice,
        HeaderMovingList: movingListSlice,
        MoviesSortBy: MoviesSortBySlice,
        MoviesFilterByGenre: FiltersByGenreSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
