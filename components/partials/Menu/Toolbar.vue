<template>
  <div>
    <v-system-bar
      v-if="loggedIn && auth.mediatedLogin && !!auth.user"
      dark
      fixed
      color="warning"
      height="40"
      style="z-index: 8"
    >
      <v-container>
        <v-icon small>
          fas fa-lock
        </v-icon>
        Login atas nama <strong>{{ auth.user.fullName }}</strong>
      </v-container>
    </v-system-bar>
    <v-app-bar
      fixed
      color="white"
      elevate-on-scroll
      :style="{marginTop: loggedIn && auth.mediatedLogin ? '40px' : undefined}"
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
            <v-btn v-if="!loggedIn" to="/login" class="text-capitalize" text>
              Login
            </v-btn>
            <v-btn v-if="!loggedIn" to="/register" class="text-capitalize" text>
              Register
            </v-btn>
            <v-btn v-if="loggedIn" to="/dashboard" class="text-capitalize" text>
              Dashboard
            </v-btn>
            <v-btn v-if="loggedIn" class="text-capitalize" text @click="attemptLogout">
              Logout
            </v-btn>
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
        <DrawerListItem v-if="!loggedIn" to="/login" title="Login" />
        <DrawerListItem v-if="!loggedIn" to="/register" title="Register" />
        <DrawerListItem v-if="loggedIn" to="/dashboard" title="Dashboard" />
        <v-list-item v-if="loggedIn" @click="attemptLogout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter, Action, State } from 'nuxt-property-decorator';
import { AuthState } from '../../../store/user';
import ToolbarDropdown from '~/components/partials/Menu/ToolbarDropdown.vue';
import { mainMenus, TopLevelMenu } from '~/constants/menus';
import DrawerListItem from '~/components/partials/Menu/Drawer/DrawerListItem.vue';
import DrawerListGroup from '~/components/partials/Menu/Drawer/DrawerListGroup.vue';
import MenuIcon from '~/components/partials/Menu/Drawer/MenuIcon.vue';

@Component({
  name: 'Toolbar',
  components: { ToolbarDropdown, DrawerListItem, DrawerListGroup, MenuIcon }
})
export default class DashboardIndex extends Vue {
  @State('user') auth!: AuthState;
  @Getter('user/isLoggedIn') loggedIn!: boolean;
  @Action('user/logout') actionLogout;

  mainMenus: TopLevelMenu[] = mainMenus;
  drawer: boolean = false;

  async attemptLogout() {
    await this.actionLogout();
    this.$router.push('/');
  }
}
</script>

<style scoped>
  .v-btn {
    font-weight: bold
  }
</style>
