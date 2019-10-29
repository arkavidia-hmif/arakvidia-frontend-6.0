<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu Technocamp?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          Technocamp adalah sebuah acara akademi coding untuk anak SMA/Sederajat.
          Technocamp mengajarkan dasar-dasar coding untuk anak SMA sehingga cocok untuk peserta yang baru ingin mengenal dunia coding.
          Peserta akan mengikuti rangkaian kegiatan selama 2 hari yang mencakup dasar teori, hands on, dan kegiatan tambahan seperti seminar IT dan sharing IT.
        </p>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/preevent/technocamp/img1.jpg')" />
        <v-img width="100%" cover :src="require('~/assets/images/preevent/technocamp/img2.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TechnocampAbout'
});
</script>

<style scoped>
</style>
