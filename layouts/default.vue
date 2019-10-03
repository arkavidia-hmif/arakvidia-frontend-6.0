<template>
  <v-app>
    <Toolbar v-if="this.$vuetify.breakpoint.mdAndUp" class="front"/>
    <NavigationDrawer v-else class="front"/>
    <v-content>
      <nuxt />
    </v-content>

    <!-- <Toolbar />
    <v-content>
      <nuxt />
    </v-content> -->
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from '~/components/subpage/Toolbar.vue'
import Footer from '~/components/subpage/Footer.vue'
import NavigationDrawer from '~/components/subpage/NavigationDrawer.vue'

export default {
  components: {
    Footer,
    Toolbar,
    NavigationDrawer
  }
}
</script>
