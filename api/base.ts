import { AxiosInstance } from 'axios';

export class ArkavidiaBaseApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }
}

export class ApiError<E> extends Error {
  errCode: E;
  msg: any;

  constructor(errorCode: E, message?: any) {
    super(message);
    this.errCode = errorCode;
    this.msg = message || '';

    Object.setPrototypeOf(this, ApiError.prototype);
  }

  get errorCode(): E {
    return this.errCode;
  }

  get message(): any {
    return this.msg;
  }
}
