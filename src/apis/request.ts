import { apiClient } from './axios';

interface RequestOptions {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  params?: unknown;
  data?: unknown;
}

export async function request<T>({
  url,
  method = 'GET',
  params,
  data,
}: RequestOptions): Promise<T> {
  const response = await apiClient.request<T>({
    url,
    method,
    params,
    data,
  });

  return response.data;
}
