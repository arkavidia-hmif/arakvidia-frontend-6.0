<template>
  <DashboardWrapper>
    <v-row class="mt-4">
      <v-col v-for="competition in competitions" :key="competition.id" :cols="12" :lg="4" :sm="6">
        <CompetitionCard
          :title="competition.name"
          :subtitle="competitionsMap[competition.slug] ? competitionsMap[competition.slug]['name'] : ''"
          :to="'/dashboard/competition/' + competition.slug"
          :button-title="competitionsMap[competition.slug] ? 'Lihat Pendaftaran' : 'Daftar'"
          :enabled="competition.isRegistrationOpen"
        />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Action, Getter, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import CompetitionCard from '~/components/partials/Dashboard/CompetitionCard.vue';
import { Team } from '~/api/competition/types';

@Component({
  components: { DashboardWrapper, CompetitionCard }
})
export default class DashboardIndex extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  }
  @Action('competition/fetchCompetitionList') fetchCompetitionListAction;
  @Action('competition/fetchTeamList') fetchTeamListAction;
  @Getter('competition/getCompetitions') getCompetitions;
  @Getter('competition/getTeams') getTeams;

  competitionsMap = {};

  get competitions() {
    return this.getCompetitions;
  }

  mounted() {
    this.fetchCompetitionListAction();
    this.fetchTeamListAction()
      .then((teams: Team[]) => {
        teams.forEach((team: Team) => {
          if (!team.competition) { return; }

          const competitionsMap = { ...this.competitionsMap };
          competitionsMap[team.competition.slug] = team;
          this.competitionsMap = competitionsMap;
        });
      });
  }
}
</script>

<style scoped>
</style>
