import axios from 'axios';
import { ArkavidiaUserApi } from '~/api/user';
import { ArkavidiaAnnouncementApi } from '~/api/announcement';
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
    if (token) {
      this.token = token;
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
  }

  user: ArkavidiaUserApi = new ArkavidiaUserApi(axios);
  announcement: ArkavidiaAnnouncementApi = new ArkavidiaAnnouncementApi(axios);
}
