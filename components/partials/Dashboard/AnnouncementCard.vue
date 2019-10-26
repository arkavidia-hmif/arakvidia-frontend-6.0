<template>
  <v-card elevation="1" class="px-5 py-3 mt-4">
    <div class="black--text font-weight-bold">
      {{ $moment(dateSent).fromNow() }}
    </div>
    <div style="text-align: justify">
      {{ message }}
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AnnouncementCard',
  props: {
    message: {
      type: String,
      required: true
    },
    dateSent: {
      type: Number,
      required: true
    }
  },
  computed: {
    date() {
      if (Date.now() - this.dateSent > 12 * 60 * 60 * 1000) {
        return this.$moment(this.dateSent);
      }
      else {
        return this.$moment(this.dateSent).fromNow();
      }
    }
  }
});
</script>

<style scoped>

</style>
