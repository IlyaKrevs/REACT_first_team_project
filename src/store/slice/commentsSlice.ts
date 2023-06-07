import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Comment {
  author: string;
  date: string;
  id: number;
  text: string;
}

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;

export const {
    reducer: commentsSliceReducer,
} = commentsSlice;