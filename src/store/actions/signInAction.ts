import { createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../../api/getToken";

export const signInAction = createAsyncThunk('user/signInAction', (queryParams: any) =>
  getToken(queryParams),
);