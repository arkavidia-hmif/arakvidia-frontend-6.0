<template>
  <v-flex>
    <v-container fill-height class="pa-0">
      <v-layout wrap>
        <v-layout align-center column fill-height>
          <v-img :src="require('~/assets/intro.svg')" contain style="height: 60vh" width="100%" class="ma-5">
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
                  Transforming soon, February 2020.
                </p>
              </div>
              <v-btn rounded class="text-capitalize mt-5" color="white">
                I'm interested!
              </v-btn>
            </v-layout>
          </v-img>
        </v-layout>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeIntro',
  data () {
    return {
      welcomeStrings: ['It\'s time for you to embrace the nation.', 'Arkavidia 6.0', 'Coming soon...']
    }
  }
})
</script>

<style scoped>
  .main-heading {
    background-color: #0FFFE2;
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
