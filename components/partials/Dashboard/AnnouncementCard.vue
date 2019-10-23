<template>
  <v-card elevation="1" class="p-3">
    <v-layout row wrap class="mt-4 ml-4">
      <v-flex md8 xs12>
        <div style="text-align: justify">
          {{ message }}
        </div>
      </v-flex>
      <v-flex md2 xs12 />
      <v-flex md2 xs12>
        <div class="black--text font-weight-bold">
          {{ tgl }}
        </div>
      </v-flex>
    </v-layout>
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
      type: String,
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
