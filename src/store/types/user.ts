import { SerializedError } from '@reduxjs/toolkit';

type Role = 'User' | 'Admin';

export interface IRole {
  id: string;
  type: Role;
}

export interface IUser {
  id: string | null;
  email: string | null;
  profileName: string | null;
  password: string | null;
  isAuth: boolean;
  loadingState: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: SerializedError | null;
  token: string | null; 
  role: IRole | null;
}
