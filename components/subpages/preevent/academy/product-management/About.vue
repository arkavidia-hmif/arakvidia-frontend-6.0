<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu Product Management Academy?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          Product Management Academy merupakan bootcamp atau workshop yang bertujuan untuk mengenalkan product management, skill dasar dari seorang product manager dan cara menguasainya, dan kiat-kiat untuk terjun ke dalam domain product. Product Management Academy meliputi:
        </p>
        <ol class="grey--text text--darken-1">
          <li>Pengetahuan dasar dari product life cycle</li>
          <li>Metode melakukan analisis kompetitor</li>
          <li>Business & pricing model</li>
          <li>Metodologi & tools yang dipakai oleh seorang product manager</li>
        </ol>
        <p class="grey--text text--darken-1 mt-4">
          Setelah Product Management Academy, peserta diharapkan dapat:
        </p>
        <ol class="grey--text text--darken-1">
          <li>Mengerti bagaimana melakukan ideasi produk</li>
          <li>Melakukan riset marketing untuk produk</li>
          <li>Memvalidasi ide yang dihasilkan</li>
          <li>Mengembangkan UX & design wireframe</li>
          <li>Menulis user stories</li>
          <li>Mengelola proses development dan menumbuhkan sebuah produk</li>
        </ol>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/preevent/academy/product-management/img1.jpg')" />
        <v-img width="100%" cover :src="require('~/assets/images/preevent/academy/product-management/img2.jpg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PMAcademyAbout'
});
</script>

<style scoped>
</style>
