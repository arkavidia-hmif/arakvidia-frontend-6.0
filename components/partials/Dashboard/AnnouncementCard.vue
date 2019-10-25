
<template>
  <v-card elevation="1" class="px-5 py-3 mt-4">
    <div class="black--text font-weight-bold">
      {{ tgl }}
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
  data() {
    return {
      tgl: ''
    };
  },
  created() {
    const d = new Date(this.dateSent);
    this.tgl = d.toISOString().split('T')[0];
  }
});
</script>

<style scoped>
</style>
