import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment } from "../types/comments";

export const getComments = createAsyncThunk<Comment[], number, { rejectValue: string }>(
    'movies/getComments',
    async (id: number, { rejectWithValue }) => {
      try {
        const response = await fetch(`http://localhost:12120/api/comments/film/${id}`);
        return await response.json();
      } catch (error) {
        return rejectWithValue('Произошла ошибка при загрузке комментарии к фильму.');
      }
    }
);

export const deleteComment = createAsyncThunk<string, number, { rejectValue: string }>(
  'comments/deleteComment',
  async (commentId: number, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:12120/api/comments/${commentId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        return commentId.toString();
      } else {
        return rejectWithValue('Произошла ошибка при удалении комментария.');
      }
    } catch (error) {
      return rejectWithValue('Произошла ошибка при удалении комментария.');
    }
  }
);

  