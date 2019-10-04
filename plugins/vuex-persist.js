// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist';

const options = {
  key: 'arkav6-vuex',
  storage: window.localStorage
};

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence(options).plugin(store);
  });
};
