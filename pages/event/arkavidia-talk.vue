<template>
  <v-layout column style="background: white;">
    <v-flex>
      <ArkavTalkIntro />
      <ArkavTalkAbout />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import ArkavTalkIntro from '~/components/event/arkavidia-talk/Intro.vue';
import ArkavTalkAbout from '~/components/event/arkavidia-talk/About.vue';

export default Vue.extend({
  components: {
    ArkavTalkIntro,
    ArkavTalkAbout
  },
  head() {
    return {
      title: 'Arkavidia Talk'
    };
  }
} as ComponentOptions<Vue>);
</script>
