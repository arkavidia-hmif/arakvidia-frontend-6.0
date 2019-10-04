<template>
  <v-container fill-height py-0 px-4 class="d-flex flex-column" style="min-height: 100vh">
    <div class="d-flex flex-column" style="flex: 1">
      <v-container class="d-flex mt-12" style="flex: 1">
        <v-row wrap>
          <v-col :cols="12" :md="7" align-self="center">
            <div class="display-1 font-weight-bold" style="color: #0B909A">
              Capture the Flag
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Capture the Flag adalah kompetisi dimana setiap peserta harus saling bersaing sebagai tim untuk mengumpulkan poin sebanyak mungkin dengan memecahkan persoalan yang diberikan.
              Dalam kurun waktu yang terbatas, peserta harus menggunakan setiap kakas dan pengetahuan yang mereka miliki untuk mencari, mengakali, dan mengeksploitasi celah-celah keamanan untuk mendapatkan poin dalam bentuk flag tersembunyi dalam setiap soal.
            </p>
            <div class="mt-8 caption">
              Kategori
              &nbsp;
              <v-chip small color="black" class="black white--text caption">
                Mahasiswa &amp; SMA/Sederajat
              </v-chip>
            </div>
            <div class="mt-8">
              <v-btn large rounded outlined color="#0B909A" class="text-none mr-2 mt-2">
                Download guidebook
              </v-btn>
              <v-btn large rounded color="primary" class="text-none mt-2" elevation="0">
                Daftar sekarang
              </v-btn>
            </div>
          </v-col>
          <v-col
            :cols="12"
            :lg="3"
            :offset-lg="2"
            :md="4"
            :offset-md="1"
            align="center"
            class="hidden-sm-and-down"
            align-self="center"
          >
            <v-img width="100%" fill-height cover :src="require('~/assets/images/hackathon_intro.jpg')" />
          </v-col>
        </v-row>
      </v-container>
      <div align="center" class="pa-6">
        <div class="font-weight-bold" style="color: #0435B5">
          Penasaran?
        </div>
        <v-img :src="require('~/assets/down_arrow.svg')" width="20" class="mt-2 vert-move" />
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'CaptureTheFlagIntro'
});
</script>

<style scoped>
  .vert-move {
    -webkit-animation: mover .5s infinite alternate;
    animation: mover .5s infinite alternate;
  }

  @-webkit-keyframes mover {
    0% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(7px);
    }
  }

  @keyframes mover {
    0% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(7px);
    }
  }

</style>
