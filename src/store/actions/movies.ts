import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMovieDetails } from "../types/movie";

export const getMovieDetails = createAsyncThunk<IMovieDetails, number, { rejectValue: string }>(
  'movies/getMovieDetails',
  async (id: number, {rejectWithValue}) => {
    try {
      const response = await fetch(`http://localhost:12120/api/films/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Произошла ошибка при загрузке информации о фильме.');
    }
  }
);
