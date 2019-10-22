import { ArkavidiaApi } from '~/api/api';
import { LoginState } from '~/store';

export default ({ store }, inject) => {
  const api = new ArkavidiaApi(process.env.API_BASE_URL || '');
  const loginState: LoginState = store.state as LoginState;

  api.accessToken = loginState.bearerToken;

  inject('arkavidiaApi', api);
};

declare module 'vue/types/vue' {
  interface Vue {
    $arkavidiaApi: ArkavidiaApi
  }
}
