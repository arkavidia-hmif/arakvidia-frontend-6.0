<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <v-container class="pa-0">
      <v-flex>
        <v-toolbar flat color="transparent">
          <v-toolbar-title>
            <a :href="landingPageUrl">
              <v-img :src="require('../assets/logo.svg')" width="25" style="margin-right: 15px" />
            </a>
          </v-toolbar-title>
          <v-toolbar-title class="subheading font-weight-bold">
            <a :href="landingPageUrl" style="color: black; text-decoration: none;">
              ARKAVIDIA
            </a>
          </v-toolbar-title>

          <v-spacer />

          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn class="text-capitalize" text>
              Competitions
            </v-btn>
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
        </v-toolbar>
      </v-flex>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import ToolbarDropdown from '~/components/ToolbarDropdown.vue'
// import ToolbarButton from '~/components/ToolbarButton.vue'

export default Vue.extend({
  name: 'Toolbar',
  data () {
    return {
      landingPageUrl: '/'
    }
  }
})
</script>

<style scoped>
  .v-btn {
    font-weight: bold
  }
</style>
