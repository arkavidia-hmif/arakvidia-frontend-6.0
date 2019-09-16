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
      <v-flex>
        <!--<Toolbar />-->
        <HackathonIntro></HackathonIntro>
        <HackathonPrize></HackathonPrize>
        <HackathonTimeline></HackathonTimeline>
        <HackathonFAQ></HackathonFAQ>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Toolbar from '~/components/subpage/Toolbar.vue'
import HackathonIntro from '~/components/competition/hackathon/HackathonIntro.vue'
import HackathonPrize from '~/components/competition/hackathon/HackathonPrize.vue'
import HackathonTimeline from '~/components/competition/hackathon/HackathonTimeline.vue'
import HackathonFAQ from '~/components/competition/hackathon/HackathonFAQ.vue'

export default Vue.extend({
  components: {
    Toolbar,
    HackathonIntro,
    HackathonPrize,
    HackathonTimeline,
    HackathonFAQ
  }
})
</script>
