<template>
  <v-layout column style="background: white;">
    <v-flex>
      <ITFestIntro />
      <ITFestAbout />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import ITFestIntro from '~/components/subpages/event/it-festival/Intro.vue';
import ITFestAbout from '~/components/subpages/event/it-festival/About.vue';

export default Vue.extend({
  components: {
    ITFestIntro,
    ITFestAbout
  },
  head() {
    return {
      title: 'IT Festival'
    };
  }
} as ComponentOptions<Vue>);
</script>
