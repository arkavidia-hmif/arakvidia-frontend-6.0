<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Public Talks
    </div>
    <div class="mt-4 grey--text text--darken-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="d-flex flex-column">
      <SessionBrief
        class="mt-4"
        theme-color="#00B798"
        name="Sesi Pagi"
        time="09.00 - 11.20"
        place="Aula Timur"
      />
      <v-row justify="stretch">
        <v-col :cols="12" :md="6">
          <SessionPanel
            talk-title="Leading Technology in FMCG"
            talk-desc="Seminar ini akan membahas terkait peran teknologi informasi terkini dalam mengembangkan industri Fast moving consumer goods di Indonesia."
            speaker-name="Jo Yusuf Astra"
            speaker-role="VP IT, PT Paragon Technology and Innovation"
            :image-url="require('~/assets/images/event/arkavtalk/speakers/paragon_joya.jpg')"
            theme-color="#00B798"
            to="/dashboard/arkavidia-talk/public-talk-1"
          />
        </v-col>
        <v-col :cols="12" :md="6">
          <SessionPanel
            talk-title="Optimizing Travel Using AI"
            talk-desc="Seminar ini akan membahas seputar implementasi Big Data dan Artificial intelligence untuk mengoptimasi pengalaman masyarakat dalam melakukan perjalanan dan destinasi."
            speaker-name="Maria Tjahjadi"
            speaker-role="VP of Data, Tiket.com"
            :image-url="require('~/assets/images/event/arkavtalk/speakers/tiket_mariat.jpg')"
            theme-color="#00B798"
            to="/dashboard/arkavidia-talk/public-talk-1"
          />
        </v-col>
      </v-row>
    </div>

    <div class="d-flex flex-column">
      <SessionBrief
        class="mt-4"
        theme-color="#307DE2"
        name="Sesi Siang"
        time="13.30 - 16.20"
        place="Aula Timur"
      />
      <v-row justify="stretch">
        <v-col :cols="12" :md="6">
          <SessionPanel
            talk-title="How to Start Then Scale Your Business With Technology"
            talk-desc="Membahas bagaimana AI pertama kali ditemukan dan sudah sejauh apa perkembangan AI dari awal ditemukan hingga sekarang."
            speaker-name="Elfino Sitompul"
            speaker-role="Chief Executive Officer, Matagi"
            :image-url="require('~/assets/images/event/arkavtalk/speakers/matagi_elfinos.jpg')"
            theme-color="#307DE2"
            to="/dashboard/arkavidia-talk/public-talk-2"
          />
        </v-col>
        <v-col :cols="12" :md="6">
          <SessionPanel
            talk-title="Digital Transformation in Government"
            talk-desc="Seminar ini akan membahas kisah transformasi salah satu badan pemerintahan yaitu Ditjen Pajak dan aplikasi teknologi informasi yang digunakannya untuk memudahkan layanan pada masyarakat."
            speaker-name="Iwan Djuniardi"
            speaker-role="Direktur TIK, Ditjen Pajak"
            :image-url="require('~/assets/images/event/arkavtalk/speakers/djp_iwand.jpg')"
            theme-color="#307DE2"
            to="/dashboard/arkavidia-talk/public-talk-2"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import SessionPanel from '~/components/partials/ArkavidiaTalk/SessionPanel.vue';
import SessionBrief from '~/components/partials/ArkavidiaTalk/SessionBrief.vue';

export default Vue.extend({
  name: 'PublicTalk',
  components: { SessionPanel, SessionBrief }
});
</script>

<style scoped>
  .section {
    background-color: #00B798;
    color: white;
    padding: 0.8rem;
  }

  .section2 {
    background-color: #307DE2;
    color: white;
    padding: 0.8rem;
  }
</style>
