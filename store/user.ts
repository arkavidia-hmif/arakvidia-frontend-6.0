import arkavidiaApi from '~/api/api';
import { User } from '~/api/user/types';

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
  },
  getUser(state: AuthState) {
    return state.user;
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
  },
  editProfile(state: AuthState, user) {
    state.user = user;
  }
};

export const actions = {
  async login({ commit }, { email, password }) {
    const response = await arkavidiaApi.user.login(email, password);
    commit('setLogin', response);
    window.localStorage.setItem('arkav-token', response.bearerToken);
  },
  async register({ }, { email, fullName, password }) {
    await arkavidiaApi.user.register(email, fullName, password);
  },
  async editProfile({ commit }, user) {
    const response = await arkavidiaApi.user.editProfile(user);
    // console.log(user);
    commit('editProfile', response);
  }
};
