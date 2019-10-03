<template>
  <v-layout column style="background: white;">
    <v-flex>
      <HackathonIntro />
      <HackathonPrize />
      <HackathonTimeline />
      <!-- <CompetitionFAQ :items="faqItems" /> -->
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import HackathonIntro from '~/components/competition/hackathon/HackathonIntro.vue'
import HackathonPrize from '~/components/competition/hackathon/HackathonPrize.vue'
import HackathonTimeline from '~/components/competition/hackathon/HackathonTimeline.vue'
// import CompetitionFAQ from '~/components/competition/CompetitionFAQ.vue'

export default Vue.extend({
  components: {
    HackathonIntro,
    HackathonPrize,
    HackathonTimeline
    // CompetitionFAQ
  },
  data() {
    return {
      faqItems: [
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elita?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elite?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing eliti?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    }
  }
})
</script>
