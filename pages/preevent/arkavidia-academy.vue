<template>
  <v-layout column style="background: white;">
    <v-flex>
      <AcademyIntro />
      <AcademyAbout />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import AcademyIntro from '~/components/subpages/preevent/academy/Intro.vue';
import AcademyAbout from '~/components/subpages/preevent/academy/About.vue';

export default Vue.extend({
  components: {
    AcademyIntro,
    AcademyAbout
  },
  head() {
    return {
      title: 'Arkavidia Academy'
    };
  }
} as ComponentOptions<Vue>);
</script>
