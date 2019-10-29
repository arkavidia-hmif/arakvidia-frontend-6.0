<template>
  <v-layout column style="background: white;">
    <v-flex>
      <DatavidiaIntro />
      <DatavidiaPrize />
      <DatavidiaTimeline />
      <!-- <FAQ :items="faqItems" /> -->
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import DatavidiaIntro from '~/components/subpages/competition/datavidia/Intro.vue';
import DatavidiaPrize from '~/components/subpages/competition/datavidia/Prize.vue';
import DatavidiaTimeline from '~/components/subpages/competition/datavidia/Timeline.vue';
// import FAQ from '~/components/partials/FAQ.vue'

export default Vue.extend({
  components: {
    DatavidiaIntro,
    DatavidiaPrize,
    DatavidiaTimeline
    // FAQ
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
    };
  },
  head() {
    return {
      title: 'Datavidia'
    };
  }
} as ComponentOptions<Vue>);
</script>
