import api from '~/api';
import { ApiError } from '~/api/base';

export interface User {
  email: string;
  fullName: string;
  currentEducation?: string;
  institution?: string;
  phoneNumber?: string;
  dateJoined: number;
  birthDate?: string;
  address?: string;
}

export interface LoginState {
  loggedIn: boolean;
  user?: User;
  bearerToken?: string;
  loggedInAt?: number;
  expiresAt?: number;
};

export enum LoginStatus {
  INVALID_CREDS, ERROR, EMAIL_NOT_CONFIRMED
};

export default {
  namespaced: true,
  state: () => ({
    loggedIn: false,
    user: null,
    bearerToken: null,
    loggedIntAt: null,
    expiresAt: null,
  }),
  getters: {
    isLoggedIn(state: LoginState) {
      if (!!state.expiresAt) {
        return state.loggedIn && Date.now() <= state.expiresAt;
      }

      return false;
    },
    getToken(state: LoginState) {
      return state.bearerToken;
    },
  },
  mutations: {
    setLogin(state: LoginState, { user, bearerToken, expiresAt }) {
      state.loggedIn = true;
      state.user = user;
      state.bearerToken = bearerToken;
      state.loggedInAt = Date.now();
      state.expiresAt = expiresAt;
    },
    setLogout(state: LoginState) {
      state.loggedIn = false;
      state.user = undefined;
      state.bearerToken = undefined;
      state.loggedInAt = undefined;
      state.expiresAt = undefined;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const data = { email, password };
        const response = await api.post(`/auth/login/`, data);
        commit('setLogin', {
          bearerToken: response.data.token,
          expiresAt: response.data.exp * 1000,
          user: response.data.user as User,
        });
      }
      catch (e) {
        if (e.response) {
          const errorCode = e.response.data.code;
          if (errorCode === 'login_failed' || errorCode === 'unknown_error') {
            throw new ApiError<LoginStatus>(LoginStatus.INVALID_CREDS, e.response.data.detail);
          }
          else if (errorCode === 'account_email_not_confirmed') {
            throw new ApiError<LoginStatus>(LoginStatus.EMAIL_NOT_CONFIRMED, e.response.data.detail);
          }
        }

        throw new ApiError<LoginStatus>(LoginStatus.ERROR, e.toString());
      }
    },
  }

}
