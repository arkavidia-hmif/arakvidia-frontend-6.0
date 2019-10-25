<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Hadiah Pemenang
    </div>
    <div>
      <v-row class="mt-1">
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #FF084F">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="display-1 font-weight-bold">
                  Rp 5.000.000,-
                </div>
                <div class="title mt-2">
                  Juara 1
                </div>
              </div>
            </v-container>
          </v-responsive>
        </v-col>
        <v-col :cols="4" class="hidden-xs-only" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-top-left.png')" />
        </v-col>
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #0578D3">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="display-1 font-weight-bold">
                  Rp 3.000.000,-
                </div>
                <div class="title mt-2">
                  Juara 2
                </div>
              </div>
            </v-container>
          </v-responsive>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="4" class="hidden-xs-only" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-mid-left.png')" />
        </v-col>
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #7608FF">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="display-1 font-weight-bold">
                  Rp 2.000.000,-
                </div>
                <div class="title mt-2">
                  Juara 3
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
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #21C7C5">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="display-1 font-weight-bold">
                  Rp 1.000.000,-
                </div>
                <div class="title mt-2">
                  Juara 4
                </div>
              </div>
            </v-container>
          </v-responsive>
        </v-col>
        <v-col :cols="4" class="hidden-xs-only" align-self="end">
          <v-img :src="require('~/assets/ornaments/prize-bottom-left.png')" />
        </v-col>
        <v-col :cols="12" :sm="4" align-self="end">
          <v-responsive :aspect-ratio="3" class="white--text pa-0 ma-0" style="background: #FFBA07">
            <v-container fill-height class="pa-0" justify-content-center>
              <div style="width: 100%" align="center">
                <div class="display-1 font-weight-bold">
                  Rp 500.000,-
                </div>
                <div class="title mt-2">
                  Juara 5
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
  name: 'ArkalogicaPrize'
});
</script>

<style scoped>
</style>
