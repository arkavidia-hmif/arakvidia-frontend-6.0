<template>
  <v-container
    fluid
    align-start
    column
    class="pa-0 ma-0"
    style="background: #FFFFFF"
  >
    <v-layout column>
      <v-flex>
        <CompetitiveProgrammingIntro />
        <CompetitiveProgrammingPrize />
        <CompetitiveProgrammingTimeline />
        <CompetitionFAQ :items="faqItems" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import CompetitiveProgrammingIntro from '~/components/competition/competitiveProgramming/CompetitiveProgrammingIntro.vue'
import CompetitiveProgrammingPrize from '~/components/competition/competitiveProgramming/CompetitiveProgrammingPrize.vue'
import CompetitiveProgrammingTimeline from '~/components/competition/competitiveProgramming/CompetitiveProgrammingTimeline.vue'
import CompetitionFAQ from '~/components/competition/CompetitionFAQ.vue'

export default Vue.extend({
  components: {
    CompetitiveProgrammingIntro,
    CompetitiveProgrammingPrize,
    CompetitiveProgrammingTimeline,
    CompetitionFAQ
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
    }
  }
})
</script>
