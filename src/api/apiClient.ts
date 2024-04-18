import axios, { AxiosError } from 'axios';
import { environment } from "../environments/environment.prod.ts";
import { RequestParams, ResponseData } from "../models/ApiInterfaces.ts";

/**
 * @fileoverview
 * Этот модуль предоставляет централизованную утилиту для выполнения HTTP-запросов с помощью axios.
 * Он включает в себя создание экземпляра axios с базовым URL из переменных окружения, обработку ошибок и отправку запросов.
 * Использование этого модуля позволяет унифицировать обработку всех HTTP-запросов и ошибок в приложении.
 *
 * @module apiClient Экспортируемый модуль для взаимодействия с API сервера.
 */

/**
 * Создаёт экземпляр axios с базовым URL, взятым из переменных окружения.
 */
const apiClient = axios.create({
  baseURL: environment.API_URL
});


/**
 * Обрабатывает ошибки HTTP-запросов.
 * @param {AxiosError} error Объект ошибки, полученный от axios.
 * @returns {string} Возвращает текст ошибки.
 */
function handleError(error: AxiosError): string {
  if (axios.isAxiosError(error)) {
    return error.response?.statusText || 'Ошибка при запросе к API';
  }
  return 'Неизвестная ошибка';
}

/**
 * Настраивает перехватчики для ответов, чтобы обрабатывать ошибки.
 */
apiClient.interceptors.response.use(
  response => response,
  error => Promise.reject(new Error(handleError(error)))
);

/**
 * Отправляет HTTP-запрос и обрабатывает ответ.
 * @param {RequestParams} params Параметры запроса.
 * @template T Тип данных, который ожидается в ответе.
 * @returns {Promise<ResponseData<T>>} Промис с ответом сервера.
 * @example
 * // Пример использования функции для отправки GET-запроса.
 * FunctionName = async (): Promise<ResponseData<Type>> => {
 *   console.log({ method: 'METHOD', url: '/endpoint' });
 *   return sendRequest<TYPE>({ method: 'METHOD', url: '/endpoint' });
 * }
 */
export async function sendRequest<T>(params: RequestParams): Promise<ResponseData<T>> {
  try {
    const { data } = await apiClient.request<T>(params);
    return { data, error: null };
  } catch (error) {
    return { data: null, error: handleError(error as AxiosError) };
  }
}
