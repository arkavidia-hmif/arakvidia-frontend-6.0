<template>
  <div class="ml-3 mb-5">
    <div>
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Daftar Anggota
      </p>
      <v-alert v-if="teamMembers.length < team.competition.minTeamMembers" type="warning" class="my-5">
        Anggota tim minimal {{ team.competition.minTeamMembers }} orang
      </v-alert>

      <v-col
        v-if="teamMembers.length == 0"
        cols="12"
      >
        <p> Tidak ada anggota lain yang terdaftar dalam tim </p>
      </v-col>
      <v-col v-else cols="12" class="pa-0 mt-3">
        <v-expansion-panels
          v-model="panel"
          class="ma-0"
          multiple
        >
          <v-expansion-panel
            v-for="(member, i) in teamMembers"
            :key="i"
          >
            <v-expansion-panel-header>
              <b>
                {{ member.fullName }}
                <v-icon v-if="member.email === team.teamLeaderEmail" small class="ml-2" color="#FFBA07">fas fa-crown</v-icon>
              </b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="subtitle-2 font-weight-black " style="color: #666666">
                Nama Lengkap
              </div>
              <div class="subtitle-2 black--text">
                {{ member.fullName || "Not set" }}
              </div>
              <div class="subtitle-2 font-weight-black mt-3" style="color: #666666">
                Alamat E-mail
              </div>
              <div class="subtitle-2 black--text">
                {{ member.email || "Not set" }}
              </div>

              <v-btn
                v-if="member.email !== team.teamLeaderEmail"
                class="mt-5 subtitle-2 text-none px-5 font-weight-bold"
                color="#E44D4B"
                outlined
                :loading="isDeleting"
                @click="() => attemptDelete(member.id)"
              >
                Hapus Anggota
              </v-btn>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="primary white--text" dark>
              <b>
                <v-icon small color="white" class="mr-4">fa fa-plus</v-icon>
                Tambahkan Anggota
              </b>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <Alert v-if="error" type="error" class="mt-4" :message="error" />
              <form class="mt-6" @submit.prevent="attemptCreateMember">
                <v-text-field
                  v-model="fullName"
                  outlined
                  dense
                  label="Nama"
                />
                <v-text-field
                  v-model="email"
                  outlined
                  dense
                  label="Email"
                />
                <v-btn
                  class="primary subtitle-2 text-none px-5 font-weight-bold"
                  style="border-radius: 50px"
                  type="submit"
                  :loading="isCreating"
                >
                  Tambah Anggota
                </v-btn>
              </form>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Action, Prop } from 'nuxt-property-decorator';
import { ApiError } from '~/api/base';
import {
  Team,
  AddMemberStatus,
  RemoveMemberStatus,
  Member
} from '~/api/competition/types';
import Alert from '~/components/partials/Alert.vue';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { Alert }
})
export default class AnggotaTim extends Vue {
  @Prop() team!: Team;

  error: string = '';
  fullName: string = '';
  email: string = '';
  isCreating: boolean = false;
  isDeleting: boolean = false;
  isLoading: boolean = true;

  panel = [];

  @Action('competition/addMember') addMemberAction;
  @Action('competition/removeMember') removeMemberAction;

  get slug() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['id'];
  }

  get teamMembers(): Member[] {
    const team = this.team;
    if (team == null) {
      return [];
    }
    if (team.teamMembers == null) {
      return [];
    }
    return team.teamMembers;
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }

  get teamId(): number {
    return (this.team) ? this.team.id : 0;
  }

  attemptCreateMember() {
    if (!this.fullName) {
      this.error = 'Nama anggota harus diisi';
      return;
    }

    if (!this.email) {
      this.error = 'E-mail anggota harus diisi';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.error = 'Alamat e-mail salah';
      return;
    }

    this.isCreating = true;
    this.error = '';

    const teamId = this.teamId;
    const fullName = this.fullName;
    const email = this.email;

    this.addMemberAction({ teamId, fullName, email })
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.slug + '/anggota-tim';
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === AddMemberStatus.REGISTRATION_CLOSED) {
            this.error = 'Pendaftaran kompetisi sudah ditutup';
            return;
          }
          else if (e.errorCode === AddMemberStatus.NOT_PARTICIPATING) {
            this.error = 'Tim tidak berpartisipasi';
            return;
          }
          else if (e.errorCode === AddMemberStatus.FULL) {
            this.error = 'Tim sudah penuh';
            return;
          }
          else if (e.errorCode === AddMemberStatus.ERROR) {
            this.error = 'Tidak dapat menambah anggota tim';
            return;
          }

          this.error = e.message;
          return;
        }

        this.error = e.toString();
      })
      .finally(() => {
        this.isCreating = false;
      });
  }

  validateEmail(email): boolean {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  attemptDelete(memberId) {
    this.isDeleting = true;
    this.error = '';
    const teamId = this.teamId;
    const teamMemberId = memberId;
    this.removeMemberAction({ teamId, teamMemberId })
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.slug + '/anggota-tim';
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === RemoveMemberStatus.ERROR) {
            this.error = 'Tidak dapat menghapus anggota tim';
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
}
</script>

<style scoped>

</style>
