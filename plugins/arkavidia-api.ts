import arkavidiaApi, { ArkavidiaApi } from '~/api/api';

interface NuxtWindow {
  onNuxtReady?: Function;
}

// eslint-disable-next-line no-empty-pattern
export default ({}, inject) => {
  inject('arkavidiaApi', arkavidiaApi);

  const nuxtWindow = window as NuxtWindow;

  if (nuxtWindow.onNuxtReady) {
    nuxtWindow.onNuxtReady(() => {
    //   const loginState: LoginState = store.state as LoginState;
    //   arkavidiaApi.accessToken = loginState.bearerToken;
    });
  }
};

declare module 'vue/types/vue' {
  interface Vue {
    $arkavidiaApi: ArkavidiaApi,
  }
}
