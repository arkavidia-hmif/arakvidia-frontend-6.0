<template>
  <v-layout column style="background: white;">
    <v-flex>
      <CaptureTheFlagIntro />
      <CaptureTheFlagPrize />
      <CaptureTheFlagTimeline />
      <!-- <CompetitionFAQ :items="faqItems" /> -->
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import CaptureTheFlagIntro from '~/components/competition/ctf/Intro.vue';
import CaptureTheFlagPrize from '~/components/competition/ctf/Prize.vue';
import CaptureTheFlagTimeline from '~/components/competition/ctf/Timeline.vue';
// import CompetitionFAQ from '~/components/competition/CompetitionFAQ.vue'

export default Vue.extend({
  components: {
    CaptureTheFlagIntro,
    CaptureTheFlagPrize,
    CaptureTheFlagTimeline
    // CompetitionFAQ
  },
  data() {
    return {
      faqItems: [
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },

        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    };
  },
  head() {
    return {
      title: 'Capture the Flag'
    };
  }
} as ComponentOptions<Vue>);
</script>
