<template>
  <v-container fluid fill-height justify-space-between align-start column class="pa-0 ma-0" style="background: #FFFFFF">
    <v-layout column>
      <v-flex>
        <v-container fill-height fluid class="pa-0">
          <v-layout wrap>
            <v-flex md12 class="px-4">
              <v-layout align-center column fill-height>
                <v-img :src="require('~/assets/arkav1.svg')" width="100%">
                  <v-layout align-center justify-center column fill-height>
                    <p id="typed" class="font-weight-bold text-center display-2" style="background-color: #31e8b4"></p>
                    <p class="text-center display-1" style="background-color: #e83158">Transforming soon, February 2020.</p>
                    <v-btn rounded class="text-capitalize" color="white">I'm interested!</v-btn>
                  </v-layout>
                </v-img>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Typed from 'typed.js';

  export default {
    name: 'HomeIntro',
    mounted() {
      new Typed('#typed', {
        strings: ['It\'s time for you to embrace the nation.', 'Lorem ipsum dolor sit amet', 'Arkav mantaps'],
        typeSpeed: 40,
        loop: true
      });
    }
  }
</script>

<style scoped>
</style>
