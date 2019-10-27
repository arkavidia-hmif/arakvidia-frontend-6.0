<template>
  <div class="ml-3 mb-5">
    <div>
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Daftar Anggota
      </p>
      <v-col
        v-if="team.teamMembers.length == 0"
        cols="12"
      >
        <p> Tidak ada anggota lain yang terdaftar dalam tim </p>
      </v-col>
      <v-col v-else cols="12">
        <div v-for="(member, i) in team.teamMembers" :key="i" style="padding: 1rem;">
          <v-row>
            <p style="margin-bottom: 0 !important;">
              Anggota {{ i + 1 }}
            </p>
            <v-flex>
              <v-btn
                :member-id="member.id"
                class="my-5 subtitle-2 text-none px-5 font-weight-bold"
                style="border-radius: 50px; margin: 0 !important; border: 2px solid #E44D4B;
                color: #E44D4B; float: right; background: white;"
                @click="attemptDelete"
              >
                Hapus Anggota
              </v-btn>
            </v-flex>
          </v-row>
          <ProfileField title="Name" :value="member.fullName" />
          <ProfileField title="Email" :value="member.email" />
        </div>
      </v-col>
    </div>
    <div v-if="team.teamMembers.length < team.competition.maxTeamMembers">
      <p style="font-weight: 700 !important; margin-bottom: 0 !important;">
        Tambah Anggota
      </p>
      <v-col
        cols="12"
        sm="6"
      >
        <v-alert v-if="error" type="error" class="mt-4">
          {{ error }}
        </v-alert>
        <form @submit.prevent="attemptCreateMember">
          <v-text-field
            v-model="fullName"
            label="Nama"
          />
          <v-text-field
            v-model="email"
            label="Email"
          />
          <v-btn
            class="my-5 primary subtitle-2 text-none px-5 font-weight-bold"
            style="border-radius: 50px"
            type="submit"
            :loading="isCreating"
          >
            Tambah Anggota
          </v-btn>
        </form>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Getter, Action } from 'nuxt-property-decorator';
import ProfileField from '~/components/partials/Dashboard/ProfileField.vue';
import { ApiError } from '~/api/base';
import {
  Team,
  GetTeamListStatus,
  AddMemberStatus,
  RemoveMemberStatus
} from '~/api/competition/types';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { ProfileField }
})
export default class AnggotaTim extends Vue {
  error: string = '';
  fullName: string = '';
  email: string = '';
  memberId: number = -999;
  isCreating: boolean = false;
  isDeleting: boolean = false;
  isLoading: boolean = true;
  competitionId: number = 0;

  @Getter('competition/getTeams') teams!: Team[];
  @Action('competition/addMember') addMemberAction;
  @Action('competition/removeMember') removeMemberAction;

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

    let team_id = this.teamId;
    let fullName = this.fullName;
    let email = this.email;

    this.addMemberAction({ team_id, fullName, email })
    .then(() => {
      const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.slug + '/anggota-tim';
      this.$router.push(redirectUrl);
    })
    .catch((e) => {
      if (e instanceof ApiError) {
        if (e.errorCode === AddMemberStatus.ERROR) {
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

  attemptDelete() {
    this.isDeleting = true;
    this.error = '';
  
    let team_id = this.teamId;
    let team_member_id = this.memberId;
    this.removeMemberAction({ team_id, team_member_id })
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
