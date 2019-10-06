<template>
  <v-container px-4>
    <div class="d-flex flex-column" style="flex: 1">
      <v-container class="d-flex mt-12" style="flex: 1">
        <v-row wrap>
          <v-col :cols="12" :md="7" align-self="center">
            <div class="headline font-weight-bold">
              Apa itu Technocamp?
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </v-col>
          <v-col
            :cols="12"
            :md="4"
            :offset-md="1"
            align="center"
            align-self="center"
          >
            <v-img width="100%" fill-height cover :src="require('~/assets/images/preevent/dummy_asset.JPG')" style="max-width: 50vh" />
            <v-img width="100%" fill-height cover :src="require('~/assets/images/preevent/dummy_asset.JPG')" style="max-width: 50vh" />
          </v-col>
        </v-row>
      </v-container>
    </div>
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
