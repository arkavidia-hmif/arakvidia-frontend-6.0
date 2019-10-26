<template>
  <DashboardWrapper>
    <v-row class="mt-4">
      <v-col :cols="12" :lg="4" :sm="6" v-for="competition in competitions" :key="competition.id">
          <CompetitionCard v-if="teams.find(team => team.competition.id == competition.id) != null"
            :title="competition.name"
            subtitle=""
            :to="'/dashboard/competition/' + competition.slug"
            button-title="View Application"
            :enabled="true" />
          <CompetitionCard v-else-if="competition.isRegistrationOpen"
            :title="competition.name"
            subtitle=""
            :to="'/dashboard/competition/' + competition.slug + '/register-tim'"
            button-title="View Application"
            :enabled="true" />
          <CompetitionCard v-else
            :title="competition.name"
            subtitle=""
            :to="'/dashboard/competition/' + competition.slug"
            button-title="Not Open for Registration"
            :enabled="false" />
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Action, Getter, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import CompetitionCard from '~/components/partials/Dashboard/CompetitionCard.vue';

@Component({
  components: { DashboardWrapper, CompetitionCard }
})
export default class DashboardIndex extends Vue {
  head() {
    return {
      title: 'Dashboard'
    };
  };
  @Getter('competition/getCompetitions') getCompetitions;
  @Getter('competition/getTeams') getTeams;

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
