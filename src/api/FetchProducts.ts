import axios from 'axios';
import { environment } from "../environments/environment.ts";

const apiClient = axios.create({
  baseURL: environment.API_URL
});

export const fetchProducts = async () => {
  try {
    const response = await apiClient.get('/products');
    return response.data;
  } catch (error) {
    console.error('Ошибка при загрузке продуктов:', error);
    return [];
  }
}