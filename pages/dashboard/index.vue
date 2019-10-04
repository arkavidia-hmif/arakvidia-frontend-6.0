<template>
  <v-container v-if="loggedIn" class="mt-12">
    Is logged in: {{ loggedIn }}
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, State } from 'nuxt-property-decorator';

@Component
export default class DashboardIndex extends Vue {
  @State loggedIn!: boolean;

  head() {
    return {
      title: 'Dashboard'
    };
  }
}
</script>

<style scoped>

</style>
