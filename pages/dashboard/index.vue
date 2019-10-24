<template>
  <DashboardWrapper>
    <p v-if="!announcements.length" class="mt-4 grey--text text--darken-1">
      There is no announcement yet
    </p>
    <AnnouncementCard v-for="(item, i) in announcements" :message="item.message" :date-sent="item.dateSent" />
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import AnnouncementCard from '~/components/partials/Dashboard/AnnouncementCard.vue';
import { Announcement, ArkavidiaAnnouncementApi } from '~/api/announcement.ts';
@Component({
  components: { DashboardWrapper, AnnouncementCard }
})
export default class DashboardIndex extends Vue {
  data() {
    return {
      // announcements: ''
      announcements: [
        {
          message: 'Jangan lupa melakukan pembayaran CTF',
          dateSent: '2019-10-10'
        }
      ]
    };
  }
  head() {
    return {
      title: 'Dashboard'
    };
  }
  // data dari server masih kosong
  mounted() {
    // if (window) {
    //   const nuxtWindow: NuxtWindow = window as NuxtWindow;
    //   if (nuxtWindow.onNuxtReady !== undefined) {
    //     nuxtWindow.onNuxtReady(() => {
    //       this.$arkavidiaApi.announcement.listAnnouncements()
    //         .then((val) => {
    //           this.announcements = val;
    //           // console.log('val');
    //         })
    //         .catch((e) =>{
    //           console.log(e);
    //         });
    //     });
    //   }
    // }
  }
}
</script>

<style scoped>

</style>
