<template>
  <v-layout column style="background: white;">
    <HomeIntro />
    <HomeOverview />
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import HomeIntro from '~/components/home/HomeIntro.vue';
import HomeOverview from '~/components/home/HomeOverview.vue';

export default Vue.extend({
  components: {
    HomeIntro,
    HomeOverview
  },
  head() {
    return {
      title: 'Beranda'
    };
  }
} as ComponentOptions<Vue>);
</script>
