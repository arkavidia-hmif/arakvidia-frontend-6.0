<template>
  <DashboardWrapper>
    <div v-if="user">
      <v-layout row wrap class="mt-4">
        <v-flex md3 xs12>
          <ProfileField title="Nama" :value="user.fullName" />
          <ProfileField title="Alamat E-mail" :value="user.email" />
          <ProfileField title="Jenjang Pendidikan" :value="user.currentEducation" />
          <ProfileField title="Sekolah/Universitas" :value="user.institution" />
        </v-flex>
        <v-flex md6 xs12>
          <ProfileField title="Nomor Ponsel" :value="user.phoneNumber" />
          <ProfileField title="Tanggal Lahir" :value="user.birthDate" />
          <ProfileField title="Alamat" :value="user.address" />
        </v-flex>
      </v-layout>
      <ModalProfile :user="user" />
    </div>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, State } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import ProfileField from '~/components/partials/Dashboard/Profile/ProfileField.vue';
import ModalProfile from '~/components/partials/Dashboard/Profile/ModalProfile.vue';
import { User } from '~/api/user/types';
import { AuthState } from '~/store/user';

@Component({
  components: { DashboardWrapper, ProfileField, ModalProfile }
})
export default class Profile extends Vue {
  @State('user') authState!: AuthState;

  head() {
    return {
      title: 'Profile'
    };
  }

  get user(): User|undefined {
    return this.authState.user;
  }
}
</script>

<style scoped>

</style>
