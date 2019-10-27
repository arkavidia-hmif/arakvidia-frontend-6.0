<template>
  <v-container>
    <v-row v-if="!isLoading">
      <v-col :cols="12" :sm="4" :lg="3">
        <TabMenu :slug="competitionSlug" :team="teamDetails" />
      </v-col>
      <v-col :cols="12" :sm="8" :lg="9" align-self="center">
        <slot :team="teamDetails" />
      </v-col>
    </v-row>
    <div v-else class="pa-4" align="center">
      <v-progress-circular indeterminate />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action } from 'nuxt-property-decorator';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
import { Team } from '~/api/competition/types';

@Component({
  name: 'CompetitionWrapper',
  components: { TabMenu }
})
export default class CompetitionWrapper extends Vue {
  @Prop({ default: '' }) competitionSlug?: string;
  @Action('competition/fetchTeamList') actionFetchTeamList;
  @Action('competition/fetchTeamDetail') actionFetchTeamDetail;

  teamDetails: Team|undefined;
  isLoading: boolean = true;

  mounted() {
    this.isLoading = true;
    this.actionFetchTeamList()
      .then((teams: Team[]) => {
        const team: Team|undefined = teams.find((team: Team) => {
          if (!team.competition) { return false; }
          return (team.competition.slug === this.competitionSlug);
        });

        if (team) { return this.actionFetchTeamDetail(team.id); }
        else { return undefined; }
      })
      .then((team) => {
        this.teamDetails = team;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
</script>

<style scoped>

</style>
