import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSignIn } from "../../api/userSignIn";

export const signInAction = createAsyncThunk<Awaited<ReturnType<typeof userSignIn>>>('user/signInAction', () =>
  userSignIn(),
);