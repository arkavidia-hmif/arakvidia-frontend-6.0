import { AxiosInstance } from 'axios';

export class ArkavidiaBaseApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
}

export class ApiError<E> extends Error {
  errCode: E;
  msg: string;

  constructor(errorCode: E, message?: string) {
    super(message);
    this.errCode = errorCode;
    this.msg = message || '';

    Object.setPrototypeOf(this, ApiError.prototype);
  }

  get errorCode(): E {
    return this.errCode;
  }

  get message(): string {
    return this.msg;
  }
}
