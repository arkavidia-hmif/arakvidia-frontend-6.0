<template>
  <v-container v-if="loggedIn" class="mt-12">
    <div class="headline font-weight-bold mt-12" style="color: black">
      Dashboard
    </div>
    <div class="display-1 font-weight-bold mt-2 mb-5" style="color: #0B909A">
      Halo, Nella Zabrina!
    </div>
    <v-tabs slider-color="#E44D4B" slider-size="5" class="text-transform-none">
      <v-tab v-for="(item, i) in dashboardMenus" :key="i" :to="''+item.route" style="text-transform: none;" class="font-weight-bold black--text caption">
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <v-divider />
    <p class="mt-4 grey--text text--darken-1">
      Competition
    </p>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, State } from 'nuxt-property-decorator';
import { dashboardMenus, Menu } from '../../constants/menus';
@Component
export default class DashboardIndex extends Vue {
  @State loggedIn!: boolean;
  dashboardMenus: Menu[] = dashboardMenus;

  head() {
    return {
      title: 'Dashboard'
    };
  }
}
</script>

<style scoped>

</style>
