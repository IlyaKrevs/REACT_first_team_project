import { LocalStorage } from "../config/localStorage";

interface AuthFetchOptions extends RequestInit {
    headers?: HeadersInit;
}

// обработка ответа и добавление перехватчика для обработки ошибок авторизации

export const authFetchInstance = async <T>(
  url: string,
  options?: AuthFetchOptions
): Promise<T> => {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  const headers: Headers = new Headers(options?.headers);

  if (accessToken) {
    const authHeader = `Bearer ${accessToken}`;
    headers.set('Authorization', authHeader);
  }
  
  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const data: T = await response.json();
  return data;
};

const handleResponse = async <T>(
  response: Response,
  url: string,
  options?: AuthFetchOptions
): Promise<T> => {
  if (response.status === 401) {
    throw new Error('Unauthorized');
  }

  throw new Error(`Request failed with status ${response.status}`);
};

const authFetchInstanceWithInterceptors = async <T>(
  url: string,
  options?: AuthFetchOptions
): Promise<T> => {
  try {
    const response = await fetch(url, options);

    if (response.ok) {
      const data: T = await response.json();
      return data;
    }

    return handleResponse<T>(response, url, options);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
