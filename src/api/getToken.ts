import { LocalStorage } from '../config/localStorage';
import { endpoints } from './endpoints';

interface QuerryParamsType {
  email: string;
  password: string;
}

// функция выполняет запрос на аутентификацию, извлекает токен из ответа и сохраняет его для дальнейшего использования

export const getToken = async (querryParams: QuerryParamsType): Promise<string> => {

  const params = {
    email: querryParams.email.trim(),
    password: querryParams.password.trim(),
  };

  const response = await fetch(endpoints.signIn, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (response) {
    const data = await response.json();
    const token = data.token;
    localStorage.setItem(LocalStorage.AccessToken, token);
    return data;
  } else {
    throw new Error('Failed to get token');
  }
};
