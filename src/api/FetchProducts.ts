import { sendRequest } from './ApiClient';
import { Products } from "../models/interfaces";
import { ResponseData } from "../models/ApiInterfaces";

/**
 * Выполняет асинхронный запрос к серверу для получения списка продуктов.
 * @returns {Promise<ResponseData<Products[]>>} Промис, возвращающий данные о продуктах или ошибку.
 */
export const fetchProducts = async (): Promise<ResponseData<Products[]>> => {
  return sendRequest<Products[]>({
    method: 'GET',
    url: '/products'
  });
}