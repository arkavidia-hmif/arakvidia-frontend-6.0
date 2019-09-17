<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
      fixed
      flat
      color="white"
      :elevate-on-scroll="true"
  >
    <v-container class="pa-0" align="center" fill-height>
      <v-layout>
        <v-toolbar-title>
          <v-container fill-height class="pa-0">
            <nuxt-link to="/">
              <v-img :src="require('~/assets/logo.svg')" width="25" style="margin-right: 15px" />
            </nuxt-link>
          </v-container>
        </v-toolbar-title>
        <v-toolbar-title class="subheading font-weight-bold">
          <v-container fill-height class="pa-0">
            <nuxt-link to="/" style="color: black; text-decoration: none;">
              ARKAVIDIA
            </nuxt-link>
          </v-container>
        </v-toolbar-title>

        <v-spacer />

        <v-toolbar-items class="hidden-sm-and-down">
          <!-- <v-btn class="text-capitalize" text>
            Competitions
          </v-btn> -->
          <ToolbarDropdown
              :title="'Competitions'"
              :list="[
                {title: 'Hackathon', route: '/competition/hackathon'},
                {title: 'Competitive Programming', route: '/competition/competitive-programming'}
              ]"
          />
          <v-btn class="text-capitalize" text>
            Events
          </v-btn>
          <v-btn class="text-capitalize" text>
            About
          </v-btn>
          <v-btn class="text-capitalize" text>
            Login
          </v-btn>
          <v-btn class="text-capitalize" text>
            Register
          </v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-md-and-up">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon v-on="on" />
            </template>
            <v-list>
              <v-list-item exact>
                <v-list-item-title>Competitions</v-list-item-title>
              </v-list-item>
              <v-list-item exact>
                <v-list-item-title>Events</v-list-item-title>
              </v-list-item>
              <v-list-item exact>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>
              <v-list-item exact>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item>
              <v-list-item exact>
                <v-list-item-title>Register</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar-items>
      </v-layout>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import ToolbarDropdown from '~/components/partials/ToolbarDropdown.vue'
// import ToolbarLink from '~/components/partials/ToolbarLink.vue'

export default Vue.extend({
  name: 'Toolbar',
  components: {ToolbarDropdown}
})
</script>

<style scoped>
  .v-btn {
    font-weight: bold
  }
</style>
