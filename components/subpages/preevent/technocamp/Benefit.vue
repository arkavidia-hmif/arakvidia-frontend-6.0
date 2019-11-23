<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Benefit
    </div>
    <div>
      <v-row class="mt-4">
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #FF084F">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="title mt-2 font-weight-bold">
                  Pengetahuan Dasar dalam Pembuatan Game
                </div>
              </div>
            </v-container>
          </v-responsive>
        </v-col>
        <v-col :cols="8" class="hidden-xs-only" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-top.png')" />
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="4" class="hidden-xs-only" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-mid-left.png')" />
        </v-col>
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #0578D3">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="title mt-2 font-weight-bold">
                  Seminar dan Sharing bidang IT
                </div>
              </div>
            </v-container>
          </v-responsive>
        </v-col>
        <v-col :cols="4" class="hidden-xs-only" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-mid-right.png')" />
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="8" class="hidden-xs-only" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-bottom.png')" />
        </v-col>
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #7608FF">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="title mt-2 font-weight-bold">
                  Sertifikat
                </div>
              </div>
            </v-container>
          </v-responsive>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TechnocampBenefit'
});
</script>

<style scoped>
</style>
