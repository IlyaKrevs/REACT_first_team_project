import { RootState } from '../types';

export const selectComments = (state: RootState) => state.comments.comments;
