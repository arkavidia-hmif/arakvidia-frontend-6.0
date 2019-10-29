import arkavidiaApi from '~/api/api';
import { User } from '~/api/user/types';

const TOKEN_NAME = 'arkav-token';
const TOKEN_EXPIRY_NAME = 'arkav-token-exp';

if (typeof window !== 'undefined') {
  arkavidiaApi.bearerToken = () => window.localStorage.getItem(TOKEN_NAME);
}

export interface AuthState {
  loggedIn: boolean;
  user?: User;
  loggedInAt?: number;
}

export const namespaced = true;

export const state = () => ({
  loggedIn: false,
  user: null,
  loggedIntAt: null
});

export const getters = {
  isLoggedIn() {
    // eslint-disable-next-line dot-notation
    if (!process['server']) {
      const expiresAt: number = parseInt(window.localStorage.getItem(TOKEN_EXPIRY_NAME) || '0');
      if (expiresAt) {
        return Date.now() <= expiresAt;
      }
    }
    return false;
  },
  getToken() {
    // eslint-disable-next-line dot-notation
    if (!process['server']) {
      return window.localStorage.getItem(TOKEN_NAME);
    }

    return undefined;
  }
};

export const mutations = {
  setLogin(state: AuthState, { user }) {
    state.loggedIn = true;
    state.user = user;
    state.loggedInAt = Date.now();
  },
  setLogout(state: AuthState) {
    state.loggedIn = false;
    state.user = undefined;
    state.loggedInAt = undefined;
  },
  setUser(state: AuthState, { user }) {
    state.user = user;
  }
};

export const actions = {
  async login({ commit }, { email, password }) {
    const response = await arkavidiaApi.user.login(email, password);
    commit('setLogin', response);
    window.localStorage.setItem(TOKEN_NAME, response.bearerToken);
    window.localStorage.setItem(TOKEN_EXPIRY_NAME, response.expiresAt.toString());
  },
  logout({ commit }) {
    commit('setLogout');
    window.localStorage.removeItem(TOKEN_NAME);
    window.localStorage.removeItem(TOKEN_EXPIRY_NAME);
  },

  // eslint-disable-next-line no-empty-pattern
  async register({ }, { email, fullName, password }) {
    await arkavidiaApi.user.register(email, fullName, password);
  },

  // eslint-disable-next-line no-empty-pattern
  async recover({ }, { email }) {
    await arkavidiaApi.user.recover(email);
  },

  // eslint-disable-next-line no-empty-pattern
  async confirmEmailAddress({ }, { token }) {
    await arkavidiaApi.user.confirmEmailAddress(token);
  },

  // eslint-disable-next-line no-empty-pattern
  async resetPassword({ }, { token, newPassword }) {
    await arkavidiaApi.user.resetPassword(token, newPassword);
  },

  async fetchUserData({ commit }) {
    const user = await arkavidiaApi.user.getUserDetails();
    commit('setUser', { user });
  },
  async editUser({ commit }, { user }) {
    const userData = await arkavidiaApi.user.editUser(user);
    commit('setUser', { user: userData });
  }
};
