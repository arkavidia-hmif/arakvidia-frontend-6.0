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
            @click="attemptDelete"
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
            @click="attemptChange"
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
import TabMenu from '~/components/partials/Dashboard/Competition/TabMenu.vue';
import { ApiError } from '~/api/base';
import CompetitionWrapper from '~/components/partials/Dashboard/Competition/CompetitionWrapper.vue';
import { Team, ChangeTeamStatus, DeleteTeamStatus } from '~/api/competition/types';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { CompetitionWrapper, DashboardWrapper, TabMenu }
})
export default class DashboardCompetitionIndex extends Vue {
  @Getter('competition/getTeams') teams!: Team[];
  @Action('competition/deleteTeam') deleteTeamAction;
  @Action('competition/changeTeam') changeTeamAction;

  changedTeamName: string = '';
  changedTeamInstitution: string = '';
  title: string = '';
  isChanging: boolean = false;
  isDeleting: boolean = false;
  error: string = '';

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

  get teamId(): number {
    return (this.team) ? this.team.id : 0;
  }

  get teamLeader(): string | undefined {
    return (this.team) ? this.team.teamLeaderEmail : '';
  }

  get competitionId(): number {
    return (this.team) ? this.team.competition ? this.team.competition.id != null
      ? this.team.competition.id : 0 : 0 : 0;
  }

  attemptChange() {
    if (!this.teamName) {
      this.error = 'Nama tim harus diisi';
      return;
    }

    if (!this.validateTeam(this.teamName)) {
      this.error = 'Nama tim minimal 3 karakter';
      return;
    }

    if (!this.teamInstitution) {
      this.error = 'Sekolah/Institusi harus diisi';
      return;
    }

    this.isChanging = true;
    this.error = '';

    const teamId = this.teamId;
    const name = this.changedTeamName ? this.changedTeamName : this.teamName;
    const institution = this.changedTeamInstitution ? this.changedTeamInstitution : this.teamInstitution;
    const teamLeaderEmail = this.teamLeader;

    this.changeTeamAction({ teamId, name, institution, teamLeaderEmail })
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.slug;
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === ChangeTeamStatus.ERROR) {
            this.error = 'Tidak dapat melakukan pengubahan data tim';
            return;
          }

          this.error = e.message;
          return;
        }

        this.error = e.toString();
      })
      .finally(() => {
        this.isChanging = false;
      });
  }

  attemptDelete() {
    this.isDeleting = true;
    this.error = '';

    const teamId = this.teamId;
    this.deleteTeamAction({ teamId })
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/';
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === DeleteTeamStatus.ERROR) {
            this.error = 'Tidak dapat menghapus tim';
            return;
          }

          this.error = e.message;
          return;
        }

        this.error = e.toString();
      })
      .finally(() => {
        this.isDeleting = false;
      });
  }

  validateTeam(team): boolean {
    return team.length >= 3;
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }
}
</script>

<style scoped>
</style>
