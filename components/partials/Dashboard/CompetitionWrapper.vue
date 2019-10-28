<template>
  <v-container>
    <v-row v-if="!isLoading && teamDetails">
      <v-col :cols="12" :sm="4" :lg="3">
        <TabMenu :slug="competitionSlug" :team="teamDetails" />
      </v-col>
      <v-col :cols="12" :sm="8" :lg="9">
        <slot :team="teamDetails" />
      </v-col>
    </v-row>
    <div v-else class="pa-4" align="center">
      <v-progress-circular indeterminate />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Action, Getter } from 'nuxt-property-decorator';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
import { Team } from '~/api/competition/types';

interface QueryParameters {
  continue?: string;
}

@Component({
  name: 'CompetitionWrapper',
  components: { TabMenu }
})
export default class CompetitionWrapper extends Vue {
  @Prop({ default: '' }) competitionSlug?: string;
  @Action('competition/fetchTeamList') actionFetchTeamList;
  @Action('competition/fetchTeamDetail') actionFetchTeamDetail;
  @Getter('competition/getCompetitions') getCompetitions;

  teamDetails: Team|null = null;
  isLoading: boolean = true;

  get competitions() {
    return this.getCompetitions;
  }

  get currentRoute() {
    const path = this.$route.path.split('/');
    return path[ path.length - 1 ];
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  isRegistered(teams) {
    return teams.find((team) => {
      if (team.competition != null) {
        return team.competition.slug === this.slug;
      }
      return false;
    }) != null;
  }

  get currentCompetition() {
    return this.competitions.find(competition => competition.slug === this.slug);
  }

  mounted() {
    this.isLoading = true;
    this.actionFetchTeamList()
      .then((teams: Team[]) => {
        const isRegistered = this.isRegistered(teams);

        if (!isRegistered) {
          const currentCompetition = this.currentCompetition;
          if (currentCompetition.isRegistrationOpen) {
            const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' +
              this.slug + '/register-tim';
            this.$router.push(redirectUrl);
          }
          else {
            const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.slug;
            this.$router.push(redirectUrl);
          }
        }
        const team: Team|undefined = teams.find((team: Team) => {
          if (!team.competition) { return false; }
          return (team.competition.slug === this.competitionSlug);
        });

        if (team) { return this.actionFetchTeamDetail(team.id); }
        else { return undefined; }
      })
      .then((team) => {
        if (team) { this.teamDetails = team; }
        else { this.$router.push(`/dashboard/competition/${this.competitionSlug}/register-tim`); }
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }
}
</script>

<style scoped>
</style>
