import axios from 'axios';

export const apiConfig = {
  baseURL: process.env.API_BASE_URL || '',

  // Prevent sending cookies with cross-domain requests
  withCredentials: false,

  // Django sends the XSRF token in a cookie named csrftoken
  // https://docs.djangoproject.com/en/2.1/ref/csrf/#ajax
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
};

const apiClient = axios.create(apiConfig);

export default apiClient;
