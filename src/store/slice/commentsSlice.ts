import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Comment {
  author: string;
  date: string;
  id: string;
  text: string;
}

interface CommentsState {
  comments: Comment[];
}

const savedComments = localStorage.getItem('comments');
const initialStateWithSavedComments: CommentsState = {
  comments: savedComments ? JSON.parse(savedComments) : [],
};

const initialState = initialStateWithSavedComments;

const saveCommentsToLocalStorage = (comments: Comment[]) => {
  localStorage.setItem('comments', JSON.stringify(comments));
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
      saveCommentsToLocalStorage(state.comments);
    },
    deleteComment: (state, action: PayloadAction<string>) => {
      state.comments = state.comments.filter(comment => comment.id !== action.payload);
    },
  },
});

export const {
  reducer: commentsReducer,
} = commentsSlice ;
export const { addComment, deleteComment } = commentsSlice.actions;
