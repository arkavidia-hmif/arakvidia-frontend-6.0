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
            :style="{'background-image': `url(${require('~/assets/ornaments/home-overview.svg')})`}"
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
              Arkavidia 6.0 adalah acara prestisius tahunan yang diselenggarakan oleh Himpunan Mahasiswa Informatika Institut Teknologi Bandung (HMIF ITB).
              Bertemakan "Embracing Our Nation in Digital Transformation," Arkavidia hadir untuk menyelaraskan dan menyebarluaskan transformasi digital yang sedang kita hadapi.
              Dengan pengalaman lebih dari 6 tahun dan 2000 peserta, Arkavidia berkembang lebih jauh lagi untuk memajukan pemahaman teknologi Indonesia.
            </p>
            <div class="mt-8">
              <v-btn
                large
                rounded
                color="#21C7C5"
                class="text-none mt-2"
                elevation="0"
                style="color: white"
                to="/about"
              >
                Baca lebih lanjut
              </v-btn>
            </div>
          </v-col>
          <v-col :cols="12" :md="3" :order="1" :order-md="3" align-self="stretch">
            <v-container fill-height class="pa-0 ma-0">
              <v-carousel
                v-model="aboutCarouselModel"
                :show-arrows="false"
                hide-delimiters
                height="100%"
              >
                <v-carousel-item
                  v-for="(image, i) in aboutImages"
                  :key="i"
                  :src="image"
                  height="auto"
                  :aspect-ratio="$vuetify.breakpoint.smAndDown ? 16/9 : 1"
                />
                <div class="pa-4 carousel-buttons">
                  <v-btn fab x-small light @click="aboutCarouselModel--">
                    <v-icon color="grey darken-2">
                      mdi-chevron-left
                    </v-icon>
                  </v-btn>
                  <v-btn fab x-small light class="ml-2" @click="aboutCarouselModel++">
                    <v-icon color="#e83158">
                      mdi-chevron-right
                    </v-icon>
                  </v-btn>
                </div>
              </v-carousel>
            </v-container>
          </v-col>
        </v-row>
        <v-row class="mt-12" align="stretch">
          <v-col :cols="12" :md="6" align-self="stretch">
            <v-carousel
              v-model="competitionCarouselModel"
              :show-arrows="false"
              hide-delimiters
              height="100%"
            >
              <v-carousel-item
                v-for="(item, i) in competitionImages"
                :key="i"
                :src="item.image"
                height="auto"
                :aspect-ratio="16/9"
              >
                <v-layout fill-height align-end justify-end class="pa-0">
                  <div class="white py-3 pl-8 pr-3">
                    <div v-if="item.subtitle" class="subtitle-1 font-weight-bold" align="end">
                      {{ item.subtitle }}
                    </div>
                    <div class="display-1 font-weight-bold" align="end" style="color: #e83158">
                      {{ item.title }}
                    </div>
                    <div align="end">
                      <nuxt-link
                        class="subtitle-2 font-weight-bold"
                        :to="item.route"
                        style="color: #21C7C5; text-decoration: none"
                      >
                        Info lebih lanjut
                      </nuxt-link>
                    </div>
                  </div>
                </v-layout>
              </v-carousel-item>
              <div class="pa-4 carousel-buttons">
                <v-btn fab x-small light @click="competitionCarouselModel--">
                  <v-icon color="grey darken-2">
                    mdi-chevron-left
                  </v-icon>
                </v-btn>
                <v-btn fab x-small light class="ml-2" @click="competitionCarouselModel++">
                  <v-icon color="#e83158">
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </div>
            </v-carousel>
          </v-col>
          <v-col :cols="12" :md="6" align-self="center">
            <div class="headline font-weight-bold">
              Kompetisi
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Asah logika, pengetahuan, dan talentamu lalu tunjukkan kemampuanmu di Arkavidia tahun ini.
              Arkavidia memiliki berbagai macam kompetisi bergengsi yang dapat membantu mengasah dan mempertajam kemampuanmu dengan bersaing menghadapi lawan dari seluruh Indonesia.
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-12" align="stretch">
          <v-col :cols="12" :md="6" :order="1" :order-md="2" align-self="stretch">
            <v-carousel
              v-model="eventCarouselModel"
              :show-arrows="false"
              hide-delimiters
              height="100%"
            >
              <v-carousel-item
                v-for="(item, i) in eventImages"
                :key="i"
                :src="item.image"
                height="auto"
                :aspect-ratio="16/9"
              >
                <v-layout fill-height align-end justify-end class="pa-0">
                  <div class="white py-3 pl-8 pr-3">
                    <div v-if="item.subtitle" class="subtitle-1 font-weight-bold" align="end">
                      {{ item.subtitle }}
                    </div>
                    <div class="display-1 font-weight-bold" align="end" style="color: #e83158">
                      {{ item.title }}
                    </div>
                    <div align="end">
                      <nuxt-link
                        class="subtitle-2 font-weight-bold"
                        :to="item.route"
                        style="color: #21C7C5; text-decoration: none"
                      >
                        Info lebih lanjut
                      </nuxt-link>
                    </div>
                  </div>
                </v-layout>
              </v-carousel-item>
              <div class="pa-4 carousel-buttons">
                <v-btn fab x-small light @click="eventCarouselModel--">
                  <v-icon color="grey darken-2">
                    mdi-chevron-left
                  </v-icon>
                </v-btn>
                <v-btn fab x-small light class="ml-2" @click="eventCarouselModel++">
                  <v-icon color="#e83158">
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
              </div>
            </v-carousel>
          </v-col>
          <v-col :cols="12" :md="6" :order="2" :order-md="1" align-self="center">
            <div class="headline font-weight-bold">
              Mata Acara
            </div>
            <p class="mt-4 grey--text text--darken-1">
              Tertarik mendalami ilmu dan teknologi terbaru?
              Atau sekadar penasaran dengan transformasi digital apa saja yang sudah dan akan terjadi di sekitar kita?
              Tenang, Arkavidia hadir dengan berbagai acara menarik yang dapat memenuhi rasa ingin tahu Anda.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeOverview',
  data() {
    return {
      aboutCarouselModel: 0,
      competitionCarouselModel: 0,
      eventCarouselModel: 0,
      aboutImages:
        [
          require('~/assets/images/home/about-home-1.jpg'),
          require('~/assets/images/home/about-home-2.jpg')
        ],
      competitionImages: [
        {
          image: require('~/assets/images/competition/arkalogica.jpg'),
          route: '/competition/arkalogica',
          title: 'Arkalogica'
        },
        {
          image: require('~/assets/images/competition/cp.jpg'),
          route: '/competition/competitive-programming',
          title: 'Competitive Programming'
        },
        {
          image: require('~/assets/images/competition/ctf.jpg'),
          route: '/competition/capture-the-flag',
          title: 'Capture the Flag'
        },
        {
          image: require('~/assets/images/competition/datavidia.jpg'),
          route: '/competition/datavidia',
          title: 'Datavidia',
          subtitle: 'Kompetisi baru!'
        },
        {
          image: require('~/assets/images/competition/hackavidia.jpg'),
          route: '/competition/hackavidia',
          title: 'Hackavidia',
          subtitle: 'Kompetisi baru!'
        }
      ],
      eventImages: [
        {
          image: require('~/assets/images/preevent/academy/software-engineering/hero.jpeg'),
          route: '/preevent/arkavidia-academy/software-engineering',
          title: 'Arkavidia Academy'
        },
        {
          image: require('~/assets/images/preevent/technocamp/hero.jpg'),
          route: '/preevent/technocamp',
          title: 'Technocamp'
        },
        {
          image: require('~/assets/images/preevent/agts/hero.jpg'),
          route: '/preevent/arkavidia-goes-to-school',
          title: 'Arkavidia Goes To School'
        },
        {
          image: require('~/assets/images/event/arkavtalk/hero.jpg'),
          route: '/event/arkavidia-talk',
          title: 'Arkavidia Talk'
        },
        {
          image: require('~/assets/images/event/itfest/hero.jpg'),
          route: '/event/it-festival',
          title: 'IT Festival'
        }
      ]
    };
  }
});
</script>

<style scoped>
  #about-bg {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
  }
  .carousel-buttons {
    position: absolute;
    z-index: 1;
    bottom: 0
  }
</style>
