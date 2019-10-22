<template>
  <DashboardWrapper>
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
      :full-name="fullName"
      :current-education="currentEducation"
      :institution="institution"
      :phone-number="phoneNumber"
      :birth-date="birthDate"
      :address="address"
    />
  </DashboardWrapper>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardWrapper from '~/components/partials/Dashboard/DashboardWrapper.vue';
import ProfileField from '~/components/partials/Dashboard/ProfileField.vue';
import ModalProfile from '~/components/partials/Dashboard/ModalProfile.vue';
// import { months } from '~/constants/menus';
import { User } from '~/api/user';
@Component({
  components: { DashboardWrapper, ProfileField, ModalProfile }
})
export default class Profile extends Vue {
  user: User = {
    fullName: 'Ahmad Fahmi',
    email: 'ahmad.fahmi@gmail.com',
    dateJoined: Date.parse('2019-10-22T10:27:55Z'),
    currentEducation: 'Mahasiswa',
    institution: 'Institut Teknologi Bandung',
    phoneNumber: '+62812872878572',
    birthDate: '1999-10-22',
    address: 'Jl. Cisitu Indah 5 no.19B, Dago, Coblong, Kota Bandung'
  } as User;

  head() {
    return {
      title: 'Dashboard'
    };
  }

  // mounted() {
  //   const date = this.birthDate.split('-');
  //   this.tgl = `${date[2]} ${months[date[1] - 1]} ${date[0]}`;
  // }
}
</script>

<style scoped>

</style>
