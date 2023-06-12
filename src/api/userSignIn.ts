import { LocalStorage } from "../config/localStorage";
import { endpoints } from "./endpoints";
import { IUserResponse } from "./types/userResponse";

const apiPath = endpoints.signIn;

export const userSignIn = async (): Promise<IUserResponse> => {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  
  if (accessToken) {
    const response = await fetch(apiPath, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
    if (response.ok) {
      const data: IUserResponse = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch user information');
    }
  } else {
    throw new Error('Access token not found');
  }
};
