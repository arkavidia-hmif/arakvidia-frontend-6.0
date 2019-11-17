import arkavidiaApi from '~/api/api';

export default ({ store }) => {
  if (typeof window !== 'undefined') {
    arkavidiaApi.bearerToken = () => store.getters['user/getToken'];
  }
};
