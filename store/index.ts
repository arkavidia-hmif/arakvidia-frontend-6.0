import { User } from '~/api/user';

export interface LoginState {
  loggedIn: boolean;
  user?: User;
  bearerToken?: string;
  loggedInAt?: number;
  expiresAt?: number;
}

export const state : () => LoginState = () => ({
  loggedIn: false,
  user: undefined,
  bearerToken: undefined,
  loggedInAt: undefined,
  expiresAt: undefined
});

export const mutations = {
  login(state: LoginState, { user, bearerToken, expiresAt }) {
    state.loggedIn = true;
    state.user = user;
    state.bearerToken = bearerToken;
    state.loggedInAt = Date.now();
    state.expiresAt = expiresAt;
  },
  logout(state: LoginState) {
    state.loggedIn = false;
    state.user = undefined;
    state.bearerToken = undefined;
    state.loggedInAt = undefined;
    state.expiresAt = undefined;
  },
  editUser(state:LoginState, { user }) {
    state.user = user;
  }
};

export const getters = {
  isLoggedIn(state: LoginState) {
    if (state.expiresAt) {
      return state.loggedIn && Date.now() <= state.expiresAt;
    }

    return false;
  }
};
