<template>
  <v-container
    id="bg"
    :style="{'background-image': `url(${require('~/assets/intro.svg')})`}"
    width="100%"
    fill-height
    column
    align="center"
  >
    <v-layout align-center justify-center column fill-height>
      <vue-typed-js
        :back-delay="1000"
        :type-speed="50"
        loop
        :strings="welcomeStrings"
      >
        <div class="text-center">
          <p class="text-center display-2 main-heading">
            <span class="typing font-weight-bold" />
          </p>
        </div>
      </vue-typed-js>
      <div class="text-center mt-3">
        <p class="text-center body-1 main-subtitle">
          February, 8th 2020
        </p>
      </div>
      <v-btn rounded class="text-none mt-5" color="white" @click="() => $vuetify.goTo('#home-overview')">
        I'm interested!
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeIntro',
  data() {
    return {
      welcomeStrings: ['It\'s time for you to embrace the nation.', 'ARKAVIDIA 6.0', 'Coming soon..']
    };
  }
});
</script>

<style scoped>
  #bg {
    min-height: 100vh;
    background-position: center;
    background-size: auto 75%;
    background-repeat: no-repeat;
  }

  .main-heading {
    display: inline;
    line-height: 1.5;
    padding: 4px 8px 4px 8px;
    box-decoration-break: clone;
  }

  .main-subtitle {
    color: white;
    background-color: #e83158;
    padding: 10px;
    display: inline;
    box-decoration-break: clone;
  }
</style>
