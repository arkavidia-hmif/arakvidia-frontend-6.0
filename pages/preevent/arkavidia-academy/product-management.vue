<template>
  <v-layout column style="background: white;">
    <v-flex>
      <AcademyIntro />
      <AcademyAbout />
      <AcademyTimeline class="mt-4" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import AcademyIntro from '~/components/subpages/preevent/academy/product-management/Intro.vue';
import AcademyAbout from '~/components/subpages/preevent/academy/product-management/About.vue';
import AcademyTimeline from '~/components/subpages/preevent/academy/product-management/Timeline.vue';

export default Vue.extend({
  components: {
    AcademyIntro,
    AcademyAbout,
    AcademyTimeline
  },
  head() {
    return {
      title: 'Product Management Academy'
    };
  }
} as ComponentOptions<Vue>);
</script>
