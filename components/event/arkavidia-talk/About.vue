<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu Arkavidia Talk?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          Arkavidia Talk merupakan suatu acara pada main event Arkavidia 6.0.
          Arkavidia Talk ini berupa seminar yang mengundang para praktisi dan profesional dalam industri IT.
          Tujuan dari diadakan Arkavidia Talk adalah sebagai ajang pertukaran ide antara penggerak industri dengan masyarakat guna menambahkan wawasan mengenai perkembangan teknologi dan membuka kesempatan untuk kolaborasi.
          Tahun ini, Arkavidia Talk akan memiliki fokus utama untuk memperkenalkan masyarakat pada berbagai macam perkembangan dan aplikasi teknologi informasi terbaru dalam berbagai bidang.
        </p>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/event/arkavtalk/img1.jpg')" />
        <v-img width="100%" cover :src="require('~/assets/images/event/arkavtalk/img2.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ArkavTalkAbout'
});
</script>

<style scoped>
</style>
