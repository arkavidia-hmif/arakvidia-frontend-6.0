<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Advanced Talks
    </div>
    <div class="mt-4 grey--text text--darken-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
            talk-title="Mobile Engineering 101"
            talk-desc="Lorem ipsum dolor sit amet woohoo. "
            speaker-name="John Doe TBD"
            speaker-role="The Mobile Guy, Jenius"
            session-title="Sesi 2"
            time="12.30 - 14.30"
            place="Basement CC Timur"
            :image-url="require('~/assets/images/event/arkavtalk/dummy.jpeg')"
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
