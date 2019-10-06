<template>
  <v-layout column style="background: white;">
    <v-flex>
      <AGTSIntro />
      <AGTSAbout />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import AGTSIntro from '~/components/preevent/agts/Intro.vue';
import AGTSAbout from '~/components/preevent/agts/About.vue';

export default Vue.extend({
  components: {
    AGTSIntro,
    AGTSAbout
  },
  head() {
    return {
      title: 'Arkavidia Goes To School'
    };
  }
} as ComponentOptions<Vue>);
</script>
