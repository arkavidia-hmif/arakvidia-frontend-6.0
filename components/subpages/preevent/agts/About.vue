<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu Arkavidia Goes To School?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          Arkavidia Goes to School merupakan salah satu rangkaian acara pre-event Arkavidia 6.0.
          Acara ini merupakan kunjungan ke salah satu Sekolah Menengah Atas yang dilakukan bersama-sama oleh panitia Arkavidia 6.
          Kegiatan ini bertujuan umum untuk mempersiapkan masyarakat yang dapat menerima teknologi.
          Secara konkret, panitia Arkavidia 6 akan mengajarkan teknologi dan topik-topik yang berhubungan dengan keinformatikaan serta sekaligus mengenalkan jurusan IF dan STI.
        </p>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/preevent/agts/img1.jpg')" />
        <v-img width="100%" cover :src="require('~/assets/images/preevent/agts/img2.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AGTSAbout'
});
</script>

<style scoped>
</style>
