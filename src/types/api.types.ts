export interface IRequestOptions {
  baseURL?: string;
  url: string;
  method: "get" | "post" | "put" | "delete";
  data?: object;
  headers?: Record<string, string>;
}

export interface IResponse<T extends object | null> {
  status: number;
  headers: Record<string, string>;
  body: T;
}

export interface IResponseFields {
  IsSuccess: boolean;
  ErrorMessage: string | null;
}