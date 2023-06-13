
import { endpoints } from './endpoints';

export interface UserRegistrationType {
  email: string;
  profileName: string;
  password: string;
}

export const userRegistration = async (querryParams: UserRegistrationType): Promise<Response> => {

  const params = {
    email: querryParams.email.trim(),
    profileName: querryParams.profileName.trim(),
    password: querryParams.password.trim(),
    
  };
  
  const response = await fetch(endpoints.registration, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (response.ok) {
    return response;
  } else {
    throw new Error('Failed to register user');
  }
};

