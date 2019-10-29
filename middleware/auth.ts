interface NuxtProcess {
  server?: boolean;
}

export default function({ store, redirect, route }) {
  // eslint-disable-next-line dot-notation
  if (!process['server']) {
    if (route.path.startsWith('/dashboard')) {
      if (!store.getters['user/isLoggedIn']) {
        redirect(`/login?continue=${encodeURIComponent(route.path)}`);
      }
    }
  }
}
