<template>
  <div>
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
            <template v-for="(menuItem, i) in mainMenus">
              <ToolbarDropdown v-if="menuItem.children" :key="i" :title="menuItem.title" :list="menuItem.children" />
              <v-btn v-else :key="i" class="text-capitalize" text :to="menuItem.route || ''">
                {{ menuItem.title }}
              </v-btn>
            </template>
          </v-toolbar-items>
          <v-toolbar-items class="hidden-md-and-up">
            <v-btn icon @click="drawer = !drawer">
              <MenuIcon />
            </v-btn>
          </v-toolbar-items>
        </v-layout>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list>
        <template v-for="(menuItem, i) in mainMenus">
          <DrawerListGroup v-if="menuItem.children" :key="i" :title="menuItem.title" :items="menuItem.children" />
          <DrawerListItem v-else :key="i" :to="menuItem.route" :title="menuItem.title" />
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mainMenus } from '../../constants/menus'
import ToolbarDropdown from '~/components/partials/ToolbarDropdown.vue'
import DrawerListItem from '~/components/partials/Drawer/DrawerListItem.vue'
import DrawerListGroup from '~/components/partials/Drawer/DrawerListGroup.vue'
import MenuIcon from '~/components/partials/Drawer/MenuIcon.vue'

export default Vue.extend({
  name: 'Toolbar',
  components: { ToolbarDropdown, DrawerListItem, DrawerListGroup, MenuIcon },
  data() {
    return {
      mainMenus,
      drawer: false
    }
  }
})
</script>

<style scoped>
  .v-btn {
    font-weight: bold
  }
</style>
