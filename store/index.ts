import { User } from '~/api/user';

export interface LoginState {
  loggedIn: boolean;
  user?: User;
  bearerToken?: String;
  loggedInAt?: number;
}

export const state : () => LoginState = () => ({
  loggedIn: false,
  user: undefined,
  bearerToken: undefined,
  loggedInAt: undefined
});

export const mutations = {
  login(state: LoginState, { user, bearerToken }) {
    state.loggedIn = true;
    state.user = user;
    state.bearerToken = bearerToken;
    state.loggedInAt = Date.now();
  },
  logout(state: LoginState) {
    state.loggedIn = false;
    state.user = undefined;
    state.bearerToken = undefined;
    state.loggedInAt = undefined;
  }
};
