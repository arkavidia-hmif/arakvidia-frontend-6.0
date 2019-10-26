<template>
  <DashboardWrapper>
    <p v-if="!announcements.length" class="mt-4 grey--text text--darken-1">
      There is no announcement yet
    </p>
    <AnnouncementCard v-for="(item, i) in announcements" :key="i" :message="item.message" :date-sent="item.dateSent" />
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import AnnouncementCard from '~/components/partials/Dashboard/AnnouncementCard.vue';
interface NuxtWindow {
  onNuxtReady?: Function;
}

@Component({
  components: { DashboardWrapper, AnnouncementCard }
})
export default class DashboardIndex extends Vue {
  @Action('announcement/announcementlist') announcementAction;
  announcements: any = '';
  head() {
    return {
      title: 'Dashboard'
    };
  }
  mounted() {
    this.announcementAction()
      .then((val) => {
        this.announcements = val;
      });
  }
}
</script>

<style scoped>

</style>
