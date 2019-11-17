<template>
  <v-layout column style="background: white;">
    <v-flex>
      <DatavidiaIntro />
      <DatavidiaPrize />
      <DatavidiaTimeline />
      <FAQ :items="faqItems" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import DatavidiaIntro from '~/components/subpages/competition/datavidia/Intro.vue';
import DatavidiaPrize from '~/components/subpages/competition/datavidia/Prize.vue';
import DatavidiaTimeline from '~/components/subpages/competition/datavidia/Timeline.vue';
import FAQ from '~/components/partials/FAQ.vue';

export default Vue.extend({
  components: {
    DatavidiaIntro,
    DatavidiaPrize,
    DatavidiaTimeline,
    FAQ
  },
  data() {
    return {
      faqItems: [
        {
          question: 'Apakah final Hackavidia dan Datavidia diadakan pada waktu yang sama?',
          answer: 'Iya. Kedua lomba tersebut diadakan pada tanggal 8-9 Februari 2020. Jadi tidak bisa mengikuti kedua-duanya ketika final.'
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
