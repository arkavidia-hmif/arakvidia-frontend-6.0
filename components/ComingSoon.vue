<template>
  <v-container
    fluid
    fill-height
    justify-space-between
    align-start
    column
    class="pa-0 ma-0"

    style="background: #E3F3E8"
  >
    <v-layout column>
      <v-flex>
        <v-container
          fill-height
          class="pa-0"
        >
          <v-layout wrap>
            <v-flex md6 class="px-4">
              <v-layout
                align-start
                column
                fill-height
              >
                <v-flex class="py-4">
                  <v-img :src="require('~/assets/logo.svg')" width="40" />
                </v-flex>
                <v-flex>
                  <div class="font-weight-bold">
                    ARKAVIDIA 6.0
                  </div>
                  <h1 class="heading font-weight-bold mt-2">
                    Tarik nafas dulu!
                  </h1>
                  <div class="subtitle-1">
                    Sebentar lagi jantung kalian bakal terpacu dengan teknologi yang membangun
                    Indonesia ke arah yang lebih baik!
                  </div>
                  <div class="mt-3">
                    <a
                      href="https://www.instagram.com/arkavidia"
                      target="_blank"
                      style="text-decoration: none"
                    >
                      <v-icon color="#1D7AA2">fab fa-instagram</v-icon>
                    </a>
                    &nbsp;
                    <a
                      href="https://line.me/R/ti/p/%40aab5143y"
                      target="_blank"
                      style="text-decoration: none"
                    >
                      <v-icon color="#1D7AA2">fab fa-line</v-icon>
                    </a>
                    &nbsp;
                    <a
                      href="https://www.linkedin.com/company/arkavidia"
                      target="_blank"
                      style="text-decoration: none"
                    >
                      <v-icon color="#1D7AA2">fab fa-linkedin</v-icon>
                    </a>
                  </div>
                </v-flex>
                <v-flex>
                  <div style="height: 60px" />
                </v-flex>
                <v-spacer />
                <v-flex shrink style="width: 100%; max-width: 400px;" class="pa-0">
                  <v-img width="100%" :src="require('~/assets/car-tree.svg')" />
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex md6 hidden-sm-and-down>
              <v-layout align-end row fill-height>
                <v-flex>
                  <v-img :src="require('~/assets/mine.svg')" width="100%" />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <div style="background: #B1DCBE; height: 120px;" />
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ComingSoon'
})
</script>

<style scoped>
  body {
    background: #E3F3E8 !important;
  }
</style>
