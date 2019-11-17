export default function({ redirect, route, store }) {
  if (route.path.startsWith('/dashboard')) {
    const isLoggedIn = store.getters['user/isLoggedIn'];
    if (!isLoggedIn) {
      redirect(`/login?continue=${encodeURIComponent(route.path)}`);
    }
  }
}
