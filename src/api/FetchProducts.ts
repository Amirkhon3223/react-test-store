import axios from 'axios';
import { environment } from "../environments/environment.prod.ts";

const apiClient = axios.create({
  baseURL: environment.API_URL
});

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Произошла ошибка при запросе к API:', error.response?.statusText);
      return { error: error.response?.statusText, data: [] };
    } else {
      console.error('Неожиданная ошибка:', error);
      return { error: 'Неожиданная ошибка', data: [] };
    }
  }
}