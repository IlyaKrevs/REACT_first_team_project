import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import movieReducer from './slice/moviesSlice'; 

export const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
