import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../types/user';
import { LocalStorage } from '../../config/localStorage';
import { signInAction } from '../actions/signInAction';

const initialState: IUser = {
  id: null,
  email: null,
  password: null,
  role: null,
  isAuth: false,
  loadingState: 'idle',
  error: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.email = null;
      state.role = null;
      state.isAuth = false;
      localStorage.removeItem(LocalStorage.AccessToken);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.email = null;
        state.id = null;
        state.role = null;
        state.isAuth = false;
        state.error = null;
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        const { email, id, role } = action.payload;
        state.email = email;
        state.id = id;
        if (role) {
          state.role = {
            id: role.id,
            type: role.role,
          };
        }
        state.isAuth = true;
        state.error = null;
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
  },
});

export const {
  reducer: userReducer,
  actions: { logout },
} = userSlice;
