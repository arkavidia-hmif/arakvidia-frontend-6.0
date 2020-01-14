<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Talk Show
    </div>
    <div class="mt-4 mb-2 grey--text text--darken-1">
      Talkshow yang bertujuan membuka diskusi dua arah mengenai isu yang berada di dunia teknologi informasi.
    </div>
    <div class="d-flex flex-column">
      <v-row>
        <v-col :cols="12" align-self="center">
          <div class="section">
            <div class="title font-weight-bold">
              Talk Show
            </div>
            <div class="subtitle font-weight-bold">
              <v-row style="margin-left: 0; margin-right: 0;">
                <div>
                  <i class="fa fa-calendar" aria-hidden="true" />
                  15.00 - 16.00
                </div>
                <div style="margin-left: 1rem;">
                  <i class="fa fa-map-marker" aria-hidden="true" />
                  Aula Timur
                </div>
              </v-row>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="d-flex flex-column">
      <v-row no-gutters>
        <v-col :cols="12" :md="6" :order-md="2" style="padding: 0;">
          <div class="d-flex flex-row speakers-container" style="box-shadow: inset 0 -25px 0 #F3F5F5;">
            <div class="pad-mobile">
&nbsp;
            </div>
            <div class="pd d-flex flex-column speakers">
              <div>
                <v-img width="100%" :aspect-ratio="3/4" :src="require('~/assets/images/event/arkavtalk/speakers/indodax_nidyar.jpg')" />
              </div>
              <div class="section flex-grow-1">
                <div class="font-weight-bold">
                  Nidya Rahmanita
                </div>
                <div>
                  Business Development Manager, Indodax
                </div>
              </div>
            </div>
            <div class="pd d-flex flex-column speakers">
              <div>
                <v-img width="100%" :aspect-ratio="3/4" :src="require('~/assets/images/event/arkavtalk/speakers/gengirls_vaniara.jpg')" />
              </div>
              <div class="section flex-grow-1">
                <div class="font-weight-bold">
                  Vania Radmila Alfitri
                </div>
                <div>
                  Co-founder of Generation Girl, iOS Engineer at GO-JEK
                </div>
              </div>
            </div>
            <div class="pd d-flex flex-column speakers">
              <div>
                <v-img width="100%" :aspect-ratio="3/4" :src="require('~/assets/images/event/arkavtalk/speakers/icehouse_mirah.jpg')" />
              </div>
              <div class="section flex-grow-1">
                <div class="font-weight-bold">
                  Mira Hidayati
                </div>
                <div>
                  Academy Program Manager, IceHouse
                </div>
              </div>
            </div>
            <div class="pad-mobile">
&nbsp;
            </div>
          </div>
        </v-col>
        <v-col :cols="12" :md="6" :order-md="1" style="background-color: #F3F5F5;" class="pa-4">
          <div class="title font-weight-bold" style="color: #FF8003">
            Breaking the Stigma: Careers for Women in Tech
          </div>
          <p class="mt-4 grey--text text--darken-1">
            Talkshow ini akan mengundang praktisi dan figur-figur wanita hebat dari dunia tech yang akan membuka wawasan terkait profesi dan membahas tantangan-tantangan yang dihadapi wanita di industri teknologi
          </p>
          <div class="mt-2 mb-2" style="color: white;">
            <v-btn
              large
              rounded
              style="background-color: #FF8003; color: white;"
              class="text-none mt-2"
              elevation="0"
              to="/dashboard/arkavidia-talk/talkshow"
            >
              Daftar Sekarang
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TalkShow'
});
</script>

<style scoped>
  .section {
    background-color: #FF8003;
    color: white;
    padding: 0.8rem;
  }
  .speakers {
    width: 33.333%;
  }
  .pad-mobile {
    width: 0;
  }
  @media only screen and (max-width : 966px) {
    .speakers-container {
      width: 100%;
      overflow: auto;
    }
    .speakers {
      min-width: 180px;
      margin-left: 8px;
      margin-right: 8px;
    }
    .pad-mobile {
      width: 8px;
    }
  }
</style>
