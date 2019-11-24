import axios from 'axios';
import { ArkavidiaAnnouncementApi } from './announcement';
import { ArkavidiaCompetitionApi } from './competition';
import { ArkavidiaUserApi } from './user';
import { ArkavidiaUploaderApi } from './uploader';
import { ArkavidiaPreEventApi } from '~/api/preevent';
import { ArkavidiaEventApi } from '~/api/event';

const apiClient = axios.create({
  // Prevent sending cookies with cross-domain requests
  withCredentials: false,

  // Django sends the XSRF token in a cookie named csrftoken
  // https://docs.djangoproject.com/en/2.1/ref/csrf/#ajax
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken'
});

export class ArkavidiaApi {
  constructor(baseUrl: string) {
    apiClient.defaults.baseURL = baseUrl;
  }

  set bearerToken(bearerToken: string|Function) {
    apiClient.interceptors.request.use((config) => {
      const bearerTokenString = (bearerToken instanceof Function) ? bearerToken() : bearerToken;

      if (bearerTokenString) {
        config.headers.common.Authorization = `Bearer ${bearerTokenString}`;
      }
      return config;
    });
  }

  user: ArkavidiaUserApi = new ArkavidiaUserApi(apiClient);
  announcement: ArkavidiaAnnouncementApi = new ArkavidiaAnnouncementApi(apiClient);
  competition: ArkavidiaCompetitionApi = new ArkavidiaCompetitionApi(apiClient);
  preEvent: ArkavidiaPreEventApi = new ArkavidiaPreEventApi(apiClient);
  event: ArkavidiaEventApi = new ArkavidiaEventApi(apiClient);
  uploader: ArkavidiaUploaderApi = new ArkavidiaUploaderApi(apiClient);
}

const arkavidiaApi = new ArkavidiaApi(process.env.API_BASE_URL || '');

export default arkavidiaApi;
