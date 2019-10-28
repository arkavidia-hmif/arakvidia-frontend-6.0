<template>
  <DashboardWrapper>
    <v-container>
      <div class="px-12 mx-12">
        <h5 class="mt-4 title font-weight-black">
          {{ title }}
        </h5>
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
        <form @submit.prevent="attemptRegister">
          <v-text-field v-model="name" label="Team Name" />
          <v-text-field v-model="institution" label="Institute / School" />
          <div class="my-2">
            <v-btn
              class="my-5 primary subtitle-2 text-none px-5 font-weight-bold"
              style="border-radius: 50px"
              type="submit"
              :loading="isRegistering"
            >
              Register Team
            </v-btn>
          </div>
        </form>
      </div>
    </v-container>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Action, Getter } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import { ApiError } from '~/api/base';
import { RegisterTeamStatus } from '~/api/competition/types';

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
  @Getter('competition/getCompetitions') getCompetitions;

  get competitions() {
    return this.getCompetitions;
  }

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

  mounted() {
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
            this.error = 'Tidak dapat melakukan pendaftaran tim';
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
