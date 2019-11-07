import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';
import cookie from 'cookie';

export default ({ store, req }) => {
  createPersistedState({
    key: 'arkavcookie',
    storage: {
      // eslint-disable-next-line dot-notation
      getItem: key => process['client'] ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie || '')[key],
      setItem: (key, value) => {
        Cookies.set(key, value, { expires: 365 });
      },
      removeItem: key => Cookies.remove(key)
    }
  })(store);
};
