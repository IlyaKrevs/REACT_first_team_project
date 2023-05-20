import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import movieReducer from './slice/moviesSlice';
import hoverReducer from './slice/hoverSlice';

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        hover: hoverReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
