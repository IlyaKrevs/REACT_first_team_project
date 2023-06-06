import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types";

export const getMovieMembers = (state: RootState) => state.movieDetailsMember.movieDetailsMembers;
export const getMember = createSelector(
    (state: RootState) => state.movieDetailsMember.movieDetailsMembers,
    (movieDetailsMembers) => {
      if (movieDetailsMembers && movieDetailsMembers.length > 0) {
        const member = Math.floor(Math.random() * movieDetailsMembers.length);
        return movieDetailsMembers[member];
      }
      return null;
    }
  );