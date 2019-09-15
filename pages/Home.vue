<template>
  <v-container
    fluid
    fill-height
    justify-space-between
    align-start
    column
    class="pa-0 ma-0"
    style="background: #FFFFFF"
  >
    <v-layout column>
      <Toolbar />
      <HomeIntro />
      <HomeOverview />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Toolbar from '~/components/subpage/Toolbar.vue'
import HomeIntro from '~/components/home/HomeIntro.vue'
import HomeOverview from '~/components/home/HomeOverview.vue'

export default Vue.extend({
  components: {
    Toolbar,
    HomeIntro,
    HomeOverview
  }
})
</script>
