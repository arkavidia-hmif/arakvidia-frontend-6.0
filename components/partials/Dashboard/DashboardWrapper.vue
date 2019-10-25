<template>
  <div>
    <v-container v-if="loggedIn" class="mt-12">
      <div class="headline font-weight-bold mt-12" style="color: black">
        Dashboard
      </div>
      <div class="display-1 font-weight-bold mt-2 mb-5" style="color: #0B909A">
        Halo, {{ user.fullName }}!
      </div>
      <v-tabs slider-color="#E44D4B" slider-size="5">
        <v-tab v-for="(item, i) in dashboardMenus" :key="i" :to="item.route" :disabled="item.disabled || false" class="font-weight-bold black--text sub-title-1 text-none">
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-divider />
      <div>
        <slot />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, State, Getter } from 'nuxt-property-decorator';
import { dashboardMenus, Menu } from '~/constants/menus';
import { User } from '~/api/user';
import Forbidden from '~/components/Forbidden.vue';

interface NuxtWindow {
  onNuxtReady?: Function;
}

@Component({
  name: 'DashboardWrapper',
  components: { Forbidden }
})
export default class DashboardWrapper extends Vue {
  @Getter('user/isLoggedIn') loggedIn!: boolean;
  @State user!: User;
  dashboardMenus: Menu[] = dashboardMenus;

  mounted() {
    if (window) {
      const nuxtWindow: NuxtWindow = window as NuxtWindow;
      if (nuxtWindow.onNuxtReady !== undefined) {
        nuxtWindow.onNuxtReady(() => {
          if (!this.loggedIn) {
            this.$router.replace(`/login?continue=${encodeURIComponent(this.$route.fullPath)}`);
          }
        });
      }
    }
  }
}
</script>

<style scoped>
</style>
