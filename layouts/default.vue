<template>
  <v-app>
    <Toolbar class="front" />
    <v-content>
      <nuxt />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Toolbar from '~/components/partials/Toolbar.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  components: {
    Footer,
    Toolbar
  }
}
</script>
