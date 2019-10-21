import axios from 'axios';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.API_BASE_URL;

export default axios;

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
