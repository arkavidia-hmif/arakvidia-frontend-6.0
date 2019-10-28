interface NuxtProcess {
  server?: boolean;
}

export default function({ store, redirect, route }) {
  if (process) {
    const nuxtProcess: NuxtProcess = process as NuxtProcess;
    if (!nuxtProcess.server) {
      if (route.path.startsWith('/dashboard')) {
        if (!store.state.user.loggedIn) {
          redirect(`/login?continue=${encodeURIComponent(route.path)}`);
        }
      }
    }
  }
}
