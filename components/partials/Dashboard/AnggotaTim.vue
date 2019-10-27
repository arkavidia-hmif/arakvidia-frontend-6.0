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
              >
                Hapus Anggota
              </v-btn>
            </v-flex>
          </v-row>
          <ProfileField title="Name" :value="member.name" />
          <ProfileField title="Email" :value="member.email" />
        </div>
      </v-col>
    </div>
    <div v-if="members.length < maxCapacity">
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
            v-model="name"
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
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import ProfileField from '~/components/partials/Dashboard/ProfileField.vue';
import { ApiError } from '~/api/base';
import {
  Team,
  Member,
  GetTeamListStatus,
  AddMemberStatus,
  RemoveMemberStatus,
  Competition
} from '~/api/competition/types';

interface QueryParameters {
  continue?: string;
}

@Component({
  components: { ProfileField }
})
export default class AnggotaTim extends Vue {
  error: string = '';
  name: string = '';
  email: string = '';
  teamId: number = 0;
  members: Array<Member> = [];
  memberId: number = -999;
  maxCapacity: number = 3;
  isCreating: boolean = false;
  isDeleting: boolean = false;
  isLoading: boolean = true;
  competitionId: number = 0;

  @Prop({ default: undefined }) team: Team|undefined;

  get id() {
    // eslint-disable-next-line dot-notation
    return this.$route.params['competition'];
  }

  get nextRoute(): string|undefined {
    const queryParams = this.$route.query as QueryParameters;
    return queryParams.continue;
  }

  // mounted() {
  //   this.competitionId = 1; // hardcoded temporarily, previously was competitionMap[this.id];
  //
  //   this.$arkavidiaApi.competition.getTeamList()
  //     .then((results) => {
  //       if (results) {
  //         if (results.length) {
  //           let competition;
  //           for (let i = 0; i < results.length; i++) {
  //             if (results[i].competition) {
  //               competition = results[i].competition;
  //               if (competition.id) {
  //                 if (competition.id == this.competitionId) {
  //                   this.team = results[i];
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //
  //       if (this.team) {
  //         if (this.team.id) {
  //           this.teamId = this.team.id;
  //         }
  //
  //         if (this.team.competition) {
  //           if (this.team.competition.maxTeamMembers) {
  //             this.maxCapacity = this.team.competition.maxTeamMembers;
  //           }
  //         }
  //
  //         if (this.team.teamMembers) {
  //           this.members = this.team.teamMembers;
  //         }
  //       }
  //     })
  //     .catch((e) => {
  //       if (e instanceof ApiError) {
  //         if (e.errorCode === GetTeamListStatus.ERROR) {
  //           this.error = 'Gagal saat Mengambil Data Anggota';
  //           return;
  //         }
  //
  //         this.error = e.message;
  //         return;
  //       }
  //
  //       this.error = e.toString();
  //     })
  //     .finally(() => {
  //       this.isLoading = false;
  //     });
  // }

  attemptRegister() {
    if (!this.name) {
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
    this.$arkavidiaApi.competition.addMember(this.teamId, this.name, this.email)
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.id + 'anggota-tim';
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === AddMemberStatus.EMAIL_EXISTS) {
            this.error = 'E-mail sudah terdaftar';
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
    this.$arkavidiaApi.competition.removeMember(this.teamId, this.memberId)
      .then(() => {
        const redirectUrl = (this.nextRoute) ? this.nextRoute : '/dashboard/competition/' + this.id + 'anggota-tim';
        this.$router.push(redirectUrl);
      })
      .catch((e) => {
        if (e instanceof ApiError) {
          if (e.errorCode === RemoveMemberStatus.ERROR) {
            this.error = 'Penghapusan Anggota Gagal';
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
