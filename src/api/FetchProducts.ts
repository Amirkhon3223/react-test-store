import axios from 'axios';


const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com'
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


