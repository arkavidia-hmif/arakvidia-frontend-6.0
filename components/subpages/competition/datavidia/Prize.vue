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
                  Rp 10.000.000,-
                </div>
                <div class="title mt-2">
                  Juara 1
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
                <div class="display-1 font-weight-bold">
                  Rp 7.500.000,-
                </div>
                <div class="title mt-2">
                  Juara 2
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
                <div class="display-1 font-weight-bold">
                  Rp 5.000.000,-
                </div>
                <div class="title mt-2">
                  Juara 3
                </div>
              </div>
            </v-container>
          </v-responsive>
        </v-col>
      </v-row>
      <!--<v-row>-->
      <!--<v-col :cols="12" :sm="6" align-self="end">-->
      <!--<v-responsive :aspect-ratio="$vuetify.breakpoint.smAndUp ? 4.5 : 3" class="white&#45;&#45;text pa-0 ma-0">-->
      <!--<v-container fill-height class="pa-0" justify-content-center style="background: #21C7C5">-->
      <!--<div style="width: 100%" align="center">-->
      <!--<div class="display-1 font-weight-bold">-->
      <!--Rp 1.000.000,- -->
      <!--</div>-->
      <!--<div class="title mt-2">-->
      <!--Best Idea-->
      <!--</div>-->
      <!--</div>-->
      <!--</v-container>-->
      <!--</v-responsive>-->
      <!--</v-col>-->
      <!--<v-col :cols="12" :sm="6">-->
      <!--<v-responsive :aspect-ratio="$vuetify.breakpoint.smAndUp ? 4.5 : 3" class="white&#45;&#45;text pa-0 ma-0">-->
      <!--<v-container fill-height class="pa-0" justify-content-center style="background: #FFBA07">-->
      <!--<div style="width: 100%" align="center">-->
      <!--<div class="display-1 font-weight-bold">-->
      <!--Rp 1.000.000,- -->
      <!--</div>-->
      <!--<div class="title mt-2">-->
      <!--Best Presentation-->
      <!--</div>-->
      <!--</div>-->
      <!--</v-container>-->
      <!--</v-responsive>-->
      <!--</v-col>-->
      <!--</v-row>-->
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DatavidiaPrize'
});
</script>

<style scoped>
</style>
