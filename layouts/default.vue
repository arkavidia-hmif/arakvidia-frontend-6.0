<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <nuxt />
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import Toolbar from '~/components/subpage/Toolbar.vue'
  import Footer from "~/components/subpage/Footer";

  export default {
    components: {
      Footer,
      Toolbar
    }
  }
</script>
