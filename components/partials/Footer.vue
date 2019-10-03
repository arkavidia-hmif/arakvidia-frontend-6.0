<template>
  <div class="white">
    <v-divider />
    <v-container class="py-10">
      <v-row>
        <v-col :cols="12" :md="5">
          <div>
            <v-img :src="require('~/assets/logo-horz.svg')" contain height="50" position="left" />
            <div class="font-weight-bold mt-3">
              Arkavidia Informatics & IT Festival 6.0
            </div>
            <div class="mt-3">
              <a
                href="https://www.instagram.com/arkavidia"
                target="_blank"
                style="text-decoration: none"
              >
                <v-icon>fab fa-instagram</v-icon>
              </a>
              &nbsp;
              <a
                href="https://line.me/R/ti/p/%40aab5143y"
                target="_blank"
                style="text-decoration: none"
              >
                <v-icon>fab fa-line</v-icon>
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/company/arkavidia"
                target="_blank"
                style="text-decoration: none"
              >
                <v-icon>fab fa-linkedin</v-icon>
              </a>
            </div>
          </div>
        </v-col>
        <v-col :cols="12" :md="7">
          <v-row>
            <v-col :cols="12" :md="4">
              <div class="title font-weight-bold section-title">
                Competitions
              </div>
              <div class="mt-2">
                <div v-for="(menu, i) in competitionMenus" :key="i">
                  <nuxt-link :to="menu.route" class="nav-item">
                    {{ menu.title }}
                  </nuxt-link>
                </div>
              </div>
            </v-col>
            <v-col :cols="12" :md="4">
              <div class="title font-weight-bold section-title">
                Pre-Events
              </div>
              <div class="mt-2">
                <div v-for="(menu, i) in preEventMenus" :key="i">
                  <nuxt-link :to="menu.route" class="nav-item">
                    {{ menu.title }}
                  </nuxt-link>
                </div>
              </div>
            </v-col>
            <v-col :cols="12" :md="4">
              <div class="title font-weight-bold section-title">
                Main Events
              </div>
              <div class="mt-2">
                <div v-for="(menu, i) in mainEventMenus" :key="i">
                  <nuxt-link :to="menu.route" class="nav-item">
                    {{ menu.title }}
                  </nuxt-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="pa-5 black white--text font-weight-bold" align="center">
      &copy; 2019 ARKAVIDIA 6.0
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { competitionMenus, preEventMenus, mainEventMenus } from '~/constants/menus'

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      competitionMenus,
      preEventMenus,
      mainEventMenus
    }
  }
})
</script>

<style scoped>
  .section-title {
    position: relative;
    padding-bottom: 4px;
  }

  .section-title:after {
    content: "";
    position: absolute;
    width: 100px;
    height: 1px;
    bottom: 0;
    left: 0;
    border-bottom: 4px solid #FF084F;
  }

  .nav-item {
    text-decoration: none;
    color: black;
  }
</style>
