<template>
  <v-layout column>
    <HomeIntro />
    <HomeOverview />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import HomeIntro from '~/components/home/HomeIntro.vue'
import HomeOverview from '~/components/home/HomeOverview.vue'

export default Vue.extend({
  components: {
    HomeIntro,
    HomeOverview
  }
})
</script>
