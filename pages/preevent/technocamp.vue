<template>
  <v-layout column style="background: white;">
    <v-flex>
      <TechnocampIntro />
      <TechnocampAbout />
      <TechnocampBenefit />
      <TechnocampTimeline />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import TechnocampIntro from '~/components/subpages/preevent/technocamp/Intro.vue';
import TechnocampAbout from '~/components/subpages/preevent/technocamp/About.vue';
import TechnocampBenefit from '~/components/subpages/preevent/technocamp/Benefit.vue';
import TechnocampTimeline from '~/components/subpages/preevent/technocamp/Timeline.vue';

export default Vue.extend({
  components: {
    TechnocampIntro,
    TechnocampAbout,
    TechnocampBenefit,
    TechnocampTimeline
  },
  head() {
    return {
      title: 'Technocamp'
    };
  }
} as ComponentOptions<Vue>);
</script>
