<template>
  <DashboardWrapper>
    <v-row v-if="!!competition">
      <v-col :cols="12" :md="6">
        <h5 class="mt-4 title font-weight-black">
          Pendaftaran {{ competition.name }}
        </h5>
        <Alert v-if="error" type="error" class="mt-4" :message="error" :details="errorDetails" />
        <form class="mt-4" @submit.prevent="attemptRegister">
          <v-text-field v-model="name" outlined dense label="Nama Tim" maxlength="40" />
          <v-text-field
            v-model="institution"
            outlined
            dense
            label="Nama Universitas/Sekolah"
            hint="Isi dengan nama resmi institusi tanpa singkatan"
            maxlength="50"
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
    <div v-else class="pa-4" align="center">
      <v-progress-circular indeterminate />
    </div>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Action, Getter } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import { ApiError } from '~/api/base';
import { RegisterTeamStatus, Team } from '~/api/competition/types';
import Alert from '~/components/partials/Alert.vue';

@Component({
  components: { Alert, DashboardWrapper }
})

export default class RegisterTeam extends Vue {
  name: string = '';
  institution: string = '';
  error: string = '';
  errorDetails: string = '';
  isRegistering: boolean = false;

  @Action('competition/fetchCompetitionList') fetchCompetitionListAction;
  @Action('competition/fetchTeamList') fetchTeamListAction;
  @Action('competition/registerTeam') registerTeamAction;
  @Getter('competition/getCompetitionsBySlug') competitions;

  head() {
    return {
      title: 'Pendaftaran ' + ((this.competition) ? this.competition.name : 'Lomba')
    };
  }

  layout() {
    return 'dashboard';
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  get competition() {
    return this.competitions[this.slug];
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
    this.fetchCompetitionListAction();
    this.fetchTeamListAction()
      .then((teams: Team[]) => {
        const isRegistered = this.isRegistered(teams);
        if (isRegistered) {
          this.$router.push(`/dashboard/competition/${this.slug}`);
        }
      });
  }

  attemptRegister() {
    if (!this.name) {
      this.error = 'Nama tim harus diisi';
      return;
    }

    if (this.name.length < 3) {
      this.error = 'Nama tim minimal 3 karakter';
      return;
    }

    if (!this.institution) {
      this.error = 'Sekolah/Institusi harus diisi';
      return;
    }

    this.isRegistering = true;
    this.error = '';

    const competitionId = this.competition.id;
    const name = this.name;
    const institution = this.institution;

    this.registerTeamAction({ competitionId, name, institution })
      .then(() => {
        const redirectUrl = `/dashboard/competition/${this.slug}`;
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          this.errorDetails = e.message;
          if (e.errorCode === RegisterTeamStatus.REGISTRATION_CLOSED) {
            this.error = 'Pendaftaran sudah ditutup';
            return;
          }
          else if (e.errorCode === RegisterTeamStatus.ALREADY_REGISTERED) {
            this.error = 'Tim sudah terdaftar';
            return;
          }
          else if (e.errorCode === RegisterTeamStatus.TEAM_NAME_USED) {
            this.error = `Silakan gunakan nama tim yang lain`;
            return;
          }
          else if (e.errorCode === RegisterTeamStatus.CREATE_TEAM_FAIL) {
            this.error = `Tidak dapat membuat tim :(`;
            return;
          }
          else if (e.errorCode === RegisterTeamStatus.ERROR) {
            this.error = `Tidak dapat membuat tim :(`;
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
}
</script>

<style scoped>
</style>
