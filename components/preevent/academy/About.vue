<template>
  <v-container px-4>
    <div class="d-flex flex-column" style="flex: 1">
      <v-container class="d-flex mt-12" style="flex: 1">
        <v-row wrap>
          <v-col :cols="12" :md="7" align-self="center">
            <div class="headline font-weight-bold">
              Apa itu Arkavidia Academy?
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Arkavidia Academy adalah salah satu rangkaian acara dari Arkavidia 6.0 yang berbentuk akademi teknologi untuk mahasiswa/sederajat. Pada Arkavidia Academy, peserta akan diajarkan dasar-dasar dari kemampuan yang diperlukan untuk bersaing di dalam era transformasi digital ini. Peserta Arkavidia Academy akan mengikuti kegiatan yang dilaksanakan dalam kurun waktu tertenuyang mencakup teori, praktik, dan kegiatan tambahan seperti tugas.
            </p>
          </v-col>
          <v-col
            :cols="12"
            :md="4"
            :offset-md="1"
            align="center"
            align-self="center"
          >
            <v-img width="100%" fill-height cover :src="require('~/assets/images/preevent/dummy_asset.JPG')" style="max-width: 50vh" />
            <v-img width="100%" fill-height cover :src="require('~/assets/images/preevent/dummy_asset.JPG')" style="max-width: 50vh" />
          </v-col>
        </v-row>
      </v-container>
    </div>
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
