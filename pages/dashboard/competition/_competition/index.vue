<template>
  <DashboardWrapper>
    <CompetitionWrapper :competition-slug="slug">
      <div v-if="!!team" class="px-auto mx-auto">
        <h5 class="mt-4 title font-weight-black">
          {{ title }}
        </h5>
        <v-text-field
          v-model="teamName"
          dense
          outlined
          label="Nama Tim"
          class="mt-6"
          maxlength="40"
          :disabled="!team.competition.isRegistrationOpen"
        />
        <v-text-field
          v-model="teamInstitution"
          dense
          outlined
          label="Universitas / SMA"
          maxlength="50"
          :disabled="!team.competition.isRegistrationOpen"
        />
        <div class="my-2">
          <v-btn
            v-if="team.competition.isRegistrationOpen"
            color="#197AD2"
            outlined
            class="subtitle-2 text-none font-weight-bold"
            :loading="isChanging"
            @click="attemptChange"
          >
            <v-icon small class="mr-2">
              fas fa-save
            </v-icon>
            Simpan Tim
          </v-btn>
          <v-btn
            v-if="team.competition.isRegistrationOpen"
            color="red"
            outlined
            class="subtitle-2 text-none font-weight-bold ml-2"
            @click="dialog = true"
          >
            <v-icon small class="mr-2">
              fas fa-trash
            </v-icon>
            Hapus Tim
          </v-btn>
        </div>
      </div>
    </CompetitionWrapper>
    <v-dialog
      v-model="dialog"
      max-width="520"
    >
      <v-card>
        <div class="pa-5">
          Apakah kamu yakin ingin membatalkan pendaftaran?
          <br>
          <b>Informasi yang kamu masukkan akan dihapus secara permanen.</b>
        </div>
        <Alert v-if="!!error" type="error" :message="error" :details="errorDetails" class="ma-5" />
        <v-card-actions>
          <v-spacer />

          <v-btn
            color=""
            text
            :disabled="isDeleting"
            @click="dialog = false"
          >
            Tidak
          </v-btn>
          <v-btn
            color="primary"
            text
            :loading="isDeleting"
            @click="attemptDelete"
          >
            Ya
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, Action, Getter } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import TabMenu from '~/components/partials/Dashboard/Competition/TabMenu.vue';
import { ApiError } from '~/api/base';
import CompetitionWrapper from '~/components/partials/Dashboard/Competition/CompetitionWrapper.vue';
import { Team, ChangeTeamStatus, DeleteTeamStatus } from '~/api/competition/types';

@Component({
  components: { CompetitionWrapper, DashboardWrapper, TabMenu }
})
export default class DashboardCompetitionIndex extends Vue {
  @Getter('competition/getTeams') teams!: Team[];
  @Getter('competition/getTeamsBySlug') teamsBySlug!: { [slug: string]: Team };
  @Action('competition/deleteTeam') deleteTeamAction;
  @Action('competition/changeTeam') changeTeamAction;

  changedTeamName: string = '';
  changedTeamInstitution: string = '';
  title: string = '';
  isChanging: boolean = false;
  isDeleting: boolean = false;
  dialog: boolean = false;
  error: string = '';

  head() {
    return {
      title: 'Informasi Tim'
    };
  }

  layout() {
    return 'dashboard';
  }

  mounted() {
    if (this.team && this.team.competition) { this.title = this.team.competition.name; }
    else { this.title = 'Dashboard'; }
  }

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  get team(): Team|undefined {
    return this.teamsBySlug[this.slug];
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

  attemptChange() {
    if (!this.teamName) {
      this.error = 'Nama tim harus diisi';
      return;
    }

    if (this.teamName.length < 3) {
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
        const redirectUrl = `/dashboard/competition/${this.slug}`;
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
        const redirectUrl = `/dashboard/competition`;
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
        this.dialog = false;
      });
  }
}
</script>

<style scoped>
</style>
