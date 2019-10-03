<template>
  <div>
    <v-app-bar color="white" fixed app flat>
      <v-toolbar-title>
        <v-container fill-height class="pa-0">
          <nuxt-link to="/">
            <v-img :src="require('~/assets/logo.svg')" width="25" style="margin-right: 15px" />
          </nuxt-link>
          <div ml-1 class="font-weight-bold">
            ARKAVIDIA
          </div>
        </v-container>
      </v-toolbar-title>
      <v-spacer />
      <MenuIcon @click.native.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app disable-resize-watcher>
      <v-list>
        <DrawerListItem to="/" title="Home" active />
        <DrawerListGroup title="Competitions" :items="competitions" />
        <DrawerListGroup title="Pre-Events" :items="preevents" />
        <DrawerListGroup title="Events" :items="events" />
        <DrawerListItem to="/about" title="About" />
        <DrawerListItem to="https://dashboard.arkavidia.id/login" title="Login" />
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DrawerListItem from '~/components/partials/Drawer/DrawerListItem.vue'
import DrawerListGroup from '~/components/partials/Drawer/DrawerListGroup.vue'
import MenuIcon from '~/components/partials/Drawer/MenuIcon.vue'

export default ({
  name: 'NavigationDrawer',
  components: {
    DrawerListItem,
    DrawerListGroup,
    MenuIcon
  },
  data() {
    return {
      drawer: null,
      right: null,
      preevents: [
        { title: 'Arkavidia Academy', to: '/preevent/academy' },
        { title: 'Technocamp', to: '/preevent/technocamp' },
        { title: 'Arkavidia Goes To School', to: '/preevent/arkavidia-goes-to-school' }
      ],
      events: [
        { title: 'IT Festival', to: '/event/it-festival' },
        { title: 'Arkavidia Talk', to: '/event/talk' }
      ],
      competitions: [
        { title: 'Competitive Programming', to: '/competition/competitive-programming' },
        { title: 'Capture the Flag', to: '/competition/capture-the-flag' },
        { title: 'Hackavidia', to: '/competition/hackavidia' },
        { title: 'Datavidia', to: '/competition/datavidia' },
        { title: 'Arkalogica', to: '/competition/arkalogica' }
      ]
    }
  }
})
</script>
