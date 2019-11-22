<template>
  <v-layout column style="background: white;">
    <v-flex>
      <AcademyIntro />
      <AcademyAbout />
      <AcademyTimeline />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import AcademyIntro from '~/components/subpages/preevent/academy/Intro.vue';
import AcademyAbout from '~/components/subpages/preevent/academy/About.vue';
import AcademyTimeline from '~/components/subpages/preevent/academy/Timeline.vue';

export default Vue.extend({
  components: {
    AcademyIntro,
    AcademyAbout,
    AcademyTimeline
  },
  head() {
    return {
      title: 'Arkavidia Academy'
    };
  }
} as ComponentOptions<Vue>);
</script>
