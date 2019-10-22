import { ArkavidiaApi } from '~/api/api';
import { LoginState } from '~/store';

interface NuxtWindow {
  onNuxtReady?: Function;
}

export default ({ store }, inject) => {
  const api = new ArkavidiaApi(process.env.API_BASE_URL || '');
  inject('arkavidiaApi', api);

  const nuxtWindow = window as NuxtWindow;

  if (nuxtWindow.onNuxtReady) {
    nuxtWindow.onNuxtReady(() => {
      const loginState: LoginState = store.state as LoginState;
      api.accessToken = loginState.bearerToken;
    });
  }
};

declare module 'vue/types/vue' {
  interface Vue {
    $arkavidiaApi: ArkavidiaApi
  }
}
