<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu Technocamp?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          Technocamp merupakan sebuah acara akademi IT untuk murid-murid SMA/Sederajat yang diselenggarakan di Institut Teknologi Bandung (ITB). Technocamp kali ini mengajarkan dasardasar pembuatan game menggunakan platform Unity. Peserta akan dibimbing secara langsung oleh mentor-mentor dari mahasiswa Program Studi Informatika serta Sistem dan Teknologi Informasi ITB. Karena materi yang masih mendasar, Technocamp tidak tertutup hanya untuk peserta yang berpengalaman saja. Technocamp juga cocok untuk peserta yang pemula atau belum pernah membuat game sebelumnya. Peserta akan mengikuti rangkaian kegiatan selama 2 hari yang mencakup dasar teori, hands on, dan kegiatan tambahan seperti seminar IT dan sharing IT serta sharing perkuliahan di ITB. Dengan mengikuti kegiatan Technocamp ini, para peserta diharapkan dapat menguasai dasar pembuatan game sehingga dapat mengembangkan dan mendalami pembuatan game ke depannya.
        </p>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/preevent/technocamp/img1.jpg')" />
        <v-img width="100%" cover :src="require('~/assets/images/preevent/technocamp/img2.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TechnocampAbout'
});
</script>

<style scoped>
</style>
