<template>
  <v-container px-4>
    <v-row wrap>
      <v-col :cols="12" :md="7" align-self="center">
        <div class="headline font-weight-bold">
          Apa itu Software Engineering Academy?
        </div>
        <p class="mt-4 grey--text text--darken-1">
          Software Engineering Academy merupakan bootcamp atau workshop yang bertujuan untuk mengenalkan software engineering dan skill dasar dari seorang software engineer dan cara menguasainya. Software Engineering Academy meliputi:
        </p>
        <ol class="grey--text text--darken-1">
          <li>How to develop front-end</li>
          <li>How to develop back-end</li>
          <li>Software Testing</li>
        </ol>
        <p class="grey--text text--darken-1 mt-4">
          Setelah Software Engineering Academy, peserta diharapkan dapat:
        </p>
        <ol class="grey--text text--darken-1">
          <li>Mengerti konsep dasar dari front-end dan back-end</li>
          <li>Membangun front-end dan back-end yang terintegrasi</li>
          <li>Melakukan testing dari software yang dibangun</li>
          <li>Mengerti bagaimana membangun software secara keseluruhan</li>
        </ol>
      </v-col>
      <v-col
        :cols="12"
        :md="4"
        :offset-md="1"
        align="center"
        align-self="center"
      >
        <v-img width="100%" cover :src="require('~/assets/images/preevent/academy/software-engineering/img1.jpeg')" />
        <v-img width="100%" cover :src="require('~/assets/images/preevent/academy/software-engineering/img2.jpeg')" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SEAcademyAbout'
});
</script>

<style scoped>
</style>
