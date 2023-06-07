import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieAllMembers, MovieDetailsMembers } from "../types";

export const getMovieDetailsMembers = createAsyncThunk<MovieDetailsMembers[], number, { rejectValue: string }>(
  'movies/getMovieDetailsMembers',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:12120/api/film-members/${id}`);
      return await response.json();
    } catch (error) {
      return rejectWithValue('Произошла ошибка при загрузке информации о фильме.');
    }
  }
);

export const getAllMembers = createAsyncThunk<MovieAllMembers[], number, { rejectValue: string }>(
  'movies/getAllsMembers',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:12120/api/professions`);
      return await response.json();
    } catch (error) {
      return rejectWithValue('Произошла ошибка при загрузке информации о фильме.');
    }
  }
);