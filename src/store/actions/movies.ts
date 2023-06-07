import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMovie, IMovieDetails, IMovieInfo, IMovies } from "../types/movie";

export const getMovieInfo = createAsyncThunk<IMovieInfo, number, { rejectValue: string }>(
  'movies/getMovieInfo',
  async (id: number, {rejectWithValue}) => {
    try {
      const response = await fetch(`http://localhost:12120/api/film-info/film/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue('Произошла ошибка при загрузке информации о фильме.');
    }
  }
);

export const getMovieDetails = createAsyncThunk<IMovieDetails, number, { rejectValue: string }>(
  'movies/getMovieDetails',
  async (id: number, {rejectWithValue}) => {
    try {
      const response = await fetch(`http://localhost:12120/api/films/${id}`);
      return await response.json();
    } catch (error) {
      return rejectWithValue('Произошла ошибка при загрузке информации о фильме.');
    }
  }
);

export const getAllMovies = createAsyncThunk<IMovie[], number, { rejectValue: string }>(
  'movies/getMovies',
  async (id: number, {rejectWithValue}) => {
    try {
      const response = await fetch(`http://localhost:12123/api/films/part/${id}`);
      return await response.json();
    } catch (error) {
      return rejectWithValue('Произошла ошибка при загрузке информации о фильме.');
    }
  }
);



