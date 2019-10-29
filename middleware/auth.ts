export default function({ store, redirect, route }) {
  // eslint-disable-next-line dot-notation
  if (!process['server']) {
    if (route.path.startsWith('/dashboard')) {
      const exp = parseInt(window.localStorage.getItem("arkav-token-exp") || '0');
      console.log('Exp', exp);
      if (Date.now() > exp) {
        redirect(`/login?continue=${encodeURIComponent(route.path)}`);
      }
    }
  }
}
