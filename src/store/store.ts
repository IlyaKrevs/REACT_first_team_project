import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import movieReducer from './slice/moviesSlice';
import showDropDownSlice from './slice/HeaderSlices/showDropDownSlice';
import movingListSlice from "./slice/HeaderSlices/movingListSlice";

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        showDropDown: showDropDownSlice,
        movingList: movingListSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
