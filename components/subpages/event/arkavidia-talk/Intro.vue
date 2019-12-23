<template>
  <v-container py-0 px-4 class="d-flex flex-column" style="min-height: 100vh">
    <div align="center" class="d-flex flex-column" style="flex: 1; width: 100%">
      <v-row justify="center">
        <v-col :cols="12" :md="8" align-self="center">
          <div class="headline" style="color: #FF084F; font-weight: 900; text-shadow: 1px 0 rgb(255, 8, 79);">
            MAIN EVENT
          </div>
          <div class="mt-3 display-2" style="color: #0B909A; font-weight: 900;">
            Arkavidia Talk
          </div>
          <div class="mt-3 headline font-weight-bold">
            08 Februari 2020
          </div>
          <p class="mt-8 grey--text text--darken-1">
            Merupakan seminar yang mengundang para praktisi dan profesional dalam industri teknologi informasi. Terdiri dari dua sesi, yang pertama bertujuan untuk memperkenalkan inovasi terbaru di bidang IT. Sesi kedua bertujuan untuk memperkaya wawasan mengenai teknologi transdisiplin di industri.
          </p>
          <div class="subtitle mt-3 font-weight-bold">
            Terbuka untuk Umum.
          </div>
        </v-col>
      </v-row>
    </div>
    <div align="center" class="pa-6">
      <div class="font-weight-bold" style="color: #0435B5">
        Penasaran?
      </div>
      <v-img :src="require('~/assets/down_arrow.svg')" width="20" class="mt-2 vert-move" />
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ArkavTalkIntro'
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
