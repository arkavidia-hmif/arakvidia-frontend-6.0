<template>
  <v-container py-0 px-4 class="d-flex flex-column" style="min-height: 100vh">
    <div class="d-flex flex-column" style="flex: 1">
      <div class="d-flex mt-12" style="flex: 1">
        <v-row wrap>
          <v-col :cols="12" :md="7" align-self="center">
            <div class="display-1 font-weight-bold" style="color: #0B909A">
              Competitive Programming
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Competitive Programming Arkavidia adalah sebuah kompetisi pemrograman.
              Kompetisi ini menguji kemampuan analisis pemecahan masalah dan berpikir komputasional dengan menyelesaikan persoalan yang diberikan dengan bahasa pemrograman tertentu dalam batasan waktu dan memori yang telah ditentukan.
            </p>
            <div class="mt-8 caption">
              Kategori
              &nbsp;
              <v-chip small color="black" class="black white--text caption">
                Mahasiswa
              </v-chip>
            </div>
            <div class="mt-2 caption">
              Biaya Pendaftaran

              <v-chip small color="#21C7C5" class="white--text caption">
                Rp150.000,-
              </v-chip>
            </div>
            <div class="mt-8">
              <a href="https://arkav.me/guidebook-cp" style="text-decoration: none;">
                <v-btn large rounded outlined color="#0B909A" class="text-none mr-2 mt-2">
                  Download guidebook
                </v-btn>
              </a>
              <v-btn
                large
                rounded
                color="primary"
                class="text-none mt-2"
                elevation="0"
                to="/dashboard/competition/competitive-programming"
                disabled
              >
                Pendaftaran ditutup
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
            <v-img width="100%" fill-height cover :aspect-ratio="4/5" :src="require('~/assets/images/competition/cp.jpg')" />
          </v-col>
        </v-row>
      </div>
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
  name: 'CompetitiveProgrammingIntro'
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
