<template>
  <DashboardWrapper>
    <template v-if="!isLoading">
      <p v-if="!announcements.length" class="mt-4 grey--text text--darken-1">
        There is no announcement yet
      </p>
      <AnnouncementCard v-for="(item, i) in announcements" :key="i" :message="item.message" :date-sent="item.dateSent" />
    </template>
    <template v-else>
      <div align="center" class="pa-5">
        <v-progress-circular indeterminate></v-progress-circular>
      </div>
    </template>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import AnnouncementCard from '~/components/partials/Dashboard/AnnouncementCard.vue';
import { Announcement } from '~/api/announcement/types';

@Component({
  components: { DashboardWrapper, AnnouncementCard }
})
export default class DashboardIndex extends Vue {
  announcements: Announcement[] = [];
  isLoading: boolean = true;

  @Action('announcements/getAnnouncements') actionGetAnnouncements;

  head() {
    return {
      title: 'Announcement'
    };
  }

  mounted() {
    this.isLoading = true;
    this.actionGetAnnouncements()
      .then((val) => {
        this.announcements = val;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
</script>

<style scoped>

</style>
