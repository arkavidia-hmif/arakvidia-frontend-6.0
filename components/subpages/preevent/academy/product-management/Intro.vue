<template>
  <v-container py-0 px-4 class="d-flex flex-column" style="min-height: 100vh">
    <div class="d-flex flex-column" style="flex: 1; width: 100%">
      <div class="d-flex mt-12" style="flex: 1">
        <v-row style="width: 100%">
          <v-col
            :cols="12"
            :md="6"
            align="center"
            align-self="center"
          >
            <v-img width="100%" cover :src="require('~/assets/images/preevent/academy/product-management/hero.jpg')" />
          </v-col>
          <v-col :cols="12" :md="6" align-self="center">
            <div class="display-1 font-weight-bold" style="color: #0B909A">
              Product Management Academy
            </div>
            <p class="mt-4 mr-5 grey--text text--darken-1">
              Ingin menjadi seorang Product Manager tapi tidak tahu mau mulai dari mana? Temukan jawabannya di Product Management Academy!
            </p>
            <div class="subtitle grey--text">
              Bekerjasama dengan
            </div>
            <v-img :src="require('~/assets/images/logo/mekari.png')" width="150" class="mt-4" />
            <div class="mt-8">
              <a href="https://arkav.me/guidebook-arkavdemy-product-management" style="text-decoration: none;">
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
                to="/dashboard/preevent/product-management-academy"
                disabled
              >
                Pendaftaran ditutup
              </v-btn>
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
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PMAcademyIntro'
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
