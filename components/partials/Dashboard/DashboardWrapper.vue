<template>
  <div>
    <v-container v-if="loggedIn && !!authState.user" class="mt-12">
      <div class="headline font-weight-bold mt-12" style="color: black">
        Dashboard
      </div>
      <div class="display-1 font-weight-bold mt-2 mb-5" style="color: #0B909A">
        Halo, {{ authState.user.fullName }}!
      </div>
      <v-tabs slider-color="#E44D4B" slider-size="5" class="noprevpadding">
        <v-tab v-for="(item, i) in dashboardMenus" :key="i" :to="item.route" :disabled="item.disabled || false" class="font-weight-bold black--text sub-title-1 text-none">
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <v-divider />
      <div>
        <slot />
      </div>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, State, Getter, Action } from 'nuxt-property-decorator';
import { dashboardMenus, Menu } from '~/constants/menus';
import { AuthState } from '~/store/user';

@Component({
  name: 'DashboardWrapper'
})
export default class DashboardWrapper extends Vue {
  @Getter('user/isLoggedIn') loggedIn!: boolean;
  @State('user') authState!: AuthState;
  dashboardMenus: Menu[] = dashboardMenus;
  @Action('competition/fetchCompetitionList') fetchCompetitionListAction;
  @Action('competition/fetchTeamList') fetchTeamListAction;
  @Action('preevent/fetchPreEventList') fetchPreEventListAction;
  @Action('preevent/fetchRegistrantList') fetchRegistrantListAction;

  mounted() {
    this.fetchCompetitionListAction();
    this.fetchTeamListAction();
    this.fetchPreEventListAction();
    this.fetchRegistrantListAction();
  }
}
</script>

<style scoped>
  .noprevpadding /deep/.v-slide-group__prev {
    display: none !important;
  }
</style>
