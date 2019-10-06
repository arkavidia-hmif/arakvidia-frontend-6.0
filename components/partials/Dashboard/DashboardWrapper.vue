<template>
  <v-container v-if="loggedIn" class="mt-12">
    <div class="headline font-weight-bold mt-12" style="color: black">
      Dashboard
    </div>
    <div class="display-1 font-weight-bold mt-2 mb-5" style="color: #0B909A">
      Halo, {{ user.fullName }}!
    </div>
    <v-tabs slider-color="#E44D4B" slider-size="5">
      <v-tab v-for="(item, i) in dashboardMenus" :key="i" :to="item.route" class="font-weight-bold black--text caption text-none">
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <v-divider />
    <div>
      <slot />
    </div>
  </v-container>
  <Forbidden v-else />
</template>

<script lang="ts">
import { Component, Vue, State } from 'nuxt-property-decorator';
import { dashboardMenus, Menu } from '~/constants/menus';
import { User } from '~/api/user';
import Forbidden from '~/components/Forbidden.vue';

@Component({
  name: 'DashboardWrapper',
  components: { Forbidden }
})
export default class DashboardWrapper extends Vue {
    @State loggedIn!: boolean;
    @State user!: User;
    dashboardMenus: Menu[] = dashboardMenus;
}
</script>

<style scoped>

</style>
