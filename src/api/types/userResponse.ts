type Role = 'User' | 'Admin';

interface IRole {
  id: string;
  role: Role;
  description: string;
}

export interface IUserResponse {
  id: string;
  email: string;
  password: string;
  idRole: string | null;
  role: IRole | null;
}
