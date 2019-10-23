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
          <v-text-field v-model="team" label="Team Name" />
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
import { Component, State, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import { ApiError } from '~/api/base';
import { RegistrationStatus, competitionMap } from '~/api/competition';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { DashboardWrapper }
})

export default class RegisterTeam extends Vue {
  team: string = '';
  institution: string = '';
  title: string = '';
  error: string = '';
  isRegistering: boolean = false;
  competitionId: number = 0;

  get id() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  mounted() {
    let i;
    const temp = this.id.split('-');
    for (i = 0; i < temp.length; i++) {
      this.title += RegisterTeam.jsUcfirst(temp[i]);
      if (i !== temp.length - 1) {
        this.title += ' ';
      }
    }

    this.competitionId = competitionMap[this.id];
  }

  head() {
    return {
      title: 'Pendaftaran' + this.title
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
    if (!this.team) {
      this.error = 'Nama tim harus diisi';
      return;
    }

    if (!this.validateTeam(this.team)) {
      this.error = 'Nama tim minimal 3 karakter';
      return;
    }

    if (!this.institution) {
      this.error = 'Sekolah/Institusi harus diisi';
      return;
    }

    this.isRegistering = true;
    this.error = '';
    this.$arkavidiaApi.competition.registerTeam(this.competitionId, this.team, this.institution)
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.id;
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === RegistrationStatus.NAME_EXISTS) {
            this.error = 'Nama tim sudah terdaftar';
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
