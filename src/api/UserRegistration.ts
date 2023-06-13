
import { endpoints } from './endpoints';

export interface UserRegistrationType {
  email: string;
  profileName: string;
  password: string;
}

export const userRegistration = async (queryParams: UserRegistrationType): Promise<Response> => {
  const { email, profileName, password } = queryParams;

  const requestBody = {
    email: email.trim(),
    profileName: profileName.trim(),
    password: password.trim(),
  };

  const response = await fetch(endpoints.registration, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.ok) {
    return response;
  } else {
    throw new Error('Failed to register user');
  }
};
