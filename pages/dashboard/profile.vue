<template>
  <DashboardWrapper>
    <div v-if="user">
      <v-layout row wrap class="mt-4">
        <v-flex md3 xs12>
          <ProfileField title="Name" :value="user.fullName" />
          <ProfileField title="Email" :value="user.email" />
          <ProfileField title="Education" :value="user.currentEducation" />
          <!-- <div>{{user}}</div> -->
          <ProfileField title="Institution" :value="user.institution" />
        </v-flex>
        <v-flex md6 xs12>
          <ProfileField title="Phone Number" :value="user.phoneNumber" />
          <ProfileField title="Birth Date" :value="user.birthDate" />
          <ProfileField title="Address" :value="user.address" />
        </v-flex>
      </v-layout>
      <ModalProfile
        :full-name="user.fullName"
        :current-education="user.currentEducation"
        :institution="user.institution"
        :phone-number="user.phoneNumber"
        :birth-date="user.birthDate"
        :address="user.address"
      />
    </div>
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue, State } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import ProfileField from '~/components/partials/Dashboard/ProfileField.vue';
import ModalProfile from '~/components/partials/Dashboard/ModalProfile.vue';
import { User } from '~/api/user/types';
interface NuxtWindow {
  onNuxtReady?: Function;
}
@Component({
  components: { DashboardWrapper, ProfileField, ModalProfile }
})
export default class Profile extends Vue {
  // user: User = {
  //   fullName: 'arkavidia',
  //   email: 'arkavidia@std.stei.itb.ac.id!',
  //   dateJoined: Date.parse('2019-10-22T10:27:55Z'),
  //   currentEducation: 'Mahasiswa',
  //   institution: 'Institut Teknologi Bandung',
  //   phoneNumber: '+62812872878572',
  //   birthDate: '1999-10-22',
  //   address: 'Jl. Cisitu Indah 5 no.19B, Dago, Coblong, Kota Bandung'
  // } as User;
  @State user!: User;
  // user : '';
  isMounted : boolean = false;
  head() {
    return {
      title: 'Dashboard'
    };
  }
  mounted() {
    if (window) {
      const nuxtWindow: NuxtWindow = window as NuxtWindow;
      if (nuxtWindow.onNuxtReady !== undefined) {
        nuxtWindow.onNuxtReady(() => {
          if (!this.user.address) {
            this.$arkavidiaApi.user.auth()
              .then((val) => {
                this.user = val;
                // console.log(val);
              }
              );
          }
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
