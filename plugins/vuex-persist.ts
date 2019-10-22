import VuexPersistence from 'vuex-persist';

interface NuxtWindow {
  onNuxtReady?: Function;
}

const options = {
  key: 'arkav6-vuex',
  storage: window.localStorage
};

export default ({ store }) => {
  const nuxtWindow = window as NuxtWindow;

  if (nuxtWindow.onNuxtReady) {
    nuxtWindow.onNuxtReady(() => {
      new VuexPersistence(options).plugin(store);
    });
  }
};
