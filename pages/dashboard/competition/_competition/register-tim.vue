<template>
  <DashboardWrapper>
    <v-row>
      <v-col :cols="12" :md="6">
        <h5 class="mt-4 title font-weight-black">
          Pendaftaran {{ title }}
        </h5>
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
        <form class="mt-4" @submit.prevent="attemptRegister">
          <v-text-field v-model="name" outlined dense label="Nama Tim" />
          <v-text-field
            v-model="institution"
            outlined
            dense
            label="Nama Universitas/Sekolah"
            hint="Isi dengan nama resmi institusi tanpa singkatan"
          />
          <div class="my-2">
            <v-btn
              class="my-5 primary subtitle-2 text-none px-5 font-weight-bold"
              style="border-radius: 50px"
              type="submit"
              :loading="isRegistering"
            >
              Daftarkan Tim
            </v-btn>
          </div>
        </form>
      </v-col>
    </v-row>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Action, Getter } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import { ApiError } from '~/api/base';
import { RegisterTeamStatus, Team } from '~/api/competition/types';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { DashboardWrapper }
})

export default class RegisterTeam extends Vue {
  name: string = '';
  institution: string = '';
  title: string = '';
  error: string = '';
  isRegistering: boolean = false;

  @Action('competition/registerTeam') registerTeamAction;
  @Getter('competition/getCompetitions') competitions;
  @Action('competition/fetchTeamList') actionFetchTeamList;

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  get competitionId() {
    const currentCompetition = this.competitions.find(competition => competition.slug === this.slug);
    if (currentCompetition != null) {
      return currentCompetition.id;
    }
    return null;
  }

  isRegistered(teams) {
    const team = teams.find((team) => {
      if (team.competition != null) {
        return team.competition.slug === this.slug;
      }
      return false;
    });

    return !!team;
  }

  mounted() {
    this.actionFetchTeamList()
      .then((teams: Team[]) => {
        const isRegistered = this.isRegistered(teams);
        if (isRegistered) {
          this.$router.push(`/dashboard/competition/${this.slug}`);
        }
      });

    let i;
    const temp = this.slug.split('-');
    for (i = 0; i < temp.length; i++) {
      this.title += RegisterTeam.jsUcfirst(temp[i]);
      if (i !== temp.length - 1) {
        this.title += ' ';
      }
    }
  }

  head() {
    return {
      title: 'Pendaftaran ' + this.title
    };
  }

  static jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }

  attemptRegister() {
    if (!this.name) {
      this.error = 'Nama tim harus diisi';
      return;
    }

    if (!this.validateTeam(this.name)) {
      this.error = 'Nama tim minimal 3 karakter';
      return;
    }

    if (!this.institution) {
      this.error = 'Sekolah/Institusi harus diisi';
      return;
    }

    this.isRegistering = true;
    this.error = '';

    const competitionId = this.competitionId;
    const name = this.name;
    const institution = this.institution;

    this.registerTeamAction({ competitionId, name, institution })
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.slug;
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === RegisterTeamStatus.REGISTRATION_CLOSED) {
            this.error = 'Pendaftaran sudah ditutup';
            return;
          }
          else if (e.errorCode === RegisterTeamStatus.ALREADY_REGISTERED) {
            this.error = 'Tim sudah terdaftar';
            return;
          }
          else if (e.errorCode === RegisterTeamStatus.CREATE_TEAM_FAIL) {
            this.error = 'Tidak dapat melakukan pendaftaran tim';
            return;
          }
          else if (e.errorCode === RegisterTeamStatus.ERROR) {
            this.error = 'Silakan gunakan nama tim yang lain';
            return;
          }

          this.error = e.message;
          return;
        }

        this.error = e.toString();
      })
      .finally(() => {
        this.isRegistering = false;
      });
  }

  validateTeam(team): boolean {
    return team.length >= 3;
  }
}
</script>

<style scoped>
</style>
