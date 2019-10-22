<template>
  <DashboardWrapper>
    <p class="mt-4 grey--text text--darken-1">
      There is no announcement yet
    </p>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import { Announcement } from '~/api/announcement';

interface NuxtWindow {
  onNuxtReady?: Function;
}

@Component({
  components: { DashboardWrapper }
})
export default class DashboardIndex extends Vue {
  announcements: Announcement[] = [];

  head() {
    return {
      title: 'Dashboard'
    };
  }

  mounted() {
    if (window) {
      const nuxtWindow: NuxtWindow = window as NuxtWindow;
      if (nuxtWindow.onNuxtReady !== undefined) {
        nuxtWindow.onNuxtReady(() => {
          this.$arkavidiaApi.announcement.listAnnouncements()
            .then((announcements: Announcement[]) => {
              this.announcements = announcements;
            });
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
