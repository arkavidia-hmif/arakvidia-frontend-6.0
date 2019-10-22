import axios from 'axios';
import { ArkavidiaUserApi } from '~/api/user';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.withCredentials = true;

export default axios;

export class ArkavidiaApi {
  token: string = '';

  constructor(baseUrl: string) {
    axios.defaults.baseURL = baseUrl;
  }

  set accessToken(token) {
    this.token = token;
  }

  user: ArkavidiaUserApi = new ArkavidiaUserApi(axios);
}
