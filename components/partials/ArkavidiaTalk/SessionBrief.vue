<template>
  <div class="section" :style="`background: ${themeColor}`">
    <div class="title font-weight-bold">
      {{ name }}
    </div>
    <div class="subtitle font-weight-bold">
      <v-row style="margin-left: 0; margin-right: 0;">
        <div>
          <i class="fa fa-calendar" aria-hidden="true" />
          {{ time }}
        </div>
        <div style="margin-left: 1rem;">
          <i class="fa fa-map-marker" aria-hidden="true" />
          {{ place }}
        </div>
      </v-row>
    </div>
    <div v-if="!!to">
      <v-btn
        v-if="!!to"
        class="text-none mt-2 white"
        :style="`color: ${themeColor}`"
        elevation="0"
        :to="to"
      >
        Daftar Sekarang
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SessionBrief',
  props: {
    name: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false,
      default: ''
    },
    themeColor: {
      type: String,
      required: false,
      default: '#777'
    }
  }
});
</script>

<style scoped>
  .section {
    color: white;
    padding: 0.8rem;
  }
</style>
