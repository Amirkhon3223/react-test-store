import { Method } from "axios";

export interface RequestParams {
  method: Method;
  url: string;
  data?: null;
  params?: Record<string, unknown>;
}

export interface ResponseData<T> {
  data: T | null;
  error: string | null;
}
