<template>
  
      <v-flex>
        <v-container fill-height class="pa-0">
          <v-layout wrap>        
            <v-layout align-center column fill-height>
              <v-img :src="require('~/assets/intro.svg')" contain style="height: 60vh" width="100%" class="ma-5">
                <v-layout align-center justify-center column fill-height>
                  <div class="text-center">
                    <p class="text-center display-2 main-heading">
                      <span class="font-weight-bold" id="typed"></span>
                    </p>
                  </div>
                  <div class="text-center mt-3">
                    <p class="text-center body-1 main-subtitle">Transforming soon, February 2020.</p>
                  </div>
                  <v-btn rounded class="text-capitalize mt-5" color="white">I'm interested!</v-btn>
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
        typeSpeed: 60,
        backDelay: 1000,
        loop: true
      });
    }
  }
</script>

<style scoped>
  .main-heading {
    background-color: #31e8b4;
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
