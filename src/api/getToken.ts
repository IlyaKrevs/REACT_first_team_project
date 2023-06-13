import { LocalStorage } from '../config/localStorage';
import { endpoints } from './endpoints';

interface QuerryParamsType {
  email: string;
  password: string;
}

// функция выполняет запрос на аутентификацию, извлекает токен из ответа и сохраняет его для дальнейшего использования

export const getToken = async (queryParams: QuerryParamsType): Promise<string> => {
  const { email, password } = queryParams;

  const params = {
    email: email.trim(),
    password: password.trim(),
  };

  const response = await fetch(endpoints.signIn, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (response.ok) {
    const data = await response.json();
    const token = data.value;
    localStorage.setItem(LocalStorage.AccessToken, token);
    return token;
  } else {
    throw new Error('Failed to get token');
  }
};
