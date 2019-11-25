<template>
  <DashboardWrapper>
    <v-row class="mt-4" align="stretch">
      <v-col v-for="competition in competitions" :key="competition.id" :cols="12" :lg="4" :sm="6">
        <CompetitionCard
          :title="competition.name"
          :to="'/dashboard/competition/' + competition.slug"
          :enabled="competition.isRegistrationOpen"
          :registered="!!teams.find(team => team.competition.id === competition.id)"
          :slug="competition.slug"
          :subtitle="competition.minTeamMembers === competition.maxTeamMembers
            ? `Tim terdiri dari tepat ${competition.minTeamMembers} orang`
            : `Tim terdiri dari ${competition.minTeamMembers} sampai ${competition.maxTeamMembers} orang`"
        />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Getter, Vue, Action } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import CompetitionCard from '~/components/partials/Dashboard/Competition/CompetitionCard.vue';

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

  mounted() {
    this.fetchCompetitionListAction();
    this.fetchTeamListAction();
  }

  get competitions() {
    return this.getCompetitions;
  }

  get teams() {
    return this.getTeams;
  }
}
</script>

<style scoped>
</style>
