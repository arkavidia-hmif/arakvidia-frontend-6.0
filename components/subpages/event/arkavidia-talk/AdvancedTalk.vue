<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Advanced Talks
    </div>
    <div class="mt-4 grey--text text--darken-1">
      Seminar yang disertai mini workshop hands-on yang interaktif.
      Pada mata acara ini pembicara akan lebih banyak berinteraksi langsung dengan peserta dan topik bahasan lebih fokus pada teknis dan implementasi.
      Dengan mengikuti kegiatan ini, peserta dapat mendapatkan benefit berupa pengalaman pembelajaran yang lebih mendalam, sertifikat, dan free coffee break.
      HTM Rp35rb/sesi.
    </div>
    <div class="d-flex flex-column">
      <v-row justify="stretch">
        <v-col :cols="12" :md="6">
          <SessionPanel
            class="mt-4"
            talk-title="Data Engineering 101"
            talk-desc="Advanced Talk ini akan membahas tentang cara membangun sebuah data ecosystem menggunakan teknologi cloud computing dari nol.
                  Pembahasan akan dimulai dari integrasi data dari berbagai sumber hinggga visualisasi menjadi dashboard.
                  Peserta diharapkan membawa laptop pribadi.
                  Acara ini ditargetkan untuk mahasiswa dengan minat tinggi di bidang teknologi. "
            speaker-name="Cecilia Astrid Maharani"
            speaker-role="Senior Lead Data Engineer, Mekari"
            session-title="Sesi 1"
            time="09.00 - 11.00"
            place="Basement CC Timur"
            :image-url="require('~/assets/images/event/arkavtalk/speakers/mekari_ceciliaam.jpg')"
            theme-color="#9106FF"
            to="/dashboard/arkavidia-talk/advanced-talk-1"
          />
        </v-col>
        <v-col :cols="12" :md="6">
          <SessionPanel
            class="mt-4"
            talk-title="ReactJS: Interruptible Rendering with Concurrent Mode (Experimental)"
            talk-desc="Advanced Talk ini akan memiliki dua topik pembahasan yaitu ReactJS dan microservices. Salah satu topik yang dibahas adalah showcase fitur baru dari React yaitu concurrent mode yang dapat meningkatkan kinerja dari aplikasi secara signifikan. Selain itu, akan dibahas standar-standar yang dipakai oleh industri untuk membuat microservices."
            speaker-name="Leo Tiofan Justicia"
            speaker-role="Digital Banking Solution Developer, BTPN Jenius"
            session-title="Sesi 2"
            time="12.30 - 14.30"
            place="Basement CC Timur"
            :image-url="require('~/assets/images/event/arkavtalk/speakers/jenius_leotj.jpg')"
            theme-color="#9106FF"
            to="/dashboard/arkavidia-talk/advanced-talk-2"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import SessionPanel from '~/components/partials/ArkavidiaTalk/SessionPanel.vue';

export default Vue.extend({
  name: 'AdvancedTalk',
  components: { SessionPanel }
});
</script>

<style scoped>
.section {
  background-color: #9106FF;
  color: white;
  padding: 0.8rem;
}
</style>
