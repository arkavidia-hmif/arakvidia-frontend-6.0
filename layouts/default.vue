<template>
  <v-app>
    <Toolbar></Toolbar>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
  import Toolbar from '~/components/subpage/Toolbar.vue'

  export default {
    components: {
      Toolbar
    }
  }
</script>
