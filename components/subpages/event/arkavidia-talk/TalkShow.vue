<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Talkshow
    </div>
    <div class="mt-4 mb-2 grey--text text--darken-1">
      Talkshow yang bertujuan membuka diskusi dua arah mengenai isu yang berada di dunia teknologi informasi.
      Tahun ini talkshow akan bekerja sama dengn organisasi Femme in Stem dan akan mengangkat dua topik yaitu <i>women
        empowerment</i> dan <i>careers in the tech industry</i>.
      Mata acara ini gratis dan terbuka untuk umum.
    </div>
    <SessionBrief
      class="mt-4"
      theme-color="#FF8003"
      name="Talkshow"
      time="15.00 - 16.00"
      place="Aula Timur"
      to="/dashboard/arkavidia-talk/talkshow"
    />
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
        <v-col :cols="12" :md="6" :order-md="1" style="background-color: #F3F5F5;" class="pa-4 mt-3">
          <div class="title font-weight-bold" style="color: #FF8003">
            Breaking the Stigma: Careers for Women in Tech
          </div>
          <p class="mt-4 grey--text text--darken-1">
            Talkshow ini akan mengundang praktisi dan figur-figur wanita hebat dari dunia tech yang akan membuka wawasan terkait profesi dan membahas tantangan-tantangan yang dihadapi wanita di industri teknologi
          </p>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import SessionBrief from '~/components/partials/ArkavidiaTalk/SessionBrief.vue';

export default Vue.extend({
  name: 'TalkShow',
  components: { SessionBrief }
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
