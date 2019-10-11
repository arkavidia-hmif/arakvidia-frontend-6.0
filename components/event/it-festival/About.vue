<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu IT Festival?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          IT Festival merupakan sebuah acara pameran IT yang diisi oleh perusahaan-perusahaan dan startup-startup teknologi informasi yang ada untuk berkontribusi kepada masyarakat.
          Kurang lebih sekitar 40 startup akan mengisi stand-stand IT Festival dan akan menunjukkan perannya ke masyarakat dengan berbagai metode santai, ceria, tetapi serius seperti pendeskripsian langsung atau interactive challenges.
        </p>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/event/itfest/img1.jpg')" />
        <v-img width="100%" cover :src="require('~/assets/images/event/itfest/img2.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ITFestAbout'
});
</script>

<style scoped>
</style>
