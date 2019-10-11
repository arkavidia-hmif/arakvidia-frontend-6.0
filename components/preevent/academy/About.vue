<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu Arkavidia Academy?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          Di dalam Arkavidia Academy, akan diajarkan dasar-dasar dari sebuah skill yang diperlukan untuk bersaing di dalam era digital ini.
          Peserta Arkavidia Academy akan mengikuti kegiatan yang dilaksanakan dalam 2 minggu dan mencakup teori dan hands-on, serta kegiatan tambahan berupa pekerjaan rumah yang akan diberikan di sela 2 minggu tersebut.
          Peserta juga akan dibimbing selama masa Arkavidia Academy oleh mentor dari startup ternama Indonesia.
          Arkavidia Academy bertujuan agar peserta tidak hanya tahu tentang apa yang dibutuhkan untuk bersaing di dunia teknologi, tetapi juga mengerti dan memahami dengan baik.
        </p>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/preevent/academy/img1.jpg')" />
        <v-img width="100%" cover :src="require('~/assets/images/preevent/academy/img2.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AcademyAbout'
});
</script>

<style scoped>
</style>
