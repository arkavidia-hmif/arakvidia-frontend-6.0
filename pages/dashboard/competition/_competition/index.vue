<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-slug="slug">
      <div class="px-auto mx-auto">
        <h5 class="mt-4 title font-weight-black">
          {{ title }}
        </h5>
        <v-text-field v-model="teamName" dense outlined label="Nama Tim" class="mt-6" />
        <v-text-field v-model="teamInstitution" dense outlined label="Universitas / SMA" />
        <div class="my-2">
          <v-btn
            id="delete"
            text
            large
            class="mx-5 subtitle-2 text-none px-5 font-weight-bold"
            style="border-radius: 50px; border: 2px solid #E44D4B;  color: #E44D4B; float: left;"
            :loading="isDeleting"
          >
            Hapus Tim
          </v-btn>
          <v-btn
            id="add"
            text
            large
            class="mx-5 subtitle-2 text-none px-5 font-weight-bold"
            style="border-radius: 50px; color: white; float: left; background-color: #197AD2;"
            :loading="isChanging"
          >
            Simpan Tim
          </v-btn>
        </div>
      </div>
    </CompetitionWrapper>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Action, Getter } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/TabMenu.vue';
import { ApiError } from '~/api/base';
import CompetitionWrapper from '~/components/partials/Dashboard/CompetitionWrapper.vue';
import { Team } from '~/api/competition/types';

@Component({
  components: { CompetitionWrapper, DashboardWrapper, TabMenu }
})
export default class DashboardCompetitionIndex extends Vue {
  @Getter('competition/getTeams') teams!: Team[];

  changedTeamName: string = '';
  changedTeamInstitution: string = '';
  title: string = '';
  isChanging: boolean = false;
  isDeleting: boolean = false;

  head() {
    return {
      title: 'Informasi Tim'
    };
  }

  mounted() {
    let i;
    const temp = this.slug.split('-');
    for (i = 0; i < temp.length; i++) {
      this.title += DashboardCompetitionIndex.jsUcfirst(temp[i]);
      if (i !== temp.length - 1) {
        this.title += ' ';
      }
    }
  }

  static jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  get team(): Team|undefined {
    return this.teams.find((team: Team) => {
      if (!team.competition) { return false; }
      return (team.competition.slug === this.slug);
    });
  }

  get teamName(): string {
    return (this.team) ? this.team.name : '';
  }

  set teamName(teamName: string) {
    this.changedTeamName = teamName;
    
  }

  get teamInstitution(): string {
    return (this.team) ? this.team.institution : '';
  }

  set teamInstitution(teamInstitution: string) {
    this.changedTeamInstitution = teamInstitution;
  }
}
</script>

<style scoped>
</style>
