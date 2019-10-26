import arkavidiaApi from '~/api/api';
import { User } from '~/api/user/types';

const TOKEN_NAME = 'arkav-token';

if (typeof window !== 'undefined') {
  arkavidiaApi.bearerToken = () => window.localStorage.getItem(TOKEN_NAME);
}

export interface AuthState {
  loggedIn: boolean;
  user?: User;
  bearerToken?: string;
  loggedInAt?: number;
  expiresAt?: number;
}

export const namespaced = true;

export const state = () => ({
  loggedIn: false,
  user: null,
  bearerToken: null,
  loggedIntAt: null,
  expiresAt: null
});

export const getters = {
  isLoggedIn(state: AuthState) {
    if (state.expiresAt) {
      return state.loggedIn && Date.now() <= state.expiresAt;
    }

    return false;
  },
  getToken(state: AuthState) {
    return state.bearerToken;
  }
};

export const mutations = {
  setLogin(state: AuthState, { user, bearerToken, expiresAt }) {
    state.loggedIn = true;
    state.user = user;
    state.bearerToken = bearerToken;
    state.loggedInAt = Date.now();
    state.expiresAt = expiresAt;
  },
  setLogout(state: AuthState) {
    state.loggedIn = false;
    state.user = undefined;
    state.bearerToken = undefined;
    state.loggedInAt = undefined;
    state.expiresAt = undefined;
  }
};

export const actions = {
  async login({ commit }, { email, password }) {
    const response = await arkavidiaApi.user.login(email, password);
    commit('setLogin', response);
    window.localStorage.setItem(TOKEN_NAME, response.bearerToken);
  },
  logout({ commit }) {
    commit('setLogout');
    window.localStorage.removeItem(TOKEN_NAME);
  },
  async register({ email, fullName, password }) {
    await arkavidiaApi.user.register(email, fullName, password);
  },
  async recover({ email }) {
    await arkavidiaApi.user.recover(email);
  }
};
