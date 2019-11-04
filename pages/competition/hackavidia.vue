<template>
  <v-layout column style="background: white;">
    <v-flex>
      <HackathonIntro />
      <HackathonPrize />
      <HackathonTimeline />
      <FAQ :items="faqItems" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import HackathonIntro from '~/components/subpages/competition/hackavidia/Intro.vue';
import HackathonPrize from '~/components/subpages/competition/hackavidia/Prize.vue';
import HackathonTimeline from '~/components/subpages/competition/hackavidia/Timeline.vue';
import FAQ from '~/components/partials/FAQ.vue';

export default Vue.extend({
  components: {
    HackathonIntro,
    HackathonPrize,
    HackathonTimeline,
    FAQ
  },
  data() {
    return {
      faqItems: [
        {
          question: 'Apakah final Hackavidia dan Datavidia diadakan pada waktu yang sama?',
          answer: 'Iya. Kedua lomba tersebut diadakan pada tanggal 8-9 Februari 2020. Jadi tidak bisa mengikuti kedua-duanya ketika final.'
        },
        {
          question: 'Apakah aplikasinya boleh dibuat sebelum final?',
          answer: 'Tidak boleh. Aplikasi harus diimplementasi dari 0 ketika final. Segala kecurangan akan ditindak tegas.'
        },
        {
          question: 'Apakah ada template khusus untuk proposal?',
          answer: 'Tidak ada. Template dibebaskan pada peserta sesuai kreatifitas.'
        }
      ]
    };
  },
  head() {
    return {
      title: 'Hackavidia'
    };
  }
} as ComponentOptions<Vue>);
</script>
