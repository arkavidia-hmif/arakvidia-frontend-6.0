<template>
  <v-layout column style="background: white;">
    <v-flex>
      <ArkavTalkIntro />
      <ArkavTalkAdvanced />
      <ArkavTalkPublic />
      <ArkavTalkShow />
      <ArkavTalkFAQ :items="faqItems" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import ArkavTalkIntro from '~/components/subpages/event/arkavidia-talk/Intro.vue';
import ArkavTalkAdvanced from '~/components/subpages/event/arkavidia-talk/AdvancedTalk.vue';
import ArkavTalkPublic from '~/components/subpages/event/arkavidia-talk/PublicTalk.vue';
import ArkavTalkShow from '~/components/subpages/event/arkavidia-talk/TalkShow.vue';
import ArkavTalkFAQ from '~/components/subpages/event/arkavidia-talk/FAQ.vue';

export default Vue.extend({
  components: {
    ArkavTalkIntro,
    ArkavTalkAdvanced,
    ArkavTalkPublic,
    ArkavTalkShow,
    ArkavTalkFAQ
  },
  head() {
    return {
      title: 'Arkavidia Talk'
    };
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
  }
} as ComponentOptions<Vue>);
</script>
