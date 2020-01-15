<template>
  <v-layout column style="background: white;">
    <v-flex>
      <ArkavTalkIntro />
      <ArkavTalkAdvanced />
      <ArkavTalkPublic />
      <ArkavTalkShow />
      <ArkavTalkFAQ :items="faqItems" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import ArkavTalkIntro from '~/components/subpages/event/arkavidia-talk/Intro.vue';
import ArkavTalkAdvanced from '~/components/subpages/event/arkavidia-talk/AdvancedTalk.vue';
import ArkavTalkPublic from '~/components/subpages/event/arkavidia-talk/PublicTalk.vue';
import ArkavTalkShow from '~/components/subpages/event/arkavidia-talk/TalkShow.vue';
import ArkavTalkFAQ from '~/components/subpages/event/arkavidia-talk/FAQ.vue';

export default Vue.extend({
  components: {
    ArkavTalkIntro,
    ArkavTalkAdvanced,
    ArkavTalkPublic,
    ArkavTalkShow,
    ArkavTalkFAQ
  },
  head() {
    return {
      title: 'Arkavidia Talk'
    };
  },
  data() {
    return {
      faqItems: [
        {
          question: 'Apakah ada persyaratan khusus untuk advanced talk?',
          answer:
            'Tidak ada persyaratan khusus namun harap memperhatikan cakupan materi yang terdapat pada deskripsi. Peserta dianjurkan membawa laptop dan memiliki kuota data yang tersedia.'
        },
        {
          question: 'Bagaimana jika saya hanya ingin menghadiri satu topik pada satu sesi public talks?',
          answer: 'Tiket public talks dijual per sesi (pagi/siang) dengan satu sesi terdiri dari dua topik berbeda. Anda diperbolehkan untuk menghadiri satu topik saja.'
        },
        {
          question: 'Apakah saya dapat mengikuti advanced talk dan public talks secara bersamaan?',
          answer:
            'Peserta dapat mendaftar untuk seluruh sesi baik advanced talk maupun public talks namun harap memperhatikan jadwal karena ada sesi yang berjalan secara paralel. Panitia tidak bertanggung jawab apabila terdapat bentrok.'
        },
        {
          question: 'Apakah tiket yang sudah dibeli dapat dikembalikan?',
          answer: 'Tidak, tiket yang sudah dibeli tidak dapat dikembalikan.'
        }
      ]
    };
  }
} as ComponentOptions<Vue>);
</script>
