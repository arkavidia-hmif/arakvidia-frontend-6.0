<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-app-bar
    fixed
    color="white"
    elevate-on-scroll
  >
    <v-container class="py-0 px-0" align="center" fill-height>
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
          <ToolbarDropdown
            :title="'Competitions'"
            :list="[
              {title: 'Competitive Programming', route: '/competition/competitive-programming'},
              {title: 'Capture the Flag', route: '/competition/capture-the-flag'},
              {title: 'Hackavidia', route: '/competition/hackavidia'},
              {title: 'Datavidia', route: '/competition/datavidia'},
              {title: 'Arkalogica', route: '/competition/arkalogica'},
            ]"
          />
          <ToolbarDropdown
            :title="'Events'"
            :list="[
              {title: 'Arkavidia Academy', route: '/event/academy'},
              {title: 'Technocamp', route: '/event/technocamp'},
              {title: 'Arkavidia Goes To School', route: '/event/arkavidia-goes-to-school'},
              {title: 'IT Festival', route: '/event/it-festival'},
              {title: 'Arkavidia Talk', route: '/event/talk'},
            ]"
          />
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

export default Vue.extend({
  name: 'Toolbar',
  components: { ToolbarDropdown }
})
</script>

<style scoped>
  .v-btn {
    font-weight: bold
  }
</style>
