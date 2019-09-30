<template>
  <v-container pa-0 class="d-flex flex-column">
    <div class="d-flex flex-column" style="flex: 1">
      <v-container px-4>
        <v-row align="stretch">
          <v-col
            id="about-bg"
            :cols="12"
            :md="3"
            :order-md="1"
            class="hidden-sm-and-down"
            align-self="stretch"
            :style="{'background-image': `url(${require('~/assets/home-overview.svg')})`}"
          >
            <v-layout justify-center column fill-height float-right>
              <div class="display-1 font-weight-bold">
                Tentang<br>Arkavidia
              </div>
              <div class="display-2 font-weight-bold" style="color: #e83158">
                6.0
              </div>
            </v-layout>
          </v-col>
          <v-col :cols="12" :md="4" :order="2" class="hidden-md-and-up">
            <div class="display-1 font-weight-bold">
              Tentang Arkavidia
            </div>
            <div class="display-2 font-weight-bold" style="color: #e83158">
              6.0
            </div>
          </v-col>
          <v-col
            :cols="12"
            :md="6"
            :order="3"
            :order-md="2"
            mx-3
            align-self="center"
          >
            <p class="mt-4 grey--text text--darken-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
            <div class="mt-8">
              <v-btn
                large
                rounded
                color="#21C7C5"
                class="text-none mt-2"
                elevation="0"
                style="color: white"
              >
                Baca lebih lanjut
              </v-btn>
            </div>
          </v-col>
          <v-col :cols="12" :md="3" :order="1" :order-md="3" align-self="stretch">
            <v-container fill-height class="pa-0 ma-0">
              <v-carousel
                v-model="aboutCarouselModel"
                show-arrows
                hide-delimiters
                height="100%"
              >
                <v-carousel-item
                  v-for="(image) in aboutImages"
                  :key="image"
                  :src="require(`~/assets/${image}`)"
                  height="auto"
                  :aspect-ratio="$vuetify.breakpoint.smAndDown ? 16/9 : 1"
                />
              </v-carousel>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="mt-12" align="stretch">
          <v-col :cols="12" :md="6" align-self="stretch">
            <v-carousel
              v-model="competitionCarouselModel"
              show-arrows
              hide-delimiters
              height="100%"
            >
              <v-carousel-item
                v-for="(image) in competitionImages"
                :key="image"
                :src="require(`~/assets/${image}`)"
                height="auto"
                :aspect-ratio="16/9"
              >
                <v-layout justify-end column fill-height align-end>
                  <div class="white py-3 pl-10 pr-3">
                    <div class="subtitle-1 font-weight-bold" align="end">
                      Kompetisi baru!
                    </div>
                    <div class="display-1 font-weight-bold" align="end" style="color: #e83158">
                      Hackathon
                    </div>
                    <div align="end">
                      <nuxt-link
                        class="subtitle-2 font-weight-bold"
                        to="/competition/hackathon"
                        style="color: #21C7C5; text-decoration: none"
                      >
                        Info
                        lebih lanjut
                      </nuxt-link>
                    </div>
                  </div>
                </v-layout>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col :cols="12" :md="6" align-self="center">
            <div class="headline font-weight-bold">
              Kompetisi
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-12" align="stretch">
          <v-col :cols="12" :md="6" :order="1" :order-md="2" align-self="stretch">
            <v-carousel
              v-model="eventCarouselModel"
              show-arrows
              hide-delimiters
              height="100%"
            >
              <v-carousel-item
                v-for="(image) in eventImages"
                :key="image"
                :src="require(`~/assets/${image}`)"
                height="auto"
                :aspect-ratio="16/9"
              >
                <v-layout justify-end column fill-height align-end>
                  <div class="white py-3 pl-10 pr-3">
                    <div class="display-1 font-weight-bold" align="end" style="color: #e83158">
                      Gala Dinner
                    </div>
                    <div align="end">
                      <nuxt-link
                        class="subtitle-2 font-weight-bold"
                        to="/competition/hackathon"
                        style="color: #21C7C5; text-decoration: none"
                      >
                        Info
                        lebih lanjut
                      </nuxt-link>
                    </div>
                  </div>
                </v-layout>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col :cols="12" :md="6" :order="2" :order-md="1" align-self="center">
            <div class="headline font-weight-bold">
              Mata Acara
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeOverview',
  data () {
    return {
      aboutCarouselModel: 0,
      competitionCarouselModel: 0,
      eventCarouselModel: 0,
      aboutImages: ['hackathon_intro.jpg', 'logo.svg', 'mine.svg'],
      competitionImages: ['hackathon_intro.jpg', 'logo.svg'],
      eventImages: ['hackathon_intro.jpg', 'logo.svg']
    }
  }
})
</script>

<style scoped>
  #about-bg {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
  }
</style>
