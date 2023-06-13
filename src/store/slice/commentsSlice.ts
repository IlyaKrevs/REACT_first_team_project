import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../types/comments";
import { getComments } from "../actions/comments";

interface CommentsState {
  comments: Comment[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: null,
  loading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComments.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
    builder.addCase(getComments.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error occurred";
    });
  },
});

export const {
  reducer: commentsReducer,
} = commentsSlice;

export const commentsActions = {
  getComments,
};
