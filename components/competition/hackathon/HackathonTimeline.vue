<template>
  <v-container px-4>
    <div class="headline font-weight-bold">Timeline Kegiatan</div>
    <v-row class="mt-4" align="stretch">
      <v-col :cols="6" :sm="3">
        <v-responsive
          :aspect-ratio="$vuetify.breakpoint.smAndUp ? 5 : 3"
          class="white--text pa-0 ma-0"
        >
          <v-container fill-height justify-content-center style="background: #21C7C5">
            <div style="width: 100%" align="left">
              <div class="display-2 font-weight-black">08</div>
              <div class="title mt-2 font-weight-black">September 2019</div>
              <div class="subtitle-1 mt-2 font-weight-black">Pembukaan</div>
              <div class="subtitle-1 font-weight-black">Pendaftaran</div>
              <div class="caption font-weight-light">Pendaftaran dilakukan secara online</div>
            </div>
          </v-container>
        </v-responsive>
      </v-col>
      <v-col :cols="6" :sm="3">
        <v-responsive
          :aspect-ratio="$vuetify.breakpoint.smAndUp ? 5 : 3"
          class="white--text pa-0 ma-0"
        >
          <v-container fill-height justify-content-center style="background: #f4f4f4">
            <div style="width: 100%" align="left">
              <div class="display-2 font-weight-black color-black">30</div>
              <div class="title mt-2 font-weight-black color-black">Oktober 2019</div>
              <div class="subtitle-1 mt-2 font-weight-black color-red">Pembukaan</div>
              <div class="subtitle-1 font-weight-black color-red">Pendaftaran</div>
              <div class="caption font-weight-light color-black">Pendaftaran dilakukan secara online</div>
            </div>
          </v-container>
        </v-responsive>
      </v-col>
      <v-col :cols="6" :sm="3">
        <v-responsive
          :aspect-ratio="$vuetify.breakpoint.smAndUp ? 5 : 3"
          class="white--text pa-0 ma-0"
        >
          <v-container fill-height justify-content-center style="background: #f4f4f4">
            <div style="width: 100%" align="left">
              <div class="display-2 font-weight-black color-black">30</div>
              <div class="title mt-2 font-weight-black color-black">Oktober 2019</div>
              <div class="subtitle-1 mt-2 font-weight-black color-red">Pembukaan</div>
              <div class="subtitle-1 font-weight-black color-red">Pendaftaran</div>
              <div class="caption font-weight-light color-black">Pendaftaran dilakukan secara online</div>
            </div>
          </v-container>
        </v-responsive>
      </v-col>
      <v-col :cols="6" :sm="3">
        <v-responsive
          :aspect-ratio="$vuetify.breakpoint.smAndUp ? 5 : 3"
          class="white--text pa-0 ma-0"
        >
          <v-container fill-height justify-content-center style="background: #f4f4f4">
            <div style="width: 100%" align="left">
              <div class="display-2 font-weight-black color-black">30</div>
              <div class="title mt-2 font-weight-black color-black">Oktober 2019</div>
              <div class="subtitle-1 mt-2 font-weight-black color-red">Pembukaan</div>
              <div class="subtitle-1 font-weight-black color-red">Pendaftaran</div>
              <div class="caption font-weight-light color-black">Pendaftaran dilakukan secara online</div>
            </div>
          </v-container>
        </v-responsive>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HackathonTimeline"
});
</script>

<style scoped>
.color-black {
  color: black;
}

.color-red {
  color: #c14163;
}
</style>
