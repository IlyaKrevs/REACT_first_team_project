import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieDetailsMembers } from "../types";

export const getMovieDetailsMembers= createAsyncThunk<MovieDetailsMembers[], number, { rejectValue: string }>(
    'movies/getMovieDetailsMembers',
    async (id: number, {rejectWithValue}) => {
      try {
        const response = await fetch(`http://localhost:12120/api/film-members/${id}`);
        return await response.json();
      } catch (error) {
        return rejectWithValue('Произошла ошибка при загрузке информации о фильме.');
      }
    }
  );
  