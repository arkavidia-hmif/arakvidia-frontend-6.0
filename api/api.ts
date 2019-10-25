import axios from 'axios';
import { ArkavidiaAnnouncementApi } from './announcement';
import { ArkavidiaCompetitionApi } from './competition';
import { ArkavidiaUserApi } from './user';

const apiClient = axios.create({
  // Prevent sending cookies with cross-domain requests
  withCredentials: false,

  // Django sends the XSRF token in a cookie named csrftoken
  // https://docs.djangoproject.com/en/2.1/ref/csrf/#ajax
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
});

apiClient.interceptors.request.use((config) => {
  const bearerToken = window.localStorage.getItem('arkav-token');
  if (!!bearerToken) {
    config.headers.common['Authorization'] = `Bearer ${bearerToken}`;
  }
  return config;
});

export class ArkavidiaApi {
  constructor(baseUrl: string) {
    apiClient.defaults.baseURL = baseUrl;
  }

  user: ArkavidiaUserApi = new ArkavidiaUserApi(apiClient);
  announcement: ArkavidiaAnnouncementApi = new ArkavidiaAnnouncementApi(apiClient);
  competition: ArkavidiaCompetitionApi = new ArkavidiaCompetitionApi(apiClient);
}

const arkavidiaApi = new ArkavidiaApi(process.env.API_BASE_URL || '');

export default arkavidiaApi;
