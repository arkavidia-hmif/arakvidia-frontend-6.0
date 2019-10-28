
<template>
  <v-card elevation="1" class="px-5 py-3 mt-4">
    <div class="grey--text text--darken-1 font-weight-bold">
      <v-icon small>
        far fa-clock
      </v-icon> {{ $moment(dateSent).format('LLLL') }}
    </div>
    <!-- eslint-disable-next-line vue/no-v-html-->
    <div class="mt-3" style="text-align: justify" v-html="$md.render(message)" />
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
  }
});
</script>

<style scoped>
</style>
