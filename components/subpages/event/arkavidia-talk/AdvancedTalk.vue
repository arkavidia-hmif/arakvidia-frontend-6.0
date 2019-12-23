<template>
  <v-container px-4>
    <div class="headline font-weight-bold">
      Advanced Talks
    </div>
    <div class="mt-4 mb-2 grey--text text--darken-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="d-flex flex-column">
      <v-row justify="center">
        <v-col :cols="12" :md="6" align-self="center">
          <div class="section">
            <div class="title font-weight-bold">
              Sesi 1
            </div>
            <div class="subtitle font-weight-bold">
              <v-row style="margin-left: 0; margin-right: 0;">
                <div>
                  <i class="fa fa-calendar" aria-hidden="true" />
                  09.00 - 11.00
                </div>
                <div style="margin-left: 1rem;">
                  <i class="fa fa-map-marker" aria-hidden="true" />
                  Auditorium CC Barat
                </div>
              </v-row>
            </div>
          </div>
          <div class="content" justify-center>
            <v-row style="margin-left: 0; margin-right: 0; margin-top: 1rem;">
              <v-col :cols="12" :md="4" :order-md="2" style="padding: 0;">
                <v-row no-gutters style="box-shadow: inset 0 -25px 0 #F3F5F5;">
                  <v-col :cols="8" :md="12" :offset="2" :offset-md="0">
                    <div>
                      <v-img width="100%" fill-height cover :src="require('~/assets/images/event/arkavtalk/dummy.jpeg')" />
                    </div>
                    <div class="section">
                      <div class="font-weight-bold">
                        Muhammad Aditya Hilmy
                      </div>
                      <div>
                        Data Scientist Tokopedia
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :md="8" :order-md="1" style="background-color: #F3F5F5;">
                <div class="title font-weight-bold" style="color: #9106FF">
                  Artificial Intelligence: <br> Mankind's Last Invention That Change The World
                </div>
                <p class="mt-4 grey--text text--darken-1">
                  Membahas bagaimana AI pertama kali ditemukan dan sudah sejauh apa perkembangan AI dari awal ditemukan hingga sekarang.
                </p>
                <div class="mt-2 mb-2" style="color: white;">
                  <v-btn
                    large
                    rounded
                    style="background-color: #9106FF; color: white;"
                    class="text-none mt-2"
                    elevation="0"
                    to="/dashboard/arkavidia-talk"
                  >
                    Daftar Sekarang
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col :cols="12" :md="6" align-self="center">
          <div class="section">
            <div class="title font-weight-bold">
              Sesi 2
            </div>
            <div class="subtitle font-weight-bold">
              <v-row style="margin-left: 0; margin-right: 0;">
                <div>
                  <i class="fa fa-calendar" aria-hidden="true" />
                  09.00 - 11.00
                </div>
                <div style="margin-left: 1rem;">
                  <i class="fa fa-map-marker" aria-hidden="true" />
                  Auditorium CC Barat
                </div>
              </v-row>
            </div>
          </div>
          <div class="content" justify-center>
            <v-row style="margin-left: 0; margin-right: 0; margin-top: 1rem;">
              <v-col :cols="12" :md="4" :order-md="2" style="padding: 0;">
                <v-row no-gutters style="box-shadow: inset 0 -25px 0 #F3F5F5;">
                  <v-col :cols="8" :md="12" :offset="2" :offset-md="0">
                    <div>
                      <v-img width="100%" fill-height cover :src="require('~/assets/images/event/arkavtalk/dummy.jpeg')" />
                    </div>
                    <div class="section">
                      <div class="font-weight-bold">
                        Muhammad Aditya Hilmy
                      </div>
                      <div>
                        Data Scientist Tokopedia
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col :cols="12" :md="8" :order-md="1" style="background-color: #F3F5F5;">
                <div class="title font-weight-bold" style="color: #9106FF">
                  Artificial Intelligence: <br> Mankind's Last Invention That Change The World
                </div>
                <p class="mt-4 grey--text text--darken-1">
                  Membahas bagaimana AI pertama kali ditemukan dan sudah sejauh apa perkembangan AI dari awal ditemukan hingga sekarang.
                </p>
                <div class="mt-2 mb-2" style="color: white;">
                  <v-btn
                    large
                    rounded
                    style="background-color: #9106FF; color: white;"
                    class="text-none mt-2"
                    elevation="0"
                    to="/dashboard/arkavidia-talk"
                  >
                    Daftar Sekarang
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AdvancedTalk'
});
</script>

<style scoped>
.section {
  background-color: #9106FF;
  color: white;
  padding: 0.8rem;
}
</style>
