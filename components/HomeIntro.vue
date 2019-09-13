<template>
  
      <v-flex>
        <v-container fill-height fluid class="pa-0">
          <v-layout wrap>        
            <v-layout align-center column fill-height>
              <v-img :src="require('~/assets/intro.svg')" width="100%" style="max-width: 900px; margin: 30px">
                <v-layout align-center justify-center column fill-height>
                  <p id="typed" class="font-weight-bold text-center display-2" style="background-color: #31e8b4;"></p>
                  <!-- <div style="background-color: #e83158; display: flex; justify-content: center; align-items: center;"> -->
                    <p class="text-center body-1" style="color: white; background-color: #e83158; padding: 10px">Transforming soon, February 2020.</p>
                  <!-- </div> -->
                  <v-btn rounded class="text-capitalize" color="white">I'm interested!</v-btn>
                </v-layout>
              </v-img>
            </v-layout>
          </v-layout>
        </v-container>
      </v-flex>
    
</template>

<script>
  import Typed from 'typed.js';

  export default {
    name: 'HomeIntro',
    mounted() {
      new Typed('#typed', {
        strings: ['It\'s time for you to embrace the nation.', 'Arkavidia 6.0', 'Coming soon...'],
        typeSpeed: 50,
        loop: true
      });
    }
  }
</script>

<style scoped>
</style>
