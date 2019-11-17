<template>
  <v-container px-4 my-6>
    <div align="center">
      <div class="title">
        Tema Hackavidia:
      </div>
      <div class="display-1 font-weight-bold">
        Embracing Our Nation Through Smart Digital Village
      </div>
      <v-row no-gutters>
        <v-col :md="8" :offset-md="2">
          <v-img width="100%" class="mt-4" :src="require('~/assets/ornaments/hackavidia-theme.png')" />
        </v-col>
      </v-row>
    </div>
    <v-divider />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HackathonTheme'
});
</script>

<style scoped>
</style>
