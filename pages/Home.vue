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
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Toolbar from '~/components/Toolbar.vue'
import HomeIntro from '~/components/HomeIntro.vue'

export default Vue.extend({
  components: {
    Toolbar,
    HomeIntro
  }
})
</script>
