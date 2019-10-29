<template>
  <v-layout column style="background: white;">
    <v-flex>
      <TechnocampIntro />
      <TechnocampAbout />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import TechnocampIntro from '~/components/subpages/preevent/technocamp/Intro.vue';
import TechnocampAbout from '~/components/subpages/preevent/technocamp/About.vue';

export default Vue.extend({
  components: {
    TechnocampIntro,
    TechnocampAbout
  },
  head() {
    return {
      title: 'Technocamp'
    };
  }
} as ComponentOptions<Vue>);
</script>
